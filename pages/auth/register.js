import React from "react";
import Image from "next/image";
import Link from "next/link";
import { registerAction, loginAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const register = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const registerSubmit = (event) => {
    event.preventDefault();
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;
    const { value: firstName } = event.target.firstName;
    const { value: lastName } = event.target.lastName;
    const { value: phoneNumber } = event.target.phoneNumber;
    const callback = (err) =>{
      if(err){
        console.log('error in cbLogin')
        console.log(err)
      }else{
        console.log('success login')
        return router.push('/auth/pin')
      }
    }
    const callbackRegister = (err) => {
      if (err) {
        console.log(`register fail because : ${err}`)
      } else {
        console.log('register success')
        return dispatch(loginAction({ email, password, callback }));
      }
    };
    dispatch(registerAction({ email, password,firstName,lastName,phoneNumber, callbackRegister }));
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
      <form onSubmit={registerSubmit} className="w-[50%] px-[5%] flex flex-col justify-center gap-5">
        <h3 className="text-[1.6vw] font-semibold">
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h3>
        <p className="text-[#8d99ae]">
          Transfering money is eassier than ever, you can access FazzPay
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex relative my-[10px]">
            <Image
              alt=""
              src={require("../../assets/logo/user.svg")}
              className="absolute"
            />
            <input
              type="text"
              name="firstName"
              className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
              placeholder="first name"
              required
            />
          </div>
          <div className="flex relative my-[10px]">
            <Image
              alt=""
              src={require("../../assets/logo/user.svg")}
              className="absolute"
            />
            <input
              type="text"
              name="lastName"
              className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
              placeholder="last name"
              required
            />
          </div>
          <div className="flex relative my-[10px]">
            <Image
              alt=""
              src={require("../../assets/logo/phone.svg")}
              className="absolute"
            />
            <input
              type="text"
              name="phoneNumber"
              className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
              placeholder="phone number"
              required
            />
          </div>
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
              placeholder="email"
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
              placeholder="password"
              required
            />
          </div>
        </div>
        <button className="btn btn-accent btn-block">Sign Up</button>

        <div className="text-center">
          <p>
            Already have an account? Let’s{" "}
            <Link href="/auth/login" className="text-blue-500 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default register;
