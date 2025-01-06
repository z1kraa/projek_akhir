import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import MovieDetail from './pages/MovieDetail.';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/id/:id" element={<MovieDetail />} />
    </Routes>
  );
}
