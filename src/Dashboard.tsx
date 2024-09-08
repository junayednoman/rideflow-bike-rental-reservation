import DashboardLayout from "./components/layout/DashboardLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { useGetCurrentMode } from "./redux/features/themeSlice";
import { useAppSelector } from "./redux/hooks";

const Dashboard = () => {
  const mode = useAppSelector(useGetCurrentMode);
  return (
    <div className={`${mode || "light"} bg-white dark:bg-primaryColor`}>
      <ProtectedRoute role={undefined}>
        <DashboardLayout />
      </ProtectedRoute>
    </div>
  );
};

export default Dashboard;
