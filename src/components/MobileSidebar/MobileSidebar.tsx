import { X } from "lucide-react";
import { useEffect } from "react";

const routes = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function MobileSidebar({
  isOpen,
  closeSidebar,
}: {
  isOpen: boolean;
  closeSidebar: () => void;
}) {
  const handleLinkClick = () => {
    closeSidebar();
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById("sidebar")?.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeSidebar]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={closeSidebar} // Close sidebar when backdrop is clicked
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={closeSidebar} className="p-4">
          <X />
        </button>
        <ul className="font-medium flex flex-col p-4">
          <li>
            <a
              href="/"
              onClick={handleLinkClick}
              className="block font-mono py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
            >
              Home
            </a>
          </li>
          {routes.map((route, index) => (
            <li key={index}>
              <a
                href={route.href}
                onClick={handleLinkClick}
                className="block font-mono py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
              >
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileSidebar;
