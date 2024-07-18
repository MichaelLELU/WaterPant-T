import PropTypes from "prop-types";

export default function PlantCard({ plant }) {
  return (
    <div className="card">
      <h2>{plant.name}</h2>
      <img src={plant.picture} alt={plant.name} />
      <p>{plant.surname}</p>
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
