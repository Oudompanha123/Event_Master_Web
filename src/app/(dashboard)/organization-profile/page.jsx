import NewFormComponent from "./_components/NewFormComponent";

const Page = () => {
  return (
    <div className="rounded-2xl w-full lg:h-[800px] flex flex-col bg-white shadow-md relative">
      <div className="bg-purple h-0 lg:h-[158px] rounded-t-2xl"></div>
      <NewFormComponent/>
      {/* <div className={`h-full ${styles.hideOnPhone}`}>
        <Image src="/images/Group 1000005619.png" alt="My Image" width={500} height={400} className={`absolute bottom-0 rounded-bl-2xl lg:mt-[-100px] lg:w-[250px]`}/>
      </div> */}
    </div>
  );
}; 

export default Page;
