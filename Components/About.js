import React from "react";

import { GoProjectRoadmap } from "react-icons/go";
export default function About() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img
              class="object-cover object-center rounded w-full h-96"
              alt="hero"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="font-semibold text-xl">
              {" "}
              <span className="text-blue-600"> About</span>{" "}
              <span className="text-blue-800"> Imeleo</span>
            </h3>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              We Are Increasing <span className="text-blue-800">Business</span>
              <br class="hidden lg:inline-block" />
              Success With <span className="text-blue-800">Technology</span>
            </h1>
            <p class="mb-8 leading-relaxed">
              At Imeleo, we use technology to help businesses grow, work
              smarter, and get better results. Our goal is to make it easier for
              companies to succeed in todays digital world.
            </p>
            <div class="flex flex-col justify-center">
              <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100 mb-4">
                <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                  <GoProjectRoadmap className="h-8 w-8" />
                </div>

                <div class="mx-5">
                  <h4 class="text-2xl font-semibold text-gray-700">
                    Problem Solving
                  </h4>
                  <div class="text-gray-500">
                    Aliquam erat volutpat <br />
                    Nullam imperdiet
                  </div>
                </div>
              </div>
              <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                  <GoProjectRoadmap className="h-8 w-8" />
                </div>

                <div class="mx-5">
                  <h4 class="text-2xl font-semibold text-gray-700">
                  Mission & Vision
                  </h4>
                  <div class="text-gray-500">
                    Aliquam erat volutpat <br />
                    Nullam imperdiet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
