import { useOutletContext } from "react-router-dom";

export default function UserPage() {
  const { user } = useOutletContext();

  return <h1>hello {user.username} !!</h1>;
}
