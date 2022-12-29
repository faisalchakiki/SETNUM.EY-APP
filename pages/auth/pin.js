import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";

const createPin = () => {
  const [pinResult, setPin] = React.useState("");
  const route = useRouter();
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
      .post("https://68xkph-8888.preview.csb.app/auth/set-pin", {
        userId: profile.id,
        pin: pinResult,
      })
      .then(function (response) {
        console.log(response);
        route.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
        alert("failed add pin");
      });
  };

  return (
    <div className="flex h-screen">
      <section className="w-[50%] bg-[#023047] px-[5%] flex flex-col gap-[2%] justify-center">
        <h1 className="italic font-bold text-[2vw] text-[#f1faee] mb-[-30px]">
          SETMON.EY
        </h1>
        <Image
          alt=""
          src={require("../../assets/images/phone-auth.png")}
          width="1000"
          height="1000"
          className="w-[80%] h-auto mb-[-20px]"
        />
        <h3 className="text-[#f1faee] text-[18px] font-semibold tracking-[3px]">
          App that Covering Banking Needs.
        </h3>
        <p className="text-[#f1faee] ">
          FazzPay is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in FazzPay everyday with worldwide users
          coverage.
        </p>
      </section>
      <section className="w-[50%] px-[5%] flex flex-col justify-center gap-5">
        <h3 className="text-[1.6vw] font-semibold">
          Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That
          You Created Yourself.
        </h3>
        <p className="text-[#8d99ae]">
          Create 6 digits pin to secure all your money and your data in
          SETMON.EY app. Keep it secret and don’t tell anyone about your
          SETMON.EY account password and the PIN.
        </p>
        <form onSubmit={addPin} className="my-[5%]">
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
          <button type="submit" className="btn btn-accent btn-block mt-[30px]">Confirm</button>
        </form>
      </section>
    </div>
  );
};

export default createPin;
