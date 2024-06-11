import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SignupComponent from "@/app/(auth)/_components/SignupComponent";

const SignUpPage = () => {

  return (
    <div className="w-full relative h-screen  md:px-8 flex justify-center">
      <Image
        className="absolute w-full object-cover -mt-[120px] top-10 bg-cover h-5/6 block "
        src={`/icons/signup.svg`}
        alt={`image`}
        width={1920}
        height={300}
        property=""
      />

      <Link
        href={`/login`}
        className="absolute top-5 left-8 flex text-white text-xl gap-1"
      >
        <MdKeyboardArrowLeft size={30} className="bg-red-40 flex" />
        Back
      </Link>

      <Image
        className="hidden xl:block absolute left-[200px] top-[62%] transform translate-y-[-50%]"
        src={`/icons/signup-amico.svg`}
        alt={`img`}
        width={520}
        height={300}
        property=""
      />
      <div className="hidden xl:block absolute top-32 left-32 text-white text-2xl">
        <h1 className="2xl:text-[58px] font-medium xl:text-[50px]">
          Register New Account
        </h1>
        <p className="pt-10 text-xl line-clamp-2 ">
          Create a new account to access our application.
        </p>
      </div>

      {/*Sign Up Component*/}
      <SignupComponent />
    </div>
  );
};

export default SignUpPage;
