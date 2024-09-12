import contentImg from "./content.png";
import EmployeeImg from "../assets/images/Employee.png";
import VehicleImg from "../assets/images/Vechicle.png";
import Blog0 from "../assets/images/Blog0.png";
import Blog1 from "../assets/images/Blog1.png";
import Blog2 from "../assets/images/Blog2.png";
import Image from "next/image";

//import Image from "next/image";
export default function Blogs() {
  return (
    <>
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-blue-800 mb-2 text-center">
            Blogs
          </h2>
          <p class="text-gray-500  text-3xl  md:text-2xl lg:text-xl text-center mb-16">
            Explore our blog for expert tips, industry insights, and engaging{" "}
            <br /> content on the latest trends. Stay informed and inspired!
          </p>
          <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
            <div className=" rounded-lg bg-gray-100  shadow-md overflow-hidden p-4">
              <Image
                src={Blog0}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div
                // style="max-width: 240px;"
                class="flex rounded-full mx-auto bg-gradient-to-tr border-1 p-1 mt-2"
              >
                <button class="flex text-sm bg-white mt-2 px-6 py-1 border-2 border-blue-800 rounded-full">
                January 10, 2024
                
                </button>
              </div>
              <div className="pt-2 ">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                Why Data-Driven Decision Making is Key for Business Growth
                </h3>
                <p className="text-gray-700 text-lg">
                Learn how leveraging software that offers real-time data insights can enhance strategic decisions, boost productivity, and drive sustainable growth.
                </p>
              </div>
            </div>
            <div className="  rounded-lg bg-gray-100 shadow-md overflow-hidden p-4">
              <Image
                src={Blog1}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
              />
               <div
                
                class="flex rounded-full mx-auto bg-gradient-to-tr border-1 p-1 mt-2"
              >
                <button class="flex text-sm bg-white mt-2 px-6 py-1 border-2 border-blue-800 rounded-full">
               
                September 1, 2024
                </button>
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                Top 5 Business Services to Boost Customer Satisfaction
                </h3>
                <p className="text-gray-700 text-lg">
                Explore essential services such as CRM, help desk solutions, and automated support systems that can enhance customer experiences and foster long-term loyalty
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-100 shadow-md overflow-hidden p-4">
              <Image
                src={Blog2}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div
                
                class="flex rounded-full mx-auto bg-gradient-to-tr border-1 p-1 mt-2"
              >
                <button class="flex text-sm bg-white mt-2 px-6 py-1 border-2 border-blue-800 rounded-full">
               
                January 10, 2024
                </button>
              </div>
              <div className="pt-2 ">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                Leveraging Software Solutions to Enhance Business Efficiency 
                </h3>
                <p className="text-gray-700 text-lg">
                Discover how modern software tools can streamline your operations, automate tasks, and improve workflow efficiency to help your business stay competitive.
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
