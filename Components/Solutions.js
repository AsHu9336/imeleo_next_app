import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import contentImg from './content.png';
import EmployeeImg from '../assets/images/Employee.png'
import VehicleImg from '../assets/images/Vechicle.png'
import LeadImg from '../assets/images/Lead.png'
import InventoryImg from '../assets/images/Inventory.png'
import HospitalImg from '../assets/images/Hospital.png'
import Image from "next/image";

export default function Solutions() {
  return (
    <>
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-blue-800 mb-2 text-center">
            Solutions
          </h2>
          <p class="text-gray-500  text-3xl  md:text-2xl lg:text-xl text-center mb-16">
          
          Innovative software solutions tailored to streamline your <br/> business operations and maximize efficiency.
          </p>
          <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
            <div className="rounded-lg shadow-md overflow-hidden p-4">
              <Image
                src={contentImg}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Content Management
                </h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
              <Image
                src={EmployeeImg}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Employee Management
                </h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
              <Image
                src={VehicleImg}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Vehicle Management
                </h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
              <Image
                src={LeadImg}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Lead Management
                </h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
              <Image
                src={InventoryImg}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Inventory Management
                </h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
              <Image
                src={HospitalImg}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Hospital Management
                </h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-8">
              <a
                href=""
                class=" flex items-center justify-center text-white bg-blue-800 border border-indigo-600 py-2 px-6 gap-2 rounded "
              >
                <span>View More</span>
                <svg
                  class="w-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
        </div>
      </section>
    </>
  );
}
