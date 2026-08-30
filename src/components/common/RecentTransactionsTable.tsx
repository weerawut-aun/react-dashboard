import type { TransactionDataset } from "../../data/dashboard.types";

export default function RecentTransactionsTable({
  transactions = [],
}: {
  transactions: TransactionDataset[];
}) {
  return (
    <>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs uppercase font-semibold">
            <th className="px-6 py-3">รหัสคำสั่งซื้อ</th>
            <th className="px-6 py-3">ลูกค้า</th>
            <th className="px-6 py-3">สถานะ</th>
            <th className="px-6 py-3">จำนวนเงิน</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-sm text-gray-700 dark:text-gray-300">
          {transactions.map((transaction: TransactionDataset) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {transaction.id}
              </td>
              <td className="px-6 py-4">{transaction.customer}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2.5 py-1 text-xs font-medium ${transaction.status === "สำเร็จ" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"} rounded-full`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="px-6 py-4 font-semibold">฿{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
