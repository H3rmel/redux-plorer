import { AirplaneTakeoff } from "phosphor-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        ReduXplorer
        <AirplaneTakeoff size={28} />
      </Link>
      <div className="header-nav">
        <Link to="/books">Minhas reservas</Link>
        <span>0 Reservas</span>
      </div>
    </header>
  );
};
