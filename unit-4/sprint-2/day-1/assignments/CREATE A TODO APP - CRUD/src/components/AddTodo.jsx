const { useState } = require("react");

function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add something"
        style={{
          marginBottom: "30px"
        }}
      />
      <button onClick={() => handleAdd(text)}>Add</button>
    </div>
  );
}
export default AddTodo;
