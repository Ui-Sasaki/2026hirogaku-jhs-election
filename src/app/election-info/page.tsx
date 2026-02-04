// src/app/election-info/page.tsx
import { NavHeader } from "../components/NavHeader";
import Image from "next/image";

export default function ElectionInfoPage() {
  return (
    <>
      <NavHeader />
      
      {/* Header image section - 1/4 left on screen */}
      <div className="pt-28">
        <div className="relative w-1/4 left-0 ml-40">
          <Image 
            src="/election-info/header.png" 
            alt="Header"
            width={300}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      <main className="pt-4 pb-16 px-4 max-w-6xl mx-auto">
        {/* Image 1 */}
        <Image 
          src="/election-info/method1.webp" 
          alt="各クラスの投票場所"
          width={1200}
          height={900}
          className="w-full mb-12"
          priority
        />

        {/* Image 2 */}
        <Image 
          src="/election-info/method2.webp" 
          alt="生徒会選挙の仕組み"
          width={1200}
          height={900}
          className="w-full mb-12"
        />

        {/* Image 3 */}
        <Image 
          src="/election-info/method3.webp" 
          alt="生徒会選挙当日の動き"
          width={1200}
          height={900}
          className="w-full mb-12"
        />
      </main>

      {/* Header 2 image - same x-axis alignment as header.png */}
      <div className="pb-8">
        <div className="relative w-1/4 left-0 ml-40">
          <Image 
            src="/election-info/header2.png" 
            alt="Header 2"
            width={240}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {/* White box with text - centered below header2.png */}
      <div className="flex justify-center pb-16">
        <div className="bg-white border border-gray-200 shadow-sm p-8 w-full max-w-4xl text-center"> {/* Changed p-6 to p-8, max-w-3xl to max-w-4xl */}
          <p className="text-2xl text-black"> {/* Changed text-lg to text-xl */}
            現職中学生徒会役員による役職紹介を掲載しています。
          </p>
        </div>
      </div>
    </>
  );
}