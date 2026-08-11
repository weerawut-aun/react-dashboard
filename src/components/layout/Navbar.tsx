import { Bell, Search } from "lucide-react";
import React from "react";
import ThemeToggle from "../common/ThemeToggle";

function Navbar() {
  return (
    <header className="h-16 px-6 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-10">
      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl w-64">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="ค้นหาข้อมูล"
          className="bg-transparent border-none outline-none text-sm text-slate-700 dark:text-slate-200 w-full placeholder:text-slate-400"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover-bg-slate-800 transition-colors shadow-sm relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>
        {/* ปุ่มสลับโหมด Dark / Light ที่เราสร้างขึ้น */}
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;
