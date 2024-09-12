import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Image from "next/image";
import ContactImg from "../assets/images/Contact.png";
export default function Contact() {
  return (




    <>
      <section class="py-8 md:py-16 lg:py-16 bg-gray-50">
        <h2 className="text-4xl font-semibold text-blue-800 mb-2  text-center">
          Contact Us
        </h2>
        <p class="text-gray-500 text-3xl  md:text-2xl lg:text-sm text-center mb-16">
          Reach out to discuss how we can transform your business with <br/> tailored 
          solutions and expert support.
        </p>
        <div class="w-full max-w-6xl mx-auto py-8 lg:py-8 px-4 sm:px-6 md:px-8 relative ">
          <div class="shadow rounded-3xl">
            <div class="grid  text-white shadow-xl md:grid-cols-2 bg-blue-800 rounded-3xl">
              <aside class="relative hidden md:block">
                <Image
                  //className="absolute inset-x-0  object-cover object-left-top w-full h-120   -mr-16 rounded-tl-lg"
                  className="absolute bottom-0 pl-10"
                  src={ContactImg}
                  alt="Discover our beautiful panel"
                />
              </aside>
              <aside class="p-8 space-y-4 md:p-16">
                <h2 class="text-2xl font-bold tracking-tight md:text-4xl font-headline">
                  We help you to grow your business faster & easier.
                </h2>

                <p class=" text-white md:text-2xl lg:text-sm">
                  Partner with us to simplify the path to your success. Well
                  make reaching your business goals faster and easier than ever
                </p>

                <div className="flex flex-col">
                  <div className="flex flex-row items-center text-xl mb-2">
                    <IoCallOutline className="w-6 h-6 mr-2" /> +91-8873-33-8873
                  </div>
                  <div className="flex flex-row items-center text-xl">
                    <MdOutlineMail className=" w-6 h-6 mr-2" />{" "}
                    contact@imeleo.com
                  </div>
                </div>

                <div>
                  <a
                    href=""
                    class="bg-white text-blue-600 px-4 py-3 mt-3 rounded-lg"
                  >
                    Contact Us
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
