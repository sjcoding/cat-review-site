import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const RatingButton = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current rating: {count} votes </p>
      <button name="upvote" onClick={() => setCount(count + 1)}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <> </>
      <button name="downvote" onClick={() => setCount(count - 1)}>
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
    </div>
  );
};

export default RatingButton;
