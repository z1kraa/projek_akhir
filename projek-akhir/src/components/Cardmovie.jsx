import { Link } from 'react-router-dom';
import TopData from '../TopData.json';

export default function Movie() {
    return (
        <>
        <div className="flex flex-wrap justify-center gap-5 pt-10 bg-gray-900">
            {TopData.slice(0, 12).map((movie) => (
                <Link to={`/id/${movie.id}`} key={movie.id} className="w-[300px]">
                <img src={movie.img} alt={movie.title} className="rounded-lg w-full" />
                </Link>
            ))}
            </div>

        
        </>

    );
}