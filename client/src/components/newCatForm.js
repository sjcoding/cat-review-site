import React, { useState } from "react";

const NewCatForm = (props) => {
  const [catForm, setCatForm] = useState({
    name: "",
    description: "",
  });

  const postCat = async () => {
    try {
      const response = await fetch("/api/v1/cats", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(catForm),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const errorMessage = `Response not ok ${response.status} (${response.statusText})`;
          const err = new Error(errorMessage);
          throw err;
        }
      }

      const body = await response.json();
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    postCat();
  };

  const onInputChange = (event) => {
    setCatForm({
      ...catForm,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  let showCatPrompt = <p>Sign in to add a cat!</p>;
  if (props.user) {
    showCatPrompt = <CommentForm postComment={postComment} />;
  }

  return (
    <div className="grid-container">
      <h1>Add A New Cat</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={catForm.name} onChange={onInputChange} />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={catForm.description}
            onChange={onInputChange}
          />
        </label>
        <label>
          Image URL:
          <input type="text" name="imageURL" value={catForm.imageURL} onChange={onInputChange} />
        </label>
        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default NewCatForm;

/* name (required) 
description (optional)
rating (default to false)





*/
