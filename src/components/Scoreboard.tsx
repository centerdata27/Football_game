import type{ Score, Team} from "../types"
interface ScoreBoardProps {
    score: Score,
    possession: Team,
}

export default function ScoreBoard ({score, possession}: ScoreBoardProps){
return(
    <section className = "bg-white rounded-lg shadow p-4 w-full max-w-xl">
        <h2 className= 'text-xl font bold text-gray-800'>ScoreBoard</h2>
        <div className="flex justify-between text-lg font-semibold text-gray-700">
            <span>Home:{score.HOME}</span>
             <span>Away:{score.AWAY}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">
            Possession: {''}
            <span className="font-bold text-indigo-600">{possession}</span>
        </p>
    </section>
)
}

