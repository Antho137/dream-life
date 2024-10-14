import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  let theYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-center items-center bg-green-700 py-6 mt-3 md:flex-row justify-between md:px-10">
      <div className="bg-white w-1/2 text-green-700 font-bold mb-3 pb-1 px-1 rounded-xl md:mb-0 md:w-1/6">
        <h5>Dream Life</h5>
      </div>
      <div className="md:w-3/6 lg:mx-20">
        <ul className="flex justify-between items-center space-x-4 my-1">
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
      <div className="flex flex-col items-center md:w-1/6">
        <p className="flex justify-between items-center space-x-6 my-2">
          <a href="">
            <FaLinkedinIn className="text-white" size={25} />
          </a>
          <a href="">
            <FaTwitter className="text-white" size={25} />
          </a>
          <a href="">
            <FaFacebook className="text-white" size={25} />
          </a>
        </p>
        <p className="text-white">
          &copy; <span>{theYear}</span>&#160; All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
