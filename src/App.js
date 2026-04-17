import React, { useEffect, useState } from "react";
import axios from "axios";
import AddQuote from "./components/AddQuote";
import QuoteList from "./components/QuoteList";

// ✅ LIVE BACKEND URL (Render)
const API = "https://quote-backend-veyt.onrender.com/quotes";

function App() {
  const [quotes, setQuotes] = useState([]);

  // Fetch all quotes
  const fetchQuotes = async () => {
    try {
      const res = await axios.get(API);
      setQuotes(res.data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);
  

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Quote App 🚀</h1>

      <AddQuote fetchQuotes={fetchQuotes} />
      <QuoteList quotes={quotes} fetchQuotes={fetchQuotes} />
    </div>
  );
}

// Optional clean UI styling
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px",
  },
  title: {
    color: "#333",
  },
};

export default App;