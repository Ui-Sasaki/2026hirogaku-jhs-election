import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { candidates } from "@/app/data/candidates";

type PageProps = {
  params: { id: string };
};

export default function CandidateProfile({ params }: PageProps) {
  const candidate = candidates.find((c) => c.id === params.id);

  if (!candidate) notFound();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Paper container */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-10">
        
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-green-700 font-bold mb-6"
        >
          ← 候補者一覧へ戻る
        </Link>

        {/* Title */}
        <p className="text-gray-500 font-bold mb-1">
          会長立候補者
        </p>
        <h1 className="text-green-700 text-4xl font-bold mb-8">
          {candidate.name}
        </h1>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left: profile text */}
          <div>
            <h2 className="text-2xl font-bold mb-4">プロフィール</h2>
            <div className="space-y-2 text-lg">
              <p><span className="font-bold">所属コース：</span> 本科コース</p>
              <p><span className="font-bold">所属クラス：</span> M2-2</p>
              <p>
                <span className="font-bold">キャッチフレーズ：</span>
                学校の枠を超える、繋がれる学校に
              </p>
              <p><span className="font-bold">所属部活：</span> バドミントン部</p>
              <p><span className="font-bold">所属委員会：</span> 学級委員会</p>
            </div>

            {/* Statement */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">所信表明</h2>
              <p className="text-lg leading-relaxed">
                こんにちは、M2-2の{candidate.name}です。
                私が生徒会長に立候補した理由は、広尾学園をより良い学校にしたいという思いがあるからです。
                学年やクラスの枠を超えて、誰もが意見を言いやすく、つながりを感じられる学校を作りたいと考えています。
                皆さんと一緒に、より良い広尾学園を実現していきたいです。よろしくお願いします。
              </p>
            </div>
          </div>

          {/* Right: poster image */}
          <div className="flex justify-center">
            <div className="w-[320px] shadow-lg rounded-lg overflow-hidden">
              <Image
                src={candidate.image}
                alt={candidate.name}
                width={320}
                height={480}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Video placeholder */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">政見放送</h2>
          <div className="border rounded-lg p-12 text-center text-xl text-gray-500">
            未提出のため掲載なし
          </div>
        </div>
      </div>
    </div>
  );
}
