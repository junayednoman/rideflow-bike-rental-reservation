import { userMenuItems } from "@/constant";
import { adminMenuItems } from "@/constant/adminMenuItems";
import { useGetCurrentToken } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Layout, Menu } from "antd";
import { jwtDecode } from "jwt-decode";
import { Navigate, NavLink } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const token = useAppSelector(useGetCurrentToken);
  if (!token) {
    return <Navigate to={"/login"} replace />;
  }
  const user = jwtDecode(token!);
  let menuItems;
  if (user?.role === "user") {
    menuItems = userMenuItems;
  } else if (user?.role === "admin") {
    menuItems = adminMenuItems;
  }

  return (
    <div>
      <Sider
        style={{
          position: "sticky",
          top: "0",
          left: "0",
          height: "100vh",
          zIndex: 99,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="p-4">
          <NavLink to={"/dashboard"} className="inline-block">
            <h3 className="md:text-2xl text-xl font-bold uppercase text-primaryColor">
              <span className="text-accentColor">Ride</span>flow
            </h3>
          </NavLink>
        </div>
        <Menu
          className="bg-white px-3"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
