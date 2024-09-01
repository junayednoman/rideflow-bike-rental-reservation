import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Bike } from "lucide-react";
import { NavLink } from "react-router-dom";

export const userMenuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <NavLink to={"/dashboard/user"}>User Profile</NavLink>,
  },
  {
    key: "2",
    icon: <Bike size={16} />,
    label: <NavLink to={"/dashboard/user/bikes"}>Bikes</NavLink>,
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "nav 3",
  },
];
