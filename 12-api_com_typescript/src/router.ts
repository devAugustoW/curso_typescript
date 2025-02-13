import { Router, Request, Response } from "express";
import { 
	createMovie, 
	findMovieById, 
	getAllMovies, 
	removeMovie, 
	updateMovie } from "./controllers/movieController";

// validations
import { validate  } from "./middlewares/handleValidator";
import { movieValidation } from "./middlewares/movieValidation";

const router = Router();

router.use("/test", (req: Request, res: Response, next) => {
  res.status(200).json({ ok: "API Working" });
  next();
})

router.post("/movie", movieValidation(), validate, createMovie);
router.get("/movie/:id", findMovieById);
router.get("/movies", getAllMovies);
router.delete("/movie/:id", removeMovie);
router.patch("/movie/:id", movieValidation(), validate, updateMovie);

export default router;