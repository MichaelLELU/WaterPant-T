import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import userLogout from "../../utils/logout";

import "./ToolsBar.css";

export default function ToolsBar({ user, setUser }) {
  const navigate = useNavigate();

  const toggleLogout = () => {
    userLogout()
      .then(() => setUser(null))
      .then(() => navigate("/"));
  };

  return (
    <nav className="toolsbar">
      <Link to="/">
        <img className="logo" src="../../../assets/WPT.png" alt="logo wp-t" />
      </Link>
      {user && (
        <ul>
          <li>
            <button
              className="navButton"
              id="logout"
              type="button"
              onClick={toggleLogout}
            >
              Logout
            </button>
          </li>
          <li>
            <Link to="/addplant">
              <button className="navButton" type="button">
                Add Plant
              </button>
            </Link>
          </li>
          <li>
            <button className="navButton" type="button">
              {" "}
              Calendar
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

ToolsBar.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};
