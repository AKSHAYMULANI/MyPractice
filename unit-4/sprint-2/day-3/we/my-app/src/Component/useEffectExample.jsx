import { useEffect, useState } from "react";
// EXPLORE THE CODESANDBOX

export default function UseEffectExample() {
  const [value, setValue] = useState(0);
  console.log(`1`, Date.now());
  // // after render
  // // side effect

  // callback, dependencies
  // the useEffect is not dependent on anything
  useEffect(() => {
    document.title = `User clicked ${value} times`;
  }, [value]);
  // MOUNTING
  // ON LOAD, ON MOUNT
  // ON COMPONENT LOAD

  console.log(`2`);
  return (
    <div className="App">
      <h1>value {value}</h1>
      <button onClick={() => setValue(value + 1)}>ADD</button>
    </div>
  );
}
