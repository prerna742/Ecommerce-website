import express from "express";
import {
  brainTreePaymentControl,
  braintreeTokenControl,
  createProductControl,
  deleteProductControl,
  getProductControl,
  getSingleProductControl,
  productCategoryControl,
  productCountControl,
  productFiltersControl,
  productListControl,
  productPhotoControl,
  realtedProductControl,
  searchProductControl,
  updateProductControl,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductControl
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductControl
);

//get products
router.get("/get-product", getProductControl);

//single product
router.get("/get-product/:slug", getSingleProductControl);

//get photo
router.get("/product-photo/:pid", productPhotoControl);

//delete product
router.delete("/delete-product/:pid", deleteProductControl);

//filter product
router.post("/product-filters", productFiltersControl);

//product count
router.get("/product-count", productCountControl);

//product per page
router.get("/product-list/:page", productListControl);

//search product
router.get("/search/:keyword", searchProductControl);

//similar product
router.get("/related-product/:pid/:cid", realtedProductControl);

//category wise product
router.get("/product-category/:slug", productCategoryControl);

//payments routes
//token
router.get("/braintree/token", braintreeTokenControl);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentControl);

export default router;
