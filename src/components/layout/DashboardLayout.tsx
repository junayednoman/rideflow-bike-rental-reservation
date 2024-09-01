import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;
const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <Header
            style={{ position: "sticky", top: "0", left: "0", zIndex: 0 }}
            className={`bg-white ${
              collapsed ? "pl-16" : "pl-0"
            } shadow-sm dashboardHeader`}
          >
            <Button
              type="text"
              icon={
                collapsed ? (
                  <MenuUnfoldOutlined className="text-primaryColor" />
                ) : (
                  <MenuFoldOutlined className="text-primaryColor" />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            className="md:py-8 py-5 md:px-12 px-6"
            style={{
              minHeight: 280,
              backgroundColor: "#fffcf8",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
