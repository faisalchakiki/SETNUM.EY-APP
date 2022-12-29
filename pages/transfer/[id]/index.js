import Link from "next/link";
import Image from "next/image";
import Header from "../../../assets/component/header";
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { continueAction } from "../../redux/reducers/transfer";
import Navbar from "../../../assets/component/navbar";
const amountTransfer = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = React.useState({});
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    getTransactions(token, id).then((res) => {
      setProfile(res);
    });
  }, [token, id]);
  const getTransactions = async (token, id) => {
    const { data } = await axios.get(
      `https://68xkph-8888.preview.csb.app/transactions/recipient/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.results;
  };


  const transferFilled = (event) => {
    event.preventDefault();
    const { value: amount } = event.target.amountTransfer;
    const { value: notes } = event.target.notes;
    const idReciever = id
    dispatch(continueAction({amount , notes, idReciever}))
    router.push('/transfer/id/confirm')
  }

  return (
    <>
      <Header />
      <main className="flex px-[5%] gap-x-[20px] bg-[#f1faee] py-[5%]">
      <Navbar transfer='border-purple-500 px-1'/>

        <div className="w-[70%] rounded-[8px]">
          <section className="bg-white rounded-[8px] px-[20px] py-[30px]">
            <form onSubmit={transferFilled} className="mb-[30px]">
              <h3 className="font-bold text-[20px] ">Transfer Money</h3>
              <div className="flex gap-3 items-center mb-[15px] shadow-md border py-[10px] rounded-[8px] pl-[5px]">
                <div className="rounded-[10px] w-[50px] h-[50px] bg-[#eaeaea]">
                  <Image
                    alt=""
                    src={require("../../../assets/logo/user-dash.svg")}
                    className="w-[100%] h-auto"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[17px] font-semibold">
                    {profile.firstName} {profile.lastName}
                  </p>
                  <span className="text-[14px]">{profile.phoneNumber}</span>
                </div>
              </div>
              <p className="font-semibold mt-[30px]">
                Type the amount you want to transfer,
                <br />
                and then press continue to the next steps.
              </p>
              <div className="py-[30px] flex flex-col gap-5 ajutify-center items-center px-[5%]">
                <input
                  className="text-[30px] text-center font-bold outline-none border-b-[2px]"
                  placeholder="0.00"
                  type="number"
                  name="amountTransfer"
                  required
                />
                <p className="font-bold text-[20px]">Rp.120.000 Available</p>
                <div className="flex relative my-[10px] w-[80%]">
                  <Image
                    alt=""
                    src={require("../../../assets/logo/mail.svg")}
                    className="absolute"
                  />
                  <input
                    type="text"
                    name="notes"
                    className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
                    placeholder="add some notes"
                  />
                </div>
                <div className="text-end w-full">
                  <button className="btn btn-primary">Continue</button>
                </div>
              </div>
            </form>
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

export default amountTransfer;
