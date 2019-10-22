import Router from "express";
import userController from "../controllers/userController";
import validation from "../middleware/userValidation";

const routes = Router();

const {
  checkFirstName,
  checkLastName,
  fNameIsEmpty,
  checkEmail,
  checkGender,
  checkDepart
} = validation;

routes.post(
  "/api/v1/auth/signup",
  checkFirstName,
  checkLastName,
  fNameIsEmpty,
  checkEmail,
  checkGender,
  checkDepart,
  userController.userSignUp
);

export default routes;