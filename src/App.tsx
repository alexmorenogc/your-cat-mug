import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';
import { Navbar, Hero, Footer } from './components/Layout';
import { ProductSection } from './components/ProductSection';
import { ProductDetail } from './components/ProductDetail';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CartProvider } from './context/CartContext';
import { PRODUCTS } from './constants';
import { Product } from './types';

function AppContent() {  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectProduct = (product: Product) => {
    navigate(`/product/${product.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToProducts = () => {
    const scrollToProducts = () => {
      document.getElementById('products-list')?.scrollIntoView({ behavior: 'smooth' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      // A small timeout is pragmatic here to allow for the page transition,
      // though a more robust solution might involve a useEffect hook.
      setTimeout(scrollToProducts, 100);
    } else {
      scrollToProducts();
    }
  };

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onNavigateHome={handleNavigateHome} 
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
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={<HomePage onSelectProduct={handleSelectProduct} />} 
            />
            <Route 
              path="/product/:productId" 
              element={<ProductDetailPage onBack={handleNavigateHome} />} 
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer 
        onScrollToProducts={handleScrollToProducts} 
        onNavigateHome={handleNavigateHome}
      />
    </div>
  );
}

const HomePage = ({ onSelectProduct }: { onSelectProduct: (product: Product) => void }) => (
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
          onSelect={onSelectProduct}
        />
      ))}
    </div>
  </motion.div>
);

const ProductDetailPage = ({ onBack }: { onBack: () => void }) => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return <ProductDetail product={product} onBack={onBack} />;
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
