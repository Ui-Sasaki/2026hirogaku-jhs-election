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
            新中2会計立候補者
          </h2>

          <h1 className="text-4xl font-extrabold text-green-700 mb-8">
            高江洲　郁斗
          </h1>

          <div className="flex gap-12">

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">プロフィール</h3>
              <hr className="mb-6" />

              <p className="mb-2"><strong>所属コース：</strong> 本科コース</p>
              <p className="mb-2"><strong>所属クラス：</strong> M1-3</p>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">所信表明</h3>
                <hr className="mb-6" />
                <p className="leading-relaxed">
                  僕が立候補した理由は、広尾学園に入って部活の先輩やその他の生徒会の先輩を見て、僕の「発案力」が生徒会に合っていると考えたからです。
                  <br />
                  そこで特にお金に使われているかを明確にし、「今後なんのために使うべきか」を議論していきたいと思っています。
                  <br />
                  よろしくお願いします。
                </p>
              </div>
            </div>

            <div className="w-[320px]">
              <Image
                src="/candidates/takaesu.png"
                alt="高江洲郁斗 ポスター"
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
