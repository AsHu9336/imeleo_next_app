import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiTargetBold } from "react-icons/pi";
import { GiMountaintop } from "react-icons/gi";
import TechnicalImg from "../assets/images/Technical.png"
import BusinessImg from "../assets/images/Business.png"
import SupportImg from "../assets/images/Support.png"
import ProcessImg from "../assets/images/Process.png"
import InnovationImg from "../assets/images/Innovation.png"
import ScalabilityImg from "../assets/images/Scalability.png"

import Image from "next/image";

export default function WhyContactUs() {
  return (
    <>
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-blue-800 mb-2 text-center">
            Why Choose Us?
          </h2>
          <p class="text-gray-500 text-3xl  md:text-2xl lg:text-sm text-center mb-16">
          rusted expertise, cutting-edge technology, and a customer-<br/>first approach to drive your success.
          </p>
          <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
                {/* //<TechnicalImg className="h-8 w-8" /> */}
                <Image src={TechnicalImg} alt="hero"
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl"> Technical Expertise</h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences,
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
              <Image src={BusinessImg} alt="hero"
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl">
                  {" "}
                  Business Centric Approach
                </h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  You don't need to be an expert to use our plugin. Our
                  expressive API is readable and well documented.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
              <Image src={ProcessImg} alt="hero"
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl">
                  {" "}
                  Process And Quality Assurance
                </h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  You don't need to be an expert to use our plugin. Our
                  expressive API is readable and well documented.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
              <Image src={SupportImg} alt="hero"
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl"> Support</h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  You don't need to be an expert to use our plugin. Our
                  expressive API is readable and well documented.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
              <Image src={InnovationImg} alt="hero"
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl"> Innovation</h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  You don't need to be an expert to use our plugin. Our
                  expressive API is readable and well documented.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-6">
              <span className="text-violet-600 bg-violet-500/10  rounded-full flex justify-center">
              <Image src={ScalabilityImg} alt="hero"
                className="h-12 w-12"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl">Scalability</h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  You don't need to be an expert to use our plugin. Our
                  expressive API is readable and well documented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
