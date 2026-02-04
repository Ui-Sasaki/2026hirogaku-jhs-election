import Image from "next/image";
import Link from "next/link";

export default function HodaProfile() {
  return (
    <>

      <div className="pt-6 bg-gray-100 min-h-screen flex justify-center">
        <div className="bg-white w-[1100px] rounded-lg shadow-md p-12">

          <Link
            href="/#candidates"
            className="text-green-700 font-semibold flex items-center mb-6"
          >
            ← 候補者一覧へ戻る
          </Link>

          <h2 className="text-lg font-bold text-gray-700 mb-2">
            新中2書記立候補者
          </h2>

          <h1 className="text-4xl font-extrabold text-green-700 mb-8">
            柳澤　萌杏
          </h1>

          <div className="flex gap-12">

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">プロフィール</h3>
              <hr className="mb-6" />

              <p className="mb-2"><strong>所属コース：</strong> 医進サイエンスコース</p>
              <p className="mb-2"><strong>所属クラス：</strong> M1-5</p>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">所信表明</h3>
                <hr className="mb-6" />
                <p className="leading-relaxed">
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

            <div className="w-[320px]">
              <Image
                src="/candidates/ozaki.png"
                alt="柳澤萌杏 ポスター"
                width={320}
                height={500}
                className="rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4">政見放送</h3>
            <div className="border rounded-lg h-[360px] flex items-center justify-center text-gray-500">
              未提出のため掲載なし
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
