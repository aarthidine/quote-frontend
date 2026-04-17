import React from "react";
import axios from "axios";

const API = "http://localhost:8080/quotes";

function QuoteList({ quotes, fetchQuotes }) {

  // 🗑️ DELETE QUOTE
  const deleteQuote = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchQuotes(); // refresh after delete
    } catch (error) {
      console.error("Error deleting quote:", error);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>All Quotes</h2>

      {quotes.length === 0 ? (
        <p>No quotes available</p>
      ) : (
        quotes.map((q) => (
          <div
            key={q.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <p><strong>"{q.text}"</strong></p>
            <p>- {q.author}</p>

            <button
              onClick={() => deleteQuote(q.id)}
              style={{ marginTop: "5px" }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default QuoteList;