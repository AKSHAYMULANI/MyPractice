import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function getUsers() {
  return fetch("https://reqres.in/api/users").then((res) => res.json());
}

export function UsersPage() {
  const [data, setData] = useState({});

  useEffect(() => {
    getUsers().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {data?.data?.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/users/${item.id}`}>{item.first_name}</Link>
          </div>
        );
      })}
    </div>
  );
}
