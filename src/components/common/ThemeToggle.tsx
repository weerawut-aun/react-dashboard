import { Moon, Sun } from "lucide-react";
import userDarkMode from "../../hooks/userDarkMode";

export default function ThemeToggle() {
  const [theme, toggleTheme] = userDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600" />
      )}
    </button>
  );
}
