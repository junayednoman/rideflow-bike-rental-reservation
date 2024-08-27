import { Outlet } from "react-router-dom";
import Header from "./Header";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
