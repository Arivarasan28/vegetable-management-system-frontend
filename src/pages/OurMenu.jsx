import React, { useState, useEffect } from "react";
import axios from "axios";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";

const OurMenu = () => {
  const [vegetableItems, setVegetableItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [toast, setToast] = useState(null);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("vegetableFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("vegetableFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchVegetableItems = async () => {
    try {
      const endpoint =
        selectedCategory === "ALL"
          ? "http://localhost:8081/api/vegetable/"
          : `http://localhost:8081/api/vegetable/category/${selectedCategory}`;
      const response = await axios.get(endpoint);
      setVegetableItems(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch vegetable items.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVegetableItems();
  }, [selectedCategory]);

  const handleFavoriteToggle = (item) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === item.id);
      if (exists) {
        setToast({ message: "Removed from favorites", type: "info" });
        return prev.filter((fav) => fav.id !== item.id);
      } else {
        setToast({ message: "Added to favorites", type: "success" });
        return [...prev, item];
      }
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <section className="min-h-screen bg-black text-green-600 flex flex-col items-center px-4 pt-[100px] relative">
      {/* Toast Notifications */}
      {toast && (
        <div
          className={`fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg backdrop-blur-md border ${
            toast.type === "success"
              ? "border-green-500/30 bg-green-500/10 text-green-400"
              : "border-red-500/30 bg-red-500/10 text-red-400"
          } animate-fade-in-up`}
        >
          {toast.message}
        </div>
      )}

      <h1 className="text-4xl font-bold mb-8 text-center">
        OUR FRESH & HEALTHY VEGETABLES
      </h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8 max-w-4xl w-full justify-center">
        {["ALL", "LEAFY GREENS", "ROOT VEGETABLES", "FRUITS", "HERBS"].map(
          (category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-white text-black shadow-lg"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Vegetable Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {vegetableItems.map((item) => {
          const isFavorite = favorites.some((fav) => fav.id === item.id);
          return (
            <div
              key={item.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-shadow duration-300 group relative"
            >
              <div className="relative">
                <img
                  src={item.vegetableImage || "/default-vegetable.jpg"}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => handleFavoriteToggle(item)}
                  className="absolute top-2 right-2 p-2 backdrop-blur-sm bg-black/30 rounded-full hover:bg-black/50 transition-colors"
                >
                  {isFavorite ? (
                    <HeartIcon className="w-6 h-6 text-red-500 animate-bounce-in" />
                  ) : (
                    <HeartOutlineIcon className="w-6 h-6 text-white hover:text-red-400 transition-colors" />
                  )}
                </button>
              </div>
              
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${item.price?.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">
                    Stock: {item.stock || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Favorites Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gray-900 shadow-2xl transform transition-transform duration-300 z-50 ${
          isFavoritesOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Favorites</h2>
            <button
              onClick={() => setIsFavoritesOpen(false)}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {favorites.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
              <HeartOutlineIcon className="w-16 h-16 mb-4" />
              <p>No favorites yet</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto space-y-4">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-gray-800 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
                >
                  <img
                    src={item.vegetableImage}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-400">${item.price?.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => handleFavoriteToggle(item)}
                    className="p-2 hover:bg-gray-600 rounded-full transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5 text-red-400" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Favorites Floating Button */}
      <button
        onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
        className="fixed bottom-8 right-8 p-4 bg-green-600 rounded-full shadow-lg hover:bg-green-500 transition-all group"
      >
        <div className="relative">
          <HeartIcon className="w-8 h-8 text-white" />
          {favorites.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </div>
      </button>

      {/* Backdrop Overlay */}
      {isFavoritesOpen && (
        <div
          onClick={() => setIsFavoritesOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        />
      )}
    </section>
  );
};

export default OurMenu;