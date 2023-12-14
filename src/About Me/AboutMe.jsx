import {
  FaBookOpen,
  FaBookOpenReader,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";


const AboutMe = () => {
  return (
    <div className="pl-5 pt-4 p-6 ml-5 mr-10">
      <h2 className="text-3xl font-bold my-4 ">About Me</h2>
      <p className="">
        Hi, I am Rabiul and I am from Bangladesh. Despite having a Studing in
        Bachelor of Business Administration.BBA(Management Department), at which
        point I fell in love with everything web development. I am very
        impassioned about programming and web technologies and I love to work
        with them. Let's connect and query opportunities in the world of tech
        and programming together! My best skills are HTML5, CSS3, React.js,
        daisyUI, and Tailwind CSS. I also can work with some backend
        technologies like Firebase, JWT, Node.js, Express.js, and MongoDB.
      </p>

      <h2 className="font-bold mt-5 mb-2 underline">Education</h2>
      <div className=" md:font-semibold">
        <div className="flex items-center gap-3">
          <h2 className="flex items-center gap-2">
            <FaBookOpen className="w-6 h-6" />
            Education :
          </h2>
          <h2 className="">UnderGraduate</h2>
        </div>
        <div className="flex flex-wrap my-4 gap-3">
          <h2 className="flex items-center gap-2">
            <FaBookOpenReader className="w-6 h-6"></FaBookOpenReader>Currently
            Studing : 
          </h2>
          <h2 className="">
           National University BBA - Department Of Management
          </h2>
        </div>
      </div>

      <h2 className="font-bold mt-5 mb-2 underline">Skills</h2>
      <div className="font-semibold grid md:grid-cols-6">
        <div className="col-span-2 space-y-3">
          <h2 className="flex items-center gap-2">
            <FaHtml5 className="w-7 h-7 text-orange-600" />
            HTML
          </h2>
          <h2 className="flex items-center gap-2 uppercase">
            <IoLogoCss3 className="w-7 h-7 text-blue-600" />
            css
          </h2>
          <h2 className="flex items-center gap-2 uppercase ">
            <TbBrandJavascript className="w-7 h-7 text-yellow-600" />
            Javascript
          </h2>
          <h2 className="flex items-center gap-2 uppercase">
            <FaReact className="w-7 h-7 text-sky-500" />
            React
          </h2>
          <h2 className="flex items-center gap-2">
            <FaNodeJs className="w-7 h-7 text-orange-600" />
            NodeJs
          </h2>
        </div>
        {/* <div className="col-span-2">

        <h2 className="flex items-center gap-2 uppercase"><IoLogoCss3 className="w-7 h-7 text-blue-600"/>css</h2>
        <h2 className="flex items-center gap-2 uppercase"><FaReact className="w-7 h-7 text-sky-500"/>React</h2>
        <h2 className="flex items-center gap-2 uppercase"><TbBrandJavascript className="w-7 h-7 text-yellow-600"/>Javascript</h2>
        </div> */}
        {/* <div className="col-span-2">
        <h2 className="flex items-center gap-2"><FaHtml5 className="w-7 h-7 text-orange-600"/>HTML</h2>
        <h2 className="flex items-center gap-2 uppercase"><IoLogoCss3 className="w-7 h-7 text-blue-600"/>css</h2>
        <h2 className="flex items-center gap-2 uppercase"><FaReact className="w-7 h-7 text-sky-500"/>React</h2>
        <h2 className="flex items-center gap-2 uppercase"><TbBrandJavascript className="w-7 h-7 text-yellow-600"/>Javascript</h2>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
