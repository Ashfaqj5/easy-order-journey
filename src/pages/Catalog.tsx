
import { useState } from "react";
import { Search, MapPin, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

const mockCategories = [
  { id: 1, name: "Biryani", image: "https://source.unsplash.com/100x100/?biryani" },
  { id: 2, name: "Veg Snacks", image: "https://source.unsplash.com/100x100/?vegetables" },
  { id: 3, name: "Chicken", image: "https://source.unsplash.com/100x100/?chicken" },
  { id: 4, name: "Fish", image: "https://source.unsplash.com/100x100/?fish" },
  { id: 5, name: "Desserts", image: "https://source.unsplash.com/100x100/?dessert" }
];

const mockRestaurants = [
  {
    id: 1,
    name: "MAYURI INN HOTEL",
    rating: 4.5,
    deliveryTime: "30-40 min",
    address: "Alta Bus Stand Road, Jublee Nagar Colony",
    image: "https://source.unsplash.com/400x200/?restaurant",
    cuisine: "Indian, Chinese, Tandoor",
    closed: true
  }
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
        <div className="aspect-[2/1] rounded-lg overflow-hidden mb-6">
          <img
            src="/lovable-uploads/f5e4d1b7-f9e1-4925-8f82-28051e875aeb.png"
            alt="Special offer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button className="text-orange-500 text-sm">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {mockCategories.map((category) => (
              <div key={category.id} className="flex flex-col items-center min-w-[80px]">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">All Restaurants</h2>
          {mockRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="mb-4">
              <div className="relative aspect-[2/1] rounded-lg overflow-hidden mb-2">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                {restaurant.closed && (
                  <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    Closed Now
                  </div>
                )}
              </div>
              <h3 className="font-medium">{restaurant.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>⭐️ {restaurant.rating}</span>
                <span>•</span>
                <span>{restaurant.deliveryTime}</span>
              </div>
              <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
