import {
  ArrowUpRight,
  DollarSign,
  ShoppingBag,
  TrendingUp,
  User,
} from "lucide-react";
import React from "react";
import Card from "../components/common/Card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Graph from "../components/common/Graph";
import { dashboardDataSets } from "../data/dashboardDataSets";
import RecentTransactionsTable from "../components/common/RecentTransactionsTable";

function OverviewPage() {
  const [selectedTimeRange, setSelectedTimeRange] = React.useState("7days");

  const handleTimeRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedTimeRange(event.target.value);
  };

  const { sales, users, transactions } =
    dashboardDataSets[selectedTimeRange];

  return (
    <div className="space-y-6">
      {/* ส่วนหัวของหน้า และ ตัวกรองเวลา */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* ส่วนหัวของหน้า}*/}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            ภาพรวม (Overview)
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ยินดีต้อนรับกลับมา, ตรวจสอบข้อมูลเชิงลึกประจำวันนี้
          </p>
        </div>
        {/* ตัวกรองเวลา */}
        <div className="flex items-center gap-2">
          <select
            value={selectedTimeRange}
            onChange={handleTimeRangeChange}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7days">7 วันล่าสุด</option>
            <option value="month">เดือนนี้</option>
            <option value="year">ปีนี้</option>
          </select>
        </div>
      </div>
      {/* 1. KPI Summary Cards (การ์ดสถิติิ 4 ช่องด้านบน) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* การ์ดยอดขาย */}
        <Card
          title={"ยอดขายรวม"}
          icon={<DollarSign className="w-5 h-5" />}
          value="฿245,800"
          change={"+12.5%"}
          icon2={<ArrowUpRight className="w-3 h-3 mr-0.5" />}
        />

        {/* การ์ดผู้ใช้งาน */}
        <Card
          title={"ผู้ใช้งานระบบ"}
          icon={<User className="w-5 h-5" />}
          value="1,482"
          change={"+4.2%"}
          icon2={<ArrowUpRight className="w-3 h-3 mr-0.5" />}
        />
        {/* การ์ดอัตราการเติบโต */}
        <Card
          title={"อัตราการเติบโต"}
          icon={<TrendingUp className="w-5 h-5" />}
          value="88.4%"
          change={"-1.1%"}
          icon2={<ArrowUpRight className="w-3 h-3 mr-0.5" />}
        />
        {/* การ์ดคำสั่งซื้อ */}
        <Card
          title={"คำสั่งซื้อทั้งหมด"}
          icon={<ShoppingBag className="w-5 h-5" />}
          value="320"
          change={"+8.0%"}
          icon2={<ArrowUpRight className="w-3 h-3 mr-0.5" />}
        />
      </div>
      {/* 2. Interactive Charts(ส่วนแสดงกราฟ) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* กราฟแสองยอดขาย */}
        <Graph title={"แนวโน้มยอดขาย (Revenue Trend)"}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={sales}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                opacity={0.2}
              />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Graph>

        {/* กราฟแท่งแสดงผู้ใช้งาน */}
        <Graph title={" จำนวนผู้ใช้งานรายวัน (Active Users)"}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={users}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                opacity={0.2}
              />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Bar dataKey="users" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Graph>
      </div>
      {/* 3. Data Table (ตารางข้อมูลล่าสุดเบื้องต้น) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            รายการธุรกรรมล่าสุด
          </h3>
        </div>
        <div className="overflow-x-auto">
          <RecentTransactionsTable transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
