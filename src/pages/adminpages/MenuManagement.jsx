
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const MenuManagement = () => {
// //   const [menuItems, setMenuItems] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Fetch menu data from the backend
// //   useEffect(() => {
// //     const fetchMenuItems = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8081/api/food/");
// //         setMenuItems(response.data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError("Failed to fetch menu items.");
// //         setLoading(false);
// //       }
// //     };

// //     fetchMenuItems();
// //   }, []);

// //   if (loading) {
// //     return <div className="text-white text-center">Loading...</div>;
// //   }

// //   if (error) {
// //     return <div className="text-red-500 text-center">{error}</div>;
// //   }

// //   return (
// //     <section
// //       id="ourmenu"
// //       className="min-h-screen bg-black text-orange-600 flex flex-col justify-center items-center bg-cover bg-center px-4 pt-[10px]"
// //     >
// //       <h1 className="text-2xl font-bold mb-4">MENU</h1>

// //       {/* Category Tabs */}
// //       <div className="flex space-x-4 mb-8">
// //         {[
// //           "ALL",
// //           "DOSAS, IDLIS & MORE",
// //           "MAIN COURSE",
// //           "SNACKS",
// //           "BEVERAGES",
          
// //         ].map((category, index) => (
// //           <button
// //             key={index}
// //             className={`px-4 py-2 rounded-md text-sm font-medium ${
// //               index === 0 ? "bg-white text-black" : "bg-gray-800 text-white"
// //             }`}
// //           >
// //             {category}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Menu Items */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
// //         {menuItems.map((item) => (
// //           <div
// //             key={item.id}
// //             className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
// //           >
// //             <img
// //               src={item.foodImage || "/dhosa.jpg"} // Use a default image if foodImage is null
// //               alt={item.name}
// //               className="w-full h-40 object-cover"
// //             />
// //             <div className="p-4">
// //               <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
// //               <p className="text-sm text-gray-400 mb-4">{item.description}</p>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-lg font-bold">${item.price?.toFixed(2)}</span>
// //                 <button className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium">
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* See All Button */}
// //       <button className="mt-8 px-6 py-2 bg-white text-black rounded-full font-medium shadow-md">
// //         See All
// //       </button>
// //     </section>
// //   );
// // };

// // export default MenuManagement;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MenuManagement = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showAddFoodPopup, setShowAddFoodPopup] = useState(false);
//   const [showEditFoodPopup, setShowEditFoodPopup] = useState(false);
//   const [editingFood, setEditingFood] = useState(null); // Food item being edited

//   // Fetch menu data from the backend
//   useEffect(() => {
//     const fetchMenuItems = async () => {
//       try {
//         const response = await axios.get("http://localhost:8081/api/vegetable/");
//         setMenuItems(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch menu items.");
//         setLoading(false);
//       }
//     };

//     fetchMenuItems();
//   }, []);

//   const handleAddFood = async (newFoodItem) => {
//     try {
//       const response = await axios.post("http://localhost:8081/api/vegetable/create", newFoodItem, {
//         headers: { "Content-Type": "application/json" },
//       });

//       // Add the new item to the existing menu items
//       setMenuItems((prevItems) => [...prevItems, response.data]);
//       setShowAddFoodPopup(false); // Close popup after successful addition
//       alert("Food item added successfully!");
//     } catch (err) {
//       console.error("Error adding food item:", err);
//       alert("Failed to add food item.");
//     }
//   };

//   const handleEditFood = async (updatedFoodItem) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:8081/api/food/${editingFood.id}`,
//         updatedFoodItem,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       setMenuItems((prevItems) =>
//         prevItems.map((item) =>
//           item.id === editingFood.id ? { ...item, ...response.data } : item
//         )
//       );
//       setShowEditFoodPopup(false);
//       setEditingFood(null);
//       alert("Food item updated successfully!");
//     } catch (err) {
//       console.error("Error updating food item:", err);
//       alert("Failed to update food item.");
//     }
//   };

//   const handleDeleteFood = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8081/api/food/${id}`);
//       setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
//       alert("Food item deleted successfully!");
//     } catch (err) {
//       console.error("Error deleting food item:", err);
//       alert("Failed to delete food item.");
//     }
//   };



//   if (loading) {
//     return <div className="text-white text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   return (
//     <section
//       id="menumanagement"
//       className="min-h-screen bg-black text-orange-600 flex flex-col justify-center items-center bg-cover bg-center px-4 pt-[10px]"
//     >
//         <div className="flex items-center justify-between w-full mb-4">
//             <h1 className="text-2xl font-bold">MENU</h1>

//             {/* Add Food Button */}
//             <button
//                 onClick={() => setShowAddFoodPopup(true)}
//                 className="px-6 py-2 bg-[#EF4B25] text-white rounded-full font-medium shadow-md"
//             >
//                 Add Food
//             </button>
//         </div>

      

//       {/* Category Tabs */}
//       <div className="flex space-x-4 mb-8">
//         {[
//           "ALL",
//           "DOSAS, IDLIS & MORE",
//           "MAIN COURSE",
//           "SNACKS",
//           "BEVERAGES",
//         ].map((category, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               index === 0 ? "bg-white text-black" : "bg-gray-800 text-white"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Menu Items */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
//         {menuItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
//           >
//             <img
//               src={item.foodImage || "/dhosa.jpg"} // Use a default image if foodImage is null
//               alt={item.name}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
//               <p className="text-sm text-gray-400 mb-4">{item.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">${item.price?.toFixed(2)}</span>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => {
//                       setEditingFood(item);
//                       setShowEditFoodPopup(true);
//                     }}
//                     className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteFood(item.id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

      

//       {/* Add Food Popup */}
//       {showAddFoodPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-md">
//           <div className="bg-customBlack1 rounded-lg shadow-lg p-6 w-96 ">
//             <h2 className="text-lg font-bold mb-4">Add New Food Item</h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const newFoodItem = {
//                   name: e.target.name.value,
//                   description: e.target.description.value,
//                   price: parseFloat(e.target.price.value),
//                   foodImage: e.target.foodImage.value,
//                 };
//                 handleAddFood(newFoodItem);
//               }}
//             >
//               <div className="mb-4">
//                 <label className="block font-medium mb-1 text-gray-500">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   className="w-full px-3 py-2 border rounded-md text-black"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block font-medium mb-1 text-gray-500">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   required
//                   step="0.01"
//                   className="w-full px-3 py-2 border rounded-md text-black"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block font-medium mb-1 text-gray-500">Description</label>
//                 <textarea
//                   name="description"
//                   required
//                   className="w-full px-3 py-2 border rounded-md text-black"
//                 ></textarea>
//               </div>

//               <div className="mb-4">
//                     <label className="block font-medium mb-1 text-gray-500">Food Category</label>
//                     <select
//                         name="category"
//                         required
//                         className="w-full px-3 py-2 border rounded-md bg-white text-black"
//                     >
//                         <option value="" disabled selected>
//                         Select a category
//                         </option>
//                         <option value="dosa">Dosas, Idlis & More</option>
//                         <option value="main-course">Main Course</option>
//                         <option value="snacks">Snacks</option>
//                         <option value="beverages">Beverages</option>
//                     </select>
//                 </div>

              
//               <div className="mb-4">
//                 <label className="block font-medium mb-1 text-gray-500">Image URL</label>
//                 <input
//                   type="url"
//                   name="foodImage"
//                   className="w-full px-3 py-2 border rounded-md text-black"
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowAddFoodPopup(false)}
//                   className="px-4 py-2 bg-gray-300 text-black rounded-md"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-[#EF4B25] text-white rounded-md"
//                 >
//                   Add
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Edit Food Popup */}
//       {showEditFoodPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-md">
//           <div className="bg-customBlack1 rounded-lg shadow-lg p-6 w-96">
//             <h2 className="text-lg font-bold mb-4">Edit Food Item</h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const updatedFoodItem = {
//                   name: e.target.name.value,
//                   price: parseFloat(e.target.price.value),
//                   description: e.target.description.value,
//                   category: e.target.category.value,
//                   foodImage: e.target.foodImage.value,
//                 };
//                 handleEditFood(updatedFoodItem);
//               }}
//             >
//               <div className="mb-4">
//                 <label className="block font-medium mb-1 text-gray-500">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   defaultValue={editingFood.name}
//                   required
//                   className="w-full px-3 py-2 border rounded-md text-black"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block font-medium mb-1 text-gray-500">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   defaultValue={editingFood.price}
//                   required
//                   step="0.01"
//                   className="w-full px-3 py-2 border rounded-md text-black"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block font-medium mb-1 text-gray-500">Description</label>
//                 <textarea
//                   name="description"
//                   defaultValue={editingFood.description}
//                   required
//                   className="w-full px-3 py-2 border rounded-md text-black"
//                 ></textarea>
//               </div>
//               <div className="mb-4">
//                 <label className="block font-medium mb-1 text-gray-500">Food Category</label>
//                 <select
//                   name="category"
//                   defaultValue={editingFood.category}
//                   required
//                   className="w-full px-3 py-2 border rounded-md bg-white text-black"
//                 >
//                   <option value="dosa">Dosas, Idlis & More</option>
//                   <option value="main-course">Main Course</option>
//                   <option value="snacks">Snacks</option>
//                   <option value="beverages">Beverages</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block font-medium mb-1 text-gray-500">Image URL</label>
//                 <input
//                   type="url"
//                   name="foodImage"
//                   defaultValue={editingFood.foodImage}
//                   className="w-full px-3 py-2 border rounded-md text-black"
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowEditFoodPopup(false)}
//                   className="px-4 py-2 bg-gray-300 text-black rounded-md"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default MenuManagement;



import React, { useState, useEffect } from "react";
import axios from "axios";

const VegetableManagement = () => {
  const [vegetableItems, setVegetableItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddVegetablePopup, setShowAddVegetablePopup] = useState(false);
  const [showEditVegetablePopup, setShowEditVegetablePopup] = useState(false);
  const [editingVegetable, setEditingVegetable] = useState(null); // Vegetable item being edited

  // Fetch vegetable data from the backend
  useEffect(() => {
    const fetchVegetableItems = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/vegetable/");
        setVegetableItems(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch vegetable items.");
        setLoading(false);
      }
    };

    fetchVegetableItems();
  }, []);

  const handleAddVegetable = async (newVegetableItem) => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/vegetable/create",
        newVegetableItem,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Add the new item to the existing vegetable items
      setVegetableItems((prevItems) => [...prevItems, response.data]);
      setShowAddVegetablePopup(false); // Close popup after successful addition
      alert("Vegetable item added successfully!");
    } catch (err) {
      console.error("Error adding vegetable item:", err);
      alert("Failed to add vegetable item.");
    }
  };

  const handleEditVegetable = async (updatedVegetableItem) => {
    try {
      const response = await axios.put(
        `http://localhost:8081/api/vegetable/${editingVegetable.id}`,
        updatedVegetableItem,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setVegetableItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingVegetable.id ? { ...item, ...response.data } : item
        )
      );
      setShowEditVegetablePopup(false);
      setEditingVegetable(null);
      alert("Vegetable item updated successfully!");
    } catch (err) {
      console.error("Error updating vegetable item:", err);
      alert("Failed to update vegetable item.");
    }
  };

  const handleDeleteVegetable = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/vegetable/${id}`);
      setVegetableItems((prevItems) => prevItems.filter((item) => item.id !== id));
      alert("Vegetable item deleted successfully!");
    } catch (err) {
      console.error("Error deleting vegetable item:", err);
      alert("Failed to delete vegetable item.");
    }
  };

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <section
      id="vegetablemanagement"
      className="min-h-screen bg-black text-orange-600 flex flex-col justify-center items-center bg-cover bg-center px-4 pt-[10px]"
    >
      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="text-2xl font-bold">VEGETABLES</h1>

        {/* Add Vegetable Button */}
        <button
          onClick={() => setShowAddVegetablePopup(true)}
          className="px-6 py-2 bg-[#EF4B25] text-white rounded-full font-medium shadow-md"
        >
          Add Vegetable
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-8">
        {["ALL", "LEAFY GREENS", "ROOT VEGETABLES", "FRUITS", "HERBS"].map(
          (category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                index === 0 ? "bg-white text-black" : "bg-gray-800 text-white"
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
              src={item.vegetableImage || "/default-vegetable.jpg"} // Use a default image if vegetableImage is null
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-sm text-gray-400 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${item.price?.toFixed(2)}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingVegetable(item);
                      setShowEditVegetablePopup(true);
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteVegetable(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Vegetable Popup */}
      {showAddVegetablePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-md">
          <div className="bg-customBlack1 rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Add New Vegetable</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newVegetableItem = {
                  name: e.target.name.value,
                  description: e.target.description.value,
                  price: parseFloat(e.target.price.value),
                  category: e.target.category.value,
                  vegetableImage: e.target.vegetableImage.value,
                };
                handleAddVegetable(newVegetableItem);
              }}
            >
              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-500">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-500">Price</label>
                <input
                  type="number"
                  name="price"
                  required
                  step="0.01"
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-500">Description</label>
                <textarea
                  name="description"
                  required
                  className="w-full px-3 py-2 border rounded-md text-black"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-500">Category</label>
                <select
                  name="category"
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                >
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  <option value="leafy-greens">Leafy Greens</option>
                  <option value="root-vegetables">Root Vegetables</option>
                  <option value="fruits">Fruits</option>
                  <option value="herbs">Herbs</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-500">Image URL</label>
                <input
                  type="url"
                  name="vegetableImage"
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddVegetablePopup(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#EF4B25] text-white rounded-md"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Vegetable Popup */}
      {showEditVegetablePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-md">
          <div className="bg-customBlack1 rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Edit Vegetable</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedVegetableItem = {
                  name: e.target.name.value,
                  price: parseFloat(e.target.price.value),
                  description: e.target.description.value,
                  category: e.target.category.value,
                  vegetableImage: e.target.vegetableImage.value,
                };
                handleEditVegetable(updatedVegetableItem);
              }}
            >
              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-500">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingVegetable.name}
                  required
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-500">Price</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={editingVegetable.price}
                  required
                  step="0.01"
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-500">Description</label>
                <textarea
                  name="description"
                  defaultValue={editingVegetable.description}
                  required
                  className="w-full px-3 py-2 border rounded-md text-black"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-500">Category</label>
                <select
                  name="category"
                  defaultValue={editingVegetable.category}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                >
                  <option value="leafy-greens">Leafy Greens</option>
                  <option value="root-vegetables">Root Vegetables</option>
                  <option value="fruits">Fruits</option>
                  <option value="herbs">Herbs</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-500">Image URL</label>
                <input
                  type="url"
                  name="vegetableImage"
                  defaultValue={editingVegetable.vegetableImage}
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowEditVegetablePopup(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default VegetableManagement;