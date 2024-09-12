import React from "react";
import Image from "next/image";
import AboutImg from "../assets/images/About.png";
import VectorImg from "../assets/images/Vector.png";

import { GoProjectRoadmap } from "react-icons/go";
export default function About() {
  return (
    <>
      <section class="bg-gray-100 body-font py-16">
        <h2 className="text-5xl font-semibold text-blue-800 mb-2 text-center">
          About Imeleo
        </h2>
        <p class="text-gray-500  text-3xl  md:text-2xl lg:text-xl text-center mb-4">
          Imeleo provides cutting-edge solutions and expert insights to <br />{" "}
          drive your business success in the digital age.
        </p>

        <div class="container gap-10 flex px-5 py-12 md:flex-row flex-col items-start">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pl-16">
            <Image
              class="object-cover object-center rounded w-full h-full"
              alt="hero"
              src={AboutImg}
            />
          </div>
          <div class="lg:w-1/2 md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start ">
            <h1 class="title-font sm:text-5xl text-3xl mb-4 font-semibold text-gray-900">
              We Are Increasing <span className="text-blue-800">Business</span>
              <br class="hidden lg:inline-block" />
              Success With <span className="text-blue-800">Technology</span>
            </h1>
            <p class="mb-8 text-black leading-relaxed">
              At Imeleo, we use technology to help businesses grow, work
              smarter, and get better results. Our goal is to make it easier for
              companies to succeed in todays digital world.
            </p>
            <div class="flex flex-col justify-start">
              <div class="flex items-start px-5 py-2">
                <Image src={VectorImg} className="shadow-sm rounded-md mr-2" />
                <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
                  Problem Solving
                </h2>
              </div>
              <div class="flex items-start px-5 py-2 ">
                <Image src={VectorImg} className="shadow-sm rounded-md mr-2" />
                <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
                  Strategic Growth
                </h2>
              </div>
              <div class="flex items-start px-5 py-2 ">
                <Image src={VectorImg} className="shadow-sm rounded-md mr-2" />
                <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
                  Enhanced Performance
                </h2>
              </div>
            </div>
            <div className="pt-8">
              <a
                href=""
                class="flex items-center text-white bg-blue-800 border border-indigo-600 py-2 px-6 gap-2 rounded "
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
        </div>
      </section>
    </>
  );
}
