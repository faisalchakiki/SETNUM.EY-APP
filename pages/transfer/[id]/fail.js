import Link from "next/link";
import Image from "next/image";
import Header from "../../../assets/component/header";
import Navbar from "../../../assets/component/navbar";
// import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const failTransfer = () => {
  // const router = useRouter();
  const [profile, setProfile] = React.useState({});
  const [user, setUser] = React.useState({});
  const token = useSelector((state) => state.auth.token);
  const idReciever = useSelector((state) => state.transfer.idReciever);
  const amount = useSelector((state) => state.transfer.amount);
  const notes = useSelector((state) => state.transfer.notes);

  // Get profile reciever
  useEffect(() => {
    getReciever(token).then((res) => {
      setProfile(res);
    });
  }, [token]);
  const getReciever = async (token) => {
    const { data } = await axios.get(
      `https://68xkph-8888.preview.csb.app/transactions/recipient/${idReciever}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.results;
  };

  // Get User Login
  useEffect(() => {
    getData(token).then((res) => {
      setUser(res);
    });
  }, [token]);
  const getData = async (token) => {
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

  const balanceLeft = user.balance - amount;
  const today = new Date()
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (
    <>
      <Header/>
      <main className="flex px-[5%] gap-x-[20px] bg-[#f1faee] py-[5%]">
      <Navbar transfer='border-purple-500 px-1'/>

        <div className="w-[70%] rounded-[8px]">
          <section className="bg-white rounded-[8px] px-[20px] py-[30px]">
            <div className="text-center my-[30px] w-[90%] mx-auto">
              <Image src={require('../../../assets/logo/failed.svg')} alt="" className="mx-auto"/>
              <p className="font-semibold text-[18px] mt-2">Transfer Failed</p>
              <span>We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</span>
            </div>
            <section>
              <h3 className="font-bold text-[20px] ">Details</h3>
              <div className="flex gap-3 items-center mb-[15px] shadow-md border py-[10px] rounded-[8px] pl-[5px]">
                <div className="flex flex-col gap-1 pl-2">
                  <p className="text-[17px] font-semibold text-purple-500">
                    Amount
                  </p>
                  <span className="text-[20px] font-semibold">{`Rp.${amount}`}</span>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-[15px] shadow-md border py-[10px] rounded-[8px] pl-[5px]">
                <div className="flex flex-col gap-1 pl-2">
                  <p className="text-[17px] font-semibold text-purple-500">
                    Balance left
                  </p>
                  <span className="text-[20px] font-semibold">{`Rp.${balanceLeft}`}</span>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-[15px] shadow-md border py-[10px] rounded-[8px] pl-[5px]">
                <div className="flex flex-col gap-1 pl-2">
                  <p className="text-[17px] font-semibold text-purple-500">
                    Date & Time
                  </p>
                  <span className="text-[20px] font-semibold">
                    {date} - {time}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-[15px] shadow-md border py-[10px] rounded-[8px] pl-[5px]">
                <div className="flex flex-col gap-1 pl-2">
                  <p className="text-[17px] font-semibold text-purple-500">
                    Notes
                  </p>
                  <span className="text-[20px] font-semibold">
                    {notes}
                  </span>
                </div>
              </div>
            </section>
            <section className="mb-[30px]">
              <h3 className="font-bold text-[20px] ">Transfer To :</h3>
              <div className="flex gap-3 items-center mb-[15px] shadow-md border py-[10px] rounded-[8px] pl-[5px]">
                <div className="rounded-[10px] w-[50px] h-[50px] bg-[#eaeaea]">
                  <Image
                    alt=""
                    src={require("../../../assets/logo/user-dash.svg")}
                    className="w-[100%] h-auto"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[17px] font-semibold">{profile.firstName} {profile.lastName}</p>
                  <span className="text-[14px]">{profile.phoneumber}</span>
                </div>
              </div>
              <div className="text-end">
                <Link href="/transfer">
                  <button className="btn btn-primary">try again</button>
                </Link>
              </div>
            </section>
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

export default failTransfer;
