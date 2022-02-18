import React, { useState } from "react";

const CommentForm = (props) => {
  const [commentForm, setCommentForm] = useState({
    review: "",
  });

  // const postComment = async () => {
  //   try {
  //     const response = await fetch("/api/v1/cats", {
  //       method: "POST",
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //       }),
  //       body: JSON.stringify(commentForm),
  //     });
  //     if (!response.ok) {
  //       if (response.status === 422) {
  //         const errorMessage = `Response not ok ${response.status} (${response.statusText})`;
  //         const err = new Error(errorMessage);
  //         throw err;
  //       }
  //     }

  //     const body = await response.json();
  //     //debugger;
  //   } catch (err) {
  //     console.error(`Error in fetch: ${err.message}`);
  //   }
  // };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   postComment();
  // };

  const onInputChange = (event) => {
    //we care about commentForm.review
    //so what are we targeting with this function
    console.log("I hope this is the current value of state: ", commentForm.review);
    setCommentForm({ review: event.currentTarget.value });
  };
  //I want to copy the state as it is, and put in a new property

  return (
    <div className="grid-container">
      {/* <form onSubmit={onSubmit}>
        <label>
          Comment:
          <input type="text" review="review" value={commentForm.review} onChange={onInputChange} />
        </label>
        <label></label>
        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form> */}
      <p>literally anything</p>
    </div>
  );
};

export default CommentForm;
