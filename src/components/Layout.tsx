import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import CartPopup from "./CartPopup";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CartPopup />
      <main className="container mx-auto px-4 pb-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
