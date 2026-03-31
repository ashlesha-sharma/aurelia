import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import { fetchMovies, fetchTrending, fetchGenres, fetchRecommendations } from './utils/tmdbApi';

function App() {
  const [movies, setMovies] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    // Initial Load
    fetchGenres().then(setGenres);
    fetchTrending().then(data => {
      setMovies(data);
      setFeatured(data[0]); // First trending movie is the Hero
    });
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      fetchMovies(selectedGenre).then(setMovies);
    }
  }, [selectedGenre]);

  const handleMovieSelect = async (movie) => {
    const type = movie.media_type || 'movie';
    const recommendations = await fetchRecommendations(movie.id, type);
    setRecs(recommendations);
    setSelectedMovie(movie);
  };

  return (
    <div className="bg-onyx min-h-screen text-bone font-sans selection:bg-gold selection:text-onyx">
      <Navbar />
      
      <Hero featuredMovie={featured} />
      
      <main className="relative z-10 -mt-20">
        <FilterBar 
          genres={genres} 
          selectedGenre={selectedGenre} 
          setSelectedGenre={setSelectedGenre} 
        />

        <div className="px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16">
          {movies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onSelect={handleMovieSelect} 
            />
          ))}
        </div>
      </main>

      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          recommendations={recs} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}

      <footer className="py-20 text-center border-t border-white/5">
        <p className="font-playfair italic text-gray-600 tracking-widest">Aurelia Cinema — Est. 2026</p>
      </footer>
    </div>
  );
}

export default App;
