"use client";
import { getScoreBg } from "@/lib/utils";

interface Props {
  label: string;
  score: number;
}

export default function ScoreBar({ label, score }: Props) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-600 font-medium">{label}</span>
        <span className="font-semibold text-slate-800">{score}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${getScoreBg(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
