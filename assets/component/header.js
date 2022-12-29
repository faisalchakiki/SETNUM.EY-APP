import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";

const Header = () => {
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
  return (
    <header className="flex bg-purple-600 px-[5%] py-[10px] text-[#f1faee] items-center">
      <div className="flex-1">
        <Link href="/dashboard">
          <h1 className="text-[30px] text-[#f1faee] font-bold italic flex-1">
            SETMON.EY
          </h1>
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <div className="avatar">
          <div className="w-[60px] rounded-xl">
            <img
              src="https://placeimg.com/192/192/people"
              alt=""
              className="w-[50%] h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col mx-2 justify-center">
          <h3 className="font-semibold text-[18px]">
            {`${profile.firstName} `+`${profile.lastName}`}
          </h3>
          <p>{profile.phoneNumber}</p>
        </div>
        <div className="dropdown dropdown-end w-[20px]">
          <div tabIndex={0} className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>

            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 w-52 rounded-box"
          >
            <li>
              <div className="flex gap-3 items-center mb-[15px]">
                <div className="rounded-[10px] w-[50px] h-[35px]">
                  <Image
                    alt=""
                    src={require("../../assets/logo/arrow-down-grap.svg")}
                    className="w-[80%] h-auto"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-black">
                    Accept from Samuel Hitoshi
                  </p>
                  <span className="text-black">Rp.90.000</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-3 items-center mb-[15px]">
                <div className="rounded-[10px] w-[50px] h-[35px]">
                  <Image
                    alt=""
                    src={require("../../assets/logo/arrow-up-grap.svg")}
                    className="w-[80%] h-auto"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-black">
                    Transfer from Samuel Hitoshi
                  </p>
                  <span className="text-black">Rp.190.000</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-3 items-center mb-[15px]">
                <div className="rounded-[10px] w-[50px] h-[35px]">
                  <Image
                    alt=""
                    src={require("../../assets/logo/arrow-down-grap.svg")}
                    className="w-[80%] h-auto"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-black">
                    Accept from Samuel Hitoshi
                  </p>
                  <span className="text-black">Rp.90.000</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
