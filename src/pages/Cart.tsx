
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  variations?: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    setCartItems(items);
  }, []);

  const updateQuantity = (itemId: number, increment: boolean) => {
    const newItems = cartItems.map(item => {
      if (item.id === itemId) {
        const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
        if (newQuantity === 0) {
          return null;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean) as CartItem[];

    setCartItems(newItems);
    sessionStorage.setItem('cart', JSON.stringify(newItems));
    toast({
      description: increment ? "Quantity increased" : "Quantity decreased",
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const addons = 0;
  const total = subtotal + addons;

  if (cartItems.length === 0) {
    return (
      <div className="pt-4 pb-20 text-center">
        <header className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-gray-600">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">My Cart</h1>
        </header>
        <p className="text-gray-500">Your cart is empty</p>
        <Button 
          className="mt-4 bg-orange-500 hover:bg-orange-600" 
          onClick={() => navigate('/')}
        >
          Browse Restaurants
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-4 pb-32 animate-fade-in">
      <header className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-gray-600">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-semibold">My Cart</h1>
      </header>
      
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-20 h-20 bg-orange-100 rounded-md flex items-center justify-center text-orange-500">
              <ChevronLeft className="h-8 w-8" />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">⭐️⭐️⭐️⭐️⭐️</p>
                  {item.variations && (
                    <p className="text-sm text-gray-500">Variations: {item.variations}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-medium">${item.price}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-3 border rounded-full px-3 py-1">
                  <button 
                    className="text-orange-500"
                    onClick={() => updateQuantity(item.id, false)}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button 
                    className="text-orange-500"
                    onClick={() => updateQuantity(item.id, true)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-4">
        <div className="container mx-auto">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Item Price</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Addons</span>
              <span>${addons}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
          </div>
          
          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600" 
            size="lg"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
