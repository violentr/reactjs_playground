import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const cities = ["New York", "London", "Tokyo"];
  const handleSelectItem = (item: string) => console.log(item);
  return (
    <>
      <div>
        <Alert>Hello World!</Alert>
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
