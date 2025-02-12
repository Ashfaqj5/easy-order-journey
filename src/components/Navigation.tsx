
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Home, CreditCard, Package } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 z-50">
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <NavLink to="/" icon={<Home />} label="Shop" active={location.pathname === "/"} />
          <NavLink to="/cart" icon={<ShoppingBag />} label="Cart" active={location.pathname === "/cart"} />
          <NavLink to="/checkout" icon={<CreditCard />} label="Checkout" active={location.pathname === "/checkout"} />
          <NavLink to="/order-tracking" icon={<Package />} label="Orders" active={location.pathname === "/order-tracking"} />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, label, active }: { to: string; icon: React.ReactNode; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`flex flex-col items-center p-2 transition-colors ${
      active ? "text-black" : "text-gray-500"
    }`}
  >
    <span className="h-6 w-6">{icon}</span>
    <span className="text-xs mt-1">{label}</span>
  </Link>
);

export default Navigation;
