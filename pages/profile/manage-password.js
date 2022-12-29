import Link from "next/link";
import Image from "next/image";
import Header from "../../assets/component/header";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from "../../assets/component/navbar";

const managePassword = () => {
  const route = useRouter();
  const token = useSelector((state) => state.auth.token);
  const changePassword = (event) => {
    event.preventDefault();
    const { value: currentPassword } = event.target.currentPassword;
    const { value: newPassword } = event.target.newPassword;
    const { value: repeatPassword } = event.target.repeatPassword;
    console.log(token);
    if(newPassword === repeatPassword){
      axios
      .post(
        "https://68xkph-8888.preview.csb.app/profile/change-password",
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
          confirmPassword: repeatPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        route.push("/profile");
      })
      .catch(function (error) {
        console.log(error);
        alert("failed change");
      });
    }else{
      console.log('not match')
    }
  };
  return (
    <>
      <Header />
      <main className="flex px-[5%] gap-x-[20px] bg-[#f1faee] py-[5%]">
      <Navbar profile='border-purple-500 px-1'/>

        <div className="w-[70%] rounded-[8px]">
          <form
            onSubmit={changePassword}
            className="bg-white rounded-[8px] px-[20px] py-[30px]"
          >
            <h3 className="font-bold text-[20px] ">Change Password</h3>
            <p className="w-[80%] my-2">
              You must enter your current password and then type your new
              password twice.
            </p>
            <div className="w-[70%] mx-auto mt-[50px]">
              <div className="flex relative mb-[40px]">
                <Image
                  alt=""
                  src={require("../../assets/logo/lock.svg")}
                  className="absolute"
                />
                <input
                  type="password"
                  name="currentPassword"
                  className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
                  placeholder="Current Password"
                  required
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute right-1 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </div>
              <div className="flex relative mb-[40px]">
                <Image
                  alt=""
                  src={require("../../assets/logo/lock.svg")}
                  className="absolute"
                />
                <input
                  type="password"
                  name="newPassword"
                  className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
                  placeholder="New Password"
                  required
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute right-1 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </div>
              <div className="flex relative mb-[40px]">
                <Image
                  alt=""
                  src={require("../../assets/logo/lock.svg")}
                  className="absolute"
                />
                <input
                  type="password"
                  name="repeatPassword"
                  className="border-b-[1.5px] outline-none w-full pl-[30px] pb-[5px] focus:border-[#023047]"
                  placeholder="Repeat Password"
                  required
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute right-1 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </div>
              <button className="btn btn-accent btn-block">
                Change Password
              </button>
            </div>
          </form>
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

export default managePassword;
