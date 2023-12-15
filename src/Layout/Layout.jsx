import { Link, Outlet } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
// xl:ml-[55px]
const Layout = () => {
  return (
    <div className="bg-[#e7e3e9] min-w-full min-h-screen ">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className=" xl:w-[1385px] xl:min-h-[745px] mx-auto pt-20">
        <div className="flex flex-col xl:flex-row  xl:w-[1280px] bg-gradient-to-b from-purple-600 to-indigo-600 rounded-3xl">
          <div className="xl:w-[385px] xl:min-h-[745px] ">
            <div className="avatar ml-20 mt-10 ">
              <div className="w-60 rounded-full border-4 drop-shadow-xl ring-offset-2">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className=""
                />
              </div>
            </div>
            <div className="text-white text-center">
              <h2 className=" text-3xl font-bold uppercase mt-4">
                md rabiul islam
              </h2>
              <h3 className="text-lg mt-4">Front-End Developer</h3>
              <div className="flex justify-center mt-7 gap-3">
                <Link to={"#"}>
                  {" "}
                  <MdOutlineMailOutline className="w-6 h-6"></MdOutlineMailOutline>
                </Link>
                <Link
                  to={"https://www.facebook.com/rabiulislam155"}
                  target="_blank"
                >
                  {" "}
                  <FaFacebookF className="w-6 h-6"></FaFacebookF>
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/md-rabiul-islam-60319a2a3"}
                  target="_blank"
                >
                  <FaLinkedinIn className="w-6 h-6"></FaLinkedinIn>
                </Link>
                <Link to={"https://github.com/mdrabiulis"}>
                  <FaGithub className="w-6 h-6"></FaGithub>
                </Link>
              </div>
              <a href="/ELECTRICITY BILL.pdf" download="Resume" target="_blank">
                <button className="btn text-white badge-outline border-2 rounded-2xl hover:bg-white hover:text-indigo-600 mt-16">
                  Resume
                </button>
              </a>
            </div>
            <footer className="footer footer-center p-4  text-base-content mt-28">
              <aside>
                <p className="text-white">
                  © 2023 - Rabiul | All rights reserved.
                </p>
              </aside>
            </footer>
          </div>
          <div className="flex-1 bg-white  rounded-2xl">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
