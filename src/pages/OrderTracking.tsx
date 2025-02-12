
import { Package, Truck, CheckCircle } from "lucide-react";

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
  return (
    <div className="pt-4 animate-fade-in">
      <h1 className="text-2xl font-semibold mb-6">Order Tracking</h1>
      
      <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-600">Order ID</p>
            <p className="font-medium">{mockOrder.id}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Estimated Delivery</p>
            <p className="font-medium">{mockOrder.estimatedDelivery}</p>
          </div>
        </div>
      </div>

      <div className="relative">
        {mockOrder.timeline.map((event, index) => {
          const Icon = event.icon;
          return (
            <div key={event.id} className="flex mb-8 last:mb-0">
              <div className="flex flex-col items-center mr-4">
                <div
                  className={`rounded-full p-2 ${
                    event.completed ? "bg-black text-white" : "bg-gray-200 text-gray-400"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                {index < mockOrder.timeline.length - 1 && (
                  <div
                    className={`w-px h-full ${
                      event.completed ? "bg-black" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
              
              <div>
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
                <p className="text-sm text-gray-400 mt-1">{event.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTracking;
