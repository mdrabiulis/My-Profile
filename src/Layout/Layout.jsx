import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#ECE8F2] min-w-full  min-h-screen">
      <div className="flex  w-[1385px] min-h-[745px]  mx-auto gap-6 ">
        <div className="w-[1280px] bg-gradient-to-b from-purple-500 to-indigo-500 rounded-3xl my-10 flex">
          <div className="w-[385px] min-h-[745px]"></div>
          <div className="flex-1 bg-white rounded-2xl">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="bg-orange-950 m flex-1 my-10">
          <ul className="text-center p-2">
            <li className="">
              <NavLink to={"/a"}>AllUser</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
