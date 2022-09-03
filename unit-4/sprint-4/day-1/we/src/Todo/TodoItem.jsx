function TodoItem({ handleToggle,handleDelete, title, id, status }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
        marginBottom: "0.25rem"
      }}
    >
      <div>{id}</div>
      <div>{title}</div>
      <button onClick={() => handleToggle(id, !status)}>{status ? "Done" : "Not Done"}</button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
