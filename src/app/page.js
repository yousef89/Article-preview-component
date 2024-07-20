import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#EEF2F7] min-h-screen flex justify-center items-center">
      <div className="bg-[#FFFFFF] flex rounded-[8px] overflow-hidden shadow-lg">
        <Image
          src={"/drawers.jpg"}
          width={280}
          height={280}
          className="rounded-l-[8px]"
          alt="drawers"
        />
        <div className="flex flex-col px-8 pt-5 w-[400px] gap-3 mt-4">
          <h1 className="text-[20px] font-semibold text-[#6c6c6c]">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-[12px] text-[#969696]">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="flex items-center mt-3">
            <Image
              src={"/avatar-michelle.jpg"}
              width={40}
              height={40}
              className="rounded-full"
              alt="avatar"
            />
            <div className="flex flex-col text-[14px] ml-4">
              <p className="font-semibold text-[#606060]">Michelle Appleton</p>
              <p className="text-[#aeaeae]">28 Jun 2020</p>
            </div>
            <div className="ml-[120px] flex items-center justify-center bg-gray-200 w-[32px] h-[32px] rounded-full hover:bg-[#c7c6c6] duration-500 active:bg-[#a9a9a9]">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
                <path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
