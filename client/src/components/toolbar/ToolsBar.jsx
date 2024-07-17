import { useNavigate } from "react-router-dom";
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
    <div className="toolsbar">
      <img className="logo" src="../../../assets/WPT.png" alt="logo wp-t" />
      {user && (
        <ul>
          <li>
            <button type="button" onClick={toggleLogout}>
              Logout
            </button>
          </li>
          <li>
            <button type="button">Add Plant</button>
          </li>
          <li>
            <button type="button"> Calendar</button>
          </li>
        </ul>
      )}
    </div>
  );
}

ToolsBar.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};
