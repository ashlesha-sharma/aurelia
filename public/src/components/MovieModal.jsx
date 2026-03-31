import React from 'react';

export default function MovieModal({ movie, onClose, recommendations }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-onyx/90 backdrop-blur-md p-4 md:p-12 overflow-y-auto">
      <div className="relative bg-onyx border border-white/5 w-full max-w-6xl shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-bone/50 hover:text-gold z-10"
        >
          <ion-icon name="close-outline" style={{ fontSize: '40px' }}></ion-icon>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-12">
          {/* Poster Section */}
          <div className="md:col-span-5 aspect-[2/3]">
            <img 
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
              className="h-full w-full object-cover"
              alt="Detail Poster"
            />
          </div>

          {/* Details Section */}
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-gold tracking-[0.3em] uppercase text-[10px] mb-4">Masterpiece Collection</span>
            <h2 className="font-playfair text-5xl md:text-7xl text-bone italic mb-6">
              {movie.title || movie.name}
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg mb-8">
              {movie.overview}
            </p>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-bone mb-6 italic">You May Also Like</h3>
              <div className="grid grid-cols-4 gap-4">
                {recommendations.slice(0, 4).map((rec) => (
                  <div key={rec.id} className="aspect-[2/3] overflow-hidden bg-gray-900 group">
                    <img 
                      src={`https://image.tmdb.org/t/p/w200${rec.poster_path}`} 
                      className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
