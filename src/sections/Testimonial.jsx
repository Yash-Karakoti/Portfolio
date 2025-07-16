import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { achievements } from "../constants";

const firstRow = achievements.slice(0, achievements.length / 2);
const secondRow = achievements.slice(achievements.length / 2);

const ReviewCard = ({ img, name, username, body, proof }) => {
  const [showProof, setShowProof] = useState(false);

  return (
    <figure
      onClick={() => setShowProof(!showProof)}
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal transition duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/90">{body}</blockquote>

      {showProof && proof && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Avoid toggle again on button click
            window.open(proof, "_blank");
          }}
          className="mt-4 text-xs bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
        >
          View Proof
        </button>
      )}
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">My Achievements</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
