import React from "react";
import { useState, useEffect } from "react";

const CatList = (props) => {
  const [cats, setCats] = useState([]);

  const getCats = async () => {
    try {
      const catData = await fetch("");
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
};
