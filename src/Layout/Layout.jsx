import {  Outlet } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-[#f2e8e9] min-w-full  min-h-screen mx-auto">
      <div className="lg:w-[1285px] mx-auto ">
        <Navbar></Navbar>
      </div>
      <div className=" lg:w-[1385px] lg:min-h-[745px] mx-auto pt-16">
       
        <div className="flex flex-col lg:flex-row lg:ml-[55px] lg:w-[1280px] bg-gradient-to-b from-purple-600 to-indigo-600 rounded-3xl  border border-red-700">
          <div className="lg:w-[385px] lg:min-h-[745px] ">
            
            <div className="avatar ml-20 mt-10 ">
              <div className="w-60 rounded-full  border-4 drop-shadow-xl ring-offset-2">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className=""
                />
              </div>
            </div>
            <div className="text-white text-center">
              <h2 className=" text-3xl  font-bold uppercase mt-4">
                md rabiul islam
              </h2>
              <h3 className="text-lg mt-4">Front-End Developer</h3>
              <div className="flex justify-center mt-7 gap-3">
                <MdOutlineMailOutline className="w-6 h-6"></MdOutlineMailOutline>
                <FaFacebookF className="w-6 h-6"></FaFacebookF>
                <FaLinkedinIn className="w-6 h-6"></FaLinkedinIn>
                <FaGithub className="w-6 h-6"></FaGithub>
              </div>
              <button className="btn text-white badge-outline border-2 rounded-2xl hover:bg-white hover:text-indigo-600 mt-16">resume</button>
            </div>
            <footer className="footer footer-center p-4  text-base-content mt-28">
  <aside>
    <p className="text-white">© 2023 - Raviul | All rights reserved.</p>
  </aside>
</footer>
          </div>
          <div className="flex-1 bg-orange-400 rounded-2xl">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
