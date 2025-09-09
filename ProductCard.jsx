import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="h-48 w-full object-cover"
        />
      </Link>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-lg">{product.title}</h3>
        <p className="text-gray-500 flex-grow">{product.category?.name}</p>
        <p className="text-green-600 font-semibold">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 bg-indigo-600 text-white rounded-lg px-3 py-2 hover:bg-indigo-800"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
