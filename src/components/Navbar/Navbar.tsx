import { Menu } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "../MobileSidebar";
import Button from "../ui/Button";

const routes = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full bg-white bg-opacity-90 bg-blur-sm h-16"
      role="navigation"
    >
      <MobileSidebar isOpen={isOpen} closeSidebar={closeSidebar} />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-5 xs:px-10 sm:px-12 md:px-24 ">
        <a href="/" className="flex items-center">
          <span className="hidden sm:inline-block self-center text-lg whitespace-nowrap uppercase">
            Joana
            <span className="hidden sm:inline-block font-bold">Parente</span>
          </span>
          <span className="sm:hidden self-center text-2xl whitespace-nowrap uppercase">
            J<span className="sm:hidden font-bold">P</span>
          </span>
        </a>
        <div className="md:hidden flex items-center">
          <a href="#contact">
            <Button>Let's Talk</Button>
          </a>
          <button
            onClick={toggleSidebar}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Menu />
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {routes.map((route, index) => (
              <li key={index}>
                <a
                  href={route.href}
                  className="block font-mono py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 "
                >
                  {route.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact">
                <Button>Let's Talk</Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
