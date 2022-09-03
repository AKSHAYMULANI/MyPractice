import { useContext } from "react";
import Header from "./Components/Header";
import { Todo } from "./Components/todo";
import ToggleComponents from "./Components/ToggleComponent";
import { AppContext } from "./Contex/ContexProvider";
import "./styles.css";

export default function App() {
  const value = useContext(AppContext);
  console.log(value);

  return (
    <div className="App">
      <Header />
      <ToggleComponents />
      <Todo />
    </div>
  );
}
