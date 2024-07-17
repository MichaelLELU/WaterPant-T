import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchAuth from "./utils/auth";
import ToolsBar from "./components/toolbar/ToolsBar";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchAuth().then((response) => setUser(response));
  }, []);

  return (
    <main>
      <p>
        {user?.username} connected as {user?.role}
      </p>
      <ToolsBar user={user} setUser={setUser} />
      <Outlet context={{ user, setUser }} />
    </main>
  );
}

export default App;
