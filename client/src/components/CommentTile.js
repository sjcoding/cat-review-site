import React from "react";

const CommentTile = ({ name, review }) => {
  return (
    <div className="reviewList">
      <p> {review} </p>
    </div>
  );
};

export default CommentTile;
