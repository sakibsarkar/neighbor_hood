import Link from "next/link";
import "./index.css";

const Authbar = () => {
  return (
    <div className="splash-signup-bar">
      <span className="splash-signup-side-nav-menu">
        <div className="side-nav-menu-icon"></div>
      </span>
      <Link href="/login">
        <button className="signup-bar-login-button" type="button">
          Log in
        </button>
      </Link>
    </div>
  );
};
export default Authbar;
