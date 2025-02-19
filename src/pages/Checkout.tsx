import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import SuccessAnimation from "@/components/SuccessAnimation";
import { useCart } from "@/contexts/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { clearCart } = useCart();

  const handleConfirmOrder = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowSuccess(true);
    clearCart(); // Clear cart using context method

    // Wait for animation
    setTimeout(() => {
      navigate('/order-tracking');
    }, 2000);
  };

  return (
    <PageTransition>
      <div className="pt-4 pb-32 animate-fade-in">
        <header className="flex items-center gap-4 mb-6">
          <Link to="/cart" className="text-gray-600">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">Checkout</h1>
        </header>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="font-medium">Delivery Option</h2>
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-500">🏠</span>
              </div>
              <div className="flex-1">
                <p className="font-medium">Home Delivery</p>
                <p className="text-sm text-gray-500">($ 20)</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-medium">Deliver To</h2>
              <button className="text-orange-500 text-sm">Add</button>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-500">📍</span>
                </div>
                <p className="text-gray-500">Others</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-medium">Enter Promo Code</h2>
            <div className="flex gap-2">
              <Input placeholder="Enter code" className="flex-1" />
              <Button variant="secondary" className="bg-orange-500 text-white hover:bg-orange-600">
                Apply
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-medium">Choose Payment Method</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-500">💰</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Cash on Delivery</p>
                  <p className="text-sm text-gray-500">Pay with cash when your order arrives</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-500">💳</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Digital Payment</p>
                  <p className="text-sm text-gray-500">Coming soon...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-medium">Additional note</h2>
            <Input placeholder="Write something..." />
          </div>

          <div className="text-sm text-red-500">
            Note: Once after order confirmed, can not be cancelled.
            No refund allowed.
          </div>
        </div>

        <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-4">
          <div className="container mx-auto">
            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600" 
              size="lg"
              onClick={handleConfirmOrder}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Confirm Order"}
            </Button>
          </div>
        </div>

        {showSuccess && <SuccessAnimation />}
      </div>
    </PageTransition>
  );
};

export default Checkout;
