import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const RatingButton = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current rating: {count} votes </p>
      <button name="upvote" onClick={() => setCount(count + 1)}>
        <FontAwesomeIcon className={`fas fa-4x fa-flip-horizontal`} icon={faPaw} />
      </button>
      <>&nbsp;&nbsp;&nbsp;</>
      <button name="downvote" onClick={() => setCount(count - 1)}>
        <FontAwesomeIcon className={`fas fa-4x fa-flip-vertical `} icon={faPaw} />
      </button>
    </div>
  );
};

export default RatingButton;
