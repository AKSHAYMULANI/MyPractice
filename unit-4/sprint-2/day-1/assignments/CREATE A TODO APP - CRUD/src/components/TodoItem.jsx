function TodoItem({ id, title, status, handleToggle, handleDelete }) {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "20px",
        padding: "2rem",
        border: "1px solid blue",
        borderRadius: "2rem",
        gap: "2rem"
      }}
    >
      <div>{title}</div>
      <div>{status ? "Done" : "Not Done"}</div>
      <button onClick={() => handleToggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}
export default TodoItem;
