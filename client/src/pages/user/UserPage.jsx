import { Link, useOutletContext } from "react-router-dom";

export default function UserPage() {
  const { user } = useOutletContext();

  return (
    <>
      <h1>Hello {user?.username}</h1>
      <Link to="/addplant">
        <button type="button" className="buttonForm">
          Add a Plant
        </button>
      </Link>
    </>
  );
}
