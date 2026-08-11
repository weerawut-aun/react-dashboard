import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) => {
    return `flex item-center px-4 py-2.5 rounded-lg font-medium transition-colors ${
      isActive
        ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
    }`;
  };
  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 font-bold text-xl text-indigo-600 dark:text-indigo-400">
        EnterprieDash
      </div>
      <nav className="flex-1 px-4 space-y-1">
        <NavLink to="/" className={linkClass}>
          📊 ภาพรวม (Dashboard)
        </NavLink>
        <NavLink to="/users" className={linkClass}>
          👥 ผู้ใช้งาน (Users)
        </NavLink>
        <NavLink to="/sales" className={linkClass}>
          💰 ยอดขาย (Sales)
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
