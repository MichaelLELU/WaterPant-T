import { Link, useOutletContext } from "react-router-dom";
import PlantPanel from "../../components/plantpanel/PlantPanel";

export default function UserPage() {
  const { user } = useOutletContext();

  return (
    <>
      <h1>Hello {user?.username}</h1>
      <PlantPanel />
      <Link to="/addplant">
        <button type="button" className="buttonForm">
          Add a Plant
        </button>
      </Link>
    </>
  );
}
