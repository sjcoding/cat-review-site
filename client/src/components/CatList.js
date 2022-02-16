import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const CatList = (props) => {
  debugger;
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
      //debugger;
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  const catListItems = cats.map((cat) => {
    return (
    <li key={cat.id}> 
    <Link to={`/cats/${cat.id}`}>
	    {cat.name}
    </Link>
	 </li>
    )
  });

  return (
    <>
      <h2>Rate My Cat!</h2>
      <div>{catListItems}</div>
    </>
  );
};

export default CatList;
