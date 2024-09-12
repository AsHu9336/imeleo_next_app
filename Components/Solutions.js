import React from "react";
import { FaLaptopCode } from "react-icons/fa";

export default function Solutions() {
  return (
    <>
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-blue-800 mb-8 text-center">
            Solutions
          </h2>
          <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
              <img
                src="https://picsum.photos/id/4/200/300"
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
              <img
                src="https://picsum.photos/id/7/200/300"
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
              <img
                src="https://picsum.photos/id/6/200/300"
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
              <img
                src="https://picsum.photos/id/20/200/300"
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
              <img
                src="https://picsum.photos/id/24/200/300"
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
              <img
                src="https://picsum.photos/id/4/200/300"
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
        </div>
      </section>
    </>
  );
}
