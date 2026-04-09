import { ShoppingBasket, User, PawPrint, Coffee, Heart, ShoppingCart, Verified } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../constants';

export function Navbar({ onNavigate, onOpenCart, onScrollToProducts }: { onNavigate: (page: 'home' | 'detail') => void; onOpenCart: () => void; onScrollToProducts: () => void }) {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fffbff]/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(129,92,72,0.08)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div 
          className="text-2xl font-bold text-primary font-headline tracking-tight cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          Michitaza
        </div>
        <div className="hidden md:flex gap-8 items-center text-primary font-headline tracking-tight">
          <button 
            className="text-primary border-b-2 border-primary pb-1 font-bold"
            onClick={() => onNavigate('home')}
          >
            Nuestra historia
          </button>
          <button 
            onClick={onScrollToProducts}
            className="text-stone-500 hover:text-primary transition-colors"
          >
            Las michitazas
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="relative hover:scale-105 transition-transform duration-300 active:scale-95 text-primary"
          >
            <ShoppingBasket size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {totalItems}
              </span>
            )}
          </button>

        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  const { addToCart } = useCart();

  const handleAddAll = () => {
    PRODUCTS.forEach(product => addToCart(product, 1));
  };

  return (
    <header className="max-w-4xl mx-auto text-center px-6 py-16 md:py-24">
      <span className="font-label text-sm uppercase tracking-[0.2em] text-primary mb-4 block">Sólo para Tauros</span>
      <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface leading-tight mb-6">
        Edición limitada de tazas para Karens. Los mejores diseños michi-aprobados disponibles.
      </h1>
      <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
        Experimenta un café rico en las tazas más michi-agradables que existen.
      </p>
      <div className="mt-10 flex justify-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddAll}
          className="signature-gradient text-white font-bold py-5 px-12 rounded-full flex items-center gap-4 shadow-2xl text-xl"
        >
          <ShoppingCart size={24} />
          Todas al arenero!
        </motion.button>
      </div>
    </header>
  );
}

export function Footer({ onScrollToProducts, onNavigate }: { onScrollToProducts: () => void; onNavigate: (page: 'home' | 'detail') => void }) {
  return (
    <footer className="w-full py-12 bg-[#FFFDD0] flex flex-col items-center gap-6 px-4 text-center">
      <div className="text-lg font-bold text-primary font-headline">Michitaza</div>
      <nav className="flex flex-wrap justify-center gap-8">
        <button 
          onClick={() => onNavigate('home')}
          className="font-body text-sm uppercase tracking-widest text-stone-400 hover:text-primary transition-opacity"
        >
          Nuestra historia
        </button>
        <button 
          onClick={onScrollToProducts}
          className="font-body text-sm uppercase tracking-widest text-stone-400 hover:text-primary transition-opacity"
        >
          Las michitazas
        </button>
      </nav>
      <p className="font-body text-sm uppercase tracking-widest text-primary max-w-lg">
        © 29 de Abril de 2026. Michitaza. Edición limitada: Solo los mejores michis disponibles.
      </p>
      <div className="flex gap-4 mt-4 opacity-50 text-primary">
        <PawPrint size={20} />
        <Coffee size={20} />
        <Heart size={20} />
      </div>
    </footer>
  );
}
