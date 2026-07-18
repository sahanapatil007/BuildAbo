const Project = require("../models/projectModel");

// Add New Project
const createProject = async (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILES:", req.files);
  try {
    const {
      title,
      category,
      location,
      sqft,
      year,
      description,
      featured,
    } = req.body;

    // Cover Image
    const image = req.files.image
      ? req.files.image[0].path
      : "";

    // Gallery Images
    const gallery = req.files.gallery
      ? req.files.gallery.map((img) => img.path)
      : [];

    const project = await Project.create({
      title,
      category,
      location,
      sqft,
      year,
      description,
      featured,
      image,
      gallery,
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      project,
    });

  } catch (error) {
  console.error("FULL ERROR:");
  console.error(error);

  res.status(500).json({
    success: false,
    message: error.message,
    error,
  });
}
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Project
const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Update Project
const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const {
      title,
      category,
      location,
      sqft,
      year,
      description,
      featured,
    } = req.body;

    // Update text fields
    project.title = title || project.title;
    project.category = category || project.category;
    project.location = location || project.location;
    project.sqft = sqft || project.sqft;
    project.year = year || project.year;
    project.description = description || project.description;

    if (featured !== undefined) {
      project.featured = featured;
    }

    // Replace Cover Image (if uploaded)
    if (req.files && req.files.image) {
      project.image = req.files.image[0].path;
    }

    // Add Gallery Images (if uploaded)
    if (req.files && req.files.gallery) {
      project.gallery.push(
        ...req.files.gallery.map((img) => img.path)
      );
    }

    await project.save();

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // TODO:
    // Delete cover image from Cloudinary
    // Delete gallery images from Cloudinary

    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
};