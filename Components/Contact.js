import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
export default function Contact() {
  return (
    <>
      <section class="py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl font-semibold text-blue-800 mb-8 text-center">
          Contact Us
        </h2>
        <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
          <div class="shadow rounded-xl">
            <div class="grid  text-white shadow-xl md:grid-cols-2 bg-blue-800 rounded-xl">
              <aside class="relative hidden md:block">
                <img
                  class="absolute inset-0 object-cover object-left-top w-full h-full mt-16 -mr-16 rounded-tl-lg"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
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
                    <MdOutlineMail className=" w-6 h-6 mr-2" /> contact@imeleo.com
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
