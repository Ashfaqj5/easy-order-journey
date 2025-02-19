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
  {
    id: 3,
    name: "Grill Thrill",
    rating: 4.5,
    deliveryTime: "30-40 min",
    address: "Street 6, Sautern drive, Jublee Heights, USA",
    cuisine: "American, Italian, Mexican",
    cuisineTypes: ["American", "Italian", "Mexican"],
    closed: true,
    categories: [
      { id: 1, name: "Burgers", icon: UtensilsCrossed },
      { id: 3, name: "Pizza", icon: ChefHat },
      { id: 5, name: "Desserts", icon: Cookie }
    ]
  },
  {
    id: 4,
    name: "Cheesy Paradise",
    rating: 4.8,
    deliveryTime: "20-30 min",
    address: "Saint peters, Anytown, USA",
    cuisine: "American, Italian",
    cuisineTypes: ["American", "Italian"],
    categories: [
        { id: 2, name: "Salads", icon: Salad },
      { id: 4, name: "Seafood", icon: Fish },
      { id: 5, name: "Desserts", icon: Cookie }
    ]
  },
  {
    id: 5,
    name: "The Hungry Hipster",
    rating: 4.6,
    deliveryTime: "15-25 min",
    address: "456 Maple Ave, Somewhere, USA",
    cuisine: "American, Barbecue",
    cuisineTypes: ["American", "Barbecue"],
    categories: [
      { id: 1, name: "Barbecue", icon: UtensilsCrossed },
      { id: 2, name: "Sides", icon: Salad },
      { id: 3, name: "Desserts", icon: Cookie }
    ]
  }
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
  ],
  3: [
    {
      id: 1,
      name: "Classic Cheeseburger",
      price: 20,
      description: "Juicy beef patty with melted cheese, lettuce, and tomato",
      isVeg: false,
      rating: 4.7,
      isSpicy: false
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: 20,
      description: "Crispy crust with tangy tomato sauce and spicy pepperoni",
      isVeg: false,
      rating: 4.5,
      isSpicy: true
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 15,
      description: "Crisp romaine lettuce with Caesar dressing and croutons",
      isVeg: true,
      rating: 4.2,
      isSpicy: false
    },
    {
      id: 4,
      name: "Chicken Tenders",
      price: 20,
      description: "Crispy breaded chicken strips served with dipping sauce",
      isVeg: false,
      rating: 4.4,
      isSpicy: false
    },
    {
      id: 5,
      name: "Chocolate Brownie",
      price: 12,
      description: "Rich and fudgy brownie topped with chocolate sauce",
      isVeg: true,
      rating: 4.8,
      isSpicy: false
    }
  ],
  4: [
    {
      id: 6,
      name: "Grilled Salmon",
      price: 20,
      description: "Fresh salmon fillet grilled to perfection",
      isVeg: false,
      rating: 4.6,
      isSpicy: false
    },
    {
      id: 7,
      name: "Pasta Primavera",
      price: 20,
      description: "Pasta tossed with fresh vegetables and a light sauce",
      isVeg: true,
      rating: 4.3,
      isSpicy: false
    },
    {
      id: 8,
      name: "Shrimp Scampi",
      price: 20,
      description: "Succulent shrimp cooked in garlic butter sauce",
      isVeg: false,
      rating: 4.5,
      isSpicy: false
    },
    {
      id: 9,
      name: "Garden Salad",
      price: 15,
      description: "Mixed greens with a variety of fresh vegetables",
      isVeg: true,
      rating: 4.1,
      isSpicy: false
    },
    {
      id: 10,
      name: "Tiramisu",
      price: 18,
      description: "Classic Italian dessert with layers of coffee-soaked sponge cake",
      isVeg: true,
      rating: 4.7,
      isSpicy: false
    }
  ],
  5: [
    {
      id: 11,
      name: "BBQ Ribs",
      price: 20,
      description: "Tender pork ribs coated in smoky barbecue sauce",
      isVeg: false,
      rating: 4.8,
      isSpicy: true
    },
    {
      id: 12,
      name: "Mac and Cheese",
      price: 18,
      description: "Creamy macaroni and cheese",
      isVeg: true,
      rating: 4.4,
      isSpicy: false
    },
    {
      id: 13,
      name: "Coleslaw",
      price: 16,
      description: "Crispy cabbage and carrot slaw with tangy dressing",
      isVeg: true,
      rating: 4.2,
      isSpicy: false
    },
    {
      id: 14,
      name: "Pulled Pork Sandwich",
      price: 25,
      description: "Slow-cooked pulled pork served on a bun",
      isVeg: false,
      rating: 4.6,
      isSpicy: true
    },
    {
      id: 15,
      name: "Apple Pie",
      price: 18,
      description: "Classic apple pie with a flaky crust",
      isVeg: true,
      rating: 4.5,
      isSpicy: false
    }
  ]
};