import Image from "next/image";
import LoginComponent from "@/app/(auth)/_components/LoginComponent";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="w-full relative h-screen flex items-center">
      <Image
        className="absolute object-cover bg-cover -mt-20 -top-10 block h-5/6"
        src={`/icons/login.svg`}
        alt={`image`}
        width={1920}
        height={580}
        property=""
      />

      <Link
        href={`/`}
        className="absolute top-5 left-8 flex text-xl gap-1 text-white"
      >
        <MdKeyboardArrowLeft size={30} className="bg-red-40 flex font-bold" />
        Back
      </Link>

      <Image
        className="absolute hidden xl:block 2xl:right-[300px] xl:right-[200px] xl:top-[55%] md:top-[70%] transform translate-y-[-50%]"
        src={`/icons/login-amico.svg`}
        alt={`img`}
        width={500}
        height={280}
        property=""
      />
      <div className="hidden xl:block absolute top-24 right-56 w-[30%] text-white text-2xl">
        <h1 className="text-[58px] font-medium">Welcome!</h1>
        <p className="pt-10 text-xl line-clamp-2">
          Log in to manage your events with ease <br /> and efficiency.
        </p>
      </div>

      {/*Login Component*/}
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
