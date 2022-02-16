import React, { useState } from "react";

const RatingButton = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        <img src="https://img.icons8.com/pastel-glyph/64/000000/thumb-up--v2.png" />
      </button>
      <button onClick={() => setCount(count - 1)}>
        <img src="https://img.icons8.com/pastel-glyph/64/000000/thumbs-down--v2.png" />
      </button>
    </div>
  );
};

export default RatingButton;
