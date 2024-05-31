import "./App.css";
import Cart from "./components/Cart.tsx";
import ProductCard from "./components/ProductCard.tsx";
import { CartProvider, useCart } from "./context/cartContext.jsx";
import data from "./mocks/data.json";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <header className="App-header">
          <p>Carrito</p>
          <Cart />
        </header>
        <div className="content">
          {data.map((p) => {
            return <ProductCard product={p} key={p.id} />;
          })}
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
