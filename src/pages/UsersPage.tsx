import { Filter, UserCheck, UserPlus, UserX } from "lucide-react";
import UserCard from "../components/common/UserCard";
import UserTables from "../hooks/userTables";
import SearchTableData from "../components/common/SearchTableData";
import Pagination from "../components/common/Pagination";
import ModalFormAddUser from "../components/common/ModalFormAddUser";
import UserList from "../components/layout/UserList";
import { useUserStore } from "../store/useUserStore";
import { useShallow } from "zustand/shallow";
import { useModalStore } from "../store/useModalStore";

const UsersPage = () => {
  // const [users, setUsers] = useState<User[]>(initialUsers);
  const { users } = useUserStore(
    useShallow((state) => ({
      users: state.users,
    })),
  );
  const {
    filteredUsers,
    searchTerm,
    setSearchTerm,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
  } = UserTables(users);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { isModal, openModal, closeModal } = useModalStore(
    useShallow((state) => ({
      isModal: state.isModal,
      openModal: state.openModal,
      closeModal: state.closeModal,
    })),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            จัดการผู้ใช้งาน
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ตรวจสอบ จัดการสิทธิ์ และสถานะของผู้ใช้งานทั้งหมดในระบบ
          </p>
        </div>
        <button
          onClick={() => openModal()}
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-900 text-white font-medium rounded-lg transition-colors shadow-sm cursor-pointer"
        >
          <UserPlus className="w-5 h-5 mr-2" /> เพิ่มผู้ใช้งานใหม่
        </button>
      </div>
      {/* 1.User Summary Cards (การ์ดสรุปสถิติ) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <UserCard
          title="ผู้ใช้งานทั้งหมด"
          count={1248}
          trend={{
            type: "percentage",
            value: 12,
            label: "จากเดือนที่แล้ว",
            color: "green",
          }}
        >
          <UserPlus className="w-6 h-6" />
        </UserCard>

        <UserCard
          title="ใช้งานอยู่ (Active)"
          count={1120}
          trend={{
            type: "percentage",
            value: 8,
            label: "จากเดือนที่แล้ว",
            color: "green",
          }}
        >
          <UserCheck className="w-6 h-6" />
        </UserCard>

        <UserCard
          title="รออนุมัติ (Pending)"
          count={34}
          trend={{
            type: "percentage",
            label: "รอดำเนินการตรวจสอบ",
            color: "yellow",
          }}
        >
          <UserPlus className="w-6 h-6" />
        </UserCard>
        <UserCard
          title="ถูกระงับ (Banned/Inactive)"
          count={94}
          trend={{
            type: "pending_verification",
            label: "บัญชีไม่ใช้งาน",
            color: "red",
          }}
        >
          <UserX className="w-6 h-6" />
        </UserCard>
      </div>
      {/* 2. Search & Filter Bar (แถบค้นหาและตัวกรอง) */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gary-200 dark:border-gray-700 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center transition-colors">
        {/* ช่องค้นหา */}
        <SearchTableData
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {/* ตัวกรอง Role และ Status */}

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-gray-400 hidden sm:block" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full md:w-auto px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">ทั้งหมด (All Role)</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="User">User</option>
            </select>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full md:w-auto px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">สถานะทั้งหมด (All Status)</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
      {/* 3. User Data Table (ตารางแสดงรายชื่อผู้ใช้งาน) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden transition-colors">
        <UserList filteredUsers={filteredUsers} />
      </div>
      {/* 4. Pagination & Rows Info (ส่วนแบ่งหน้าข้อมูล) */}
      <Pagination filteredUsers={filteredUsers} />
      {/* 5. Modal for User Details */}
      {isModal && <ModalFormAddUser onClose={closeModal} />}
    </div>
  );
};

export default UsersPage;
