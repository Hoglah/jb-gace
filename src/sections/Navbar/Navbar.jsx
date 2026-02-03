import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import { navigations } from "../../data";
import { Link } from "react-scroll";
import "./Navbar.css";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../../components/sidebar/Sidebar";
import useNavbar from "../../hook/useNavbar";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { showNavbar } = useNavbar();
  return (
    <>
      <Sidebar
        openSidebar={openSidebar}
        onClose={() => setOpenSidebar(!openSidebar)}
      />
      <nav className={`flex__center navbar ${showNavbar ? "drop" : ""}`}>
        <Logo />
        <div className="navbar__links">
          {navigations.map((item, index) => (
            <Link
              to={item.to}
              spy={true}
              className="nav__item"
              activeClass="active"
              smooth={true}
              offset={-300}
              key={index}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex__center">
          <Link to="contact" smooth={true} className="flex__center btn primary">
            Get a quote <FaArrowTurnDown />
          </Link>
          <button
            className="flex__center icon menu__btn"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
