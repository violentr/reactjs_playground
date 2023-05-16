import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["New York", "London", "Tokyo"];
  const handleSelectItem = (item: string) => console.log(item);
  return (
    <>
      <div>
        <ListGroup
          items={cities}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
