import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#FFFDD0] shadow-2xl z-[101] flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-primary/10">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-primary" size={24} />
                <h2 className="text-2xl font-bold font-headline text-primary">Arenero</h2>
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                  <ShoppingCart size={64} className="text-primary" />
                  <p className="text-xl font-headline font-medium text-primary">Tu arenero está vacío</p>
                  <button
                    onClick={onClose}
                    className="text-primary underline font-medium hover:text-primary/80"
                  >
                    Sigue michi-comprando
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg shadow-sm"
                    />
                    <div className="flex-grow space-y-1">
                      <h3 className="font-bold font-headline text-on-surface">{item.name}</h3>
                      <p className="text-primary font-bold">{item.price} 🐾</p>
                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center bg-surface-container-high rounded-full px-2 py-1 gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded-full transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-bold text-sm min-w-[1rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded-full transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-primary/10 space-y-4">
                <div className="flex justify-between items-center text-xl font-bold font-headline text-primary">
                  <span>Total</span>
                  <span>{totalPrice.toFixed(0)} 🐾</span>
                </div>
                <button 
                  onClick={onCheckout}
                  className="w-full signature-gradient text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                >
                  Michi-compra ya!
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-stone-400 text-sm font-medium hover:text-red-500 transition-colors"
                >
                  Limpiar arenero
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
