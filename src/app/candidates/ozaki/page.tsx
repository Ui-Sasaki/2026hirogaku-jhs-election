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
            新中2書記立候補者
          </h2>

          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8">
            柳澤　萌杏
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
                  こんにちは。1年5組の柳澤萌杏です。生徒会書記に立候補します。
                  <br />
                  私が生徒会に立候補した理由は、学校生活をより良くしたいという思いがあるからです。
                  学園生活を送る中で、誰にでも小さな「ここもう少しこうなればいいのに」という気持ちがあると思います。
                  でも、その”ちょっとした声”こそ、学校を変える力になると私は信じています。
                  だから、私はその声を絶対に見逃したくありません。
                  <br />
                  自分の行動が周りの人や学校のためにつながることを願って、生徒会の一員として立候補します。書記については、私の几帳面な性格を活かし、要点をまとめわかりやすくお伝えすることを目指します。他の生徒会メンバーとも連携を取りながらも、みなさんと一緒により良い広尾学園中学校を創っていきたいです。
                  <br />
                  必ず、生徒会の一員に私を選んでよかったと思われるように精一杯力を尽くします。
                  <br />
                  ぜひ、投票お願いいたします。
                </p>
              </div>
            </div>

            <div className="flex justify-center md:block">
              <Image
                src="/candidates/ozaki.png"
                alt="柳澤萌杏 ポスター"
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
                src="/video/ozaki.mp4"
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