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
      price: 28,
      description: "Aromatic basmati rice cooked with tender chicken pieces and spices",
      isVeg: false,
      rating: 4.5,
      isSpicy: true
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      price: 22,
      description: "Fresh cottage cheese cubes in rich tomato gravy",
      isVeg: true,
      rating: 4.3,
      isSpicy: false
    },
{
id: 3,
  name: "Lamb Rogan Josh",
  price: 28,
  description: "Tender lamb cooked in a flavorful blend of spices",
  isVeg: false,
  rating: 4.7,
  isSpicy: true
},
{
  id: 4,
  name: "Vegetable Pulao",
  price: 24,
  description: "Fragrant basmati rice cooked with mixed vegetables and mild spices",
  isVeg: true,
  rating: 4.2,
  isSpicy: false
},
{
  id: 5,
  name: "Fish Curry",
  price: 28,
  description: "Succulent fish fillets in a rich, spicy curry sauce",
  isVeg: false,
  rating: 4.4,
  isSpicy: true
},
{
  id: 6,
  name: "Dal Tadka",
  price: 20,
  description: "Lentils cooked with aromatic spices and tempered with ghee",
  isVeg: true,
  rating: 4.1,
  isSpicy: false
}
  ],
  2: [
    {
      id: 7,
      name: "Mutton Manchurian",
      price: 320,
      description: "Indo-Chinese style mutton with spicy sauce",
      isVeg: false,
      rating: 4.6,
      isSpicy: true
    },
    {
      id: 8,
      name: "Veg Fried Rice",
      price: 180,
      description: "Wok-tossed rice with mixed vegetables",
      isVeg: true,
      rating: 4.2,
      isSpicy: false
    },
{
  id: 9,
  name: "Prawn Curry",
  price: 26,
  description: "Succulent prawns cooked in a flavorful coconut-based curry",
  isVeg: false,
  rating: 4.5,
  isSpicy: true
},
{
  id: 10,
  name: "Aloo Gobi",
  price: 20,
  description: "Potato and cauliflower cooked with Indian spices",
  isVeg: true,
  rating: 4.3,
  isSpicy: false
},
{
  id: 11,
  name: "Chicken Tikka",
  price: 27,
  description: "Marinated chicken grilled to perfection",
  isVeg: false,
  rating: 4.4,
  isSpicy: true
},
{
  id: 12,
  name: "Chole Bhature",
  price: 220,
  description: "Spicy chickpeas served with deep-fried bread",
  isVeg: true,
  rating: 4.6,
  isSpicy: true
}
  ]
};
