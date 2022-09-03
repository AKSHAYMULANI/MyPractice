export function TodoItem({ data }) {
  return (
    <div>
      {data.map((item) => {
        return <h1 key={item.id}>{item.login}</h1>;
      })}
    </div>
  );
}
