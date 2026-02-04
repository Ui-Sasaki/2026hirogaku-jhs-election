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
            勝見　文香
          </h1>

          <div className="flex gap-12">

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">プロフィール</h3>
              <hr className="mb-6" />

              <p className="mb-2"><strong>所属コース：</strong> 本科コース</p>
              <p className="mb-2"><strong>所属クラス：</strong> M1-2</p>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">所信表明</h3>
                <hr className="mb-6" />
                <p className="leading-relaxed">
                  中学1年2組勝見文香は生徒会書記に立候補します。
                  <br />
                  私が書記に立候補した理由は、生徒会役員の先輩方の活躍をみて、とてもやりがいのある仕事だと思い、ぜひやってみたいと思ったからです。
                  私は、生生と生徒が協力して広尾学園がより良い学校へと発展していけるような生徒会活動をしたいと考えています。
                  <br />
                  書記として会議の内容を正確に記録することはもちろん生徒のみなさんの声を大切にし、先生方へしっかり伝える「つなぎ役」になりたいです。
                  小さな意見も大切にして誰もが快適な学園生活を送れるように努力します。
                  まだ中学1年で至らないことも多いと思いますが、その分何事にも一生懸命真面目に取り組むことをお約束します。
                  <br />
                  応援よろしくお願いします。
                </p>
              </div>
            </div>

            <div className="w-[320px]">
              <Image
                src="/candidates/katumi.png"
                alt="勝見文香 ポスター"
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
