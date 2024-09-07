
import AdvancePayment from "@/pages/dashboard/AdvancePayment";
import BikeDetail from "@/pages/dashboard/BikeDetail";
import Bikes from "@/pages/dashboard/Bikes";
import MyRentals from "@/pages/dashboard/MyRentals";
import Profile from "@/pages/dashboard/Profile";

export const userRoutes = [
  {
    index: true,
    element: <Profile />,
  },
  {
    path: "bikes",
    element: <Bikes />,
  },
  {
    path: "bikes/:bikeId",
    element: <BikeDetail />,
  },
  {
    path: "payment",
    element: <AdvancePayment />,
  },
  {
    path: "my-rentals",
    element: <MyRentals />,
  },
];
