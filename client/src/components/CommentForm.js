import React, { useState } from "react";

const CommentForm = (props) => {
  const [commentForm, setCommentForm] = useState({
    review: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    props.postComment(commentForm);
  };

  const onInputChange = (event) => {
    //we care about commentForm.review
    //so what are we targeting with this function
    console.log("I hope this is the current value of state: ", commentForm.review);
    setCommentForm({ review: event.currentTarget.value });
  };
  //I want to copy the state as it is, and put in a new property

  return (
    <div className="grid-container">
      <form onSubmit={onSubmit}>
        <label>
          Comment:
          <input type="text" review="review" value={commentForm.review} onChange={onInputChange} />
        </label>
        <label></label>
        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
      <p>literally anything</p>
    </div>
  );
};

export default CommentForm;
