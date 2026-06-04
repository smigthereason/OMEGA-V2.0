import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Menu = ({ isOpen, onClose }) => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/user", icon: AiOutlineUser },
    { name: "Search", link: "/search", icon: FiSearch },
    { name: "Cart", link: "/cart", icon: FiShoppingCart },
    { name: "Settings", link: "/settings", icon: RiSettings4Line },
  ];

  // Pure drawer: completely hidden by default.
  // Opens as overlay on click of burger (all screen sizes).
  // Backdrop + X to close. Clicking a link also closes it.
  return (
    <>
      {/* Backdrop when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#000000] text-gray-100 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with close */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <span className="font-semibold tracking-wide">Menu</span>
          <button
            onClick={onClose}
            className="text-2xl leading-none text-gray-400 hover:text-white"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <div className="mt-2 flex flex-col gap-1 px-2 py-4">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              onClick={() => {
                if (onClose) onClose();
              }}
              className="flex items-center gap-3.5 font-medium p-3 rounded-md hover:bg-gray-800 text-sm transition"
            >
              <div className="flex-shrink-0 text-xl">
                {React.createElement(menu.icon, { size: 22 })}
              </div>
              <span className="whitespace-pre">{menu.name}</span>
            </Link>
          ))}
        </div>

        <div className="mt-auto p-4 text-[10px] text-gray-500 border-t border-white/10">
          © OMEGA
        </div>
      </aside>
    </>
  );
};

export default Menu;
