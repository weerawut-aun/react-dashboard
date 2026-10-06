import { create } from "zustand";
import type { ChangeEvent } from "react";
import type { SalesTransactions } from "../data/dashboard.types";
import { salesTransactions } from "../data/dashboardDataSets";

interface FilterTransactionsState {
  searchTerm: string;
  setSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void;
  filterTransactions: () => SalesTransactions[];
}

export const useFilterTransactionsStore = create<FilterTransactionsState>()((set, get) => ({
  searchTerm: "",
  setSearchTerm: (e) => set({ searchTerm: e.target.value }),
  filterTransactions: () => {
    const term = get().searchTerm.toLowerCase();

    return salesTransactions.filter(
      (tx) =>
        tx.customer.toLowerCase().includes(term) ||
        tx.id.toLowerCase().includes(term)
    );
  },
}));
