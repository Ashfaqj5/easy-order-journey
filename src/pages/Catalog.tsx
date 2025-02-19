import { useState } from "react";
import { Search, MapPin, Bell, UtensilsCrossed, Salad, ChefHat, Fish, Cookie } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { restaurants } from "@/data/mockData";
import React from "react";
import PageTransition from "@/components/PageTransition";

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      restaurant.name.toLowerCase().includes(searchLower) ||
      restaurant.cuisine.toLowerCase().includes(searchLower) ||
      restaurant.categories.some(category => 
        category.name.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <PageTransition>
      <div className="pt-4 pb-20 animate-fade-in">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm text-orange-500">Maryland Heights, Saint Louis</p>
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

          <div>
            <h2 className="text-lg font-semibold mb-4">
              {searchQuery ? 'Search Results' : 'All Restaurants'}
            </h2>
            
            {filteredRestaurants.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No restaurants found matching "{searchQuery}"
              </div>
            ) : (
              filteredRestaurants.map((restaurant) => (
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
                  
                  {/* Categories */}
                  <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                    {restaurant.categories.map((category) => (
                      <div key={category.id} className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-full min-w-fit">
                        <div className="text-orange-500">
                          {<category.icon size={16} />}
                        </div>
                        <span className="text-xs text-orange-700">{category.name}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-3">
                    <MapPin className="h-4 w-4" />
                    {restaurant.address}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Catalog;
