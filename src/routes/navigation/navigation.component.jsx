import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div>
           <Logo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
