import React, { useState, useEffect } from "react";
import RatingButton from "./RatingButton";
import CommentForm from "./CommentForm";
import CommentTile from "./CommentTile";

const CatDetails = (props) => {
  const [cat, setCat] = useState({
    reviews: [],
  });

  const catId = props.match.params.id;

  const postComment = async (formData) => {
    try {
      const response = await fetch(`/api/v1/cats/${catId}/reviews`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const errorMessage = `Response not ok ${response.status} (${response.statusText})`;
          const err = new Error(errorMessage);
          throw err;
        }
      } else {
        const body = await response.json();
        const updatedReviews = [...cat.reviews, body.review];
        setCat({ ...cat, reviews: updatedReviews });
      }
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

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

  const listReviews = cat.reviews.map((review) => {
    return <CommentTile key={review.id} {...review} />;
  });

  return (
    <div className="page-container">
      <h2 id="name">{cat.name}</h2>
      <p id="location">{cat.description}</p>
      <RatingButton />
      <CommentForm postComment={postComment} />
      <div> {listReviews} </div>
      <CommentTile review={cat.review} />
    </div>
  );
};

export default CatDetails;
