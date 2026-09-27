import { create } from "zustand";
import type { User } from "../data/dashboard.types";

interface ModalState {
  isModal: boolean;
  editingUser: User | null;
  openModal: (user?: User) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModal: false,
  editingUser: null,
  openModal: (user) => set({ isModal: true, editingUser: user ?? null }),
  closeModal: () => set({ isModal: false, editingUser: null }),
}));
