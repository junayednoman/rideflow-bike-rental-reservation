import DashboardLayout from "./components/layout/DashboardLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

const Dashboard = () => {
  return (
    <div>
      <ProtectedRoute role={undefined}>
        <DashboardLayout />
      </ProtectedRoute>
    </div>
  );
};

export default Dashboard;
