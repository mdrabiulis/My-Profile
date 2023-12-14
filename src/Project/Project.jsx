

import ProjectCards from "./ProjectCards";
import img from '../assets/Screenshot_2.png'
import img1 from '../assets/Screenshot_3.png'
import img2 from '../assets/Screenshot_4.png'
import { Link } from "react-router-dom";
const Project = () => {
  return (
<div className=" pt-4 mr-10 overflow-auto h-[745px]">
<h2 className="text-3xl font-bold my-2 pl-7 ">About Me</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ml-8 mt-4 ">

<Link to={'https://assignment-10-project-33ee9.web.app'} target="_blank"><ProjectCards imeags={img2} title={'Brandshop'}></ProjectCards></Link>
<Link to={'https://ornate-strudel-d64653.netlify.app'} target="_blank"><ProjectCards imeags={img} title={'Online-Jobs-Marketplace'}></ProjectCards></Link>
<Link to={'https://prismatic-biscochitos-7f1383.netlify.app' } target="_blank"><ProjectCards imeags={img1} title={'Fitness-Tracker'}></ProjectCards></Link>

    </div>
</div>
  );
};

export default Project;
