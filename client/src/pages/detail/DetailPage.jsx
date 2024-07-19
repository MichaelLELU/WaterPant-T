import { useEffect, useState } from "react";
import {
  Navigate,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import axios from "axios";
import "./DetailPage.css";

export default function DetailPage() {
  const params = useParams();
  const { user } = useOutletContext();
  const [result, setResult] = useState();
  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  };

  const apiURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPlant = async () => {
      const response = await fetch(`${apiURL}/api/plant/${user?.userid}`);
      const data = await response.json();
      setResult(data);
    };
    fetchPlant();
  }, [user?.userid, apiURL]);

  const plant = result?.find((p) => p.id === Number(params.id));

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiURL}/api/plant/${params.id}`);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return user?.role === "user" ? (
    <>
      <button type="button" onClick={handleBack} className="buttonForm">
        Return
      </button>
      <section className="Form">
        <h1>Detail / Delet</h1>
        <h2>{plant?.name}</h2>
        <h3>{plant?.surname}</h3>
        <img src={plant?.picture} alt={plant?.name} className="imageDetail" />
        <p>
          Watering Frequency: <span className="Info">{plant?.frequency}</span>
        </p>
        <p>
          Solar Exposition: <span className="Info">{plant?.exposition}</span>
        </p>
        <p className="description">"{plant?.description}"</p>

        <button type="button" onClick={handleDelete} className="deleteButton">
          Delete
        </button>
      </section>
    </>
  ) : (
    <Navigate to="/" />
  );
}
