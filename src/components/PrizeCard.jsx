import './prize.css';
import trophyImage from '../assets/trophy.png';

const PrizeCard=({title,amount})=>{
    return(
        
        <div className="bg-[#1a1441] bg-opacity-20 rounded-2xl text-center p-6 shadow-md shadow-indigo-900/50 hover:scale-105 transition-transform duration-300 h-50 w-50">
            <img src= {trophyImage} alt="Trophy" className="mx-auto w-16 h-16 mb-4" />
            <h2 className="text-white font-[Inter] font-bold text-lg tracking-wide mb-2 pb-1">{title}</h2>
            <p  className="text-gray-300 font-[Inter] text-sm">{amount}</p>
        </div>
        
    )
}

export default PrizeCard;