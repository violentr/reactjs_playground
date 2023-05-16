import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["New York", "London", "Tokyo"];
  return (
    <>
      <div>
        <ListGroup items={cities} heading="Cities" />
      </div>
    </>
  );
}

export default App;
