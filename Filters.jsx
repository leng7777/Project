import { useState } from "react";
import { Search } from "lucide-react";

export default function Filters({ onFilter }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onFilter({ search: e.target.value });
  };

  return (
    <div className="flex flex-wrap gap-4 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg mb-6 max-w-6xl mx-auto">
      {/* Search Input */}
      <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 shadow-inner flex-1 min-w-[200px]">
        <Search className="text-gray-500 mr-2" size={20} />
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search artworks..."
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Category Select */}
      <select
        onChange={(e) => onFilter({ category: e.target.value })}
        className="border border-gray-300 px-4 py-2 rounded-xl shadow-sm hover:border-indigo-500 transition-colors min-w-[150px]"
      >
        <option value="">All Categories</option>
        <option value="Clothes">Clothes</option>
        <option value="Electronics">Electronics</option>
        <option value="Shoes">Shoes</option>
      </select>

      {/* Sort Select */}
      <select
        onChange={(e) => onFilter({ sort: e.target.value })}
        className="border border-gray-300 px-4 py-2 rounded-xl shadow-sm hover:border-indigo-500 transition-colors min-w-[150px]"
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>
    </div>
  );
}
