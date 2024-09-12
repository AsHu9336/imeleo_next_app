import React from "react";
import { BsStars } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Founder() {
  return (
    <>
      <section class="bg-gray-100 p-8">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg  ">
              <h2 class="flex flex-row text-2xl font-semibold text-gray-900 sm:text-4xl">
                <BsStars className="fill-blue-800" /> Meet Our <span className="text-blue-800">Founder</span>
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                With decades of industry experience,{" "}
                <span className="font-bold">Mayank</span> is a highly skilled
                software developer, solution architect and technology
                entrepreneur. He specializes in building modular and scalable
                cross platform software solutions.
              </p>
              <p class="mt-4 text-gray-600 text-lg">
                Over the past, he has worked with numerous business, helping
                them overcome complex business challenges by building innovative
                technology solutions.
              </p>
              <p class="mt-4 text-gray-600 text-lg">
                Admired by clients, developers and designers alike, his
                entrepreneurial vision drives{" "}
                <span className="font-bold">Imeleo</span>, empowering businesses
                with cutting-edge technology solutions, thus fueling growth and
                innovation.
              </p>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                class="w-96 h-96 object-cover rounded-lg shadow-md flex justify-center"
              />
              <h2 class="flex flex-row items-center text-2xl font-semibold text-blue-800 sm:text-4xl pt-4">
                Mayank Mahajan <FaLinkedin className="ml-2 w-6 h-6"/>
              </h2>
              <h2 class="text-xl font-semibold text-gray-900 sm:text-xl">
                Founder, Imeleo
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
