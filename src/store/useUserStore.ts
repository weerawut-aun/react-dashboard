import type { User } from "../data/dashboard.types";
import { create } from "zustand/react";
import { initialUsers } from "../data/dashboardDataSets";

interface UserState {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (userId: number) => void;
  updateUser: (updatedUser: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: initialUsers,
  addUser: (newUserData) =>
    set((state) => {
      const newUser: User = {
        id: Date.now(),
        name: newUserData.name,
        email: newUserData.email,
        role: newUserData.role,
        status: "Active",
        lastLogin: "เพิ่งสร้างบัญชี",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces",
      };
      return { users: [...state.users, newUser] };
    }),

  removeUser: (userId) =>
    set((state) => {
      return {
        users: state.users.filter((user) => userId !== user.id),
      };
    }),
  updateUser: (updatedUser) =>
    set((state) => {
      const updateUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return { ...user, ...updatedUser };
        }
        return user;
      });
      return { users: updateUsers };
    }),
}));
