import Image from "next/image";
import { candidates } from "../data/candidates";

type Candidate = {
  id: string;
  name: string;
  position: string;
  image: string;
};

const positionTitleImages: Record<string, string> = {
  会長: "/home/titles/Kaityou.png",
  副会長: "/home/titles/Hukukaityou.png",
  会計: "/home/titles/Kaikei.png",
  書記: "/home/titles/Syoki.png",
};



function CandidateCard({ candidate }: { candidate: Candidate }) {
  return (
    <div className="flex flex-col items-center bg-white">
        <div className="w-35 h-40 relative">
          <Image
            src={candidate.image}
            alt={candidate.name}
            fill
            className="object-cover rounded"
          />
        </div>
      <p className="pt-4 pb-4 text-lg font-bold">{candidate.name}</p>
    </div>
  );
}

export default function Candidates() {
  // 役職ごとにグループ化
  const grouped = candidates.reduce(
    (acc, c) => {
      acc[c.position] ??= [];
      acc[c.position].push(c);
      return acc;
    },
    {} as Record<string, Candidate[]>,
  );

return (
    <div className="px-5">
        {Object.entries(grouped).map(([position, list]) => (
        <section key={position}>
            <div className="flex justify-start py-10">
                <Image
                    src={positionTitleImages[position]}
                    alt={position}
                    width={200}
                    height={80}
                />
            </div>

            <div className="flex justify-items-start gap-12 pl-6 flex-wrap">
                {list.map((c) => (
                    <CandidateCard key={c.id} candidate={c} />
                ))}
            </div>
        </section>
        ))}
    </div>
  );
}
