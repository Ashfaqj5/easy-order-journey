
import { ChevronLeft, Clock, MapPin, Star, AlertCircle, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";

const mockMenuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 280,
    description: "Aromatic basmati rice cooked with tender chicken pieces and spices",
    isVeg: false,
    rating: 4.5,
    isSpicy: true
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 220,
    description: "Fresh cottage cheese cubes in rich tomato gravy",
    isVeg: true,
    rating: 4.3,
    isSpicy: false
  },
  {
    id: 3,
    name: "Mutton Manchurian",
    price: 320,
    description: "Indo-Chinese style mutton with spicy sauce",
    isVeg: false,
    rating: 4.6,
    isSpicy: true
  },
  {
    id: 4,
    name: "Veg Fried Rice",
    price: 180,
    description: "Wok-tossed rice with mixed vegetables",
    isVeg: true,
    rating: 4.2,
    isSpicy: false
  },
  {
    id: 5,
    name: "Fish Curry",
    price: 260,
    description: "Traditional fish curry with coconut base",
    isVeg: false,
    rating: 4.4,
    isSpicy: true
  },
  {
    id: 6,
    name: "Dal Tadka",
    price: 160,
    description: "Yellow lentils tempered with spices",
    isVeg: true,
    rating: 4.1,
    isSpicy: false
  },
  {
    id: 7,
    name: "Chicken 65",
    price: 240,
    description: "Spicy deep-fried chicken",
    isVeg: false,
    rating: 4.7,
    isSpicy: true
  },
  {
    id: 8,
    name: "Vegetable Samosa",
    price: 40,
    description: "Crispy pastry filled with spiced potatoes",
    isVeg: true,
    rating: 4.3,
    isSpicy: false
  },
  {
    id: 9,
    name: "Butter Chicken",
    price: 300,
    description: "Tandoori chicken in rich butter tomato gravy",
    isVeg: false,
    rating: 4.8,
    isSpicy: false
  },
  {
    id: 10,
    name: "Mushroom Masala",
    price: 200,
    description: "Fresh mushrooms in spiced onion tomato gravy",
    isVeg: true,
    rating: 4.2,
    isSpicy: true
  }
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  variations?: string;
}

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if restaurant is favorite on mount
  useEffect(() => {
    const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(1)); // Using hardcoded ID 1 for demo
  }, []);

  const toggleFavorite = () => {
    const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]');
    const restaurantId = 1; // Hardcoded for demo
    
    if (favorites.includes(restaurantId)) {
      const newFavorites = favorites.filter((id: number) => id !== restaurantId);
      sessionStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
      toast({
        description: "Removed from favorites",
      });
    } else {
      favorites.push(restaurantId);
      sessionStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
      toast({
        description: "Added to favorites",
      });
    }
  };

  const addToCart = (item: typeof mockMenuItems[0]) => {
    const currentCart = JSON.parse(sessionStorage.getItem('cart') || '[]') as CartItem[];
    const existingItemIndex = currentCart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex > -1) {
      currentCart[existingItemIndex].quantity += 1;
    } else {
      currentCart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      });
    }

    sessionStorage.setItem('cart', JSON.stringify(currentCart));
    toast({
      description: "Added to cart",
    });
  };

  return (
    <div className="pb-20 animate-fade-in">
      <div className="bg-orange-500 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={toggleFavorite}
            className={`${isFavorite ? 'text-red-500' : 'text-white'}`}
          >
            <Heart className="h-6 w-6 fill-current" />
          </button>
        </div>
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">MAYURI INN HOTEL</h1>
          <p className="text-sm opacity-90 mb-2">Indian, Chinese, Tandoor</p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>4.5</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>30-40 min</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <MapPin className="h-4 w-4" />
          <p>Alta Bus Stand Road, Jublee Nagar Colony</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>Veg</span>
            <span className="w-3 h-3 bg-red-500 rounded-full ml-2"></span>
            <span>Non-veg</span>
          </div>
        </div>

        <div className="space-y-4">
          {mockMenuItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 ${item.isVeg ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></span>
                    <h3 className="font-medium">{item.name}</h3>
                    {item.isSpicy && (
                      <div className="flex items-center gap-1">
                        <AlertCircle className="h-4 w-4 text-orange-500" aria-label="Spicy" />
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-500">{item.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{item.price}</p>
                  <Button 
                    variant="outline" 
                    className="mt-2" 
                    size="sm"
                    onClick={() => addToCart(item)}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
