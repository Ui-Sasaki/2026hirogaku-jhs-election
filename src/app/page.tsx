import { NavHeader } from "./components/NavHeader"
import Image from "next/image";
import Candidates from "./components/Candidates";

export default function Home() {
  return (
    <div className="">
      <NavHeader />
      <div className="h-18"/>

      <div className="relative w-full h-[calc(100vh-72px)]">
        <Image src="/home/title.png" alt="Title" fill className="saturate-130 blur object-cover z-0"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/home/titleTxt.png" width={500} height={100} alt="Title Text" className=" -translate-y-15"/>
          <div
            className="
              absolute bottom-30 px-6 py-3
              bg-red-600 text-white rounded-full
              hover:bg-red-500 transition
              flex items-center
            "
          >
            <h1>詳しくはこちら</h1>
            <Image src="/home/arrow.png" alt="Arrow" width={20} height={20} className="ml-2" />
          </div>
          <h1 className="absolute text-[18px] text- bottom-15 left-10 text-white flex">2月7日選挙運動開始／2月16日投開票</h1>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-200 mt-10 mb-10">
          <Image src="/home/Titles/itiran.png" width={150} height={100} alt="Logo" className=""/>
          <div>

            <Candidates />

          </div>
        </div>
      </div>

    </div>
  );
}
