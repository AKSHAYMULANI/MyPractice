import { useState } from "react";

function AddItem({ handleAdd, btnType }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleAdd(text);
    setText("");
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={text}
        data-testid="input"
        placeholder="add something"
      />
      <button disabled={btnType} onClick={onClick} data-testid="add-btn">
        ADD
      </button>
    </div>
  );
}

export default AddItem;
