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

      {/* White box with text */}
      <div className="flex justify-center pb-16">
        <div className="bg-white border border-gray-200 shadow-sm p-8 w-full max-w-4xl text-center">
          <p className="text-2xl text-black"> 
            現職中学生徒会役員による役職紹介を掲載しています。
          </p>
        </div>
      </div>

      {/* 4 Pairs in 2x2 Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* First Row: 2 pairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Pair 1 - 生徒会長 */}
          <div className="flex items-center gap-6">
            {/* Left: Image */}
            <div className="w-1/2">
              <div className="relative w-full aspect-[883/652]">
                <Image
                  src="/election-info/chair.webp"
                  alt="生徒会長"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Right: Green box with title and caret - not curved */}
            <div className="w-1/2 flex justify-center">
              <div className="w-40 h-52 bg-[#008000] flex flex-col items-center justify-center p-4"> {/* Removed rounded-lg */}
                {/* Title */}
                <div className="text-white text-xl font-bold mb-4 text-center">
                  生徒会長
                </div>
                
                {/* Caret inside white circle */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-12 w-12 text-[#008000]"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Pair 2 - 副会長 */}
          <div className="flex items-center gap-6">
            {/* Left: Image */}
            <div className="w-1/2">
              <div className="relative w-full aspect-[883/652]">
                <Image
                  src="/election-info/chair.webp"
                  alt="副会長"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Right: Green box with title and caret - not curved */}
            <div className="w-1/2 flex justify-center">
              <div className="w-40 h-52 bg-[#008000] flex flex-col items-center justify-center p-4"> {/* Removed rounded-lg */}
                {/* Title */}
                <div className="text-white text-xl font-bold mb-4 text-center">
                  副会長
                </div>
                
                {/* Caret inside white circle */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-12 w-12 text-[#008000]"  
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: 2 pairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pair 3 - 書記 */}
          <div className="flex items-center gap-6">
            {/* Left: Image */}
            <div className="w-1/2">
              <div className="relative w-full aspect-[883/652]">
                <Image
                  src="/election-info/secretary.webp"
                  alt="書記"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Right: Green box with title and caret - not curved */}
            <div className="w-1/2 flex justify-center">
              <div className="w-40 h-52 bg-[#008000] flex flex-col items-center justify-center p-4"> {/* Removed rounded-lg */}
                {/* Title */}
                <div className="text-white text-xl font-bold mb-4 text-center">
                  書記
                </div>
                
                {/* Caret inside white circle */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-12 w-12 text-[#008000]"  
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Pair 4 - 会計 */}
          <div className="flex items-center gap-6">
            {/* Left: Image */}
            <div className="w-1/2">
              <div className="relative w-full aspect-[883/652]">
                <Image
                  src="/election-info/treasurer.webp"
                  alt="会計"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Right: Green box with title and caret - not curved */}
            <div className="w-1/2 flex justify-center">
              <div className="w-40 h-52 bg-[#008000] flex flex-col items-center justify-center p-4"> {/* Removed rounded-lg */}
                {/* Title */}
                <div className="text-white text-xl font-bold mb-4 text-center">
                  会計
                </div>
                
                {/* Caret inside white circle */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-12 w-12 text-[#008000]" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}