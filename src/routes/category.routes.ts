import { Router } from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategroy,
  deleteCategory,
} from "../controllers/category.controller";
import { upload } from "../middlewares/upload.middleware";
import { authenticate } from "../middlewares/auth.midleware";

const router = Router();

router.post("/", authenticate, upload.single("image"), createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/:id", authenticate, upload.single("image"), updateCategroy);
router.delete("/:id", authenticate, deleteCategory);

export default router;
