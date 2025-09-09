import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const load = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    load();
  }, []);

  const filtered = products.filter((p) => {
    let ok = true;
    if (filters.search) {
      ok = p.title.toLowerCase().includes(filters.search.toLowerCase());
    }
    if (filters.category) {
      ok = ok && p.category?.name === filters.category;
    }
    return ok;
  });

  if (filters.sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="p-6">
      <Filters onFilter={(f) => setFilters((prev) => ({ ...prev, ...f }))} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
