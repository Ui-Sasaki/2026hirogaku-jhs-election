import Image from "next/image";
import Link from "next/link";

export default function YumotoProfile() {
  return (
    <>

      <div className="pt-6 flex justify-center bg-gray-100 min-h-screen">
        <div className="bg-white w-[1100px] rounded-lg shadow-md p-12">

          <Link
            href="/#candidates"
            className="text-green-700 font-semibold flex items-center mb-6"
          >
            ← 候補者一覧へ戻る
          </Link>

          <h2 className="text-lg font-bold text-gray-700 mb-2">
            副会長立候補者
          </h2>

          <h1 className="text-4xl font-extrabold text-green-700 mb-8">
            湯本　篤輝
          </h1>

          <div className="flex gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">プロフィール</h3>
              <hr className="mb-6" />

              <p><strong>所属コース：</strong> 本科コース</p>
              <p><strong>所属クラス：</strong> M1-3</p>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">所信表明</h3>
                <hr className="mb-6" />
                <p className="leading-relaxed">
                  僕が生徒会副会長に立候補する理由は、副会長として1年間を過ごしながら、仲間と共により良い学園生活を充実させるために意見をまとめ実行していくリーダーになりたいと思ったからです。
                    <br/>
                  僕が副会長になったらアイデアボックスに寄せられた企画以外にも持ち前のコミュニケーション能力を活かして新たなアイデアを見つけ、実行し、みなさんが最高の学園生活だったなと思えるような学校をつくっていけるようにがんばります。
                </p>
              </div>
            </div>

            <div className="w-[320px]">
              <Image
                src="/candidates/yumoto.png"
                alt="湯本篤輝 ポスター"
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
