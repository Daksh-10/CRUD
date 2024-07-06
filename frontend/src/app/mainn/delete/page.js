"use client";
import axios from "axios";
import React, { useState } from "react";

export default function DeleteBook() {
  const [bookId, setBookID] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const data = {
      id: bookId,
    };
    const response = await axios
      .delete(`http://localhost:5000/delete/${bookId}`, data)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      });
  };

  return (
    <form>
      {/* Book ID */}
      <label htmlFor="ID">ID</label>
      <input
        type="text"
        id="ID"
        placeholder="Enter ID"
        value={bookId}
        onChange={(e) => setBookID(e.target.value)}
      ></input>
      <br />
      <button className="button" onClick={handleClick}>
        Delete
      </button>
    </form>
  );
}
