import { Bike, ListOrdered, Puzzle, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export const adminMenuItems = [
  {
    key: "1",
    icon: <User size={16} />,
    label: <NavLink to={"/dashboard/admin"}>Profile</NavLink>,
  },
  {
    key: "2",
    icon: <Bike size={16} />,
    label: (
      <NavLink to={"/dashboard/admin/manage-bikes"}>Bike Management</NavLink>
    ),
  },
  {
    key: "3",
    icon: <ListOrdered size={16} />,
    label: <NavLink to={"/dashboard/admin/rentals"}>Rentals</NavLink>,
  },
  {
    key: "4",
    icon: <Puzzle size={16} />,
    label: <NavLink to={"/dashboard/admin/coupons"}>Coupons</NavLink>,
  },
];
