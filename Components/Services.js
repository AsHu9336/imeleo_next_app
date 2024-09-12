import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import WebImg from "../assets/images/Web.png"
import AppImg from "../assets/images/App.png"
import ITImg from "../assets/images/IT.png"
import CloudImg from "../assets/images/Cloud.png"

import Image from "next/image";
export default function Services() {
  return (
    
    <>
      <section className="py-10 bg-gray-100" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-blue-800 mb-2 text-center">
            Services
          </h2>
          <p class="text-gray-500 text-3xl  md:text-2xl lg:text-sm text-center mb-16">
          {/* rusted expertise, cutting-edge technology, and a customer-<br/>first approach to drive your success. */}
          Comprehensive business services designed to support growth and <br/>enhance your competitive edge.
          </p>
          <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-6 mt-16 px-5">
            <div className="flex gap-4 items-start justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
              <Image src={WebImg}
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl ">
                  {" "}
                  Web App Development
                </h3>
                <p className="mt-1 text-gray-500 ">
                  {" "}
                  Building cutting-edge, high- performing web apps tailored to
                  suit your business
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
                <Image src={AppImg}
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl ">
                  {" "}
                  App Development
                </h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  Crafting exceptional mobile experiences that transform how
                  businesses engage with the users on the go.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
                <Image src={ITImg}
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl ">
                  {" "}
                  IT Consulting
                </h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  Building cutting-edge, high-performing web apps tailored
                  tosuit your business
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
                <Image src={WebImg}
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl ">
                  {" "}
                  Customer Software Development
                </h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  Enterprise-grade, bespoke solutions that perfectly align with
                  your business needs and goals.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
                <Image src={CloudImg}
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl ">
                  {" "}
                  Cloud Services
                </h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  Empower businesses to unlock the full potential of cloud
                  computing ensuring flexibility, scalability, and security
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
                <Image src={WebImg}
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl ">
                  {" "}
                  Data Engineering
                </h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  Robust data pipelines, ensuring the seamless collection,
                  storage, and management of your data, no matter the scale.
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
