import type {
  DashboardDataset,
  DatasetWrapper,
  SalesDataset,
  TransactionDataset,
  UserDataset,
} from "./dashboard.types";

export const dashboardDataSets: DatasetWrapper<DashboardDataset> = {
  "7days": {
    sales: [
      { name: "จ.", sales: 1200 },
      { name: "อ.", sales: 1900 },
      { name: "พ.", sales: 1500 },
      { name: "พฤ.", sales: 2200 },
      { name: "ศ.", sales: 3000 },
      { name: "ส.", sales: 4500 },
      { name: "อา.", sales: 3800 },
    ],
    users: [
      { name: "จ.", users: 400 },
      { name: "อ.", users: 600 },
      { name: "พ.", users: 800 },
      { name: "พฤ.", users: 500 },
      { name: "ศ.", users: 950 },
      { name: "ส.", users: 1100 },
      { name: "อา.", users: 900 },
    ],
    summary: {
      revenue: "฿18,000",
      totalUsers: "1,482",
      growth: "+12.5%",
      orders: "320",
    },
    transactions: [
      {
        id: "#ORD-7D-01",
        customer: "สมชาย ใจดี",
        status: "สำเร็จ",
        amount: 4500,
      },
      {
        id: "#ORD-7D-02",
        customer: "สมหญิง รักสงบ",
        status: "กำลังดำเนินการ",
        amount: 1200,
      },
    ],
  },
  month: {
    sales: [
      { name: "สัปดาห์ที่ 1", sales: 15000 },
      { name: "สัปดาห์ที่ 2", sales: 18400 },
      { name: "สัปดาห์ที่ 3", sales: 22000 },
      { name: "สัปดาห์ที่ 4", sales: 29000 },
    ],
    users: [
      { name: "สัปดาห์ที่ 1", users: 3200 },
      { name: "สัปดาห์ที่ 2", users: 4100 },
      { name: "สัปดาห์ที่ 3", users: 3900 },
      { name: "สัปดาห์ที่ 4", users: 5200 },
    ],
    summary: {
      revenue: "฿84,400",
      totalUsers: "16,400",
      growth: "+8.1%",
      orders: "1,420",
    },
    transactions: [
      {
        id: "#ORD-M-01",
        customer: "บริษัท เทค จำกัด",
        status: "สำเร็จ",
        amount: 12900,
      },
      {
        id: "#ORD-M-02",
        customer: "มานพ ใจดี",
        status: "กำลังดำเนินการ",
        amount: 2800,
      },
    ],
  },
  year: {
    sales: [
      { name: "ม.ค.", sales: 4000 },
      { name: "ก.พ.", sales: 3000 },
      { name: "มี.ค.", sales: 5000 },
      { name: "เม.ย.", sales: 7000 },
      { name: "พ.ค.", sales: 6000 },
      { name: "มิ.ย.", sales: 9000 },
      { name: "ก.ค.", sales: 8000 },
      { name: "ส.ค.", sales: 9500 },
      { name: "ก.ย.", sales: 11000 },
      { name: "ต.ค.", sales: 12000 },
      { name: "พ.ย.", sales: 13000 },
      { name: "ธ.ค.", sales: 15000 },
    ],
    users: [
      { name: "ม.ค.", users: 400 },
      { name: "ก.พ.", users: 600 },
      { name: "มี.ค.", users: 800 },
      { name: "เม.ย.", users: 500 },
      { name: "พ.ค.", users: 950 },
      { name: "มิ.ย.", users: 1100 },
      { name: "ก.ค.", users: 1200 },
      { name: "ส.ค.", users: 1300 },
      { name: "ก.ย.", users: 1400 },
      { name: "ต.ค.", users: 1500 },
      { name: "พ.ย.", users: 1600 },
      { name: "ธ.ค.", users: 1700 },
    ],
    summary: {
      revenue: "฿245,800",
      totalUsers: "1,482",
      growth: "+12.5%",
      orders: "320",
    },
    transactions: [
      {
        id: "#ORD-Y-01",
        customer: "สมชาย ใจดี",
        status: "สำเร็จ",
        amount: 4500,
      },
      {
        id: "#ORD-Y-02",
        customer: "สมหญิง รักสงบ",
        status: "กำลังดำเนินการ",
        amount: 1200,
      },
      {
        id: "#ORD-Y-03",
        customer: "บริษัท เทค จำกัด",
        status: "สำเร็จ",
        amount: 12900,
      },
    ],
  },
};

export const salesData: SalesDataset[] = [
  { name: "ม.ค.", sales: 4000 },
  { name: "ก.พ.", sales: 3000 },
  { name: "มี.ค.", sales: 5000 },
  { name: "เม.ย.", sales: 7000 },
  { name: "พ.ค.", sales: 6000 },
  { name: "มิ.ย.", sales: 9000 },
];

export const userData: UserDataset[] = [
  { name: "จ.", users: 400 },
  { name: "อ.", users: 600 },
  { name: "พ.", users: 800 },
  { name: "พฤ.", users: 500 },
  { name: "ศ.", users: 950 },
  { name: "ส.", users: 1100 },
  { name: "อา.", users: 900 },
];

export const transactionData: TransactionDataset[] = [
  {
    id: "#ORD-2026-001",
    customer: "สมชาย ใจดี",
    status: "สำเร็จ",
    amount: 4500,
  },
  {
    id: "#ORD-2026-002",
    customer: "สมหญิง รักสงบ",
    status: "กำลังดำเนินการ",
    amount: 1200,
  },
  {
    id: "#ORD-2026-003",
    customer: "บริษัท เทค จำกัด",
    status: "สำเร็จ",
    amount: 12900,
  },
];
