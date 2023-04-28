import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="container">
       <Navbar />
       <ItemListContainer titulo ={"Bienvenidos a mi tienda"} />
    </div>

  );
}

export default App
