import React, { useState, useEffect } from "react";

const CatDetails = () => {
  const [cat, setCat] = useState({});

  const getCatDetails = async () => {
    try {
      const getCatData = await fetch(""); //props.match.params.id
      if (!getCatData.ok) {
        const errorMessage = `${getCatData.status} (${getCatData.statusText})}`;
        const error = new Error(errorMessage);
        throw error;
      }
      const catDataJSON = await getCatData.json();
      setCat(catDataJSON.cat);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getCatDetails();
  }, []);
};
