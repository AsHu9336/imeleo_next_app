import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiTargetBold } from "react-icons/pi";
import { GiMountaintop } from "react-icons/gi";

export default function WhyContactUs() {
  return (
    <>
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-blue-800 mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
                <GiMountaintop className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-semibold text-xl"> Technical Expertise</h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  You don't need to be an expert to use our plugin. Our
                  expressive API is readable and well documented.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
                <HiOutlineLightBulb className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-semibold text-xl"> Business Centric Approach</h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  You don't need to be an expert to use our plugin. Our
                  expressive API is readable and well documented.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
              <PiTargetBold className="w-8 h-8"/>
              </span>
              <div>
                <h3 className="font-semibold text-xl"> Process And Quality
                Assurance</h3>
                <p className="mt-1 text-gray-500">
                  {" "}
                  You don't need to be an expert to use our plugin. Our
                  expressive API is readable and well documented.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
              <GiMountaintop className="h-8 w-8"/>
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
            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
                <HiOutlineLightBulb className="h-8 w-8" />
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
            <div className="flex gap-4 items-start flex-col rounded-lg lg:rounded-xl  border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
              <PiTargetBold className="w-8 h-8"/>
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
