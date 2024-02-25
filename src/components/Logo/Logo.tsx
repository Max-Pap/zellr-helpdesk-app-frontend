import { Link } from "react-router-dom";
import "./Logo.scss";
import logo from "../../assets/images/KirppariKalleLogo.png";

export const Logo: React.FC = () => (
  <div className="logo">
    <Link className="logo__link" to="/home">
      <img
        className="logo__img"
        src={logo}
        alt="Kirppari Kalle Logo"
      />
    </Link>
  </div>
);
