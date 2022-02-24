import express from "express";
import objection from "objection";

import Review from "../../../models/Review.js";

const reviewCatRouter = new express.Router({ mergeParams: true });

reviewCatRouter.post("/", async (req, res) => {
  console.log("I'M IN THE REVIEW POST ROUTER");
  const { body } = req;
  console.log(body);
  const formInput = body;
  const { review } = formInput;
  const { catId } = req.params;

  try {
    const newReview = await Review.query().insertAndFetch({ review, catId });
    return res.status(201).json({ review: newReview });
  } catch (error) {
    console.log(error);
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default reviewCatRouter;
