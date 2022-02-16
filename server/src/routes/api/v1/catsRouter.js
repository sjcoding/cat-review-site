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

CatsRouter.post("/", async (req, res) => {
  const { body } = req;
  //Maybe add cleanInput
  console.log(body);
  try {
    const postCat = await Cat.query().insertAndFetch(body);

    return res.status(201).json({ cat: postCat });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

CatsRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  try{
    const cat = await Cat.query().findById(id)
      return res.status(200).json ({ cat: cat })
  } catch(error){
      return res.status(500).json({ errors: error})
    }
})


export default CatsRouter;
