import Image from "next/image";
import Link from "next/link";

export default function SugiokaProfile() {
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
            高橋　祐希

          </h1>

          <div className="flex gap-12">

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">プロフィール</h3>
              <hr className="mb-6" />

              <p className="mb-2"><strong>所属コース：</strong> 医進サイエンスコース</p>
              <p className="mb-2"><strong>所属クラス：</strong> M2-5</p>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">所信表明</h3>
                <hr className="mb-6" />
                <p className="leading-relaxed">
                  M2-5の高橋祐希です。私が立候補したのは、今までの2年間で生徒会への関わりが深まったからです。
                  けやき祭を筆頭とした行事など生徒達が快適に過ごせて学校生活を楽しめるように心を砕くさまを見て、私もその助けになりたいと、生徒のために活動したいと思うようになりました。
                  <br />
                  具体的には、現生徒会が配信しているアイデアボックスに加え、テーマを定めた意見交換会を定期的に行い、各クラスで出た意見について、学級委員と生徒会で話し合う場にしたいと考えています。
                  生徒会に届くまでの手順は増えますが、同じテーマについて各クラスから意見を募るので、より広くの意見を反映できます。
                  <br />
                  ぜひ応援よろしくお願いします。
                </p>
              </div>
            </div>

            <div className="w-[320px]">
              <Image
                src="/candidates/takahashi.png"
                alt="高橋祐希 ポスター"
                width={320}
                height={500}
                className="rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4">政見放送</h3>
            <div class="border rounded-lg w-[800px] mx-auto flex items-center justify-center">
                <video src="/video/takahasi.mp4" controls class="w-full"></video>
              </div>
          </div>

        </div>
      </div>
    </>
  );
}
