import type {Score, Team} from '../types';
interface ScoreboardProps {
	score: Score;
	possession: Team;
}

export default function Scoreboard({ score, possession}:ScoreboardProps) {
	return (
		<section className='bg-white rounded-lg shadow p-4 w-full max-w-xl'>
			<h2 className='texl-xl font-bold text-gray-800 mb-2'>Scoreboard</h2>

			<div className='flex justify-between text-lg font-semibold text-gray-700'>
				<span>Home: {score.HOME}</span>
				<span>Away: {score.AWAY}</span>
			</div>

			<p className='mt-2 text-sm text-gray-600'>
				Possession:{''}
				<span className='font-bold text-indigo-600'>{possession}</span>
			</p>
		</section>
	)
}