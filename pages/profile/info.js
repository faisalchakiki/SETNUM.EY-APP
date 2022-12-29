import Link from "next/link";
import Image from "next/image";
import Header from "../../assets/component/header";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../assets/component/navbar";

const profileInfo = () => {
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = React.useState({});
  useEffect(() => {
    getData().then((res) => {
      setProfile(res);
    });
  }, []);
  const getData = async () => {
    const { data } = await axios.get(
      "https://68xkph-8888.preview.csb.app/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.results;
  };
  console.log(profile)
  return (
    <>
      <Header/>
      <main className="flex px-[5%] gap-x-[20px] bg-[#f1faee] py-[5%]">
      <Navbar profile='border-purple-500 px-1'/>

        <div className="w-[70%] rounded-[8px]">
          <section className="bg-white rounded-[8px] px-[20px] py-[30px]">
            <h3 className="font-bold text-[20px] ">Personal Information</h3>
            <p className="w-[80%] my-2">
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, contact our support.
            </p>
            <div className="border my-[15px] shadow-lg py-[10px] rounded-[8px] pl-[5px]">
              <div className="px-2 py-1">
                <p className="text-[16px]">First Name</p>
                <span className="font-semibold text-[17px]">{profile.firstName}</span>
              </div>
            </div>
            <div className="border mb-[15px] shadow-lg py-[10px] rounded-[8px] pl-[5px]">
              <div className="px-2 py-1">
                <p className="text-[16px]">Last Name</p>
                <span className="font-semibold text-[17px]">{profile.lastName}</span>
              </div>
            </div>
            <div className="border mb-[15px] shadow-lg py-[10px] rounded-[8px] pl-[5px]">
              <div className="px-2 py-1">
                <p className="text-[16px]">Veriefied E-mail</p>
                <span className="font-semibold text-[17px]">{profile.email}</span>
              </div>
            </div>
            <div className="flex justify-between items-center border mb-[15px] shadow-lg py-[10px] rounded-[8px] px-[5px]">
              <div className="px-2 py-1">
                <p className="text-[16px]">Phone Number</p>
                <span className="font-semibold text-[17px]">{profile.phoneNumber}</span>
              </div>
              <Link href='/profile/manage-phone' className="text-green-500 mr-[20px] hover:font-bold">Manage</Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-purple-600 h-[10vh] py-1 px-[5%] flex items-center text-[#f1faee]">
        <p className="flex-1">20202 SETMON.EY. All right reserved.</p>
        <div className="flex gap-5 items-center">
          <Link href="whatsapp://send?text=Hello World&phone=+6285742385602">
            <p>Hubungi saya</p>
          </Link>
          <Link href="mailto:faisalchakiki012018@gmail.com?body= I like your web">
            <span>setmon_ey@mail.com</span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default profileInfo;
