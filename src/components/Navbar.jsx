import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 fixed top-0 left-0 right-0 z-20 p-4 md:px-10 xl:px-20 mb-20">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl pb-1">DreamLife</div>
        <div className="md:hidden">
          <button className="text-white pt-1" onClick={handleMenu}>
            {!isMenuOpen ? (
              <FaBars className="fas fa-bars text-white text-xl" />
            ) : (
              <FaTimes className="fas fa-times text-white text-xl" />
            )}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "bg-blue-900 text-white px-3 pb-1 rounded" : "text-white")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "bg-blue-900 text-white px-3 pb-1 rounded" : "text-white")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles" className={({ isActive }) => (isActive ? "bg-blue-900 text-white px-3 pb-1 rounded" : "text-white")}>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "bg-blue-900 text-white px-3 pb-1 rounded" : "text-white")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {isMenuOpen ? (
        <ul className="flex-col md:hidden bg-green-600 mt-3 py-2">
          <li className="py-2">
            <NavLink to="/" className={({ isActive }) => (isActive ? "bg-blue-900 text-white px-3 pb-1 rounded" : "text-white")}>
              Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/about" className={({ isActive }) => (isActive ? "bg-blue-900 text-white px-3 pb-1 rounded" : "text-white")}>
              About
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/articles" className={({ isActive }) => (isActive ? "bg-blue-900 text-white px-3 pb-1 rounded" : "text-white")}>
              Articles
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "bg-blue-900 text-white px-3 pb-1 rounded" : "text-white")}>
              Contact
            </NavLink>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default NavBar;
