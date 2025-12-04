import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { handleNavigateClick } from "../utils/handleNavigateClick";
import euMobilityLogo from "../assets/Images/euMobilityNavbarLogo.png";

const NavbarView = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-[var(--white-color)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={euMobilityLogo}
            alt="EU Mobility Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 focus:outline-none"
        >
          <span
            className={`absolute block h-[3px] w-full bg-[var(--black-color)] transition-all duration-300 ${
              open ? "rotate-45 top-4" : "top-2"
            }`}
          />
          <span
            className={`absolute block h-[3px] w-full bg-[var(--black-color)] transition-all duration-300 ${
              open ? "opacity-0" : "top-4"
            }`}
          />
          <span
            className={`absolute block h-[3px] w-full bg-[var(--black-color)] transition-all duration-300 ${
              open ? "-rotate-45 top-4" : "top-6"
            }`}
          />
        </button>

        {/* Menu */}
        <ul
          className={`
            flex text-[var(--black-color)] font-semiBold md:items-center
            md:flex-row md:static md:opacity-100 md:max-h-none
            flex-col absolute left-0 right-0 top-16
            bg-[var(--white-color)] shadow-md md:shadow-none
            transition-all duration-300 overflow-hidden
            ${
              open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 md:opacity-100"
            }
            px-6 py-4 md:p-0 gap-6 md:gap-8
          `}
        >
          {["/", "/about", "/accommodation", "/pastProjects", "/faq"].map(
            (path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[var(--green-text-color)] font-medium transition"
                      : "font-medium hover:text-[var(--green-text-color)] transition"
                  }
                >
                  {
                    [
                      "Home",
                      "About us",
                      "Accommodation",
                      "Past projects",
                      "FAQ's",
                    ][i]
                  }
                </NavLink>
              </li>
            )
          )}

          <button
            onClick={() => handleNavigateClick(navigate, "/contact")}
            className="rounded-lg cursor-pointer uppercase font-medium bg-[var(--green-text-color)] hover:bg-[var(--green-text-hover)] text-[var(--white-color)] px-4 py-2 hidden md:block ml-4 transition"
          >
            Contact
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarView;
