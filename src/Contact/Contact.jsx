import { TfiLocationPin } from "react-icons/tfi";
import img from '../assets/google.png'

const Contact = () => {
  return (
    <div className="pl-5 pt-4 ">
      <h2 className="text-3xl font-bold my-4">Contact</h2>
      <div className="flex gap-7">
        <div className="w-[245px] space-y-7">
          <div className=" border-2 rounded-md drop-shadow-md bg-gray-50  text-center p-6 space-y-3 ">
            <TfiLocationPin className="mx-auto w-9 h-9 text-indigo-600"></TfiLocationPin>
            <h2 className="text-lg font-semibold">Rangpur, Bangladesh</h2>
          </div>
          <div className=" border-2 rounded-md drop-shadow-md bg-gray-50  text-center p-6 space-y-3 ">
            <TfiLocationPin className="mx-auto w-9 h-9 text-indigo-600"></TfiLocationPin>
            <h2 className="text-lg font-semibold">Rangpur, Bangladesh</h2>
          </div>
          <div className=" border-2 rounded-md drop-shadow-md bg-gray-50  text-center p-6 space-y-3 ">
            <TfiLocationPin className="mx-auto w-9 h-9 text-indigo-600"></TfiLocationPin>
            <h2 className="text-lg font-semibold">Rangpur, Bangladesh</h2>
          </div>
          <div className=" border-2 rounded-md drop-shadow-md bg-gray-50  text-center p-6 space-y-3 ">
            <TfiLocationPin className="mx-auto w-9 h-9 text-indigo-600"></TfiLocationPin>
            <h2 className="text-lg font-semibold">Rangpur, Bangladesh</h2>
          </div>
        </div>
        <div className="w-[550px] border  border-teal-600">
        <img className="w-full h-44" src={img} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Contact;
