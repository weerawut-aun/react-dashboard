import { Search } from "lucide-react";
import React, { useState, type ChangeEvent, type FC } from "react";
import { salesTransactions } from "../../data/dashboardDataSets";

type DetailedSalesProps = {
  searchTerm: string;
  setSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void;
  filterTransactions: () => typeof salesTransactions;
};

const DetailedSales: FC<DetailedSalesProps> = ({
  searchTerm,
  setSearchTerm,
  filterTransactions,
}) => {
  return (
    <>
      {/* ซ้าย สำหรับค้นหา */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          รายการธุรกรรมการขายล่าสุด
        </h3>
        {/* ช่องค้นหาในตาราง */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="ค้นหารหัส หรือ ชื่อลูกค้า"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
          />
        </div>
      </div>
      {/* ขวา สำหรับตาราง */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text=gray-300 text-xs uppercase font-semibold">
              <th className="px-6 py-3">รหัสออเดอร์</th>
              <th className="px-6 py-3">ลูกค้า</th>
              <th className="px-6 py-3">หมวดหมู่สินค้า</th>
              <th className="px-6 py-3">สถานะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-sm text-gray-700 dark:text-gray-300">
            {filterTransactions().length > 0 ? (
              filterTransactions().map((tx) => (
                <tr
                  key={tx.id}
                  className="hover:bg-gray-50 dark:hover:bg-gary-700=50 dark:text-gray-300"
                >
                  <td className="px-6 py-4">{tx.customer}</td>
                  <td className="px-6 py-4">{tx.category}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {tx.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        tx.status === "สำเร็จ"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : tx.status === "รอดำเนินการ"
                            ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                            : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  ไม่พบชื่อข้อมูลธุรกรรมที่ค้นหา
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DetailedSales;
