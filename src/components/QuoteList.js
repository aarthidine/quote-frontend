import React from "react";
import axios from "axios";

// ✅ LIVE BACKEND URL
const API = "https://quote-backend-veyt.onrender.com/quotes";

function QuoteList({ quotes, fetchQuotes }) {

  // 🗑️ DELETE FUNCTION
  const deleteQuote = async (id) => {
    try {
      if (!id) {
        console.error("❌ ID is undefined");
        return;
      }

      await axios.delete(`${API}/${id}`);
      fetchQuotes(); // refresh after delete

    } catch (error) {
      console.error("❌ Delete error:", error);
    }
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h2>All Quotes</h2>

      {quotes.length === 0 ? (
        <p>No quotes available</p>
      ) : (
        quotes.map((q) => {
          
          // 🔥 DEBUG (IMPORTANT)
          console.log("Quote object:", q);

          return (
            <div
              key={q.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px auto",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                width: "90%",
                maxWidth: "500px"
              }}
            >
              <p><strong>"{q.text}"</strong></p>
              <p>- {q.author}</p>

              <button
                onClick={() => deleteQuote(q.id)}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px"
                }}
              >
                Delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default QuoteList;