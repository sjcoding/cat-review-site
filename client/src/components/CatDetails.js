import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import RatingButton from "./RatingButton";
import CommentForm from "./CommentForm";

const CatDetails = (props) => {
  const params = useParams();
  // debugger;
  const [cat, setCat] = useState({
    reviews: [],
  });

  const catId = params.id;

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
    return <li key={review.id}>{review.review}</li>;
  });

  let showCommentPrompt = <p>Sign in to add a review!</p>;
  if (props.user) {
    showCommentPrompt = <CommentForm postComment={postComment} />;
  }

  let showRatingButtons = null;
  if (props.user) {
    showRatingButtons = <RatingButton />;
  }

  return (
    <>
      <h2 id="name">{cat.name}</h2>
      <p id="location">{cat.description}</p>
      <div> {listReviews} </div>
      <div> {showRatingButtons}</div>
      <div> {showCommentPrompt}</div>
    </>
  );
};

export default CatDetails;
