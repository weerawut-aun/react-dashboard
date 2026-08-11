import { BrowserRouter, Route, Routes } from "react-router-dom";
import OverviewPage from "../pages/OverviewPage";
import DashboradLayout from "../components/layout/DashboradLayout";
import UsersPage from "../pages/UsersPage";
import SalesPage from "../pages/SalesPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboradLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="sales" element={<SalesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
