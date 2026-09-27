import React from "react";
import type { User } from "../../data/dashboard.types";
import UserItem from "../common/UserItem";

const UserList: React.FC<{ filteredUsers: User[] }> = ({ filteredUsers }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <th className="py-3 px-6">ผู้ใช้งาน</th>
              <th className="py-3 px-6">สิทธิ์ (Role)</th>
              <th className="py-3 px-6">สถานะ (Status)</th>
              <th className="py-3 px-6">เข้าสู่ระบบล่าสุด</th>
              <th className="py-3 px-6 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-sm">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <UserItem key={user.id} user={user} />
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-gray-500 dark:text-gray-400"
                >
                  ไม่พบข้อมูลผู้ใช้งานที่คุณค้นหา
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
