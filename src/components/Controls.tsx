import type { Team } from "../types";

interface ControlsProp {
	onScore: (team: Team, pts: number) => void;
	onToggle: () => void;
}

export default function Controls({onScore, onToggle}: ControlsProp) {
	return (
		<section className="bg-white rounded-lg shadow p-4 w-full max-w-xl mt-4">
			<h2 className="text-xl font-bold text-gray-800 mb-2">Controls</h2>

			<div className="flex items-center justify-between">
				{/*Home Controls*/}
				<div className="space-x-2">
					<h3 className="font-semibold text-gray-600">Home</h3>
					<button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-800"
					onClick={() => onScore("HOME", 3)}>+3 Points</button>

					<button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-800"
					onClick={() => onScore("HOME", 6)}>+6 Points</button>

					<button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-800"
					onClick={() => onScore("HOME", 1)}>+1 Points</button>

					{/*Possession*/}

					<button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-900" 
					onClick={onToggle}>Toggle Possession</button>

					{/*Away*/}
					
					<div className="space-x-2">
					<h3 className="font-semibold text-gray-600">Away</h3>
					<button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-800"
					onClick={() => onScore("AWAY", 3)}>+3 Points</button>

					<button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-800"
					onClick={() => onScore("AWAY", 6)}>+6 Points</button>

					<button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-800"
					onClick={() => onScore("AWAY", 1)}>+1 Points</button>
					</div>
				</div>
			</div>
		</section>
	)
}