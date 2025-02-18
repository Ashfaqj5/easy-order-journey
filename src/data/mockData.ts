import { UtensilsCrossed, Salad, ChefHat, Fish, Cookie } from "lucide-react";

export const restaurants = [
  {
    id: 1,
    name: "Jublee INN HOTEL",
    rating: 4.5,
    deliveryTime: "30-40 min",
    address: "Road 123, Jublee Heights, USA",
    cuisine: "Indian, Chinese, Tandoori",
    cuisineTypes: ["Indian", "Chinese", "Tandoori"],
    closed: true,
    categories: [
      { id: 1, name: "Biryani", icon: UtensilsCrossed },
      { id: 3, name: "Chicken", icon: ChefHat },
      { id: 5, name: "Desserts", icon: Cookie }
    ]
  },
  {
    id: 2,
    name: "MAYURI INN HOTEL",
    rating: 4.8,
    deliveryTime: "20-30 min",
    address: "123 Main St, Anytown, USA",
    cuisine: "Yameni, Chinese",
    cuisineTypes: ["Yameni", "Chinese"],
    categories: [
        { id: 2, name: "Veg Snacks", icon: Salad },
      { id: 4, name: "Fish", icon: Fish },
      { id: 5, name: "Desserts", icon: Cookie }
    ]
  },
  
];

export const menuItems = {
  1: [
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
    }
  ],
  2: [
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
    }
  ]
}; 