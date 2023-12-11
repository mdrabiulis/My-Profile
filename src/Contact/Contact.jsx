import { TfiLocationPin } from "react-icons/tfi";
import img from "../assets/google.png";

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
          <h2 className="text-xl font-bold my-8">
            How Can I ,<samp className="text-indigo-600">Help You?</samp>
          </h2>
          <div>
            <form>
              <div>
                <div className="grid md:grid-cols-4 gap-6  ">
                  <div className="grid col-span-2  w-full mx-auto">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>

                      <input
                        type="text"
                        name="name"
                        readOnly
                        placeholder="Name"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email Address</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Subject</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-2  w-full mx-auto">
                    <div className="form-control">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Message</span>
                        </div>
                        <textarea
                          name="message"
                          className="textarea textarea-bordered h-56"
                          placeholder="Message"
                        ></textarea>
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" my-10 pb-10">
                  <input
                    type="submit"
                    value="Send message"
                    className="border-2 border-indigo-600  p-2 text-black hover:bg-indigo-600  hover:text-white rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
