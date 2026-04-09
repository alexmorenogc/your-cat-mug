import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Minus, Plus, Verified, Brush } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  const images = [product.image, ...product.gallery];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Image Gallery */}
        <div className="lg:col-span-7 relative group">
          <div className="absolute -inset-4 bg-primary-container/10 rounded-xl blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative rounded-xl overflow-hidden shadow-[0_40px_80px_rgba(129,92,72,0.12)] bg-white p-4">
            <AnimatePresence mode="wait">
              {activeImage.endsWith('.mp4') ? (
                <motion.video
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={activeImage}
                  controls
                  className="w-full aspect-[4/5] object-cover rounded-lg"
                />
              ) : (
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={activeImage} 
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover rounded-lg"
                />
              )}
            </AnimatePresence>
            
            {product.isCatApproved && (
              <div className="absolute top-8 left-8">
                <div className="bg-secondary-container/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center space-x-2 shadow-sm">
                  <Verified className="text-on-secondary-container" size={18} fill="currentColor" />
                  <span className="text-on-secondary-container font-semibold tracking-tight uppercase text-xs">100% Michi-Approved</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 grid grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImage(img)}
                className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${activeImage === img ? 'border-primary' : 'border-transparent opacity-60'}`}
              >
                {img.endsWith('.mp4') ? (
                  <video src={img} muted loop playsInline className="w-full h-full object-cover" />
                ) : (
                  <img src={img} alt={`${product.name} gallery ${idx}`} className="w-full h-full object-cover" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tertiary-container rounded-sm italic text-on-tertiary-container text-sm font-medium">
              <Brush size={14} />
              <span>{product.badge}</span>
            </div>
            <h1 className="text-5xl font-extrabold font-headline text-primary leading-[1.1] tracking-tight">
              {product.name}
            </h1>
            <p className="text-3xl font-semibold text-on-surface-variant font-headline">{product.price} 🐾</p>
          </div>

          <div className="prose prose-stone">
            <p className="text-lg leading-relaxed text-on-surface/80 font-light">
              {product.description}
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex flex-col space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Cantidad</label>
              <div className="flex items-center bg-surface-container-high w-fit rounded-full px-4 py-2 space-x-6">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-bold text-lg font-headline">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => addToCart(product, quantity)}
              className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-5 px-10 rounded-full font-bold text-xl shadow-[0_15px_30px_rgba(129,92,72,0.2)] hover:shadow-[0_20px_40px_rgba(129,92,72,0.3)] transition-all flex items-center justify-center space-x-3"
            >
              <ShoppingBag size={24} />
              <span>Añadir al arenero</span>
            </motion.button>
          </div>

          <button 
            onClick={onBack}
            className="text-stone-400 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2"
          >
            ← De vuelta
          </button>
        </div>
      </div>
    </motion.div>
  );
}
