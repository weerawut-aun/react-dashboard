import React from "react";

function Pagination({ filteredUsers }: { filteredUsers: any[] }) {
  return (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
      <div>
        แสดงผล{" "}
        <span className="font-semibold text-gray-900 dark:text-white">1</span>{" "}
        ถึง{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {filteredUsers.length}
        </span>{" "}
        จากทั้งหมด{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          1,248
        </span>{" "}
        รายการ
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
          disabled
        >
          ก่อนหน้า
        </button>
        <button className="px-3 py-1.5 bg-blue-600 text-white font-medium rounded-lg shadow-sm">
          1
        </button>
        <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          2
        </button>
        <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          3
        </button>
        <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          ถัดไป
        </button>
      </div>
    </div>
  );
}

export default Pagination;
