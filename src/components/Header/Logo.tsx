import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/">
      <img
        width={84}
        src={logo}
        alt="È uma imagem de um copo de café e escrito no lado coffee delivery"
      />
    </Link>
  );
}
