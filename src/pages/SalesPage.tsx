import { monthlySalesData, categoryData } from "../data/dashboardDataSets";
import type { ChangeEvent } from "react";
import {
  AlertCircle,
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Download,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import SalesCard from "../components/common/SalesCard";
import SalesCharts from "../components/common/SalesCharts";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DetailedSales from "../components/layout/DetailedSales";
import Pagination2 from "../components/common/Pagination2";
import { useFilterTransactionsStore } from "../store/useFilterTransationsStore";
import { useShallow } from "zustand/shallow";

const COLORS = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"];

function SalesPage() {
  const { searchterm, setSearchTerm, filterTransactions } =
    useFilterTransactionsStore(
      useShallow((state) => ({
        searchterm: state.searchTerm,
        setSearchTerm: state.setSearchTerm,
        filterTransactions: state.filterTransactions,
      })),
    );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            รายงานยอดขาย (Sales Analytics)
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ติดตามวิเคราะห์ยอดขายและรายการธุรกรรมทั้งหมดภายในระบบ
          </p>
        </div>
        <div className="flex items-center-gap-3">
          <button className="flex items-center gap-2 py-4 px-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            <Download className="" />
            <span>ส่งออกรายงาน</span>
          </button>
        </div>
      </div>

      {/* 1. Sales KPI Cards (การ์ดสรุปยอดขาย 4 ช่องด้านบน) */}
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-col-4 gap-6">
        {/* ยอดขายร่วม */}
        <SalesCard
          title={"ยอดขายรวม"}
          titleIcon={<DollarSign className="w-5 h-5" />}
          text={"฿1,065,800"}
          iconArrow={<ArrowUpRight className="w-3 h-3 mr-0.5" />}
          value={15.3}
        />
        {/* คำสั่งซื้อสำเร็จ */}
        <SalesCard
          title={"คำสั่งซื้อสำเร็จ"}
          titleIcon={<ShoppingBag className="w-5 h-5" />}
          text={"1,240"}
          iconArrow={<ArrowUpRight className="w-3 h-3 mr-0.5" />}
          value={15.7}
        />
        {/* มูลค่าเฉลี่ยต่อออเดอร์ */}
        <SalesCard
          title={"มูลค่าเฉลี่ย/ออเดอร์"}
          titleIcon={<TrendingUp className="w-5 h-5" />}
          text={"฿8,595"}
          iconArrow={<ArrowUpRight className="w-3 h-3 mr-0.5" />}
          value={2.1}
        />
        {/* ยกเลิก / คืนเงิน */}
        <SalesCard
          title={"ยกเลิก / คืนเงิน"}
          titleIcon={<AlertCircle className="w-5 h-5" />}
          text={"18 รายการ"}
          iconArrow={<ArrowDownRight className="w-3 h-3 mr-0.5" />}
          value={-0.8}
        />
      </div>

      {/* 2. Sales Trend & Category Charts (พื้นที่กราฟวิเคราะห์ยอดขาย) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* กราฟเส้นแสดงแนวโน้มยอดขายรายเดิอน  */}
        <SalesCharts
          col="lg:col-span-2"
          title={"แนวโน้มยอดขายรายเดือน (Sales Trend)"}
        >
          <LineChart
            data={monthlySalesData}
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
              dot={{ r: 5 }}
            />
          </LineChart>
        </SalesCharts>
        {/* กราฟวงกลมแสดงสัดส่วนหมวดหมู่สินค้า */}
        <SalesCharts title={"สัดส่วนหมวดหมู่สินค้า"}>
          <PieChart width="100%" height="100%">
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </SalesCharts>
      </div>
      {/* 3. Detailed Sales Table (ตารางแสดงรายการธุรกรรมการขาย) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <DetailedSales
          searchTerm={searchterm}
          setSearchTerm={setSearchTerm}
          filterTransactions={filterTransactions}
        />
      </div>
      {/* 4. Pagination (ส่วนแบ่งหน้าข้อมูลด้านล่าง) */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <Pagination2 filterTransactions={filterTransactions} />
      </div>
    </div>
  );
}

export default SalesPage;
