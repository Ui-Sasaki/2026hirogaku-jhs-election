import Image from "next/image";
import Link from "next/link";

export default function SugiokaProfile() {
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
            副会長立候補者
          </h2>

          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8">
            杉岡　歩佳
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
                  こんにちは。生徒会副会長に立候補しました、中学1年杉岡歩佳です。
                  <br />
                  私が立候補したのは、学校運営への興味や生徒会で活動する先輩方への憧れから、
                  自分も学校を支える力になりたいと思ったからです。
                  私は副会長として、生徒を含め学校に携わる全ての人が
                  「広尾学園で良かった」と思える学校づくりを目指します。
                  <br />
                  そのために、部活などに努力する姿や裏で支えてくれている人を紹介したり、
                  学年を超えた交流を企画したりすることで、
                  学校での目標や居場所を見つけ、互いを尊重できる雰囲気をつくりたいです。
                  <br />
                  さらに、校則などの意見交換会を設けることで、
                  生徒の声が学校づくりに反映されていると実感できるとともに、
                  自ら品格を意識できるようにしたいです。
                  <br />
                  私自身未熟な点も多いですが、意見をしっかり受けとめること、
                  必要な時には前に出て行動することを大切に、
                  副会長として皆さんとより良い学校をつくっていきたいです。
                  <br />
                  私に副会長として働く機会をいただけたら嬉しいです。
                  応援よろしくお願いします。
                </p>
              </div>
            </div>

            <div className="flex justify-center md:block">
              <Image
                src="/candidates/sugioka.png"
                alt="杉岡歩佳 ポスター"
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
            <div className="border rounded-lg w-full md:w-[800px] mx-auto flex items-center justify-center p-4">
              <video
                src="/video/sugioka.mp4"
                controls
                className="w-full max-w-[600px]"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}