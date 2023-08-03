import express from "express";
import {forgotPasswordController, registerController, updateProfileController,} from "../controllers/authController.js";
import {loginController,} from "../controllers/authController.js";
import {testController,} from "../controllers/authController.js";
import { isAdMin, requiredSignIn } from "../middlewares/authmiddlewares.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test",requiredSignIn,isAdMin, testController);

//protected User route auth
router.get("/user-auth", requiredSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

//protected Admin route auth
router.get("/admin-auth", requiredSignIn, isAdMin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requiredSignIn, updateProfileController);


export default router;
