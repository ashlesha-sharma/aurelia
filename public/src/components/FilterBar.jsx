import React from 'react';

export default function FilterBar({ selectedGenre, setSelectedGenre, genres }) {
  return (
    <div className="px-12 py-8 bg-onyx border-b border-white/5 overflow-x-auto no-scrollbar">
      <div className="flex gap-10 whitespace-nowrap">
        <button 
          onClick={() => setSelectedGenre('')}
          className={`text-xs uppercase tracking-[0.2em] transition-all ${!selectedGenre ? 'text-gold' : 'text-gray-500 hover:text-bone'}`}
        >
          All Releases
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
            className={`text-xs uppercase tracking-[0.2em] transition-all ${selectedGenre === genre.id ? 'text-gold' : 'text-gray-500 hover:text-bone'}`}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}
