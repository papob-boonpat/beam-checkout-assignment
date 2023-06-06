import React, { useState } from "react";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const getNav = () => (
    <>
      <li className="w-full">
        <Link to="/">
          <button className="w-full active:nav-active p-4 hover:text-nav-hover">
            Newsroom
          </button>
        </Link>
      </li>
      <li className="w-full">
        <Link to="/about">
          <button className="w-full active:nav-active p-4 hover:text-nav-hover">
            About us
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <nav>
      <div className="md:max-w-md md:flex md:items-center">
        <div className="flex justify-between items-center">
          <div className="pl-7 py-4">
            <Logo />
          </div>
          <FontAwesomeIcon
            onClick={() => {
              setIsShowNav((state) => !state);
            }}
            className="md:hidden mr-5 text-nav text-2xl"
            icon={isShowNav ? faClose : faBars}
          />
        </div>

        <ul
          className={`text-nav w-full absolute bg-white transition-all duration-200 ease-in left-0 ${
            isShowNav && "opacity-100"
          } opacity-0 md:hidden rounded-b-2xl shadow-xl`}
        >
          {getNav()}
        </ul>
        <ul className="hidden md:flex ml-8 items-center text-nav">
          {getNav()}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
