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
            新中3会計立候補者
          </h2>

          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8">
            古瀬　遥
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
                  中学2年3組の古瀬遥です。
                  <br />
                  私は昨年度、生徒会役員として広尾学園で様々な経験をする中で、今年度も役員の一員としてけやき祭やクリスマス会に関わり、この学校のさらなる魅力を引き出したいと考えました。
                  世の中が大きく変化する中、全校生徒の皆さんが更に充実した学校生活を過ごすためには部活動やけやき祭などの様々な学校行事を円滑に行うことが必要になります。
                  そのためには、予算の策定や報告書の作成など会計の仕事は欠かせないものとなります。
                  私は会計として昨年度培った知識を活かしながら、責任を持って職務を行い、持続可能な財政を目指します。
                  周りの生徒会役員と協力し合い、皆さんの意見に耳を傾け、皆さんと一緒に、いつまでも楽しい広尾学園をつくっていきます。
                  <br />
                  よろしくお願い致します。
                </p>
              </div>
            </div>

            <div className="flex justify-center md:block">
              <Image
                src="/candidates/kose.png"
                alt="古瀬遥 ポスター"
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
            <div className="border rounded-lg h-[200px] md:h-[360px] flex items-center justify-center text-gray-500 text-sm md:text-base">
              未提出のため掲載なし
            </div>
          </div>

        </div>
      </div>
    </>
  );
}