import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../services/api";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const load = async () => {
      const data = await fetchProduct(id);
      setProduct(data);
    };
    load();
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="w-full md:w-1/2 h-80 object-cover rounded-xl"
      />
      <div>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-green-600 font-semibold mb-4">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
