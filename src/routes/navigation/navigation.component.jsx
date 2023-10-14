import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOut = async (event) => {
    event.preventDefault();
    try {
      await signOutUser;
      setCurrentUser(null);
    } catch (error) {
      console.log(error);
    }
  };

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
          {currentUser ? (
            <div className="nav-link" onClick={signOut}>
              Sign Out
            </div>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
