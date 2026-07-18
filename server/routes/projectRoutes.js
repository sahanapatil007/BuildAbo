const express = require("express");
const upload = require("../middleware/upload");

const {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const router = express.Router();

// Create Project
router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  createProject
);

// Get All Projects
router.get("/", getProjects);

// Get Single Project
router.get("/:id", getProject);

router.put(
  "/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  updateProject
);

router.delete("/:id", deleteProject);

module.exports = router;