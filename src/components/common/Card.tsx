export default function Card({
  title,
  icon,
  value,
  change,
  icon2,
}: {
  title: string;
  icon: React.ReactNode;
  value: string;
  change: string;
  icon2?: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ">
          {title}
        </span>
        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
          {icon}
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </h2>
        <span className="flex items-center text-xs font-semibold text-gray-600 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded">
          {icon2}
          {change}
        </span>
      </div>
    </div>
  );
}
