import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-8 py-6 flex justify-between items-center bg-gradient-to-b from-onyx/80 to-transparent backdrop-blur-sm">
      <div className="flex items-center gap-12">
        <h1 className="font-playfair text-3xl tracking-[0.2em] text-gold cursor-pointer">
          AURELIA
        </h1>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.15em] text-bone/70">
          <a href="#" className="hover:text-gold transition-colors">Movies</a>
          <a href="#" className="hover:text-gold transition-colors">Series</a>
          <a href="#" className="hover:text-gold transition-colors">Archive</a>
        </div>
      </div>
      
      <div className="flex items-center gap-6 text-bone">
        <ion-icon name="search-outline" style={{ fontSize: '24px' }} className="cursor-pointer hover:text-gold transition-colors"></ion-icon>
        <div className="h-10 w-10 rounded-full border border-gold/30 overflow-hidden cursor-pointer">
          <img src="https://ui-avatars.com/api/?name=User&background=D4AF37&color=fff" alt="Profile" />
        </div>
      </div>
    </nav>
  );
}
