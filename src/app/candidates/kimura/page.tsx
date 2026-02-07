import Image from "next/image";
import Link from "next/link";

export default function HodaProfile() {
  return (
    <>
      <div className="pt-6 bg-gray-100 min-h-screen flex justify-center px-4">
        <div className="bg-white w-full max-w-[1100px] rounded-lg shadow-md p-6 md:p-12">

          <Link
            href="/#candidates"
            className="text-green-700 font-semibold flex items-center mb-6"
          >
            ← 候補者一覧へ戻る
          </Link>

          <h2 className="text-sm md:text-lg font-bold text-gray-700 mb-2">
            新中2書記立候補者
          </h2>

          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8">
            木村　日葵
          </h1>

          <div className="flex flex-col md:flex-row gap-10">

            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                プロフィール
              </h3>
              <hr className="mb-6" />

              <p className="mb-2 text-sm md:text-base">
                <strong>所属コース：</strong> 医進サイエンスコース
              </p>
              <p className="mb-2 text-sm md:text-base">
                <strong>所属クラス：</strong> M1-5
              </p>

              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  所信表明
                </h3>
                <hr className="mb-6" />
                <p className="leading-relaxed text-sm md:text-base">
                  こんにちは書記候補の中学一年木村日葵です。
                  <br />
                  私が書記に立候補した理由は二点あります。
                  一つ目はけやき祭などで先輩方がイベントの企画などで生徒のために仕事をされている姿に憧れ、自分も生徒のために仕事をしたいと思ったからです。
                  二つ目は私自身ディベート部に所属しており、積極的に発言したり、議論を回すのが得意なので、そのような長所を生徒会で活かしたいと考えたからです。
                  そこで生徒会の中でも議事録、資料の作成など、ディベート部での活動と通ずる物が多く、より自分の経験を活かせると考え表記に立候補しました。
                  私が書記になったらアイデアボックスをより身近に、より生徒の声が届きやすくなるようにしたいと考えています。
                  <br />
                  ぜひ、応援よろしくお願いします。
                </p>
              </div>
            </div>

            <div className="flex justify-center md:block">
              <Image
                src="/candidates/kimura.png"
                alt="木村日葵 ポスター"
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
                src="/video/kimura.mp4"
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