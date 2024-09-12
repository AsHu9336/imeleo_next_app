import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <footer className="w-full bg-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <h1 className="text-6xl text-white font-bold">Imeleo</h1>
              <h1 className="text-2xl text-white font-bold">
                Business Software
              </h1>
              <h1 className="text-2xl text-white font-semibold">
                Solutions And Services
              </h1>
            </div>

            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg  font-medium mb-7 text-white">Links</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-white hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Solutions
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Why Us
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-white font-medium mb-7">Services</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-white hover:text-gray-900"
                  >
                    Web App Dev
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Mobile App Dev
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    IT Consulting
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Custom Software
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Cloud Services
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Data Engineering
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left">
              <h4 className="text-lg  font-medium mb-7 text-white">
                Solutions
              </h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-white hover:text-gray-900"
                  >
                    Content Management
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Employee Management
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Vehicle Management
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Lead Management
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Inventory Management
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-white hover:text-gray-900"
                  >
                    Hospital Management
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-white font-medium mb-7">Follow Us</h4>
              <div className="flex flex-row">
                <FaFacebook className="w-8 h-8 mr-2 fill-white" />
                <FaLinkedin className="w-8 h-8 mr-2 fill-white" />
                <FaInstagram className="w-8 h-8 mr-2 fill-white" />
              </div>
              <div className="flex flex-row mt-2">
                <FaYoutube className="w-8 h-8 mr-2 fill-white"  />
                <FaXTwitter className="w-8 h-8 mr-2  fill-white" />
              </div>
            </div>
          </div>

          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-white ">
                © 2023 <a href="https://pagedone.io/">Imeleo</a> 2024, All
                rights reserved.
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                <h1 className="text-l text-white ">info@imeleo.com</h1>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
