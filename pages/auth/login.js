import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { loginAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    let alert = document.querySelector(".alert");
    if (window.addEventListener) {
      window.addEventListener("click", () => alert.classList.add("hidden"));
    }
  }, []);


  const loginRun = (event) => {
    event.preventDefault();
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;
    const callback = (err) => {
      if (err) {
        const alert = document.querySelector(".alert");
        alert.classList.remove("hidden");
      } else {
        router.push("/dashboard");
      }
    };
    dispatch(loginAction({ email, password, callback }));
  };

  return (
    <div className="flex h-screen">
      <section className="w-[50%] bg-[#023047] px-[5%] flex flex-col gap-[2%] justify-center">
        <h1 className="italic font-bold text-[2vw] text-[#f1faee] mb-[-30px]">
          SETMON.EY
        </h1>
        <Image
          alt=""
          src={require("../../assets/images/phone-auth.png")}
          width="1000"
          height="1000"
          className="w-[80%] h-auto mb-[-20px]"
        />
        <h3 className="text-[#f1faee] text-[18px] font-semibold tracking-[3px]">
          App that Covering Banking Needs.
        </h3>
        <p className="text-[#f1faee] ">
          FazzPay is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in FazzPay everyday with worldwide users
          coverage.
        </p>
      </section>
      <form
        onSubmit={loginRun}
        className="w-[50%] px-[5%] flex flex-col justify-center gap-5 overflow-y-auto"
      >
        <div className="alert alert-error shadow-lg hidden">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white text-[17px]">
              Email or Password Wrong
            </span>
          </div>
        </div>
        <h3 className="text-[1.6vw] font-semibold">
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h3>
        <p className="text-[#8d99ae]">
          Transfering money is eassier than ever, you can access SETMON.EY
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
        <section className="flex flex-col gap-3">
          <div className="flex relative my-[10px]">
            <Image
              alt=""
              src={require("../../assets/logo/mail.svg")}
              className="absolute"
            />
            <input
              type="email"
              name="email"
              className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
              placeholder="_email"
              required
            />
          </div>
          <div className="flex relative my-[10px]">
            <Image
              alt=""
              src={require("../../assets/logo/lock.svg")}
              className="absolute"
            />
            <input
              type="password"
              name="password"
              className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
              placeholder="_password"
              required
            />
          </div>
          <Link href="/auth/forgot-password" className="ml-auto w-max">
            <p className="text-[17px] text-[#8d99ae]">Forgot Password?</p>
          </Link>
        </section>
        <button className="btn btn-accent btn-block">Sign In</button>
        <div className="text-center">
          <p>
            Don't have an account? Let’s{" "}
            <Link href="/auth/register" className="text-blue-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default login;
