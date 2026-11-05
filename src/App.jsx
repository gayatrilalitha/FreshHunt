
import { useState } from "react";

import Header from "./components/header";
import Menu from "./components/menu";
import ProductCard from "./components/productCard.jsx";

import products from "./data/products";

import "./App.css";

function App() {

  const [selectedCategory, setSelectedCategory] =
    useState("Vegetables");

  const [cart, setCart] = useState([]);

  // Filter products
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  // Add product or increase quantity
  function addToCart(product) {

    if (!product.available) return;

    setCart((previousCart) => {

      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousCart,
        { ...product, quantity: 1 }
      ];
    });
  }

  // Decrease quantity
  function decreaseQuantity(id) {

    setCart((previousCart) => {

      return previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    });
  }

  // Calculate cart count
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app">

      <Header cartCount={cartCount} />

      <div className="main-layout">

        <Menu
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <main className="main-content">

          <h2>{selectedCategory}</h2>

          <div className="products-container">

            {filteredProducts.map((product) => {

              const cartItem = cart.find(
                (item) => item.id === product.id
              );

              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  decreaseQuantity={decreaseQuantity}
                  quantity={cartItem ? cartItem.quantity : 0}
                />
              );

            })}

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;
