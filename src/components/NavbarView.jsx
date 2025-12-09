import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { handleNavigateClick } from "../utils/handleNavigateClick";
import euMobilityLogo from "../assets/Images/euMobilityNavbarLogo.png";
import { FiChevronDown } from "react-icons/fi";

const NavbarView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    if (location.pathname === "/") {
      const projectsSection = document.getElementById("projects-section");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/", { state: { scrollTo: "projects" } });
    }
    setOpen(false);
  };

  const closeMenu = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:opacity-80 transition cursor-pointer"
        >
          <img
            src={euMobilityLogo}
            alt="EU Mobility Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute block h-[3px] w-full bg-gray-900 transition-all duration-300 ${
              open ? "rotate-45 top-4" : "top-2"
            }`}
          />
          <span
            className={`absolute block h-[3px] w-full bg-gray-900 transition-all duration-300 ${
              open ? "opacity-0" : "top-4"
            }`}
          />
          <span
            className={`absolute block h-[3px] w-full bg-gray-900 transition-all duration-300 ${
              open ? "-rotate-45 top-4" : "top-6"
            }`}
          />
        </button>

        {/* Menu */}
        <ul
          className={`
          flex text-gray-900 font-medium md:items-center
          md:flex-row md:static md:opacity-100 md:max-h-none
          flex-col absolute left-0 right-0 top-16 bg-white 
          md:shadow-none transition-all duration-300 overflow-y-auto md:overflow-visible
          ${
            open
              ? "max-h-screen opacity-100 shadow-lg"
              : "max-h-0 opacity-0 md:opacity-100"
          }
          px-4 py-3 md:p-0 gap-1 md:gap-8
        `}
        >
          <li>
            <Link
              onClick={closeMenu}
              to="/"
              className="text-[var(--green-text-color)] font-bold block py-2 md:py-0 hover:opacity-70 transition cursor-pointer text-lg md:text-base"
            >
              Home
            </Link>
          </li>

          {/* Partners Dropdown */}
          <li
            className="relative group w-full md:w-auto"
            onMouseEnter={() =>
              window.innerWidth > 768 && setDropdownOpen(true)
            }
            onMouseLeave={() =>
              window.innerWidth > 768 && setDropdownOpen(false)
            }
          >
            <button
              className="font-medium flex items-center justify-between gap-2 py-2 md:py-0 text-gray-800 hover:text-[var(--green-text-color)] transition w-full md:w-auto cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>Partners</span>
              <FiChevronDown
                size={16}
                className={`transition-transform flex-shrink-0 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown List */}
            <ul
              className={`
                md:absolute md:top-full md:left-0 md:mt-3 md:bg-white md:rounded-xl md:border-2 md:border-[var(--green-text-color)]
                md:w-52 md:py-2 md:z-50 md:shadow-lg
                md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible
                md:transition-all md:duration-200
                w-full static bg-transparent border-none py-1 md:py-0 mt-1 md:mt-0
                flex flex-col pl-4 md:pl-0
                ${
                  dropdownOpen
                    ? "block md:!opacity-100 md:!visible"
                    : "hidden md:block"
                }
              `}
            >
              <li>
                <Link
                  onClick={closeMenu}
                  to="/accommodation"
                  className="block px-3 py-2 text-gray-700 hover:text-[var(--green-text-color)] hover:bg-[var(--green-text-color)]/5 transition-colors font-medium text-sm md:rounded-lg md:mx-2 md:py-3 cursor-pointer"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  to="/companies"
                  className="block px-3 py-2 text-gray-700 hover:text-[var(--green-text-color)] hover:bg-[var(--green-text-color)]/5 transition-colors font-medium text-sm md:rounded-lg md:mx-2 md:py-3 cursor-pointer"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  to="/sponsors"
                  className="block px-3 py-2 text-gray-700 hover:text-[var(--green-text-color)] hover:bg-[var(--green-text-color)]/5 transition-colors font-medium text-sm md:rounded-lg md:mx-2 md:py-3 cursor-pointer"
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <button
              onClick={handleClick}
              className="font-medium cursor-pointer py-2 md:py-0 text-gray-800 hover:text-[var(--green-text-color)] transition w-full text-left md:text-center"
            >
              Projects
            </button>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              to="/faq"
              className="font-medium py-2 md:py-0 text-gray-800 hover:text-[var(--green-text-color)] transition block cursor-pointer"
            >
              FAQ's
            </Link>
          </li>

          <li className="border-t border-gray-200 md:border-0 pt-2 md:pt-0 mt-2 md:mt-0">
            <button
              onClick={() => {
                handleNavigateClick(navigate, "/contact");
                closeMenu();
              }}
              className="rounded-lg font-semibold bg-[var(--green-text-color)] hover:bg-[var(--green-text-hover)] text-white px-6 py-2.5 w-full md:w-auto transition-all duration-200 md:ml-2 text-sm md:text-base cursor-pointer shadow-md hover:shadow-lg"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarView;
