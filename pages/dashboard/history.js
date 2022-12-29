import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../assets/component/header";
import axios from "axios";
import Navbar from "../../assets/component/navbar";
import { useSelector } from "react-redux";
import profile from "../profile";

const history = () => {
  const [transaction, setTransaction] = React.useState({});
  const token = useSelector((state) => state.auth.token);

    //Get data transaction user
    useEffect(() => {
      getTransactions().then((res) => {
        setTransaction(res);
      });
    }, []);
    const getTransactions = async () => {
      const { data } = await axios.get(
        "https://68xkph-8888.preview.csb.app/transactions?limit=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    };
  //GEt user Login
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
    <>
      <Header />
      <main className="flex px-[5%] gap-x-[20px] bg-[#f1faee] py-[5%]">
        <Navbar dash="border-purple-500 px-1"/>
        <div className="w-[70%] rounded-[8px]">
          <section className="bg-white rounded-[8px] px-[20px] py-[30px] h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-[30px]">
              <h3 className="font-bold text-[20px] ">Transaction History</h3>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-outline btn-sm">
                  Select Filter
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Accept</a>
                  </li>
                  <li>
                    <a>Top Up</a>
                  </li>
                  <li>
                    <a>Transaction</a>
                  </li>
                </ul>
              </div>
            </div>
            {transaction?.results?.map((data)=>(
              <div className="flex gap-3 items-center mb-[15px]">
              <div className="rounded-[10px] w-[50px] h-[50px] bg-[#eaeaea]">
                <Image
                  alt=""
                  src={require("../../assets/logo/user-dash.svg")}
                  className="w-[100%] h-auto"
                />
              </div>
              <div>
                <p className="text-[17px] font-semibold">{data.recipientname}</p>
                <span>{data.notes}</span>
              </div>
              <h5 className={data.recipientId === profile.id ? "text-green-500 text-[18px] flex-1 text-end font-semibold" :
              "text-red-500 text-[18px] flex-1 text-end font-semibold"}>
                {data.recipientId === profile.id ? "+" : "-"}
                {`Rp.${data.amount}`}
              </h5>
            </div>
            ))}
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

export default history;
