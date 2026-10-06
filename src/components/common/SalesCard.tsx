import React, { type FC, type JSX } from "react";

type SalesCardprops = {
  title: string;
  titleIcon: JSX.Element;
  text: string;
  iconArrow: JSX.Element;
  value: number;
};

const SalesCard = ({
  title,
  titleIcon,
  text,
  iconArrow,
  value,
}: SalesCardprops) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500 dark:text-400">
          {title}
        </span>
        <div
          className={`p-2 ${
            title === "ยอดขายรวม"
              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 "
              : title === "คำสั่งซื้อสำเร็จ"
                ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                : title === "มูลค่าเฉลี่ย/ออเดอร์"
                  ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                  : "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400"
          }  rounded-lg`}
        >
          {titleIcon}
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {text}
        </h2>
        <span
          className={`flex -items-center text-xs font-semibold ${value > 0 ? "text-green-600 bg-green-50 dark:bg-green-900/30" : "text-red-600 bg-red-50 dark:bg-red-900/30"} px-2 py-0.5 rounded`}
        >
          {iconArrow}
          {value !== undefined && value > 0 ? "+" : "-"}
          {value} %
        </span>
      </div>
    </div>
  );
};

export default SalesCard;
