import React from "react";
import Image from "next/image";
import Link from "next/link";
// #023047
// #f1faee
const resetPassword = () => {
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
      <section className="w-[50%] px-[5%] flex flex-col justify-center gap-5">
        <h3 className="text-[1.6vw] font-semibold">
          Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
          In a Minutes.
        </h3>
        <p className="text-[#8d99ae]">
          To reset your password, you must type your e-mail and we will send a
          link to your email and you will be directed to the reset password
          screens.
        </p>
        <section className="flex flex-col gap-3">
          <div className="flex relative my-[10px]">
            <Image
              alt=""
              src={require("../../assets/logo/lock.svg")}
              className="absolute"
            />
            <input
              type="password"
              className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
              placeholder="new password"
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
              className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
              placeholder="confirm password"
              required
            />
          </div>
        </section>
        <Link href="/dashboard">
          <button className="btn btn-accent btn-block">Reset Password</button>
        </Link>
      </section>
    </div>
  );
};

export default resetPassword;
