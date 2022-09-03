import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;

function List() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    setTodos([...todos, newItem]);
  };

  var btnType = maxLength === todos.length ? true : false;

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  console.log(todos);
  return (
    <div>
      <AddItem btnType={btnType} handleAdd={handleAdd} />
      <ul>
        {todos.map((item) => (
          <ListItem
            title={item.title}
            status={item.status}
            key={item.id}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
