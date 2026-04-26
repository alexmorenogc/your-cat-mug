import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Verified } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductSectionProps {
  product: Product;
  reverse?: boolean;
  onSelect: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ product, reverse, onSelect }) => {
  const { addToCart } = useCart();
  const badgeColors = {
    'hand-painted': 'bg-tertiary-container/30 text-on-tertiary-container',
    'limited-edition': 'bg-surface-container-highest text-on-surface',
  };

  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`relative group ${reverse ? 'md:order-2' : ''}`}
        >
          <div className="absolute -inset-4 bg-primary-container/20 rounded-xl blur-2xl group-hover:bg-primary-container/30 transition-all"></div>
          <img 
            className={`relative w-full aspect-[4/5] object-cover rounded-xl shadow-xl transform ${reverse ? '-rotate-1' : 'rotate-1'} group-hover:rotate-0 transition-transform duration-700 cursor-pointer`}
            src={product.image} 
            alt={product.name}
            onClick={() => onSelect(product)}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`flex flex-col items-start gap-6 ${reverse ? 'md:order-1' : ''}`}
        >
          <div className={`${badgeColors[product.badgeType]} px-4 py-1.5 rounded-sm italic font-label text-sm`}>
            {product.badge}
          </div>
          <h2 
            className="font-headline text-3xl md:text-5xl font-bold text-on-surface cursor-pointer hover:text-primary transition-colors"
            onClick={() => onSelect(product)}
          >
            {product.name}
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed"  style={{ whiteSpace: 'pre-line' }}>
            {product.description}
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product, 1)}
            className={`${product.badgeType === 'microwave-safe' || product.badgeType === 'limited-batch' ? 'bg-secondary text-white' : 'signature-gradient text-white'} font-bold py-4 px-10 rounded-full flex items-center gap-3 shadow-lg`}
          >
            <ShoppingCart size={20} />
            Añadir al arenero
          </motion.button>
          
          {product.isCatApproved && (
            <div className="mt-8 flex items-center gap-3 bg-surface-container-low/50 p-4 rounded-lg border border-outline-variant/10">
              <Verified className="text-primary" size={20} fill="currentColor" />
              <span className="font-headline font-bold text-sm tracking-tight">100% MICHI-APPROVED</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
