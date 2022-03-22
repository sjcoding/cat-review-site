import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
//import cat1 from "./cat1.jpeg"

const CatList = (props) => {
  console.log(props);
  const [cats, setCats] = useState([]);

  const getCats = async () => {
    try {
      const catData = await fetch("/api/v1/cats");
      if (!catData.ok) {
        const errorMessage = `${catData.status} (${catData.statusText})}`;
        const error = new Error(errorMessage);
        throw error;
      }
      const catDataJSON = await catData.json();
      setCats(catDataJSON.cats);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  const catListItems = cats.map((cat) => {
    return (
      <div class="catContainer">
        <a href={`/cats/${cat.id}`}>
          <img className="catImage" src={cat.imageURL} />
        </a>

        <Link to={`/cats/${cat.id}`}>
          <center>{cat.name}</center>
        </Link>
      </div>
    );
  });

  return (
    <>
      <h2>
        <center>Rate My Cat!</center>
        <hr class="solid"></hr>
      </h2>
      {/* <img src = "https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg"/> */}
      <Grid images={catListItems} />
    </>
  );
};

export default CatList;
