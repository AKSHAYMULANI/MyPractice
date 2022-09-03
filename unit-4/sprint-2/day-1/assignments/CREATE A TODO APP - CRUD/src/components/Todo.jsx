const { useState } = require("react");
const { default: AddTodo } = require("./AddTodo");
const { default: TodoList } = require("./TodoList");

function Todo() {
  const [todos, setTodos] = useState([]);
  const handleAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length + Date.now(),
        title: text,
        status: false
      }
    ]);
  };

  const handleToggle = (id) => {
    const updatedData = todos.map((item) =>
      item.id === id
        ? {
            ...item,
            status: !item.status
          }
        : item
    );
    setTodos(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = todos.filter((item) => item.id !== id);
    setTodos(updatedData);
  };
  console.log(todos);
  return (
    <div>
      <AddTodo handleAdd={handleAdd} />

      <div>
        <TodoList
          data={todos.filter((item) => !item.status)}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
      <div>
        <h2>Show Completed</h2>
        <TodoList
          data={todos.filter((item) => item.status)}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
export default Todo;
