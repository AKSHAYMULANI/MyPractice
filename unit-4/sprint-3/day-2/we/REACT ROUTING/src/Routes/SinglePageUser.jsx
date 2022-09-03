import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function getUSer(id) {
  return fetch("https://reqres.in/api/users/" + id).then((res) => res.json());
}

export function SingleUserPage() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    getUSer(params.id).then((res) => {
      setData(res.data);
    });
  }, [params.id]);

  return (
    <div>
      <h1>USER ID : {params.id}</h1>
      {data && (
        <>
          <img src={data.avatar} width="100px" alt={data.avatar} />
          <h3>Name: {`${data.first_name} ${data.last_name}`}</h3>
          <h3>Email: {data.email}</h3>
        </>
      )}
      <Link to={`/users`}>Go Back</Link>
    </div>
  );
}
