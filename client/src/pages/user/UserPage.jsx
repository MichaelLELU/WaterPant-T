import { useState, useEffect } from "react";
import { Link, Navigate, useOutletContext } from "react-router-dom";
import { ChevronUp, ChevronsDown } from "lucide-react";
import PlaceFilter from "../../components/plantpanel/placefilter/PlaceFilter";
import PlantSwiper from "../../components/plantpanel/plantswiper/PlantSwiper";
import "./UserPage.css";

export default function UserPage() {
  const [showDetail, setShowDetail] = useState(false);
  const { user } = useOutletContext();
  const [result, setResult] = useState();
  const [filterdPlants, setFilteredPlants] = useState(null);
  const [place, setPlace] = useState();

  const handleToggle = () => setShowDetail(!showDetail);

  useEffect(() => {
    const apiURL = import.meta.env.VITE_API_URL;

    const fetchPlant = async () => {
      if (place === undefined) {
        const response = await fetch(`${apiURL}/api/plant/${user?.userid}`);
        const data = await response.json();
        setResult(data);
      }
      if (place !== undefined) {
        const response = await fetch(`${apiURL}/api/plant/place/${place}`);
        const data = await response.json();
        setFilteredPlants(data);
      }
    };
    fetchPlant();
  }, [user?.userid, place]);

  return user?.role === "user" ? (
    <section className="userPanel">
      <h1 className="userPanelElement">Hello {user?.username}</h1>
      <span className="userPanelElement">
        <h2>Plants Management </h2>
        <button onClick={handleToggle} type="button" className="lucidButton">
          {showDetail ? (
            <ChevronUp size={40} strokeWidth={3} />
          ) : (
            <ChevronsDown size={40} strokeWidth={3} />
          )}
        </button>
      </span>
      {showDetail && (
        <>
          <PlaceFilter plants={result} filter={place} setFilter={setPlace} />
          <PlantSwiper
            plants={filterdPlants === null ? result : filterdPlants}
          />
        </>
      )}
      <Link to="/addplant" className="userPanelElement">
        <button type="button" className="buttonForm">
          Add a Plant
        </button>
      </Link>
      <Link to="/calendar" className="userPanelElement">
        <button type="button" className="buttonForm">
          Calendar
        </button>
      </Link>
    </section>
  ) : (
    <Navigate to="/" />
  );
}
