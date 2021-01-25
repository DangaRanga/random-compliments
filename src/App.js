import { useEffect, useState } from "react";
import "./App.css";

const useFetch = (url) => {
  const [compliment, setCompliment] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetches for the compliment
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const recievedCompliment = data.compliment;
    setCompliment(recievedCompliment);
    setLoading(false);
  }, []);

  return { compliment, loading };
};
function App() {
  const { compliment, loading } = useFetch(`https://complimentr.com/api`);
  return (
    <div className="wrapper">
      <div className="container">
        <div id="colon">"</div>
        {loading ? (
          <div className="content">Loading Compliment...</div>
        ) : (
          compliment && (
            <div className="content">
              {compliment.charAt(0).toUpperCase() + compliment.slice(1)}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
