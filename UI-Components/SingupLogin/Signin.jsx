/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

// icons
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

// react router dom
import { Link } from "react-router-dom";

const Signin = () => {
  const [active, setActive] = useState(false);

  return (
    <main className="w-full h-auto sm:h-[100vh] bg-blue-500 flex items-center justify-center sm:p-0 p-6">
      <form className="w-full sm:w-[40%] bg-white rounded-lg sm:py-6 sm:px-8 p-4 flex items-center justify-center flex-col gap-5">
        <h3 className="text-[1.8rem] font-[700] text-gray-900">Sign in</h3>
        <input
          type="email"
          placeholder="Email"
          className="py-3 px-4 border focus:outline-blue-500 border-gray-300 mt-5 rounded-lg w-full"
        />
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
        <a href="#" className="text-[1rem] text-blue-500 font-[500]">
          Forget password
        </a>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 text-white border-none outline-none rounded-lg mt-3"
        >
          Login
        </button>
        <div className="flex items-center justify-center w-full gap-1">
          <span className="text-[1rem] text-gray-600 font-[500]">
            Don't have an account?{" "}
          </span>
          <span>
            <Link
              to={"/singup"}
              className="text-[1rem] text-blue-500 font-[500]"
            >
              Signup
            </Link>
          </span>
        </div>

        <div className="w-full my-1 flex items-center gap-3">
          <hr className="w-[45%] bg-gray-500 h-[2px]" />
          <p>or</p>
          <hr className="w-[45%] bg-gray-500 h-[2px]" />
        </div>

        <button className="flex items-center justify-center py-2.5 px-4 gap-4 bg-[#4267b2] rounded-lg w-full text-[1rem] font-[500] text-white">
          <FaFacebook className="text-[1.8rem] text-white" />
          Login with Facebook
        </button>
        <button className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 rounded-lg w-full text-[1rem] font-[500] text-gray-600">
          <FcGoogle className="text-[2rem]" />
          Login with Google
        </button>
      </form>
    </main>
  );
};

export default Signin;
