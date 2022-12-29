import Link from "next/link";
import Image from "next/image";
import Header from "../../assets/component/header";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from "../../assets/component/navbar";

const newPin = () => {
  const [pinResult, setPin] = React.useState("");
  const route = useRouter();
  const token = useSelector((state) => state.auth.token);

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

  const addPin = (event) => {
    event.preventDefault();
    // console.log(token);
    axios
      .post("https://68xkph-8888.preview.csb.app/profile/change-pin",{
       newPin : pinResult
      },{
         headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        alert('pin success changed')
        route.push("/profile");
      })
      .catch(function (error) {
        console.log(error);
        alert("failed add pin");
      });
  };
  return (
    <>
      <Header />
      <main className="flex px-[5%] gap-x-[20px] bg-[#f1faee] py-[5%]">
      <Navbar profile='border-purple-500 px-1'/>

        <div className="w-[70%] rounded-[8px]">
          <section className="bg-white rounded-[8px] px-[20px] py-[30px]">
            <h3 className="font-bold text-[20px] ">Change PIN</h3>
            <p className="w-[80%] my-2">
              Type your new 6 digits security PIN to use in SETMON.EY.
            </p>
            <form onSubmit={addPin} className="w-[70%] mx-auto mt-[50px]">
              <section className="my-[5%]">
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
              </section>
              <button className="btn btn-accent btn-block">Continue</button>
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

export default newPin;
