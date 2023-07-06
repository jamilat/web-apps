// { items: [], heading: string }
import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup() { //{ items, heading, onSelectItem }: Props
    let items = ["Sydney", "Melbourne", "Hobart", "Vancouver", "Victoria"];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
      <> 
        <h1>Cities</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li 
                    className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    key={item}
                    onClick={() => { setSelectedIndex(index); }}
                >
                    {item}
                </li>
            ))}
          </ul>
      </>
    );
  }

export default ListGroup;