import Link from "next/link";
import Image from "next/image";
import Header from "../../../assets/component/header";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Navbar from "../../../assets/component/navbar";

const confirmTransaction = () => {
  // const dispatch = useDispatch()
  const router = useRouter();
  const [profile, setProfile] = React.useState({});
  const [user, setUser] = React.useState({});
  const [pinResult, setPin] = React.useState("");
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

 //create pin input
 const input1 = React.useRef(null);
 const input2 = React.useRef(null);
 const input3 = React.useRef(null);
 const input4 = React.useRef(null);
 const input5 = React.useRef(null);
 const input6 = React.useRef(null);
 const changeInput = (e) => {
   if (e.target.value.length > 1) {
     e.target.value = e.target.value.slice(0, 1);
   }
   const pinInput = {
     1: input1,
     2: input2,
     3: input3,
     4: input4,
     5: input5,
     6: input6,
   };
   const currentInput = Number(e.target.name);
   if (e.target.value.length) {
     pinInput[currentInput + 1]?.current?.focus();
   } else {
     pinInput[currentInput - 1]?.current?.focus();
     if (currentInput < 6) {
       for (let i = currentInput; i <= 6; i++) {
         pinInput[i].current.value = "";
       }
     }
   }
   let pinResult = "";
   for (let i = 1; i <= 6; i++) {
     pinResult += pinInput[i]?.current?.value;
   }
   setPin(pinResult);
 };

  // Transfer
  const transferConfirm = (event) => {
    event.preventDefault();
    if(pinResult === user.pin){
      axios.post("https://68xkph-8888.preview.csb.app/transactions/transfer",{
        amount : amount,
        pin : pinResult,
        notes : notes,
        recipientId : idReciever,
      },{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then(function (response) {
        router.push('/transfer/id/success')
      })
      .catch(function (error) {
        console.log(error);
        alert('Transfer Fail (error)')
      });
    }else{
    router.push('/transfer/id/fail')
    }
  }
  return (
    <>
      <Header/>
      <main className="flex px-[5%] gap-x-[20px] bg-[#f1faee] py-[5%]">
      <Navbar transfer='border-purple-500 px-1'/>

        <div className="w-[70%] rounded-[8px]">
          <section className="bg-white rounded-[8px] px-[20px] py-[30px]">
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
            </section>
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
              <div className="text-end">
                <label htmlFor="modal-pin" className="btn btn-primary">
                  Continue
                </label>
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
      <input type="checkbox" id="modal-pin" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Enter PIN to Transfer</h3>
          <p className="py-4">
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </p>
          <form onSubmit={transferConfirm} className="my-[5%]">
          <div className="flex gap-5 justify-center">
            <input
              className="num w-[50px] h-[50px] text-center border border-[#023047] border-b-[5px] text-[20px] outline-none rounded-[8px]"
              type="number"
              ref={input1}
              onChange={changeInput}
              name="1"
              autoFocus
            />
            <input
              className="num w-[50px] h-[50px] text-center border border-[#023047] border-b-[5px] text-[20px] outline-none rounded-[8px]"
              type="number"
              ref={input2}
              onChange={changeInput}
              name="2"
            />
            <input
              className="num w-[50px] h-[50px] text-center border border-[#023047] border-b-[5px] text-[20px] outline-none rounded-[8px]"
              type="number"
              ref={input3}
              onChange={changeInput}
              name="3"
            />
            <input
              className="num w-[50px] h-[50px] text-center border border-[#023047] border-b-[5px] text-[20px] outline-none rounded-[8px]"
              type="number"
              ref={input4}
              onChange={changeInput}
              name="4"
            />
            <input
              className="num w-[50px] h-[50px] text-center border border-[#023047] border-b-[5px] text-[20px] outline-none rounded-[8px]"
              type="number"
              ref={input5}
              onChange={changeInput}
              name="5"
            />
            <input
              className="num w-[50px] h-[50px] text-center border border-[#023047] border-b-[5px] text-[20px] outline-none rounded-[8px]"
              type="number"
              ref={input6}
              onChange={changeInput}
              name="6"
            />
          </div>
          <div className="modal-action">
            <label htmlFor="modal-pin" className="btn btn-error">
              cancel
            </label>
            <button type="submit" className="btn">
                Continue
            </button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default confirmTransaction;
