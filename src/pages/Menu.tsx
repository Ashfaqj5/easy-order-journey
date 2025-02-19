import { useState } from "react";
import { ChevronLeft, Settings, HelpCircle, Info, LogOut, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PageTransition from "@/components/PageTransition";

const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Account Settings",
      icon: Settings,
      onClick: () => console.log("Settings clicked")
    },
    {
      title: "Order Tracking",
      icon: Truck,
      onClick: () => navigate('/order-tracking')
    },
    {
      title: "Help & Support",
      icon: HelpCircle,
      onClick: () => console.log("Help clicked")
    },
    {
      title: "About Us",
      icon: Info,
      onClick: () => console.log("About clicked")
    }
  ];
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <PageTransition>
      <div className="pb-20 animate-fade-in">
        <div className="bg-gradient-to-b from-orange-500 to-orange-400 text-white p-6 -mx-4 mb-6">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-semibold">Menu</h1>
          </div>
        </div>

        <div className="space-y-4 px-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start gap-3 h-14"
              onClick={item.onClick}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Button>
          ))}

          <Separator className="my-6" />

          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600" 
            size="lg"
              onClick={() => {
                  if (user.isLoggedIn) {
                      localStorage.removeItem('user');
                      navigate('/Login');
                  } else {
                      navigate('/Login');
                  }
              }}
          >
              {
                  user.isLoggedIn ? "Sign Out" : "Sign In"
              }
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Menu;