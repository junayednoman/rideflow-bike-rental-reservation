import BikesManagement from "@/pages/dashboard/BikesManagement";
import Coupons from "@/pages/dashboard/Coupons";
import Profile from "@/pages/dashboard/Profile";
import Rentals from "@/pages/dashboard/Rentals";
import UserManagement from "@/pages/dashboard/UserManagement";

export const adminRoutes = [
  {
    index: true,
    element: <Profile />,
  },
  {
    path: 'manage-bikes',
    element: <BikesManagement />,
  },
  {
    path: 'manage-users',
    element: <UserManagement />,
  },
  {
    path: 'rentals',
    element: <Rentals />,
  },
  {
    path: 'coupons',
    element: <Coupons />,
  },
];
