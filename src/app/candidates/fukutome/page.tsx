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
            新中2会計立候補者
          </h2>

          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8">
            福留　未久
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
                <strong>所属クラス：</strong> M1-3
              </p>

              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  所信表明
                </h3>
                <hr className="mb-6" />
                <p className="leading-relaxed text-sm md:text-base">
                  私が会計をやりたい理由は、私の将来の夢が会計士だからです。
                  <br />
                  会計はお金を管理するため重要だからこそ将来の夢である会計士に活かせる経験を積みたいです。また、私が会計になったら、皆さんの意見を尊重し、健全な学校運営の土台となる会計を担当したいです。
                  <br />
                  そのために、各クラスや部活動からの意見を積極的に取り入れ、生徒の皆さんの要望を反映させ、学校がより良くなるように努めます。他にも、過去のデータを参考に予算案を作成し、この学校全体の活動が円滑に進むよう努めます。
                  <br />
                  皆さんの学校生活がより良いものになるよう、会計としてがんばりますのでよろしくお願いします。
                </p>
              </div>
            </div>

            <div className="flex justify-center md:block">
              <Image
                src="/candidates/fukutome.png"
                alt="福留未久 ポスター"
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
                src="/video/fukutome.mp4"
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