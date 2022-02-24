import express from "express";
import Review from "../../../models/Review.js";

const ReviewsRouter = new express.Router();

ReviewsRouter.get("/", async (req, res) => {
  try {
    const reviews = await Review.query();
    return res.status(200).json({ reviews: reviews });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  }
});

ReviewsRouter.post("/", async (req, res) => {
  const { body } = req;
  //Maybe add cleanInput
  console.log(body);
  try {
    const postReview = await Review.query().insertAndFetch(body);

    return res.status(201).json({ review: postReview });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  }
});

// ReviewsRouter.get("/:id", async (req, res) => {
//   const { id } = req.params
//   try{
//     const review = await Review.query().findById(id)
//       return res.status(200).json ({ cat: cat })
//   } catch(error){
//       return res.status(500).json({ errors: error})
//     }
// })

export default ReviewsRouter;
