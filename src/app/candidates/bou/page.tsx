import Image from "next/image";
import Link from "next/link";

export default function HodaProfile() {
  return (
    <>
      <div className="pt-6 bg-gray-100 min-h-screen flex justify-center px-4">
        <div className="bg-white w-full max-w-[1100px] rounded-lg shadow-md p-6 md:p-12">

          <Link
            href="/candidates"
            className="text-green-700 font-semibold flex items-center mb-6"
          >
            ← 候補者一覧へ戻る
          </Link>

          <h2 className="text-sm md:text-lg font-bold text-gray-700 mb-2">
            新中2会計立候補者
          </h2>

          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8">
            房　熙然
          </h1>

          <div className="flex flex-col md:flex-row gap-10">

            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                プロフィール
              </h3>
              <hr className="mb-6" />

              <p className="mb-2 text-sm md:text-base">
                <strong>所属コース：</strong> インターナショナルコース
              </p>
              <p className="mb-2 text-sm md:text-base">
                <strong>所属クラス：</strong> M1-6
              </p>

              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  所信表明
                </h3>
                <hr className="mb-6" />
                <p className="leading-relaxed text-sm md:text-base">
                  私は、1年6組の房熙然です。このたび生徒会会計に立候補しました。
                  <br />
                  私は小学校で委員長を経験したことがあり、仲間と協力しながら行動する大切さを学びました。
                  <br />
                  その経験を活かし中学一年生ならでは提案できることをみんなが納得できるように、全力で行動します。
                  <br />
                  誰もが安心できる透明な会計をつくります。
                  <br />
                  無駄を見直し、有意義のところにしっかり予算を届けます。また役員や先輩方ともしっかり協力し、意見を聞きながらより良い学校づくりに貢献します。
                  <br />
                  これまでの経験を最大限に生かし、最後まで責任を全うします。
                </p>
              </div>
            </div>

            <div className="flex justify-center md:block">
              <Image
                src="/candidates/bou.png"
                alt="房 熙然 ポスター"
                width={280}
                height={440}
                className="rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              政見放送
            </h3>
            <div className="border rounded-lg w-full max-w-[800px] mx-auto overflow-hidden">
              <video
                src="/video/bou.mp4"
                controls
                className="w-full"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}