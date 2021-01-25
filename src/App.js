import { useEffect, useState } from "react";
import "./App.css";

const useFetch = () => {
  const [compliment, setCompliment] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetches for the compliment
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://complimentr.com/api`);
      const data = await response.json();
      const recievedCompliment = data.compliment;
      setCompliment(recievedCompliment);
    }

    fetchData();
    setLoading(false);
  }, []);

  return { compliment, loading };
};

function App() {
  const { compliment, loading } = useFetch();
  return (
    <div className="wrapper">
      <div className="container">
        {loading ? (
          <div className="content">Loading Compliment...</div>
        ) : (
          compliment && (
            <div className="content">
              <p>{compliment.charAt(0).toUpperCase() + compliment.slice(1)}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
