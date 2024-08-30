import { Link } from "react-router-dom";
import RContainer from "./RContainer";
import RButtonSmall from "../ui/RButtonSmall";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Drawer } from "antd";
import RButtonSmallWhite from "../ui/RButtonSmallWhite";
const menuItems = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "blogs",
    link: "/",
  },
  {
    label: "contact",
    link: "/",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="md:py-6 py-5 absolute top-0 left-0 w-full z-30">
      <RContainer>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-8 items-center justify-between">
          <div className="col-span-1">
            <Link className="inline-block" to={"/"}>
              <h3 className="md:text-3xl text-2xl font-bold uppercase text-white">
                <span className="text-accentColor">Ride</span>flow
              </h3>
            </Link>
          </div>
          <div className="col-span-3 mt-2 lg:block hidden">
            <ul className="flex items-center gap-12 justify-center text-white">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="capitalize font-medium hover:text-accentColor duration-300 border-b-2 hover:border-b-2 cursor-pointer border-accentColor pb-2 border-opacity-0 hover:border-opacity-100 hover:pb-1"
                >
                  <Link to={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 mt-1 ml-auto lg:block hidden">
            <RButtonSmallWhite link="/login">Login</RButtonSmallWhite>
          </div>
          <div className="col-span-1 ml-auto lg:hidden block">
            <Menu
              onClick={showDrawer}
              className="text-white w-[28px] h-[28px]"
            />
            <Drawer title="Navbar" onClose={onClose} open={open}>
              <ul className="flex flex-col items-end gap-6">
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className="capitalize font-medium hover:text-accentColor duration-300 border-b-2 hover:border-b-2 cursor-pointer border-accentColor pb-2 border-opacity-0 hover:border-opacity-100 hover:pb-1"
                  >
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="text-right mt-4">
                <RButtonSmall link="#">Login</RButtonSmall>
              </div>
            </Drawer>
          </div>
        </div>
      </RContainer>
    </div>
  );
};

export default Header;
