import Image from "next/image";
import Link from "next/link";
import phone from "../assets/images/phone.png";

export default function Home() {
  return (
    <div className="text-[023047]">
      <header className="pt-1 px-[5%] bg-[#023047] flex flex-col">
        <nav className="h-[50px] flex items-center">
          <p className="text-[30px] text-white font-bold italic flex-1">
            SETMON.EY
          </p>
          <Link href="/auth/login">
            <button className="btn btn-sm btn-outline text-white w-[100px] mx-[5px]">
              Login
            </button>
          </Link>
          <Link href="/auth/register">
            <button className="btn btn-sm btn-outline bg-white text-[#023047] w-[100px] mx-[5px]">
              Sign Up
            </button>
          </Link>
        </nav>
        <div className="flex flex-1 items-center pt-[30px]">
          <section className="w-[50%] flex flex-col gap-y-[30px]">
            <h3 className="font-bold text-[4vw] lg:text-[50px] text-white">
              Awesome App <br />
              For Saving Time
            </h3>
            <p className="text-white text-[18px]">
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </p>
            <Link href='/auth/register' className="w-max">
            <button className="btn btn-md btn-outline bg-white w-[120px] text-[#023047] mx-[5px]">
              Try it Free
            </button>
            </Link>
          </section>
          <section className="w-[50%] flex justify-center items-end">
            <Image
              src={phone}
              className="w-[80%] h-auto"
              alt="example-web"
              loading="lazy"
            />
          </section>
        </div>
      </header>
      <section className="px-[5%] bg-[#f1faee] py-[50px] flex flex-col justify-center items-center gap-y-[30px]">
        <h3 className="text-[40px] font-bold">
          <span className="text-[#219ebc]">WHY</span> Choose SETMONEY?
        </h3>
        <p className="text-[18px] text-center">
          We have some great features from the application and it’s totally free{" "}
          <br /> to use by all users around the world.
        </p>
        <div className="grid grid-cols-3 gap-x-[3%] w-full px-1">
          <div className="bg-white rounded-[20px] px-3 py-[50px] flex flex-col items-center text-center">
            <Image
              src={require("../assets/images/landing-phone.png")}
              alt=""
              widht={80}
              height={80}
            />
            <p className="font-semibold text-[20px] mt-[10px] mb-[20px]">
              24/7 Support
            </p>
            <span>
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </span>
          </div>
          <div className="bg-white rounded-[20px] px-3 py-[50px] flex flex-col items-center text-center">
            <Image
              src={require("../assets/images/landing-lock.png")}
              alt=""
              widht={80}
              height={80}
            />
            <p className="font-semibold text-[20px] mt-[10px] mb-[20px]">
              Data Privacy
            </p>
            <span>
              We make sure your data is safe in our database and we will encrypt
              any data you submitted to us.
            </span>
          </div>
          <div className="bg-white rounded-[20px] px-3 py-[50px] flex flex-col items-center text-center">
            <Image
              src={require("../assets/images/landing-install.png")}
              alt=""
              widht={80}
              height={80}
            />
            <p className="font-semibold text-[20px] mt-[10px] mb-[20px]">
              Easy Download
            </p>
            <span>
              Zwallet is 100% totally free to use it’s now available on Google
              Play Store and App Store.
            </span>
          </div>
        </div>
      </section>
      <section className="bg-[#023047] py-[50px] px-[5%] flex items-center justify-center gap-x-[5%]">
        <div>
          <Image src={require("../assets/logo/microsoft.svg")} alt="" />
        </div>
        <div>
          <Image src={require("../assets/logo/hm.svg")} alt="" />
        </div>
        <div>
          <Image alt="" src={require("../assets/logo/dell.svg")} />
        </div>
        <div>
          <Image alt="" src={require("../assets/logo/airbn.svg")} />
        </div>
        <div>
          <Image alt="" src={require("../assets/logo/canon.svg")} />
        </div>
        <div>
          <Image alt="" src={require("../assets/logo/dropbox.svg")} />
        </div>
      </section>
      <section className="bg-[#f1faee] flex py-[50px] px-[5%] items-center">
        <div className="flex items-center justify-center w-[50%]">
          <Image src={require("../assets/images/phone2.png")} alt=""></Image>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[35px] font-bold text-[#023047] ">
            All the <span className="text-[#219ebc]">Great</span>
            <br />
            SETMON.EY Features
          </h2>
          <div className="bg-white rounded-[8px] p-5">
            <p className="text-[18px] font-semibold mb-[10px]">
              <span className="text-[#219ebc]">1.</span> Small Fee
            </p>
            <p>
              We only chage 5% of every success Transaction done in SETMON.EY
              App
            </p>
          </div>
          <div className="bg-white rounded-[8px] p-5">
            <p className="text-[18px] font-semibold mb-[10px]">
              <span className="text-[#219ebc]">2.</span> Data Secured
            </p>
            <p>
              All your data in secured property in our system and it's encrypted
            </p>
          </div>
          <div className="bg-white rounded-[8px] p-5">
            <p className="text-[18px] font-semibold mb-[10px]">
              <span className="text-[#219ebc]">3.</span> User Friendly
            </p>
            <p>
              SETNUM.EY come up with modern and sleek design and not complicated
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#023047] py-[50px] px-[5%] text-[#f1faee] flex flex-col gap-5 items-center justify-center ">
        <h1 className="text-[35px] font-bold">
          What Users a <span className="text-[#219ebc]">Saying.</span>
        </h1>
        <p className="text-center">
          We have some great features from the application and it’s totally{" "}
          <br />
          free to use by all users around the world.
        </p>
        <div className="grid grid-cols-3 gap-5 text-black pt-[30px]">
          <div className="bg-white px-5 py-[50px] flex flex-col items-center justify-center gap-3 rounded-[8px]">
            <div className="avatar">
              <div className="w-[60px] rounded-xl">
                <img
                  src="https://placeimg.com/192/192/avatar"
                  alt=""
                  className="w-[50%] h-auto"
                />
              </div>
            </div>
            <h3 className="text-[25px] font-semibold">Sherlina Chaw</h3>
            <p className="text-center">
              “I use this app since 2 years ago and this is the best app that
              I’ve ever use in my entire life”
            </p>
          </div>
          <div className="bg-white px-5 py-[50px] flex flex-col items-center justify-center gap-3 rounded-[8px]">
            <div className="avatar">
              <div className="w-[60px] rounded-xl">
                <img
                  src="https://placeimg.com/192/192/peoples"
                  alt=""
                  className="w-[50%] h-auto"
                />
              </div>
            </div>
            <h3 className="text-[25px] font-semibold">Jessica Mera</h3>
            <p className="text-center">
            “I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”
            </p>
          </div>
          <div className="bg-white px-5 py-[50px] flex flex-col items-center justify-center gap-3 rounded-[8px]">
            <div className="avatar">
              <div className="w-[60px] rounded-xl">
                <img
                  src="https://placeimg.com/192/192/people"
                  alt=""
                  className="w-[50%] h-auto"
                />
              </div>
            </div>
            <h3 className="text-[25px] font-semibold">Robert Chandler</h3>
            <p className="text-center">
            “Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-[#023047] py-[50px] px-[5%] text-[#f1faee]">
        <h1 className="text-[30px] text-white font-bold italic flex-1 mb-[15px]">
          SETMON.EY
        </h1>
        <p>Simplify financial needs and saving<br/> much time in banking needs with<br/> one single app.</p>
        <hr className="my-[20px]"/>
        <div className="flex items-center">
        <p className="flex-1">20202 SETMON.EY. All right reserved.</p>
        <div className="flex gap-5 items-center">
          <Link href="whatsapp://send?text=Hello World&phone=+6285742385602">
            <p>Hubungi saya</p>
          </Link>
          <Link href="mailto:faisalchakiki012018@gmail.com?body= I like your web">
            <span>setmon_ey@mail.com</span>
          </Link>
        </div>
      </div>
      </footer>
    </div>
  );
}
