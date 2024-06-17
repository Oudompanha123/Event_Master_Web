import { LiaUserEditSolid } from "react-icons/lia";
import Image from "next/image";
import FormOrg from "./FormOrg";

const NewFormComponent = () => {

  // const [imageSrc, setImageSrc] = useState("/images/Avatar.png");
  // const [organizationName, setOrganizationName] = useState("");
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImageSrc(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };



  return (
    <form action="">
      <div className="rounded-2xl w-full h-[800px] flex flex-col shadow-md relative">
        <div className="bg-purple-text h-[20%] rounded-t-2xl flex items-center justify-center">
          <Image
            src="/images/Avatar.png"
            alt="logo"
            width={130}
            height={130}
            className="mt-48 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64"
          />
          <div className=" absolute transform translate-x-10 translate-y-36 sm:translate-x-10 sm:translate-y-36 md:translate-x-16 md:translate-y-36 lg:translate-x-20 lg:translate-y-40 xl:translate-x-20 xl:translate-y-44 2xl:translate-x-20 2xl:translate-y-48">
            <label
              htmlFor="image-upload"
              className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center bg-gray-300 duration-300 hover:bg-gray-200 cursor-pointer"
            >
              <LiaUserEditSolid className="w-6 h-6 text-gray-800" />
            </label>
          </div>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            // onChange={handleImageChange}
          />
        </div>
        <div className="absolute text-center w-full top-64 sm:top-64 md:top-64 lg:top-72 xl:top-80 2xl:top-[330px]">
          <p className="text-primary-text font-bold text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
            EventMaster
          </p>
        </div>


        <FormOrg />


        {/* background */}
        <div className="absolute bottom-0 z-0">
          <Image
            src="/images/myOrg.png"
            alt="background"
            width={150}
            height={150}
            className="sm:h-72 md:h-80 lg:h-96 xl:h-96 2xl:h-96"
          />
        </div>
      </div>
    </form>
  );
}

export default NewFormComponent;