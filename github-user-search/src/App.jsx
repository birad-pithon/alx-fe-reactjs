import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from "./components/Search"

export default function App() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${username}+location:${location}+repos:>${minRepos}`
      );
      const data = await response.json();
      setUsers(data.items || []);
    } catch {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };
};
return (
  <Search
      handleSubmit={handleSubmit}
      username={username}
      setUsername={setUsername}
      location={location}
      setLocation={setLocation}
      minRepos={minRepos}
      setMinRepos={setMinRepos}
      users={users}
      loading={loading}
      error={error}
    />
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>GitHub User Search</h1>
        <Search />
      </div>
    </>
  )
}

export default App
