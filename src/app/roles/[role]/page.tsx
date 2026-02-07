import Image from "next/image";
import Link from "next/link";

const ROLE_DATA: Record<string, any> = {
  chair: {
  title: "生徒会長",
  image: "/election-info/chair.webp",
  description: [
    "生徒会長の仕事は、学校全体の生徒を代表し、生徒会活動を円滑に進めるためのリーダーシップを発揮する役割を担います。",
    "けやき祭などの学校行事において、準備をリードしたり各役員に仕事を分担することを初めとし、行事を成功させるために準備を行います。",
    "また他の役員や委員と協力し、活動を推進します。責任感を持ち率先して行動することで、周囲を引きつける存在になります。",
    "しかし、会長という役職は会計や書記とは少し違い、専門的な仕事はありません。自分で仕事を探すなど活動に対する積極性が必要です。",
    "最後に生徒会長として模範的な行動を取ることも大切です。",
    "これらの役割を通じて、生徒会長は学校の活性化と生徒のためのより良い環境作りに貢献しています。",
  ],
},
  vice: {
  title: "副会長",
  image: "/election-info/chair.webp",
  description: [
    "生徒会副会長は、生徒会活動の円滑な運営を支える一方で、「具体的に何をする役職なの？」と思われがちな役職です（私も思いました）。",
    "生徒会則上では会長の補佐役とされていますが、会計のように明確に割り当てられた仕事が少ない分、自分から積極的に仕事に手を出していく姿勢がとても大切です。",
    "企画書の作成や、外郭団体（PTA・後援会・同窓会）や委員会との連携、企画運営への参加など、現場で幅広く動くことが副会長の大きな特徴です。",
    "次期副会長を目指す皆さんには、この役職を通してリーダーシップとコミュニケーション力を発揮しながら、その力をさらに伸ばし、学校全体に貢献してほしいと思います。",
  ],
},
  secretary: {
  title: "書記",
  image: "/election-info/secretary.webp",
  description: [
    "中学生の生徒会書記の仕事は、主に二つあります。一つは生徒会の会議で話し合われた内容を記録し、議事録としてまとめることです。これにより、後日確認や情報共有がスムーズになります。",
    "もう一つは生徒会誌の作成です。毎年3月に配布される生徒会誌の構成を考え、クラスページの募集などをリードして実施します。",
    "これらの活動を通じて、生徒会書記は学校全体の運営を支える重要な役割を果たしています。",
    "責任感と正確さが求められる一方で、仲間と協力しながら学校生活をより良くしていく充実感を得られる仕事です。",
  ],
},
  treasurer: {
  title: "会計",
  image: "/election-info/treasurer.webp",
  description: [
    "会計の主な仕事は、「予算の立案、金銭の出納、決算の報告などを行う。」と生徒会則に記載されているように、生徒会費を適切な用途で使用するための予算・決算の作成や管理、履行を行うことです。部活動や委員会、各部門への助成、けやき祭の運営など、学校全体に関わるお金を扱います。",
    "具体的な流れとしては、まず項目ごとに予算の立案を行います。部活動など多くの生徒が関わる場合には、代表者へのガイダンスやヒアリング、予算申請書の確認などを行い、会計役員で予算の草案を作成します。その後、会計顧問の先生と協議を重ね、最終的な予算を決定します。",
    "予算決定後は、予算が適切に使われているかを確認しながら履行を管理し、実際の領収書と照らし合わせて決算を行います。お金の流れを正確に把握することが、会計の重要な役割です。",
    "また、2月から4月にかけては生徒総会での決算報告の準備と次年度予算案の立案、6月から9月はけやき祭の予算作成、10月から12月はけやき祭の決算やクリスマス企画の予算作成など、ほぼ一年を通して会計ならではの仕事があります。",
    "全校生徒から預かっている大切なお金を扱うため、細かい確認作業や責任の重さが伴い、決して簡単な役職ではありません。しかしその分、大きな達成感を味わうことができ、生徒会の仲間と深く関わりながら活動できる魅力のある役職です。",
  ],
},
};

export default function RolePage({
  params,
}: {
  params: { role: string };
}) {
  const data = ROLE_DATA[params.role];

  if (!data) return null;

  return (
    <main className="pt-8 max-w-6xl mx-auto px-4 pb-24 ml-9">
      <Link
         href="/election-info"
     className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-md shadow-sm text-gray-800 text-base mb-6"
    >
    ← 役職紹介へ
    </Link>

      <div className="mt-4 mb-6 ml-2 sm:ml-10 md:ml-28">
    <div className="inline-flex items-center bg-white px-7 py-4 mb-14">
    <div className="w-2 h-10 bg-green-700 mr-5" />
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 whitespace-nowrap">
  {data.title}
</h1>
  </div>
</div>

      <div className="flex justify-center -mt-15 mb-5">
        <Image
          src={data.image}
          alt={data.title}
          width={310}
          height={390}
          className="object-contain"
        />
      </div>

      <p className="text-center font-semibold text-lg mb-14">
        {data.name}
      </p>

      <div className="inline-flex items-center bg-green-700 px-10 py-2 mb-7">
        <div className="w-2 h-10 bg-white mr-5" />
        <h2 className="text-3xl font-bold text-white">
          職務内容
        </h2>
      </div>

     <div className="flex justify-center">
  <div className="bg-white px-8 py-8 text-base leading-relaxed shadow max-w-7xl w-full font-semibold">
    {data.description.map((text: string, i: number) => (
      <p key={i} className="mb-3">
        {text}
      </p>
    ))}
  </div>
</div>
    </main>
  );
}