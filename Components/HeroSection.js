import React from "react";

export default function HeroSection() {
  return (
    <>
      <section>
        <div className="relative h-dvh   overflow-hidden">
          <div class="absolute inset-0">
            <img
              src="https://www.imeleo.com/_next/image?url=%2Fimages%2Fui-ux-designs%201.png&w=640&q=75"
              alt="Background Image"
              class="object-cover object-center w-full h-full opacity-25"
            />
            <div class="absolute inset-0 bg-white opacity-50"></div>
          </div>
          <div className="relative flex flex-col justify-center text-center h-full z-10 pt-12 sm:pt-16">
            <p className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-blue-800 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              Business Software <br /> Solutions and Services
            </p>
            <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
              <span className="font-bold underline">Software</span> services and
              solutions to take your{" "}
              <span className="font-bold underline">Business</span> to the next
              level
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                title=""
                className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Know More
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        {/* <div className="bg-white">
          <div className="relative mx-auto mt-4 md:mt-8">
            <div className="lg:max-w-4xl lg:mx-auto">
              <img
                className="px-4 md:mpx-8"
                src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
              />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}
