import TodoItem from "./TodoItem";
function TodoList({ data, handleToggle, handleDelete }) {
  return (
    <div
      style={{
        marginBottom: "20px"
      }}
    >
      {data.map((item) => (
        <TodoItem
          id={item.id}
          title={item.title}
          status={item.status}
          key={item.id}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
export default TodoList;
