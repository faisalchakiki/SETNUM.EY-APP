import Link from "next/link";
import Image from "next/image";
import Header from "../../assets/component/header";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect } from "react";
import Navbar from "../../assets/component/navbar";
import { useRouter } from "next/router";
import { logout as logoutAction } from "../redux/reducers/auth";

const profile = () => {
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

  const router = useRouter()
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
    return router.push("/auth/login");
  };
  return (
    <>
    <Header></Header>
      <main className="flex px-[5%] gap-x-[20px] bg-[#f1faee] py-[5%]">
        <Navbar profile='border-purple-500 px-1'/>
        <div className="w-[70%] rounded-[8px]">
          <section className="bg-white rounded-[8px] px-[20px] py-[30px] text-center">
          <div className="avatar w-full">
            <div className="w-[100px] mx-auto rounded-xl">
              <img
                src="https://placeimg.com/192/192/people"
                alt=""
                className="w-[50%] h-auto"
              />
            </div>
          </div>
          <button className="flex items-center gap-1 mx-auto">
            <Image src={require('../../assets/logo/edit.svg')} alt="" width={15}/>
            <p>Edit</p>
          </button>
          <h1 className="font-semibold text-[25px] mt-[20px]">{profile.firstName} {profile.lastName}</h1>
          <p className="mb-[30px]">{profile.phoneNumber}</p>
          <Link href='/profile/info'>
          <div className="w-[70%] bg-[#eaeaea] p-5 flex justify-between items-center rounded-[8px] mx-auto mb-[20px]">
            <p className="font-semibold text-[18px]">Personal Information</p>
            <Image src={require('../../assets/logo/arrow-left.svg')} alt=""/>
          </div>
          </Link>
          <Link href='/profile/manage-password'>
          <div className="w-[70%] bg-[#eaeaea] p-5 flex justify-between items-center rounded-[8px] mx-auto mb-[20px]">
            <p className="font-semibold text-[18px]">Change Password</p>
            <Image src={require('../../assets/logo/arrow-left.svg')} alt=""/>
          </div>
          </Link>
          <Link href='/profile/manage-pin'>
          <div className="w-[70%] bg-[#eaeaea] p-5 flex justify-between items-center rounded-[8px] mx-auto mb-[20px]">
            <p className="font-semibold text-[18px]">Change PIN</p>
            <Image src={require('../../assets/logo/arrow-left.svg')} alt=""/>
          </div>
          </Link>
          <label className="cursor-pointer" onClick={logout}>
          <div className="w-[70%] bg-[#eaeaea] p-5 flex justify-between items-center rounded-[8px] mx-auto mb-[20px]">
            <p className="font-semibold text-[18px]">Logout</p>
            <Image src={require('../../assets/logo/log-out.svg')} alt=""/>
          </div>
          </label>
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

export default profile;
