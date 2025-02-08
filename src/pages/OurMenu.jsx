


import React, { useState, useEffect } from "react";
import axios from "axios";

const OurMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]); // State to manage cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart popup visibility
  const [isOrderView, setIsOrderView] = useState(false); // State to manage order form view
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  }); // User details state

  // Fetch menu data from the backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/vegetable/");
        setMenuItems(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch menu items.");
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const handleToggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Increase the quantity of an item
  const handleIncreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease the quantity of an item
  const handleDecreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleOrderClick = () => {
    setIsOrderView(true); // Switch to the order view
  };

  const handleBackToCart = () => {
    setIsOrderView(false); // Go back to the cart view
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleConfirmOrder = () => {
    // Implement order confirmation logic (e.g., send data to backend)
    alert("Order confirmed! Thank you.");
    setIsCartOpen(false); // Close cart after confirmation
    setCart([]); // Clear the cart
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
      className="min-h-screen bg-black text-orange-600 flex flex-col justify-center items-center bg-cover bg-center px-4 pt-[100px]"
    >
      <h1 className="text-2xl font-bold mb-4">OUR BEST & DELICIOUS MENU</h1>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-8">
        {["ALL", "DOSAS, IDLIS & MORE", "MAIN COURSE", "SNACKS", "BEVERAGES"].map(
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

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={item.foodImage || "/dhosa.jpg"} // Use a default image if foodImage is null
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-sm text-gray-400 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${item.price?.toFixed(2)}</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      {/* Cart Popup */}
      {isCartOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20 backdrop-blur-md">
          <div className={`bg-customBlack1 p-6 rounded-lg ${isOrderView ? "w-[800px]" : "w-[400px]"} shadow-lg`}>
            <h2 className="text-xl font-bold mb-4">{isOrderView ? "Order Details" : "YOUR CART"}</h2>
            {!isOrderView ? (
              <>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b py-3">
                      <div className="flex items-center">
                        <span className="font-sans">{item.name}</span> x{" "}
                        <span className="font-semibold">{item.quantity}</span>
                      </div>
                      <div className="flex items-center">
                        {/* Decrease Quantity Button */}
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-300 text-black rounded-md mx-2"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>

                        {/* Increase Quantity Button */}
                        <button
                          onClick={() => handleIncreaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-300 text-black rounded-md mx-2"
                        >
                          +
                        </button>

                        {/* Remove Item Button */}
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-red-500 ml-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between">
                  <span className="font-bold">Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                  <div className="flex gap-1">
                    <button
                      onClick={handleOrderClick}
                      className="bg-white text-black px-4 py-2 rounded-md"
                    >
                      Order
                    </button>
                    <button
                      onClick={handleToggleCart}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={handleBackToCart}
                    className="bg-white text-black px-4 py-2 rounded-md"
                  >
                    Back to Cart
                  </button>
                  <button
                    onClick={handleConfirmOrder}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Confirm Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

<div>
  {/* Cart Button with Item Count */}
  <button
    onClick={handleToggleCart}
    className="fixed bottom-12 right-12 px-4 py-2 bg-gray-700 text-black rounded-full font-medium shadow-md z-30 flex items-center justify-center"
  >
    <img
      src="/icons/trolley.png" // Update the path to the correct relative path of your image
      alt="Cart"
      className="w-10 h-10 mr-2" // Adjust the size of the icon here
    />
    ({cart.length})
  </button>
</div>


    </section>
  );
};

export default OurMenu;
