import express from 'express';
import { 
    categoryController, 
    createCategoryController, 
    singleCategoryController, 
    updateCategoryController,
    deleteCategoryController } 
from './../controllers/categoryController.js';
import { isAdMin, requiredSignIn } from '../middlewares/authmiddlewares.js';

const router = express.Router();

//routes

//create category
router.post("/create-category",requiredSignIn,isAdMin, createCategoryController);

//update category
router.put("/update-category/:id",requiredSignIn,isAdMin,updateCategoryController);

//getALl category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete("/delete-category/:id",requiredSignIn,isAdMin,deleteCategoryController);

export default router;