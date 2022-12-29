import Link from "next/link";
import Image from "next/image";
import Header from "../../assets/component/header";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../assets/component/navbar";

const dashboard = () => {
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = React.useState({});
  const [transaction, setTransaction] = React.useState({});
  // Get Profile users
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
  const wallet = Number(profile.balance).toLocaleString("id-ID");

  //Get data transaction user
  useEffect(() => {
    getTransactions().then((res) => {
      setTransaction(res);
    });
  }, []);
  const getTransactions = async () => {
    const { data } = await axios.get(
      "https://68xkph-8888.preview.csb.app/transactions",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  };

  return (
    <>
      <Header />
      <main className="flex px-[5%] gap-x-[20px] bg-[#f1faee] py-[5%]">
        <Navbar dash="border-purple-500 px-1" />
        <div className="w-[70%] rounded-[8px]">
          <div className="bg-purple-300 w-full px-[20px] py-[30px] rounded-[8px] flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-[25px]">Balance</p>
              <h1 className="text-[35px] font-semibold">{`Rp.${wallet}`}</h1>
              <span className="font-semibold text-[17px]">
                {profile.phoneNumber}
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <Link href="/transfer">
                <div className="btn btn-warning border-yellow-600 w-[100px] text-white">
                  <Image
                    src={require("../../assets/logo/arrow-up.svg")}
                  ></Image>
                  Transfer
                </div>
              </Link>
              <Link href="/top-up">
                <div className="btn btn-error border-red-600 w-[100px] text-white">
                  <Image src={require("../../assets/logo/plus.svg")}></Image>
                  Top Up
                </div>
              </Link>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <section className="bg-white w-[50%] rounded-[8px] px-[20px] py-[30px]">
              <div className="flex justify-between items-center">
                <div>
                  <Image
                    src={require("../../assets/logo/arrow-down-grap.svg")}
                    alt=""
                  />
                  <p>Income</p>
                  <span className="font-bold text-[18px]">Not Available</span>
                </div>
                <div>
                  <Image
                    src={require("../../assets/logo/arrow-up-grap.svg")}
                    alt=""
                  />
                  <p>Expense</p>
                  <span className="font-bold text-[18px]">Not Available</span>
                </div>
              </div>
              <Image
                alt=""
                src={require("../../assets/images/graphic.png")}
                className="w-[80%] h-auto mx-auto"
              />
            </section>
            <Link
              href="/dashboard/history"
              className="bg-white w-[50%] rounded-[8px] px-[20px] py-[30px]"
            >
              <section>
                <h3 className="font-bold text-[18px] mb-[20px]">
                  Transaction History
                </h3>
                {transaction?.results?.map((data) => (
                  <div
                    key={data.id}
                    className="flex gap-3 items-center mb-[15px]"
                  >
                    <div className="rounded-[10px] w-[50px] h-[50px] bg-[#eaeaea]">
                      <Image
                        alt=""
                        src={require("../../assets/logo/user-dash.svg")}
                        className="w-[100%] h-auto"
                      />
                    </div>
                    <div>
                      <p className="text-[17px] font-semibold">
                        {data.recipientname}
                      </p>
                      <span>{data.notes}</span>
                    </div>
                    <h5
                      className={
                        data.recipientId === profile.id
                          ? "text-green-500 text-[18px] flex-1 text-end font-semibold"
                          : "text-red-500 text-[18px] flex-1 text-end font-semibold"
                      }
                    >
                      {data.recipientId === profile.id ? "+" : "-"}
                      {`Rp.${data.amount}`}
                    </h5>
                  </div>
                ))}
              </section>
            </Link>
          </div>
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

export default dashboard;
