import Image from "next/image";
import Link from "next/link";

export default function ElectionInfoPage() {
  return (
    <>
      <div className="pt-8 sm:pt-14 md:pt-15">
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

      <main className="pt-6 pb-6 px-4 max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <Image
            src="/election-info/method1.jpeg"
            alt="各クラスの投票場所"
            width={700}
            height={520}
            className="rounded-md"
            priority
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-12">
          <Image
            src="/election-info/method2.jpeg"
            alt="生徒会選挙の仕組み"
            width={600}
            height={450}
            className="rounded-md"
          />
          <Image
            src="/election-info/method3.jpeg"
            alt="生徒会選挙当日の動き"
            width={600}
            height={450}
            className="rounded-md"
          />
        </div>
      </main>

      <div className="pb-3">
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

      <div className="flex justify-center mt-2 pb-10">
        <div className="bg-white border border-gray-200 shadow-sm p-4 w-full max-w-4xl text-center">
          <p className="text-2xl text-black">
            現職中学生徒会役員による役職紹介を掲載しています。
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <RoleCard title="生徒会長" image="/election-info/chair.webp" href="/roles/chair" />
          <RoleCard title="副会長" image="/election-info/chair.webp" href="/roles/vice" />
          <RoleCard title="書記" image="/election-info/secretary.webp" href="/roles/secretary" />
          <RoleCard title="会計" image="/election-info/treasurer.webp" href="/roles/treasurer" />
        </div>
      </div>
    </>
  );
}

function RoleCard({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-2">
      <div className="w-full max-w-[220px] md:w-[42%]">
        <div className="relative w-full aspect-[1/1] bg-white rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="w-full md:w-[38%] flex justify-center">
        <div className="w-40 h-56 bg-[#008000] flex flex-col items-center justify-center gap-6 p-4">
          <div className="text-white text-xl font-bold text-center">
            {title}
          </div>

          <Link href={href}>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition">
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
          </Link>
        </div>
      </div>
    </div>
  );
}