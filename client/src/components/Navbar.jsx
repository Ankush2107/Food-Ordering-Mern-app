// Import React hooks and components
import { useContext, useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";

import { AuthContext } from "../contexts/AuthProvider";
import Modal from "./Modal";
import Profile from "./Profile";

const Navbar = () => {
  
  // State to track whether the navbar should be sticky
  const [isSticky, setSticky] = useState(false);

  // Get user information from AuthContext
  const { user } = useContext(AuthContext);
  console.log(user);

  // Effect to handle scroll events and update sticky state
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) setSticky(true);
      else setSticky(false);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // JSX for navigation items
  const navItems = (
    <>
      <li>
        <a className="text-[#E59632]" href='/'>Home</a>
      </li>
      <li>
        {/* Dropdown for Menu */}
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li><a href="/menu">All</a></li>
            <li><a>Salad</a></li>
            <li><a>Pizza</a></li>
          </ul>
        </details>
      </li>
      <li>
        {/* Dropdown for Services */}
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><a>Online Order</a></li>
            <li><a>Table Booking</a></li>
            <li><a>Order Tracking</a></li>
          </ul>
        </details>
      </li>
      <li><a>Offers</a></li>
    </>
  );

  return (
    <header className='max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out'>
    
      {/* Navbar container */}
      <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300" : "" }`}>
        <div className="navbar-start">

          {/* Responsive Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            {/* Responsive Dropdown Content */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              { navItems }
            </ul>
          </div>

          {/* Logo */}
          <a href='/'>
            <div className='text-[#E59632] h-10 w-10 font-bold'>Logo</div>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          {/* Horizontal Menu */}
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end">
          {/* Search Button */}
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>

          {/* Cart Item */}
          <label tabIndex={0} className='btn btn-ghost btn-circle mr-3 lg:flex hidden items-center justify-center'>
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </label>

          {/* Login Button or Profile */}
          {
            user ? <Profile user={user} /> : <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-[#E59632] hover:bg-[#e5a24b] rounded-full px-6 text-white flex items-center justify-center gap-2"><FaRegUser/> Login</button>
          }

          {/* Modal Component for Login */}
          <Modal/>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
