import { useContext } from "react";
import { AppContext } from "../Contex/ContexProvider";

const getStyle = (theme) =>
  theme === "dark"
    ? {
        color: "white",
        background: "black"
      }
    : {
        color: "black",
        background: "white"
      };

function ToggleComponents() {
  const context = useContext(AppContext);
  const { toggleTheme, theme } = context;

  const style = getStyle(theme);

  return (
    <button style={style} onClick={toggleTheme}>
      TOGGLE
    </button>
  );
}

export default ToggleComponents;
