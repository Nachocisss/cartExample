import "./App.css";
import Cart from "./components/Cart/Cart.tsx";
import { Header } from "./components/Header/Header.tsx";
import ProductCard from "./components/ProductCard.tsx";
import { CartProvider, useCart } from "./context/cartContext.jsx";
import data from "./mocks/data.json";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <div className="AppContainer">
          <Header />
          <div className="content">
            {data.map((p) => {
              return <ProductCard product={p} key={p.id} />;
            })}
          </div>
          <Cart />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
