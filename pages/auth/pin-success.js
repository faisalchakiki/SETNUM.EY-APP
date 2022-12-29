import React from "react";
import Image from "next/image";
import Link from "next/link";
// #023047
// #f1faee
// border-[#023047]
const pinSuccess = () => {
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
      <div>
          <Image src={require('../../assets/logo/success.svg')} alt="" width={50} height={50}/>
      </div>
        <h3 className="text-[1.6vw] font-semibold">
          Your Pin Was Successfully Created
        </h3>
        <p className="text-[#8d99ae]">
          Your PIN was successfully created and you now access all the fetures in Setmoney
        </p>
        <Link href='/dashboard'><button className="btn btn-accent btn-block mt-[50px]">Go to Dashboard</button></Link>
      </section>
    </div>
  );
};

export default pinSuccess;
