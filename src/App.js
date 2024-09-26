import "./App.css";
import ScrollIndicator from "./scroll-indicator";

function App() {
  return (
    <div className="App">
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
