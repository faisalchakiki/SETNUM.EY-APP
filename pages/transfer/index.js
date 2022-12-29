import Link from "next/link";
import Image from "next/image";
import Header from "../../assets/component/header";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../assets/component/navbar";

const transfer = () => {
  const token = useSelector((state) => state.auth.token);
  const [receiver, setReceiver] = React.useState({});
  const [search, setSearch] = React.useState('');
  // console.log(search)
  useEffect(() => {
    getTransactions(search).then((res) => {
      setReceiver(res);
    });
  }, [search]);
  const getTransactions = async (search) => {
    const { data } = await axios.get(
      `https://68xkph-8888.preview.csb.app/transactions/recipient?search=${search}&limit=10`,
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
      <Navbar transfer='border-purple-500 px-1'/>

        <div className="w-[70%] rounded-[8px]">
          <section className="bg-white overflow-y-auto h-[80vh] rounded-[8px] px-[20px] py-[30px]">
            <h3 className="font-bold text-[20px] ">Search Receiver</h3>
            <div className="form-control mt-[10px] my-[30px]">
              <div className="input-group">
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  name="searhReceiver"
                  placeholder="Search receiver here"
                  className="outline-none pl-[10px] bg-[#f1faee] w-full"
                />
              </div>
            </div>
            {receiver?.results?.map((data) => (
              <Link href={`/transfer/${data.id}`}>
                <div className="flex gap-3 items-center mb-[15px] shadow-lg py-[10px] rounded-[8px] pl-[5px] hover:shadow-md shadow-purple-200">
                  <div className="rounded-[10px] w-[50px] h-[50px] bg-[#eaeaea]">
                    <Image
                      alt=""
                      src={require("../../assets/logo/user-dash.svg")}
                      className="w-[100%] h-auto"
                    />
                  </div>
                  <div>
                    <p className="text-[17px] font-semibold">
                      {data.firstName} {data.lastName}
                    </p>
                    <span>{data.phoneNumber}</span>
                  </div>
                </div>
              </Link>
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

export default transfer;
