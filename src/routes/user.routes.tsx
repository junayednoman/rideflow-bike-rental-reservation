import BikeDetail from "@/pages/dashboard/BikeDetail";
import Bikes from "@/pages/dashboard/Bikes";
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
];
