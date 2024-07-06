"use client";
import axios from "axios";
import React, { useState } from "react";

export default function ReadBooks() {
  const [data, setData] = useState([]);
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await axios
      .get("http://localhost:5000/read")
      .then((res) => {
        setData(res.data);
      });
    console.log(data);
  };

  return (
    <form>
      <button className="button" onClick={handleClick}>
        Read
      </button>
      <ul>
        {data.map((value, index) => {
          return (
            <>
              <li key={index}>Id: {value.id}</li>
              <li>Name: {value.name}</li>
              <li> Price: {value.Price}</li>
              <br />
            </>
          );
        })}
      </ul>
    </form>
  );
}