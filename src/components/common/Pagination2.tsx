import React, { type ChangeEvent, type FC } from "react";
type Pagination2Props = {
  filterTransactions: () => any[];
};

const Pagination2: FC<Pagination2Props> = ({ filterTransactions }) => {
  return (
    <>
      <span>แสดง 1 ถึง {filterTransactions().length} จากทั้งหมด 450</span>
      <div className="flex items-center gap-2">
        <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50">
          ก่อนหน้า
        </button>
        <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 ">
          ถัดไป
        </button>
      </div>
    </>
  );
};

export default Pagination2;
