import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../Components/site/Layout";
import Loader from "./Loader";

export default function ProjectDetails() {
  const { id } = useParams();
  const [showImage, setShowImage] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/projects/${id}`
      );

      const data = await response.json();

      if (data.success) {
        setProject(data.project);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <Loader/>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <h2 className="text-3xl font-display">
            Project Not Found
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>

      {/* Hero Image */}
      <section>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[70vh] object-cover cursor-zoom-in"
          onClick={() => {
            if (window.innerWidth >= 1024) {
              setShowImage(true);
            }
          }}
        />
      </section>

      {/* Project Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <p className="text-accent uppercase tracking-[0.25em] text-sm">
          {project.category}
        </p>

        <h1 className="mt-4 font-display text-5xl md:text-7xl">
          {project.title}
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="border rounded-lg p-6">
            <h3 className="text-sm uppercase text-gray-500">
              Location
            </h3>

            <p className="mt-2 text-xl">
              {project.location}
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-sm uppercase text-gray-500">
              Area
            </h3>

            <p className="mt-2 text-xl">
              {project.sqft} sq.ft
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-sm uppercase text-gray-500">
              Year
            </h3>

            <p className="mt-2 text-xl">
              {project.year}
            </p>
          </div>

        </div>

        {/* Description */}

        <div className="mt-20 max-w-4xl">
          <h2 className="font-display text-4xl">
            About the Project
          </h2>

          <p className="mt-8 text-lg leading-9 text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Gallery */}

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-24">

            <h2 className="font-display text-4xl mb-10">
              Project Gallery
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {project.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title}-${index}`}
                  className="h-80 w-full rounded-lg object-cover transition duration-500 hover:scale-105"
                />
              ))}

            </div>

          </div>
        )}

        {/* CTA */}

        <div className="mt-24 border-t pt-12 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="font-display text-4xl">
              Planning something similar?
            </h2>

            <p className="mt-3 text-muted-foreground">
              Let's discuss your project and bring your vision to life.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-accent transition"
          >
            Contact Us
          </Link>

        </div>

        {/* Back */}

        <div className="mt-12">
          <Link
            to="/projects"
            className="text-accent hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>

      </section>
      {showImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
          onClick={() => setShowImage(false)}
        >
          <button
            className="absolute top-6 right-8 text-white text-5xl"
            onClick={() => setShowImage(false)}
          >
            ×
          </button>

          <img
            src={project.image}
            alt={project.title}
            className="max-w-[95%] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </Layout>
  );

}
