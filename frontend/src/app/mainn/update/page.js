"use client";
import axios from "axios";
import React, { useState } from "react";

const url = "https://crud-dyoh.onrender.com";
// const url = 'http://localhost:5000'

export default function UpdateBook() {
  const [bookId, setBookID] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookPrice, setBookPrice] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const data = {
      id: bookId,
      name: bookName,
      Price: bookPrice,
    };
    const response = await axios
      .put(`${url}/update/${bookId}`, data)
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
      {/* Book Name */}
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        id="Name"
        placeholder="Enter Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      ></input>
      {/* BookPrice */}
      <br />
      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        placeholder="Enter Price"
        value={bookPrice}
        onChange={(e) => setBookPrice(e.target.value)}
      ></input>
      <br />
      <button className="button" onClick={handleClick}>
        {" "}
        Update
      </button>
    </form>
  );
}
