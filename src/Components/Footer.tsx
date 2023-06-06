import React from "react";
import Logo from "../Logo";
import {
  faFacebook,
  faLine,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-[#23293F] px-7 py-7 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between">
          <Logo className="h-5 md:h-6" isFooter />
          <div className="flex gap-6 items-center">
            <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#C5C9D8] flex items-center justify-center">
              <FontAwesomeIcon
                className="w-3 h-3 md:h-5 md:w-5 text-[#23293F]"
                icon={faFacebook}
              />
            </div>
            <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#C5C9D8] flex items-center justify-center">
              <FontAwesomeIcon
                className="w-3 h-3 md:h-5 md:w-5 text-[#23293F]"
                icon={faLine}
              />
            </div>
            <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#C5C9D8] flex items-center justify-center">
              <FontAwesomeIcon
                className="w-3 h-3 md:h-5 md:w-5 text-[#23293F]"
                icon={faLinkedin}
              />
            </div>
          </div>
        </div>
        <div className=" border-t border-[#F0F1F6] mt-9 md:mt-20 text-white pt-5 gap-4 flex flex-wrap text-sm md:text-base font-assist">
          <span className="w-full md:w-auto">© 2022 Beam Checkout</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Cookie Settings</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
