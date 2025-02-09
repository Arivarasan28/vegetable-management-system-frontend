


// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const OurMenu = () => {
// //   const [vegetableItems, setVegetableItems] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [cart, setCart] = useState([]); // State to manage cart items
// //   const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart popup visibility
// //   const [isOrderView, setIsOrderView] = useState(false); // State to manage order form view
// //   const [userDetails, setUserDetails] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //   }); // User details state

// //   // Fetch vegetable data from the backend
// //   useEffect(() => {
// //     const fetchVegetableItems = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8081/api/vegetable/");
// //         setVegetableItems(response.data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError("Failed to fetch vegetable items.");
// //         setLoading(false);
// //       }
// //     };

// //     fetchVegetableItems();
// //   }, []);

// //   const handleAddToCart = (item) => {
// //     setCart((prevCart) => {
// //       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
// //       if (existingItem) {
// //         return prevCart.map((cartItem) =>
// //           cartItem.id === item.id
// //             ? { ...cartItem, quantity: cartItem.quantity + 1 }
// //             : cartItem
// //         );
// //       } else {
// //         return [...prevCart, { ...item, quantity: 1 }];
// //       }
// //     });
// //   };

// //   if (loading) {
// //     return <div className="text-white text-center">Loading...</div>;
// //   }

// //   if (error) {
// //     return <div className="text-red-500 text-center">{error}</div>;
// //   }

// //   return (
// //     <section
// //       id="ourmenu"
// //       className="min-h-screen bg-black text-green-600 flex flex-col justify-center items-center bg-cover bg-center px-4 pt-[100px]"
// //     >
// //       <h1 className="text-2xl font-bold mb-4">OUR FRESH & HEALTHY VEGETABLES</h1>

// //       {/* Category Tabs */}
// //       <div className="flex space-x-4 mb-8">
// //         {["ALL", "LEAFY GREENS", "ROOT VEGETABLES", "FRUITS & PODS", "OTHERS"].map(
// //           (category, index) => (
// //             <button
// //               key={index}
// //               className={`px-4 py-2 rounded-md text-sm font-medium ${
// //                 index === 0 ? "bg-white text-black" : "bg-gray-800 text-white"
// //               }`}
// //             >
// //               {category}
// //             </button>
// //           )
// //         )}
// //       </div>

// //       {/* Vegetable Items */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
// //         {vegetableItems.map((item) => (
// //           <div
// //             key={item.id}
// //             className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
// //           >
// //             <img
// //               src={item.vegetableImage || "/default-vegetable.jpg"} // Use a default image if image is null
// //               alt={item.name}
// //               className="w-full h-40 object-cover"
// //             />
// //             <div className="p-4">
// //               <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
// //               <p className="text-sm text-gray-400 mb-4">{item.description}</p>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-lg font-bold">${item.price?.toFixed(2)}</span>
// //                 <button
// //                   onClick={() => handleAddToCart(item)}
// //                   className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium"
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Cart Popup */}
// //       {isCartOpen && (
// //         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20 backdrop-blur-md">
// //           <div className={`bg-gray-800 p-6 rounded-lg ${isOrderView ? "w-[800px]" : "w-[400px]"} shadow-lg`}>
// //             <h2 className="text-xl font-bold mb-4">{isOrderView ? "Order Details" : "YOUR CART"}</h2>
// //             {/* Cart and Order Form Logic Goes Here */}
// //           </div>
// //         </div>
// //       )}

// //       <div>
// //         {/* Cart Button with Item Count */}
// //         <button
// //           onClick={() => setIsCartOpen((prev) => !prev)}
// //           className="fixed bottom-12 right-12 px-4 py-2 bg-green-700 text-black rounded-full font-medium shadow-md z-30 flex items-center justify-center"
// //         >
// //           <img
// //             src="/icons/cart.png"
// //             alt="Cart"
// //             className="w-10 h-10 mr-2"
// //           />
// //           ({cart.length})
// //         </button>
// //       </div>

// //     </section>
// //   );
// // };

// // export default OurMenu;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const OurMenu = () => {
//   const [vegetableItems, setVegetableItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [favorites, setFavorites] = useState([]); // State to manage favorite items
//   const [isFavoritesOpen, setIsFavoritesOpen] = useState(false); // State to manage favorites popup visibility

//   // Fetch vegetable data from the backend
//   useEffect(() => {
//     const fetchVegetableItems = async () => {
//       try {
//         const response = await axios.get("http://localhost:8081/api/vegetable/");
//         setVegetableItems(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch vegetable items.");
//         setLoading(false);
//       }
//     };

//     fetchVegetableItems();
//   }, []);

//   const handleAddToFavorites = (item) => {
//     setFavorites((prevFavorites) => {
//       const existingItem = prevFavorites.find((favItem) => favItem.id === item.id);
//       if (!existingItem) {
//         return [...prevFavorites, item];
//       }
//       return prevFavorites;
//     });
//   };

//   const handleRemoveFromFavorites = (itemId) => {
//     setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== itemId));
//   };

//   if (loading) {
//     return <div className="text-white text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   return (
//     <section
//       id="ourmenu"
//       className="min-h-screen bg-black text-green-600 flex flex-col justify-center items-center bg-cover bg-center px-4 pt-[100px]"
//     >
//       <h1 className="text-2xl font-bold mb-4">OUR FRESH & HEALTHY VEGETABLES</h1>

//       {/* Category Tabs */}
//       <div className="flex space-x-4 mb-8">
//         {["ALL", "LEAFY GREENS", "ROOT VEGETABLES", "FRUITS & PODS", "OTHERS"].map(
//           (category, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 rounded-md text-sm font-medium ${
//                 index === 0 ? "bg-white text-black" : "bg-gray-800 text-white"
//               }`}
//             >
//               {category}
//             </button>
//           )
//         )}
//       </div>

//       {/* Vegetable Items */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
//         {vegetableItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
//           >
//             <img
//               src={item.vegetableImage || "/default-vegetable.jpg"} // Use a default image if image is null
//               alt={item.name}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
//               <p className="text-sm text-gray-400 mb-4">{item.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">${item.price?.toFixed(2)}</span>
//                 <button
//                   onClick={() => handleAddToFavorites(item)}
//                   className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium"
//                 >
//                   Add to Favorites
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Favorites Popup */}
//       {isFavoritesOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20 backdrop-blur-md">
//           <div className="bg-gray-800 p-6 rounded-lg w-[400px] shadow-lg">
//             <h2 className="text-xl font-bold mb-4">YOUR FAVORITES</h2>
//             <div className="space-y-4">
//               {favorites.map((item) => (
//                 <div key={item.id} className="flex justify-between items-center border-b py-3">
//                   <span>{item.name}</span>
//                   <button
//                     onClick={() => handleRemoveFromFavorites(item.id)}
//                     className="text-red-500"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={() => setIsFavoritesOpen(false)}
//                 className="bg-red-500 text-white px-4 py-2 rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div>
//         {/* Favorites Button with Item Count */}
//         <button
//           onClick={() => setIsFavoritesOpen((prev) => !prev)}
//           className="fixed bottom-12 right-12 px-4 py-2 bg-green-700 text-black rounded-full font-medium shadow-md z-30 flex items-center justify-center"
//         >
//           <img
//             src="/icons/heart.png"
//             alt="Favorites"
//             className="w-10 h-10 mr-2"
//           />
//           ({favorites.length})
//         </button>
//       </div>

//     </section>
//   );
// };

// export default OurMenu;


import React, { useState, useEffect } from "react";
import axios from "axios";

const OurMenu = () => {
  const [vegetableItems, setVegetableItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Fetch vegetable data from the backend
  useEffect(() => {
    const fetchVegetableItems = async () => {
      try {
        const endpoint = selectedCategory === "ALL" 
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

    fetchVegetableItems();
  }, [selectedCategory]);

  const handleAddToFavorites = (item) => {
    setFavorites((prevFavorites) => {
      const existingItem = prevFavorites.find((favItem) => favItem.id === item.id);
      if (!existingItem) {
        return [...prevFavorites, item];
      }
      return prevFavorites;
    });
  };

  const handleRemoveFromFavorites = (itemId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== itemId));
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
    <section
      id="ourmenu"
      className="min-h-screen bg-black text-green-600 flex flex-col  items-center bg-cover bg-center px-4 pt-[100px]"
    >
      <h1 className="text-2xl font-bold mb-4">OUR FRESH & HEALTHY VEGETABLES</h1>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-8">
        {["ALL", "LEAFY GREENS", "ROOT VEGETABLES", "FRUITS", "HERBS"].map(
          (category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedCategory === category ? "bg-white text-black" : "bg-gray-800 text-white"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Vegetable Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {vegetableItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={item.vegetableImage || "/default-vegetable.jpg"}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-sm text-gray-400 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${item.price?.toFixed(2)}</span>
                <button
                  onClick={() => handleAddToFavorites(item)}
                  className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium"
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Favorites Popup */}
      {isFavoritesOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20 backdrop-blur-md">
          <div className="bg-gray-800 p-6 rounded-lg w-[400px] shadow-lg">
            <h2 className="text-xl font-bold mb-4">YOUR FAVORITES</h2>
            <div className="space-y-4">
              {favorites.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-3">
                  <span>{item.name}</span>
                  <button
                    onClick={() => handleRemoveFromFavorites(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsFavoritesOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        {/* Favorites Button with Item Count */}
        <button
          onClick={() => setIsFavoritesOpen((prev) => !prev)}
          className="fixed bottom-12 right-12 px-4 py-2 bg-green-700 text-black rounded-full font-medium shadow-md z-30 flex items-center justify-center"
        >
          <img
            src="/heart.png"
            alt="Favorites"
            className="w-10 h-10 mr-2"
          />
          ({favorites.length})
        </button>
      </div>
    </section>
  );
};

export default OurMenu;