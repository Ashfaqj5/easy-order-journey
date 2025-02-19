import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Clock, MapPin, Heart } from "lucide-react";
import { restaurants } from "@/data/mockData";
import PageTransition from "@/components/PageTransition";

const Favorites = () => {
  const [favoriteRestaurants, setFavoriteRestaurants] = useState<typeof restaurants>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]');
    const favRestaurants = restaurants.filter(r => favorites.includes(r.id));
    setFavoriteRestaurants(favRestaurants);
  }, []);

  if (favoriteRestaurants.length === 0) {
    return (
      <PageTransition>
        <div className="pt-4 pb-20 min-h-[80vh] flex flex-col items-center justify-center animate-fade-in bg-gradient-to-b from-orange-50 to-white">
          <Heart className="w-16 h-16 text-orange-300 mb-4" />
          <h1 className="text-2xl font-semibold mb-4">Your Favorites</h1>
          <p className="text-gray-500 mb-6 text-center max-w-xs">
            Save your favorite restaurants here for quick access
          </p>
          <button 
            onClick={() => navigate('/')}
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            Browse Restaurants
          </button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pb-20 animate-fade-in">
        <div className="bg-gradient-to-b from-orange-500 to-orange-400 text-white p-6 -mx-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-6 w-6 fill-current" />
            <h1 className="text-2xl font-semibold">Your Favorites</h1>
          </div>
          <p className="text-orange-100 text-sm">
            {favoriteRestaurants.length} {favoriteRestaurants.length === 1 ? 'restaurant' : 'restaurants'}
          </p>
        </div>

        <div className="space-y-4 px-2">
          {favoriteRestaurants.map((restaurant) => (
            <div 
              key={restaurant.id} 
              className="bg-white border rounded-lg p-4 cursor-pointer hover:border-orange-500 transition-colors shadow-sm hover:shadow-md"
              onClick={() => navigate(`/restaurant/${restaurant.id}`)}
            >
              <h3 className="font-medium mb-2">{restaurant.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-orange-400" />
                  <span>{restaurant.rating}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{restaurant.cuisine}</p>
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                <MapPin className="h-4 w-4" />
                <p>{restaurant.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Favorites; 