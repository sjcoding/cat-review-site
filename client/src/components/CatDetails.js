import React, { useState, useEffect } from "react";

const CatDetails = (props) => {
  const [cat, setCat] = useState({});

  const catId = props.match.params.id;

  const getCatDetails = async () => {
    try {
      const getCatData = await fetch(`/api/v1/cats/${catId}`); //props.match.params.id
      if (!getCatData.ok) {
        const errorMessage = `${getCatData.status} (${getCatData.statusText})}`;
        const error = new Error(errorMessage);
        throw error;
      }
      const fetchedCat = await getCatData.json();
      setCat(fetchedCat.cat);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getCatDetails();
  }, []);

  return (
    <>
    <h2 id="name">{cat.name}</h2>
    <p id="location">{cat.description}</p>
    </>
  )
};

export default CatDetails
