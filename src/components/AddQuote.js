import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:8080/quotes";

function AddQuote({ fetchQuotes }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  // ➕ ADD QUOTE
  const addQuote = async () => {
    if (!text || !author) {
      alert("Please enter both quote and author");
      return;
    }

    try {
      await axios.post(API, {
        text: text,
        author: author,
      });

      // Clear input fields
      setText("");
      setAuthor("");

      // Refresh quotes list
      fetchQuotes();

    } catch (error) {
      console.error("Add error:", error);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter quote"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button onClick={addQuote}>
        Add Quote
      </button>
    </div>
  );
}

export default AddQuote;