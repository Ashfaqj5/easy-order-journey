import { Package, Truck, CheckCircle, Star, TruckIcon } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { restaurants } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

const mockOrder = {
  id: "ORD123456",
  status: "in_transit",
  estimatedDelivery: "March 15, 2024",
  timeline: [
    {
      id: 1,
      title: "Order Placed",
      description: "Your order has been confirmed",
      date: "March 10, 2024",
      icon: Package,
      completed: true
    },
    {
      id: 2,
      title: "In Transit",
      description: "Your order is on its way",
      date: "March 12, 2024",
      icon: Truck,
      completed: true
    },
    {
      id: 3,
      title: "Delivered",
      description: "Package will arrive soon",
      date: "March 15, 2024",
      icon: CheckCircle,
      completed: false
    }
  ]
};


const OrderTracking = () => {
  const navigate = useNavigate();


  return (
    <PageTransition>
      <div className=" animate-fade-in">
      <div className="bg-gradient-to-b from-orange-500 to-orange-400 text-white p-6 -mx-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <TruckIcon className="h-6 w-6 " />
            <h1 className="text-2xl font-semibold">Order Tracking</h1>
          </div>
          
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-greenn-600">Order ID</p>
              <p className="font-medium">{mockOrder.id}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="font-medium">{mockOrder.estimatedDelivery}</p>
            </div>
          </div>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative mb-12">
          <div className="flex">
            {mockOrder.timeline.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.id}
                  className="flex-1 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`rounded-full p-2 ${
                        event.completed ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + 0.2,
                        type: "spring"
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    
                    <div className="text-center mt-2">
                      <h3 className="font-medium text-sm">{event.title}</h3>
                      <p className="text-xs text-gray-600">{event.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{event.date}</p>
                    </div>
                  </div>
                  
                  {index < mockOrder.timeline.length - 1 && (
                    <motion.div
                      className={`absolute top-[14px] left-[50%] w-full h-[2px] ${
                        event.completed ? "bg-green-500" : "bg-gray-200"
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 0.3
                      }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Restaurants Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Popular Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <motion.div
                key={restaurant.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
              >
                {/* <img 
                  // src={restaurant.cu} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                /> */}
                <div className="p-4">
                  <h3 className="font-semibold">{restaurant.name}</h3>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">{restaurant.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{restaurant.cuisine}</p>
                  <p className="text-sm text-gray-500 mt-1">{restaurant.deliveryTime}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default OrderTracking;
