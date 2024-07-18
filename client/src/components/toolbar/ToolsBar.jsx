import { useNavigate, NavLink } from "react-router-dom";
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
      <NavLink to="/">
        <img className="logo" src="../../../assets/WPT.png" alt="logo wp-t" />
      </NavLink>
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
            <NavLink to="/addplant">
              <button className="navButton" type="button">
                Add Plant
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar">
              <button className="navButton" type="button">
                Calendar
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <button className="navButton" type="button">
                {user?.username} Page
              </button>
            </NavLink>
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
