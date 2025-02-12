
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mockProducts = [
  {
    id: 1,
    name: "Premium T-Shirt",
    price: 29.99,
    image: "https://source.unsplash.com/400x400/?tshirt"
  },
  {
    id: 2,
    name: "Designer Jeans",
    price: 89.99,
    image: "https://source.unsplash.com/400x400/?jeans"
  },
  {
    id: 3,
    name: "Classic Sneakers",
    price: 119.99,
    image: "https://source.unsplash.com/400x400/?sneakers"
  },
  {
    id: 4,
    name: "Leather Bag",
    price: 199.99,
    image: "https://source.unsplash.com/400x400/?leather-bag"
  }
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pt-4 animate-fade-in">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">Shop</h1>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {mockProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <Button
                className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                size="sm"
              >
                Add to Cart
              </Button>
            </div>
            <h3 className="font-medium text-sm">{product.name}</h3>
            <p className="text-sm text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
