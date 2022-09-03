import { useEffect, useState } from "react";
import getUsers from "./api";
import { TodoItem } from "./TodoItem";

export function SearchUSers() {
  const [Query, setQuery] = useState("");
  const [Data, setData] = useState([]);
  const [Page, setPage] = useState(1);

  useEffect(() => {
    getData(Page, Query);
  }, [Page, Query]);

  function getData(page, Q) {
    getUsers({
      q: Q,
      page: page,
      limit: 5
    })
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => console.log(err));
  }
  console.log(Data);

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)} value={Query} />
      <button
        onClick={() => {
          getData(Page, Query);
          setPage(1);
        }}
      >
        Search
      </button>
      <TodoItem data={Data} />
      <button disabled={Page === 1} onClick={() => setPage(Page - 1)}>
        PREV
      </button>
      <button disabled>{Page}</button>
      <button
        disabled={Page === Data.length - 1}
        onClick={() => setPage(Page + 1)}
      >
        NEXT
      </button>
    </div>
  );
}
