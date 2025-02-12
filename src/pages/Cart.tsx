
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockCartItems = [
  {
    id: 1,
    name: "Premium T-Shirt",
    price: 29.99,
    quantity: 1,
    image: "https://source.unsplash.com/400x400/?tshirt"
  },
  {
    id: 2,
    name: "Designer Jeans",
    price: 89.99,
    quantity: 1,
    image: "https://source.unsplash.com/400x400/?jeans"
  }
];

const Cart = () => {
  const total = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="pt-4 pb-32 animate-fade-in">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
      
      <div className="space-y-4">
        {mockCartItems.map((item) => (
          <div key={item.id} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{item.name}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <p className="text-gray-600">${item.price}</p>
              
              <div className="flex items-center gap-2 mt-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Total</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          
          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
