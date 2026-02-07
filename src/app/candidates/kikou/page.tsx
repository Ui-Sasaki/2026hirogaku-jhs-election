import Image from "next/image";
import Link from "next/link";

export default function KikouProfile() {
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
            会長立候補者
          </h2>

          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8">
            亀甲　愛奈
          </h1>

          <div className="flex flex-col md:flex-row gap-10">

            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                プロフィール
              </h3>
              <hr className="mb-6" />

              <p className="mb-2 text-sm md:text-base">
                <strong>所属コース：</strong> 本科コース
              </p>
              <p className="mb-2 text-sm md:text-base">
                <strong>所属クラス：</strong> M2-3
              </p>

              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  所信表明
                </h3>
                <hr className="mb-6" />
                <p className="leading-relaxed text-sm md:text-base">
                  こんにちは、会長候補の亀甲愛奈です。
                  <br />
                  私は生徒会副会長を経験し、「アイデアボックスの運用」という公約の実現を経たことで、「生徒は生徒会役員のしていることをあまり知らない」という大きな問題点を改善するべきだと感じました。
                  そこで、この経験を最大限活かして、会長としてリーダーシップを発揮することで、生徒の皆さんが楽しい学園生活を送ることができるよう動きたいと考え、立候補しました。
                  今の「ブラックボックス」のままの生徒会では、「生徒が創る広尾学園」の実現は望めません。
                  私が会長になった際には、この実情を、定期的な「生徒会本部ニュース」の配信により改善したいと考えています。
                  またその上で、アイデアボックスを通して皆さんの意見に耳を傾けることで、皆さんにとって有益な学園運営に向けて動くことを約束いたします。
                  ぜひ、応援をよろしくお願いします！
                </p>
              </div>
            </div>

            <div className="flex justify-center md:block">
              <Image
                src="/candidates/kikou.png"
                alt="亀甲愛奈 ポスター"
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
                src="/video/kikou.mp4"
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