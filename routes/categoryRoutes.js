import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryControl,
  createCategoryControl,
  deleteCategoryControl,
  singleCategoryControl,
  updateCategoryControl,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post("/create-category", requireSignIn, isAdmin, createCategoryControl);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryControl
);

//getAll category
router.get("/get-category", categoryControl);

//single category
router.get("/single-category/:slug", singleCategoryControl);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryControl
);

export default router;
