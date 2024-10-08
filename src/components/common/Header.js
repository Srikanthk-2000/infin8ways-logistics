import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Megamenu from './Menu';
import image6 from '../../assets/LOGO.png';
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = (event) => {
    event.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-900 gap-x-3 md:gap-0">
        <div className="flex flex-wrap md:justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src={image6} className=" h-12 w-auto" alt="Logo" />
            {/* <span className="self-center text-[11.5px] md:text-xl font-semibold whitespace-nowrap text-white md:mr-0 mr-4">8 Ways Shipping & Logistics Americas Inc.,NJ USA</span> */}
            <span className="self-center pr-10 text-[11.5px] md:text-xl font-semibold whitespace-nowrap text-white md:mr-0 mr-4">Infin Eightways Shipping & Logistics Private Limited.</span>

          </a>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => {
                document.getElementById('mobile-menu-2').classList.toggle('hidden');
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white lg:hover:text-gray-400"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li><Megamenu /></li>
              <li>
                <a
                  href="/aboutUs"
                  className="block py-2 pr-4 pl-3 border-b lg:border-0 lg:hover:text-primary-700 lg:p-0 text-white lg:hover:text-gray-400 hover:bg-gray-700 hover:text-gray-400 lg:hover:bg-transparent border-gray-700"
                >
                  About US
                </a>
              </li>
              <li>
                <a
                  href="/enquiry"
                  className="block py-2 pr-4 pl-3 border-b lg:border-0 lg:hover:text-primary-700 lg:p-0 text-white lg:hover:text-gray-400 hover:bg-gray-700 hover:text-gray-400 lg:hover:bg-transparent border-gray-700"
                >
                  Enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
