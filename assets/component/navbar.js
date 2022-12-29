import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../../pages/redux/reducers/auth";
import { useRouter } from "next/router";
// border-purple-300 px-1
const Navbar = (props) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
    return router.push("/auth/login");
  };
  return (
    <nav className="bg-white w-[30%] rounded-[8px] px-[2%] py-[20px] flex flex-col">
    <Link href="/dashboard">
      <div className={`flex items-center gap-3 py-[10px] mb-[20px] border-l-[5px] ${props.dash}`}>
        <Image src={require("../../assets/logo/grid.svg")}></Image>
        <p className="font-semibold text-[20px]">Dashboard</p>
      </div>
    </Link>
    <Link href="/transfer">
      <div className={`flex items-center gap-3 py-[10px] mb-[20px] border-l-[5px] ${props.transfer}`}>
        <Image src={require("../../assets/logo/arrow-up.svg")}></Image>
        <p className="font-semibold text-[20px]">Transfer</p>
      </div>
    </Link>
    <Link href="/top-up">
      <div className={`flex items-center gap-3 py-[10px] mb-[20px] border-l-[5px] ${props.topup}`}>
        <Image src={require("../../assets/logo/plus.svg")}></Image>
        <p className="font-semibold text-[20px]">Top Up</p>
      </div>
    </Link>
    <Link href="/profile">
      <div className={`flex items-center gap-3 py-[10px] mb-[20px] border-l-[5px] ${props.profile}`}>
        <Image src={require("../../assets/logo/user-dash.svg")}></Image>
        <p className="font-semibold text-[20px]">Profile</p>
      </div>
    </Link>
    <label className='cursor-pointer' onClick={logout}>
      <div className={`flex items-center gap-3 py-[10px] mb-[20px] border-l-[5px] ${props.logout}`}>
        <Image src={require("../../assets/logo/log-out.svg")}></Image>
        <p className="font-semibold text-[20px]">Logout</p>
      </div>
    </label>
  </nav>
  )
}

export default Navbar
