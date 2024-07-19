import { Navigate, useOutletContext } from "react-router-dom";

export default function AdminPage() {
  const { user } = useOutletContext();

  return user?.role === "admin" ? (
    <div>
      <h1 className="titre">Welcome Back Master {user.username}</h1>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
