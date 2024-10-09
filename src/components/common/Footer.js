import React from 'react'
import Logo from "../../assets/LOGO.png"
import infinty from "../../assets/infinity.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
  BellIcon,
  EnvelopeIcon,
  HomeIcon,
  InformationCircleIcon,
  LifebuoyIcon,
  MapIcon,
  PhoneIcon,
} from '@heroicons/react/16/solid'

const Footer = () => {
  return (
    <>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="grid gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-3">
    <div>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-gray-900 block my-4 mb-8 leading-tight text-center">
          <img className="inline-block w-8 h-8" src={infinty} alt="Infinity Icon" />
          Ways of shipping, logistics & supply chain solutions with the human midas touch of global service excellence.
        </p>
      </div>
    </div>
    <div className="space-y-4 text-sm lg:w-[600px] sm:w-auto">
      <p className="text-base font-bold tracking-wide text-gray-900">
        Contact Us :
      </p>
      <div className="flex items-start">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 text-gray-800 mr-2 mt-1" />
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Our address"
          title="Our address"
          className="ml-2 transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          <div className='font-bold md:text-lg'>
            INDIA: Infin Eightways Shipping & Logistics Private Limited
          </div>
          <div>
          <p className='font-bold'>REGD.OFFICE :  </p>
          </div>
          <p className='pt-2'>
          OLD NO.8, NEW 9,B3 Flat, Pushparagam Apartments,<br />
            Varasidhi Vinayagar Kovil Street,Chinmaya Nagar,<br />
            Virugambakkam, Chennai - 600092.<br />
            
          </p>
        </a>
      </div>
      <div className="flex items-center">
        <PhoneIcon className="h-5 w-5 text-gray-800 mr-2" />
        <p className="ml-2">(+91) 44-46892442</p>
      </div>
      <div className="flex items-center">
        <EnvelopeIcon className="h-5 w-5 text-gray-800 mr-2" />
        <a
          href="mailto:8ways@8waysgroup.com"
          aria-label="Our email"
          title="Our email"
          className="ml-2 transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          info@infin8waysgroup.com
        </a>
      </div>
    </div>
    <div className="flex flex-col space-y-4 mt-10 sm:pt-0 sm:ml-4 lg:ml-48">
      <span className="flex items-center text-base font-bold tracking-wide text-gray-900">
        <HomeIcon className="h-5 w-5 mr-2" />
        <a href='/'>Home</a>
      </span>
      <span className="flex items-center text-base font-bold tracking-wide text-gray-900">
        <BellIcon className="h-5 w-5 mr-2" />
        <a href='/'>Service</a>
      </span>
      <span className="flex items-center text-base font-bold tracking-wide text-gray-900">
        <InformationCircleIcon className="h-5 w-5 mr-2" />
        <a href='/aboutUs'>About Us</a>
      </span>
      <span className="flex items-center text-base font-bold tracking-wide text-gray-900">
        <LifebuoyIcon className="h-5 w-5 mr-2" />
        <a href='/enquiry'>Help</a>
      </span>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm text-gray-600">
      © Copyright 2024 8 Ways Group. All rights reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      <li>
        <a
          href="/"
          className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          F.A.Q
        </a>
      </li>
      <li>
        <a
          href="/"
          className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="/"
          className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          Terms &amp; Conditions
        </a>
      </li>
    </ul>
  </div>
</div>

    </>
  )
}

export default Footer
