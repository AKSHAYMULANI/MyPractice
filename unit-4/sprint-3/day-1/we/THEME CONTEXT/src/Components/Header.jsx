import { useContext } from "react";
import { AppContext } from "../Contex/ContexProvider";

function Header() {
  const context = useContext(AppContext);
  const { theme } = context;

  return <h2>{theme}</h2>;
}

export default Header;
