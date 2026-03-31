import React from 'react';

export default function MovieCard({ movie, onSelect }) {
  return (
    <div 
      className="group cursor-pointer relative"
      onClick={() => onSelect(movie)}
    >
      <div className="aspect-[2/3] overflow-hidden bg-graphite rounded-sm">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
        />
      </div>
      <div className="mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
        <h4 className="font-playfair text-xl text-bone italic">{movie.title || movie.name}</h4>
        <div className="flex justify-between items-center mt-1">
          <span className="text-[10px] uppercase tracking-tighter text-gray-500">
            {new Date(movie.release_date || movie.first_air_date).getFullYear()}
          </span>
          <span className="text-[10px] text-gold tracking-widest uppercase">
            {movie.vote_average.toFixed(1)} / 10
          </span>
        </div>
      </div>
    </div>
  );
}
