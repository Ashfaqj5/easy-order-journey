import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useEffect } from "react";

const CartPopup = () => {
  const { totalItems, totalAmount, cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Cart updated:', { totalItems, totalAmount, cartItems });
  }, [totalItems, totalAmount, cartItems]);

  if (totalItems === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-16 left-0 right-0 z-40 px-4"
      >
        <div 
          className="bg-orange-500 text-white rounded-lg shadow-lg mx-auto max-w-md"
          onClick={() => navigate('/cart')}
        >
          <div className="flex items-center justify-between p-4 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-white text-orange-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                  {totalItems}
                </span>
              </div>
              <span className="font-medium">{totalItems} items</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">${totalAmount.toFixed(2)}</span>
              <span className="text-sm">• View Cart</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CartPopup; 