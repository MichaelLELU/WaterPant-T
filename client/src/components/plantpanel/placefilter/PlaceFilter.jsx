import { useNavigate } from "react-router-dom";
import { RefreshCcw } from "lucide-react";
import PropTypes from "prop-types";
import "./PlaceFilter.css";

export default function PlaceFilter({ plants, filter, setFilter }) {
  const navigate = useNavigate();
  const handleFilterPlace = (e) => {
    setFilter(e.target.value);
  };

  const refreshFilter = () => {
    setFilter(undefined);
    navigate("/");
  };

  const uniqueFilter = [];
  for (let i = 0; i < plants.length; i += 1) {
    if (!uniqueFilter.includes(plants[i].place)) {
      uniqueFilter.push(plants[i].place);
    }
  }

  return (
    <span className="filterBar">
      <button
        type="button"
        className="buttonFilter"
        onClick={refreshFilter}
        value={null}
      >
        {filter !== undefined ? <RefreshCcw size={30} /> : null}
      </button>
      {uniqueFilter.map((p) => (
        <button
          type="button"
          key={p}
          value={p}
          onClick={handleFilterPlace}
          className="buttonFilter"
        >
          {p}
        </button>
      ))}
    </span>
  );
}

PlaceFilter.propTypes = {
  plants: PropTypes.shape.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
