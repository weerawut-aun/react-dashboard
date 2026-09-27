import React, { useState } from "react";
import type { User } from "../data/dashboard.types";
import { useUserStore } from "../store/useUserStore";
import { useShallow } from "zustand/shallow";

interface useUserManagementProps {
  editingUser?: User | null;
  onClose?: () => void;
}

const useUserManagement = ({
  editingUser = null,
  onClose,
}: useUserManagementProps = {}) => {
  const { addUser, removeUser, updateUser } = useUserStore(
    useShallow((state) => ({
      addUser: state.addUser,
      removeUser: state.removeUser,
      updateUser: state.updateUser,
    })),
  );
  // State for form data
  const [formData, setFormData] = useState({
    name: editingUser?.name ?? "",
    email: editingUser?.email ?? "",
    role: editingUser?.role ?? ("User" as User["role"]),
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    if (editingUser) {
      updateUser({ ...editingUser, ...formData });
    } else {
      addUser({
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        role: formData.role,
        status: "Active",
        lastLogin: "เพิ่งสร้างบัญชี",
        avatar: "",
      });
    }

    onClose && onClose();
  };
  const handleRemoveUser = (userId: number) => {
    // console.log("Removing user with ID:", userId);
    const confirmDelete = window.confirm(
      `คุณแน่ใจหรือไม่ว่าต้องการลบผู้ใช้งานนี้?`,
    );
    if (confirmDelete) {
      removeUser(userId);
    }
  };

  return {
    formData,
    handleInputChange,
    handleAddUser,
    handleRemoveUser,
    editingUser,
  };
};

export default useUserManagement;
