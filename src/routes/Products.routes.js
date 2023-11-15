import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getSection,
  createSection,
  deleteSection,
} from "../controllers/Products.controller.js";
import multer from "multer";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración de multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads/"),
  filename: (req, file, cb) => {
    const uniqueSuffix =
      "photo" + Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originalExtension = file.originalname.split(".").pop();
    const filename =
      file.fieldname + "-" + uniqueSuffix + "." + originalExtension;
    cb(null, filename);
  },
});
const upload = multer({ storage });

const router = Router();

router.get("/Products", getProducts);
router.post("/Products/add", upload.single("photo"), createProduct);
router.put("/Products/:id", updateProduct);
router.delete("/Products/delete/:id", deleteProduct);
router.get("/Products/:id", getProduct);

router.get("/section", getSection);
router.post("/section", createSection);
router.delete("/section/:id", deleteSection);

export default router;
