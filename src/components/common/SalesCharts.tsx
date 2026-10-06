import React from "react";
import { ResponsiveContainer } from "recharts";

type SalesChartsProps = {
  col?: string;
  title?: string;
  children?: React.ReactNode;
};

const SalesCharts = ({ col, title, children }: SalesChartsProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 ${col || ""}`}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesCharts;
