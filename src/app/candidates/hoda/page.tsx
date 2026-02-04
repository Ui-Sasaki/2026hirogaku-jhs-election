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
            新中3書記立候補者
          </h2>

          <h1 className="text-4xl font-extrabold text-green-700 mb-8">
            保田　朝陽
          </h1>

          <div className="flex gap-12">

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">プロフィール</h3>
              <hr className="mb-6" />

              <p className="mb-2"><strong>所属コース：</strong> 本科コース</p>
              <p className="mb-2"><strong>所属クラス：</strong> M2-3</p>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">所信表明</h3>
                <hr className="mb-6" />
                <p className="leading-relaxed">
                  こんにちは。2年3組の保田朝陽です。
                  <br />
                  この度私は書記に立候補します。
                  私が生徒会に立候補する理由は、生徒がより充実し、楽しい学園生活を送るためです。
                  私はそのために、様々なことをしたいと考えています。そこで最も大切なのは、互いの理解を深め、尊重し合うことです。
                  <br />
                  具体的には、生徒同士の交流を深めるために他学年や他のコースと共同プログラムをする場を設けたいと思っています。
                  私は書記として生徒の意見や情報をしっかりとまとめ、広尾学園の生活をより良くするために精一杯尽力してまいります。
                  <br/>
                  どうぞよろしくお願いします。


                </p>
              </div>
            </div>

            <div className="w-[320px]">
              <Image
                src="/candidates/hoda.png"
                alt="保田朝陽 ポスター"
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
