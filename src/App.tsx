import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar, Hero, Footer } from './components/Layout';
import { ProductSection } from './components/ProductSection';
import { ProductDetail } from './components/ProductDetail';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CartProvider } from './context/CartContext';
import { PRODUCTS } from './constants';
import { Product } from './types';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'detail'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: 'home' | 'detail') => {
    setCurrentPage(page);
    if (page === 'home') {
      setSelectedProduct(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToProducts = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setSelectedProduct(null);
      // Wait for the home page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById('products-list');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('products-list');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onNavigate={handleNavigate} 
        onOpenCart={() => setIsCartOpen(true)} 
        onScrollToProducts={handleScrollToProducts}
      />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={handleOpenCheckout}
      />
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <div id="products-list" className="space-y-16 scroll-mt-24">
                {PRODUCTS.map((product, index) => (
                  <ProductSection 
                    key={product.id}
                    product={product}
                    reverse={index % 2 !== 0}
                    onSelect={handleSelectProduct}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            selectedProduct && (
              <ProductDetail 
                key={selectedProduct.id}
                product={selectedProduct}
                onBack={() => handleNavigate('home')}
              />
            )
          )}
        </AnimatePresence>
      </main>

      <Footer 
        onScrollToProducts={handleScrollToProducts} 
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
