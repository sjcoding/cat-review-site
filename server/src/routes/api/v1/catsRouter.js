import express from "express";
import Cat from "../../../models/Cat.js";

const CatsRouter = new express.Router();

CatsRouter.get("/", async (req, res) => {
  try {
    const cats = await Cat.query();
    return res.status(200).json({ cats: cats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  }
});

export default CatsRouter;
