import React from 'react';

export default function Hero({ featuredMovie }) {
  if (!featuredMovie) return <div className="h-[80vh] bg-onyx" />;

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-onyx">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
          className="h-full w-full object-cover opacity-60"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-12 md:px-24 max-w-4xl space-y-6">
        <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold">Featured Selection</span>
        <h2 className="font-playfair text-6xl md:text-8xl text-bone leading-tight italic">
          {featuredMovie.title || featuredMovie.name}
        </h2>
        <p className="text-gray-400 text-lg max-w-xl font-light leading-relaxed line-clamp-3">
          {featuredMovie.overview}
        </p>
        
        <div className="flex gap-6 pt-4">
          <button className="bg-bone text-onyx px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-bone transition-all duration-500">
            View Details
          </button>
          <button className="border border-bone/30 text-bone px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-bone hover:text-onyx transition-all duration-500">
            + My List
          </button>
        </div>
      </div>
    </section>
  );
}
