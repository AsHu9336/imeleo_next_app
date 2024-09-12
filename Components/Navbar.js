import React from "react";

export default function Navbar() {
  return (
    <>
      <navbar>
        <div className="w-full py-4 border-b bg-blue-800">
          <div className="flex justify-between px-20 items-center font-semibold">
            <div>
              <h1 className="text-3xl text-white">Imeleo</h1>
            </div>
            <div className="flex xl:gap-10 md:gap-8  gap-2">
              <a href="" className=" text-white">Solutions</a>
              <a href="" className=" text-white">Services</a>
              <a href="" className=" text-white">About Us</a>
              <a href="" className=" text-white">Why Us</a>
              <a href="" className=" text-white">Blog</a>
            </div>
            <div>
            <input className="mx-4 w-full border rounded-full px-4 py-2" type="text" placeholder="Search"/>
              {/* <button className="py-2 px-6 bg-black text-white rounded-3xl font-semibold">
                Contact
              </button> */}
            </div>
          </div>
        </div>
      </navbar>
    </>
  );
}
