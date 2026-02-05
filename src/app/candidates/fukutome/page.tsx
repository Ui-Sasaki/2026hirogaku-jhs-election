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
            福留　未久

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

            <div className="w-[320px]">
              <Image
                src="/candidates/fukutome.png"
                alt="福留未久 ポスター"
                width={320}
                height={500}
                className="rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4">政見放送</h3>
            <div class="border rounded-lg w-[800px] mx-auto flex items-center justify-center">
                <video src="/video/fukutome.mp4" controls class="w-full"></video>
              </div>
          </div>

        </div>
      </div>
    </>
  );
}
