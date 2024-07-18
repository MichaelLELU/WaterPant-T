import PropTypes from "prop-types";
import "./PlantCard.css";

export default function PlantCard({ plant }) {
  return (
    <div className="cardContainer">
      <h3>{plant.surname}</h3>
      <p>{plant.name}</p>
      <img src={plant.picture} alt={plant.name} className="cardImg" />
    </div>
  );
}

PlantCard.propTypes = {
  plant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
};
