import { useState } from "react";
import { Search, MapPin, Bell, UtensilsCrossed, Salad, ChefHat, Fish, Cookie } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const mockCategories = [
  { id: 1, name: "Biryani", icon: <UtensilsCrossed className="h-6 w-6" /> },
  { id: 2, name: "Veg Snacks", icon: <Salad className="h-6 w-6" /> },
  { id: 3, name: "Chicken", icon: <ChefHat className="h-6 w-6" /> },
  { id: 4, name: "Fish", icon: <Fish className="h-6 w-6" /> },
  { id: 5, name: "Desserts", icon: <Cookie className="h-6 w-6" /> }
];

const mockRestaurants = [
  {
    id: 1,
    name: "MAYURI INN HOTEL",
    rating: 4.5,
    deliveryTime: "30-40 min",
    address: "Alta Bus Stand Road, Jublee Nagar Colony",
    cuisine: "Indian, Chinese, Tandoor",
    closed: true
  }
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="pt-4 pb-20 animate-fade-in">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-orange-500" />
          <div>
            <p className="text-sm text-orange-500">Nirmal, Telangana, India</p>
          </div>
        </div>
        <Bell className="h-6 w-6" />
      </header>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search your desired foods or restaurants"
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <div className="bg-orange-100 rounded-lg p-6 mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Special Offer</h3>
            <p className="text-sm text-orange-700">Get 20% off on your first order!</p>
          </div>
          <UtensilsCrossed className="h-12 w-12 text-orange-500" />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button className="text-orange-500 text-sm">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {mockCategories.map((category) => (
              <div key={category.id} className="flex flex-col items-center min-w-[80px]">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-2 text-orange-500">
                  {category.icon}
                </div>
                <span className="text-xs text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">All Restaurants</h2>
          {mockRestaurants.map((restaurant) => (
            <div 
              key={restaurant.id} 
              className="mb-4 border rounded-lg p-4 cursor-pointer hover:border-orange-500 transition-colors"
              onClick={() => navigate(`/restaurant/${restaurant.id}`)}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{restaurant.name}</h3>
                {restaurant.closed && (
                  <div className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                    Closed Now
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>⭐️ {restaurant.rating}</span>
                <span>•</span>
                <span>{restaurant.deliveryTime}</span>
              </div>
              <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <MapPin className="h-4 w-4" />
                {restaurant.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
