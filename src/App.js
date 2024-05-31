import "./App.css";
import { Header } from "./components/Header/Header.tsx";
import ProductCard from "./components/ProductCard.tsx";
import { CartProvider } from "./context/cartContext.jsx";
import data from "./mocks/data.json";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
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
