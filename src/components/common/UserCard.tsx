import { UserPlus } from "lucide-react";
import React from "react";

interface TrendStatus {
  type: "percentage" | "pending_verification" | "inactive";
  value?: number;
  label?: string;
  color?: "green" | "red" | "yellow";
}

const UserCard = ({
  children,
  title,
  count,
  trend,
}: {
  children: React.ReactNode;
  title: string;
  count: number;
  trend?: TrendStatus;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between transition-colors">
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
          {count.toLocaleString()}
        </h3>
        {trend !== undefined && (
          <span
            className={`text-xs font-semibold mt-1 inline-block ${
              trend.color === "green"
                ? "text-green-600"
                : trend.color === "red"
                  ? "text-red-600"
                  : "text-yellow-600"
            }`}
          >
            {trend.type === "percentage" && (
              <>
                {trend.value !== undefined && (trend.value > 0 ? "↑ +" : "↓ -")}
                {trend.value ? trend.value : ""} {trend.value ? "%" : ""}
              </>
            )}
            {trend.label && ` ${trend.label}`}
          </span>
        )}
      </div>
      <div
        className={`p-3 ${trend?.color === "green" ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400" : trend?.color === "red" ? "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400" : "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"} rounded-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export default UserCard;
