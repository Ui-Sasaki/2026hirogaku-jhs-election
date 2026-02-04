"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { candidates } from "../data/candidates";

type Candidate = {
  id: string;
  name: string;
  position: string;
  image: string;
};

const positionCounts: Record<string, string> = {
  会長: "選出役員数: 1名",
  副会長: "選出役員数: 1名",
  会計中3: "選出役員数: 2名",
  会計中2: "選出役員数: 1名",
  書記中3: "選出役員数: 2名",
  書記中2: "選出役員数: 1名",
};

function formatTitle(position: string) {
  if (position === "会長" || position === "副会長") {
    return `${position}立候補者`;
  }

  if (position.endsWith("中3")) {
    return `${position.replace("中3", "")}立候補者（新中三）`;
  }

  if (position.endsWith("中2")) {
    return `${position.replace("中2", "")}立候補者（新中二）`;
  }

  return `${position}立候補者`;
}

function PageTitle() {
  return (
    <div className="relative inline-flex items-center bg-green-700 px-8 py-4 shadow-md">
      <div className="absolute left-0 top-0 bottom-0 flex items-center pl-2">
        <div className="w-1 h-full bg-white" />
        <div className="w-1 h-full bg-white ml-1" />
      </div>
      <h1 className="ml-5 text-white font-bold text-2xl whitespace-nowrap">
        候補者一覧
      </h1>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative inline-flex items-center bg-white px-6 py-4 shadow-sm">
      <div className="absolute left-0 top-0 bottom-0 flex items-center pl-2">
        <div className="w-1 h-full bg-green-700" />
        <div className="w-1 h-full bg-green-700 ml-1" />
      </div>
      <h2 className="ml-5 text-green-700 font-bold text-2xl whitespace-nowrap">
        {formatTitle(title)}
      </h2>
    </div>
  );
}

function TrustVoteBadge({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 text-white text-sm font-bold px-5 py-2 rounded-md whitespace-nowrap"
    >
      信任投票
    </button>
  );
}

function CandidateCard({ candidate }: { candidate: Candidate }) {
  return (
    <Link href={`/candidates/${candidate.id}`} className="block">
      <div className="group flex w-[400px] h-[310px] bg-white rounded-md shadow-md overflow-hidden hover:scale-[1.02] transition cursor-pointer">
        <div className="relative w-[55%] h-full">
          <Image
            src={candidate.image}
            alt={candidate.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="w-[45%] h-full bg-green-700 flex flex-col items-center justify-center gap-4">
          <p className="text-white text-xl font-bold text-center">
            {candidate.name}
          </p>

          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-green-700 text-2xl font-bold">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function TrustVoteModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white max-w-3xl w-full mx-6 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">信任投票とは</h2>

        <p className="text-lg leading-relaxed mb-10">
          信任投票とは、役職に立候補した人が1人しかいない場合に行われる投票のことです。
          有権者は、その候補者を「信任する（賛成）」か「信任しない（反対）」かを選びます。
          投票の結果、信任が得られればその人が役職に就き、得られなければ別の方法で選び直すことになります。
        </p>

        <button
          onClick={onClose}
          className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-bold"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}

export default function Candidates() {
  const [showModal, setShowModal] = useState(false);

  const grouped = candidates.reduce((acc, c) => {
    acc[c.position] ??= [];
    acc[c.position].push(c);
    return acc;
  }, {} as Record<string, Candidate[]>);

  return (
    <div className="-ml-24">
      {showModal && <TrustVoteModal onClose={() => setShowModal(false)} />}

      <div className="flex items-center gap-6 mb-20">
        <PageTitle />
        <button
          onClick={() => setShowModal(true)}
          className="border border-black px-6 py-3 rounded-md font-bold"
        >
          信任投票とは
        </button>
      </div>

      {Object.entries(grouped).map(([position, list]) => (
        <section key={position} className="mb-20">
          <div className="flex items-center gap-6 mb-10">
            <SectionTitle title={position} />

            <span className="text-lg font-semibold text-gray-700">
              {positionCounts[position]}
            </span>

            {(position === "会長" || position === "書記中3") && (
              <TrustVoteBadge onClick={() => setShowModal(true)} />
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-12">
            {list.map((c) => (
              <CandidateCard key={c.id} candidate={c} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
