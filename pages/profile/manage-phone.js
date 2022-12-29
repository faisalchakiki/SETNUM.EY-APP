import Link from "next/link";
import Image from "next/image";
import Header from "../../assets/component/header";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Navbar from "../../assets/component/navbar";

const managePhone = () => {
  const route = useRouter()
  const token = useSelector((state) => state.auth.token);
  const editPhone = (event) => {
    event.preventDefault();
    const { value: newPhoneNumber } = event.target.newPhoneNumber;
    console.log(token)
    axios.post("https://68xkph-8888.preview.csb.app/profile/phone-number",{
      phoneNumber : newPhoneNumber
    },{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(function (response) {
      // console.log(response);
      route.push('/profile')
    })
    .catch(function (error) {
      // console.log(error);
      alert('failed change')
    });
  }
  return (
    <>
      <Header />
      <main className="flex px-[5%] gap-x-[20px] bg-[#f1faee] py-[5%]">
      <Navbar profile='border-purple-500 px-1'/>

        <div className="w-[70%] rounded-[8px]">
          <form
            onSubmit={editPhone}
            className="bg-white rounded-[8px] px-[20px] py-[30px]"
          >
            <h3 className="font-bold text-[20px] ">Edit Phone Number</h3>
            <p className="w-[80%] my-2">
              Add at least one phone number for the transfer ID so you can start
              transfering your money to another user.
            </p>
            <div className="w-[70%] mx-auto mt-[50px]">
              <div className="flex relative mb-[40px]">
                <Image
                  alt=""
                  src={require("../../assets/logo/phone.svg")}
                  className="absolute"
                />
                <p className="absolute left-[5%] text-[17px] font-semibold">
                  +62
                </p>
                <input
                  type="text"
                  name="newPhoneNumber"
                  className="border-b-[1.5px] outline-none w-full pl-[65px] pb-[5px] focus:border-[#023047]"
                  placeholder="Enter your phone number"
                  required
                />
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

export default managePhone;
