
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mockCartItems = [
  {
    id: 1,
    name: "Mutton Manchurian",
    price: 317,
    quantity: 1,
    variations: "Size - Plain"
  }
];

const Cart = () => {
  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const addons = 0;
  const total = subtotal + addons;

  return (
    <div className="pt-4 pb-32 animate-fade-in">
      <header className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-gray-600">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-semibold">My Cart</h1>
      </header>
      
      <div className="space-y-4">
        {mockCartItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-20 h-20 bg-orange-100 rounded-md flex items-center justify-center text-orange-500">
              <ChevronLeft className="h-8 w-8" />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">⭐️⭐️⭐️⭐️⭐️</p>
                  <p className="text-sm text-gray-500">Variations: {item.variations}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{item.price}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-3 border rounded-full px-3 py-1">
                  <button className="text-orange-500">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="text-orange-500">
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
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Addons</span>
              <span>₹{addons}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
          </div>
          
          <Button className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
