import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <div className="navbar bg-base-100 rounded-b-3xl fixed z-50 w-[420px] md:w-[570px] lg:w-[1280px] mx-auto xl:-ml-24 border border-green-900">
        <div className="navbar-start md:w-[30%] lg:w-[40%] border border-orange-600">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
          <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/aboutme"}>About Me</NavLink>
            </li>
            <li>
              <NavLink to={"/project"}>Project</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            </ul>
          </div>
        </div>
        {/* <div className="navbar-center hidden lg:flex "> */}
        <div className=" border border-red-900  hidden md:flex">
          {/* <ul className="menu menu-horizontal px-1"> */}
          <ul className="flex gap-6  ">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/aboutme"}>About Me</NavLink>
            </li>
            <li>
              <NavLink to={"/project"}>Project</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
