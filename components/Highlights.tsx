"use client";
import Bar from "./svg/Bar";
import Doughnut from "./svg/Doughnut";
import { CardStack } from "./ui/card-stack";
export function HighlightsCards() {
  return (
    <div className="highlight-card absolute flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    content: (
      <>
        <Doughnut />
      </>
    ),
  },
  {
    id: 1,

    content: (
      <>
        <Bar />
      </>
    ),
  },
];
