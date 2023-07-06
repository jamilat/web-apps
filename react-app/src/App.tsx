import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Sydney", "Melbourne", "Hobart", "Vancouver", "Victoria"];
  
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default ListGroup;
