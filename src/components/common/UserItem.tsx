import React from "react";
import type { User } from "../../data/dashboard.types";
import { Edit, Eye, Trash2 } from "lucide-react";
import useUserManagement from "../../hooks/useUserManagement";
import { useModalStore } from "../../store/useModalStore";

const UserItem: React.FC<{ user: User }> = ({ user }) => {
  const { handleRemoveUser } = useUserManagement();
  const openModal = useModalStore((state) => state.openModal);
  return (
    <tr
      key={user.id}
      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
    >
      <td className="py-4 px-6 flex items-center space-x-3">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">
            {user.name}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {user.email}
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <span
          className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${
            user.role === "Admin"
              ? "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
              : user.role === "Editor"
                ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          {user.role}
        </span>
      </td>
      <td className="py-4 px-6">
        <span
          className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full ${
            user.status === "Active"
              ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              : user.status === "Pending"
                ? "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
              user.status === "Active"
                ? "bg-green-500"
                : user.status === "Pending"
                  ? "bg-yellow-500"
                  : "bg-red-500"
            }`}
          ></span>
          {user.status}
        </span>
      </td>
      <td className="py-4 px-6 text-gray-500 dark:text-gray-400 text-xs">
        {user.lastLogin}
      </td>
      <td className="py-4 px-6 text-right space-x-2">
        <button
          className="p-1.5 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 rounded-lg transition-colors"
          title="ดูข้อมูล"
        >
          <Eye className="w-4 h-4" />
        </button>
        <button
          className="p-1.5 text-gray-500 hover:text-yellow-600 dark:text-gray-400 dark:hover:text-yellow-400 rounded-lg transition-colors"
          title="แก้ไข"
          onClick={() => openModal(user)}
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          className="p-1.5 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 rounded-lg transition-colors"
          title="ลบ/ระงับ"
          onClick={() => handleRemoveUser(user.id)}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
