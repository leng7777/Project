import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          🎨 L&H Shop
        </Link>

        {/* Menu */}
        <div className="flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? "text-yellow-400 font-semibold" : ""
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/old-products"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? "text-yellow-400 font-semibold" : ""
              }`
            }
          >
            Old Products
          </NavLink>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
