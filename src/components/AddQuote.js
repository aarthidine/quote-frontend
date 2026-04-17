import React, { useState } from "react";
import axios from "axios";

// ✅ LIVE BACKEND URL
const API = "https://quote-backend-veyt.onrender.com/quotes";

function AddQuote({ fetchQuotes }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const addQuote = async (e) => {
    e.preventDefault();

    // 🔥 DEBUG CHECK (IMPORTANT)
    console.log("BUTTON CLICKED");

    if (!text || !author) {
      alert("Please enter both quote and author");
      return;
    }

    try {
      setLoading(true);

      await axios.post(API, {
        text,
        author,
      });

      setText("");
      setAuthor("");
      fetchQuotes();

    } catch (error) {
      console.error("Add error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={addQuote}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        marginBottom: "20px",
        padding: "10px"
      }}
    >
      <input
        type="text"
        placeholder="Enter quote"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          width: "90%",
          maxWidth: "400px"
        }}
      />

      <input
        type="text"
        placeholder="Enter author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{
          padding: "10px",
          width: "90%",
          maxWidth: "400px"
        }}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: loading ? "#999" : "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          width: "150px"
        }}
      >
        {loading ? "Adding..." : "Add Quote"}
      </button>
    </form>
  );
}

export default AddQuote;