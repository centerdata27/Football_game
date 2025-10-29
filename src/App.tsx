import { useState } from "react";
import type { Score, Team } from './types';
import Scoreboard from "./components/Scoreboard";
import Controls from "./components/Controls";

export default function App() {
  const [score, setScore] = useState<Score>({HOME:0, AWAY: 0});
  const [possession, setPossession] = useState<Team>("HOME");

  const handleScore = (team: Team, pts: number) =>
      setScore((s) => ({...s, [team]: s[team] + pts}));

  const toggle = () =>
      setPossession((p) => (p === "HOME" ? "AWAY" : "HOME"));

    return (
      <main className="min-h-screen flex flex-col items-center p-6 bg-slate-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Football Game - Feature 1
        </h1>
        <Scoreboard score={score} possession={possession} />
        <Controls onScore={handleScore} onToggle={toggle} />
      </main>
    )

}