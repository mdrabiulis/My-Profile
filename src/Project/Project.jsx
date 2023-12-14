

import ProjectCards from "./ProjectCards";
import img from '../assets/Screenshot_2.png'
import img1 from '../assets/Screenshot_3.png'
import img2 from '../assets/Screenshot_4.png'
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-8 mt-6 ">

<Link to={''}><ProjectCards imeags={img2} title={'Brandshop'}></ProjectCards></Link>
<Link to={''}><ProjectCards imeags={img} title={'Online-Jobs-Marketplace'}></ProjectCards></Link>
<Link to={'https://prismatic-biscochitos-7f1383.netlify.app' } target="_blank"><ProjectCards imeags={img1} title={'Fitness-Tracker'}></ProjectCards></Link>


      {/* <Link className="">
        <div className="w-[385px] h-[305px] bg-slate-500 ">
          <div className="flex items-center justify-around ">
            <h2 className="text-3xl">Brandshop</h2>
            <img
              src={img}
              alt=""
              className="w-[235px] h-[140px] rounded-md mt-3"
            />
          </div>
        </div>
      </Link>
      <Link className="">
        <div className="w-[385px] h-[305px] bg-slate-500 ">
          <div className="flex items-center justify-around ">
            <h2 className="text-3xl">Brandshop</h2>
            <img
              src={img}
              alt=""
              className="w-[235px] h-[140px] rounded-md mt-3"
            />
          </div>
        </div>
      </Link>
      <Link className="">
        <div className="w-[385px] h-[305px] bg-slate-500 ">
          <div className="flex items-center justify-around ">
            <h2 className="text-3xl">Brandshop</h2>
            <img
              src={img}
              alt=""
              className="w-[235px] h-[140px] rounded-md mt-3"
            />
          </div>
        </div>
      </Link>
      <Link className="">
        <div className="w-[385px] h-[305px] bg-slate-500 ">
          <div className="flex items-center justify-around ">
            <h2 className="text-3xl">Brandshop</h2>
            <img
              src={img}
              alt=""
              className="w-[235px] h-[140px] rounded-md mt-3"
            />
          </div>
        </div>
      </Link> */}
    </div>
  );
};

export default Project;
