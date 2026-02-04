import Image from "next/image";
import Link from "next/link";

export default function KosugaProfile() {
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
            小菅　まり彩
          </h1>

          <div className="flex gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">プロフィール</h3>
              <hr className="mb-6" />

              <p><strong>所属コース：</strong> インターナショナルコース</p>
              <p><strong>所属クラス：</strong> M1-6</p>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">所信表明</h3>
                <hr className="mb-6" />
                <p className="leading-relaxed">
                  私は広尾学園に入学してからけやき祭やスポフェスなど、生徒会を中心としたイベントに多数参加して、広尾学園に入学してよかったと思いました。
                  <br />
                  小学校を卒業して、数々の思い出ができたのは、そのようなイベントのおかげであると思います。広屋学園を卒業した時に思い出をたくさんふり返ることができる。そんな楽しく、かつ規正しい学校生活を実現するために、私は生体会の副会長に立候補します。
                  <br />
                  例をあげると、けやき祭のナゾ解きイベントのような楽しい企画を考えつつ、普段の生活は校則が守れるよう、風紀委員と連携してポスターや動画などを駆使し、新入生にもわかるようにしていきます。生徒みなさんの意見もとりつつ、楽しく、規律正しい学校生活にできるよう、最善の努力をつくします。
                </p>
              </div>
            </div>

            <div className="w-[320px]">
              <Image
                src="/candidates/kosuga.png"
                alt="小菅まり彩 ポスター"
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
