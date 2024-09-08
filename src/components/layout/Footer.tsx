import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import RContainer from "./RContainer";

const Footer = () => {
  return (
    <div className="space-y-8 border-t border-gray-600">
      <div className="py-14 bg-primaryColor  text-white">
        <RContainer>
          <ul className="flex items-center justify-center gap-6">
            <li>
              <a
                className="text-primaryColor p-2 rounded-full bg-white hover:bg-accentColor hover:text-white duration-200 flex items-center justify-center"
                href="#"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                className="text-primaryColor p-2 rounded-full bg-white hover:bg-accentColor hover:text-white duration-200 flex items-center justify-center"
                href="#"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                className="text-primaryColor p-2 rounded-full bg-white hover:bg-accentColor hover:text-white duration-200 flex items-center justify-center"
                href="#"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                className="text-primaryColor p-2 rounded-full bg-white hover:bg-accentColor hover:text-white duration-200 flex items-center justify-center"
                href="#"
              >
                <Youtube />
              </a>
            </li>
            <li>
              <a
                className="text-primaryColor p-2 rounded-full bg-white hover:bg-accentColor hover:text-white duration-200 flex items-center justify-center"
                href="#"
              >
                <Twitter />
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 my-10 text-sm">
            <a
              className="hover:underline hover:text-accentColor duration-200"
              href="#"
            >
              Home
            </a>
            <a
              className="hover:underline hover:text-accentColor duration-200"
              href="#"
            >
              About
            </a>
            <a
              className="hover:underline hover:text-accentColor duration-200"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="hover:underline hover:text-accentColor duration-200"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="hover:underline hover:text-accentColor duration-200"
              href="#"
            >
              Contact Us
            </a>
          </div>
          <div>
            <p className="text-sm text-center text-secondaryColor">
              {new Date().getFullYear()} Rideflow. All Rights Reserved.
            </p>
          </div>
        </RContainer>
      </div>
    </div>
  );
};

export default Footer;
