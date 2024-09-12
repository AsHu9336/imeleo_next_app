import React from "react";
import { FaLaptopCode } from "react-icons/fa";
export default function Services() {
  return (
    <>
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-blue-800 mb-8 text-center">
            Services
          </h2>
          <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
            <div className="flex gap-4 items-center justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
                <FaLaptopCode className="w-8 h-8 rounded-xl" />
              </span>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  {" "}
                  Web App Development
                </h3>
                <p className="mt-1 text-gray-500 text-center">
                  {" "}
                  Building cutting-edge, high- performing web apps tailored to
                  suit your business
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
                <FaLaptopCode className="w-8 h-8" />
              </span>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  {" "}
                  App Development
                </h3>
                <p className="mt-1 text-gray-500 text-center">
                  {" "}
                  Crafting exceptional mobile experiences that transform how
                  businesses engage with the users on the go.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
                <FaLaptopCode className="w-8 h-8" />
              </span>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  {" "}
                  IT Consulting
                </h3>
                <p className="mt-1 text-gray-500 text-center">
                  {" "}
                  Building cutting-edge, high-performing web apps tailored
                  tosuit your business
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
                <FaLaptopCode className="w-8 h-8" />
              </span>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  {" "}
                  Customer Software Development
                </h3>
                <p className="mt-1 text-gray-500 text-center">
                  {" "}
                  Enterprise-grade, bespoke solutions that perfectly align with
                  your business needs and goals.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
                <FaLaptopCode className="w-8 h-8" />
              </span>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  {" "}
                  Cloud Services
                </h3>
                <p className="mt-1 text-gray-500 text-center">
                  {" "}
                  Empower businesses to unlock the full potential of cloud
                  computing ensuring flexibility, scalability, and security
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center flex-col  rounded-xl lg:rounded-xl border-2 border-blue-500 p-10">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full flex justify-center">
                <FaLaptopCode className="w-8 h-8" />
              </span>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  {" "}
                  Data Engineering
                </h3>
                <p className="mt-1 text-gray-500 text-center">
                  {" "}
                  Robust data pipelines, ensuring the seamless collection,
                  storage, and management of your data, no matter the scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
