import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { totalPrice, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    setIsSuccess(true);
    clearCart();
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ name: '', address: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-[#FFFDD0] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 hover:bg-primary/10 rounded-full transition-colors text-primary"
              >
                <X size={24} />
              </button>

              {!isSuccess ? (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold font-headline text-primary">Finaliza la el michi-pedido</h2>
                    <p className="text-stone-600">Completa tus datos para recibir a tus michis.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-primary">
                          Nombre de la Karen
                        </label>
                        <input
                          required
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Karen Mamoyiyo"
                          className="w-full bg-white border-2 border-primary/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors font-body"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="address" className="text-sm font-bold uppercase tracking-widest text-primary">
                          Dirección de la michi-casa
                        </label>
                        <textarea
                          required
                          id="address"
                          rows={3}
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Jose Arconges Gil 110"
                          className="w-full bg-white border-2 border-primary/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors font-body resize-none"
                        />
                      </div>
                    </div>

                    <div className="bg-primary-container/30 p-6 rounded-2xl space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-primary">Pago</span>
                        <span className="font-bold text-primary flex items-center gap-2">
                          <Truck size={18} />
                          En michi-amor
                        </span>
                      </div>
                      <div className="h-px bg-primary/10" />
                      <div className="flex justify-between items-center text-xl font-bold font-headline text-primary">
                        <span>Total</span>
                        <span>{totalPrice.toFixed(0)} 🐾</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full signature-gradient text-white py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                      Confirma tu michi-compra
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <CheckCircle2 size={48} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-4xl font-bold font-headline text-primary">Pawsome!</h2>
                    <p className="text-xl text-stone-600">Tus michitazas están en camino.</p>
                  </div>
                  <p className="text-stone-500 max-w-xs mx-auto">
                    Los michi-mozos están en camino con las michitazas.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 text-primary font-bold hover:underline"
                  >
                    De vuelta a la michi-tienda.
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
