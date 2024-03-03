import { useState } from "react";

// icons
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

// react router dom
import { Link } from "react-router-dom";

const Signup = () => {
  const [active, setActive] = useState(false);

  return (
    <main className="w-full min-h-[100vh] h-auto bg-blue-500 flex items-center justify-center sm:py-12 p-6">
      <form className="w-full sm:w-[900px] sm:max-w-[1000px]: bg-white rounded-lg sm:py-6 sm:px-8 p-4 flex flex-col gap-5">
        <h3 className="text-[1.8rem] font-[700] text-gray-900 text-center">
          Sign Up
        </h3>
        <div className="flex items-center justify-between gap-4 w-full mt-5 sm:flex-row flex-col">
          <input
            type="email"
            placeholder="First name"
            className="py-3 px-4 border focus:outline-blue-500 border-gray-300  rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Last name"
            className="py-3 px-4 border focus:outline-blue-500 border-gray-300  rounded-lg w-full"
          />
        </div>

        <div className="flex items-center justify-between gap-4 w-full sm:flex-row flex-col">
          <input
            type="email"
            placeholder="Phone number"
            className="py-3 px-4 border focus:outline-blue-500 border-gray-300  rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Zip code"
            className="py-3 px-4 border focus:outline-blue-500 border-gray-300  rounded-lg w-full"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
        />

        <div className="w-full flex items-center gap-4 justify-between sm:flex-row flex-col">
          <div className="w-full relative">
            <input
              type={active ? "text" : "password"}
              placeholder="Password"
              className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
            />
            {active ? (
              <BsEyeSlash
                className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                onClick={() => setActive(false)}
              />
            ) : (
              <BsEye
                className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                onClick={() => setActive(true)}
              />
            )}
          </div>
          <div className="w-full relative">
            <input
              type={active ? "text" : "password"}
              placeholder="Confirm password"
              className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
            />
            {active ? (
              <BsEyeSlash
                className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                onClick={() => setActive(false)}
              />
            ) : (
              <BsEye
                className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                onClick={() => setActive(true)}
              />
            )}
          </div>
        </div>

        <div className="text-[1rem] ">
          <input type="checkbox" name="checkbox" id="checkbox" />{" "}
          <label htmlFor="checkbox" className="cursor-pointer">
            By clicking, I agree to signup{" "}
            <a href="#" className=" text-blue-500">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className=" text-blue-500">
              Privacy Policy
            </a>
          </label>
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="w-full sm:w-[50%] py-3 px-4 bg-blue-500 text-white border-none outline-none rounded-lg mt-3"
          >
            Sign up
          </button>
        </div>
        <div className="flex items-center justify-center w-full gap-1">
          <span className="text-[1rem] text-gray-600 font-[500]">
            have already an account?{" "}
          </span>
          <span>
            <Link
              to={"/signin"}
              className="text-[1rem] text-blue-500 font-[500]"
            >
              Signin
            </Link>
          </span>
        </div>

        <div className="w-full my-1 flex items-center justify-center gap-3">
          <hr className="w-[45%] bg-gray-400 h-[2px]" />
          <p>or</p>
          <hr className="w-[45%] bg-gray-400 h-[2px]" />
        </div>

        <div className="flex items-center justify-between w-full gap-5 sm:flex-row flex-col">
          <button className="flex items-center justify-center py-2.5 px-4 gap-4 bg-[#4267b2] rounded-lg w-full text-[1rem] font-[500] text-white">
            <FaFacebook className="text-[1.8rem] text-white" />
            Signup with Facebook
          </button>
          <button className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 rounded-lg w-full text-[1rem] font-[500] text-gray-600">
            <FcGoogle className="text-[2rem]" />
            Signup with Google
          </button>
        </div>
      </form>
    </main>
  );
};

export default Signup;
