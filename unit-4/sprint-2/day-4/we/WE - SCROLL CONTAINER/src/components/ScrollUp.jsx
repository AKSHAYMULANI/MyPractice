import { useRef } from "react";

function ScrollExample() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.scrollTop = 0;
  };
  const data = new Array(100).fill(0).map((item, i) => <li key={i}>{i}</li>);
  return (
    <div>
      <div
        ref={ref}
        style={{
          border: "1px solid black",
          height: "200px",
          overflowY: "scroll"
        }}
      >
        <ul>{data}</ul>
      </div>
      <button onClick={handleClick}>Scroll to Top</button>
    </div>
  );
}

export default ScrollExample;
