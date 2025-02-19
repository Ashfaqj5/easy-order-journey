import { ChevronLeft, Clock, MapPin, Star, AlertCircle, Heart } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { restaurants, menuItems } from "@/data/mockData";
import PageTransition from "@/components/PageTransition";
import { useCart } from "@/contexts/CartContext";

interface Restaurant {
  id: number;
  name: string;
  cuisineTypes: string[];
  rating: number;
  deliveryTime: string;
  address: string;
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  isVeg: boolean;
  rating: number;
  isSpicy: boolean;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  variations?: string;
}

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  const { cartQuantities, updateCart, addToCart } = useCart();

  const restaurant = restaurants.find(r => r.id === Number(id));
  const restaurantMenu = menuItems[Number(id) as keyof typeof menuItems] || [];

  useEffect(() => {
    const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(Number(id)));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]');
    const restaurantId = Number(id);
    
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

  if (!restaurant) {
    return (
      <PageTransition>
        <div className="p-4 text-red-500">Restaurant not found</div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
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
            <h1 className="text-2xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-sm opacity-90 mb-2">{restaurant.cuisine}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>{restaurant.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4" />
            <p>{restaurant.address}</p>
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
            {restaurantMenu.map((item) => (
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
                    <p className="font-medium">${item.price}</p>
                    {cartQuantities[item.id] ? (
                      <div className="flex items-center gap-2 mt-2 justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateCart(item, cartQuantities[item.id] - 1)}
                        >
                          -
                        </Button>
                        <span className="min-w-[20px] text-center">{cartQuantities[item.id]}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateCart(item, cartQuantities[item.id] + 1)}
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="mt-2" 
                        size="sm"
                        onClick={() => addToCart(item)}
                      >
                        Add
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RestaurantDetail;
