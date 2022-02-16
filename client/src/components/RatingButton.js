import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const RatingButton = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <p>You clicked {count} times</p>
      <button name="upvote" onClick={() => setCount(count + 1)}>
        <img src="https://img.icons8.com/pastel-glyph/64/000000/thumb-up--v2.png" />
      </button>
      <button name="downvote" onClick={() => setCount(count - 1)}>
        <img src="https://img.icons8.com/pastel-glyph/64/000000/thumbs-down--v2.png" />
      </button>
    </div>
  );
};

export default RatingButton;
