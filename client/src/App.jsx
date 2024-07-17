import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchAuth from "./utils/auth";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchAuth().then((response) => setUser(response));
  }, []);

  return (
    <main>
      <span>
        connected as : {user?.username} role : {user?.role}
      </span>
      <Outlet context={{ user, setUser }} />
    </main>
  );
}

export default App;
