import express from "express";
import {
  registerControl,
  loginControl,
  testControl,
  forgotPasswordControl,
  updateProfileControl,
  getOrdersControl,
  getAllOrdersControl,
  orderStatusControl,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerControl);

//LOGIN || POST
router.post("/login", loginControl);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordControl);

//test routes
router.get("/test", requireSignIn, isAdmin, testControl);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;

//update profile
router.put("/profile", requireSignIn, updateProfileControl);

//orders
router.get("/orders", requireSignIn, getOrdersControl);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersControl);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusControl
);
