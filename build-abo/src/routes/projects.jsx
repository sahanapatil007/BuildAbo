import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "../Components/site/Layout";

import villa from "../assets/project-villa.jpg";
import kitchen from "../assets/project-kitchen.jpg";
import bath from "../assets/project-bath.jpg";
import office from "../assets/project-office.jpg";
import hero from "../assets/hero-interior.jpg";
import Loader from "./Loader";


export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/projects");
      const data = await response.json();

      if (data.success) {
        setProjects(data.projects);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }
  return (
    <>
      <Helmet>
        <title>Projects — BuildAbo Construction & Interiors</title>

        <meta
          name="description"
          content="Selected residential and commercial projects by BuildAbo — villas, apartments, kitchens, bathrooms, offices and retail spaces."
        />

        <meta property="og:title" content="Projects | BuildAbo" />

        <meta
          property="og:description"
          content="A selection of homes, interiors and commercial fit-outs by BuildAbo."
        />

        <meta
          property="og:image"
          content="https://project--251505e6-3bc4-4e23-a41a-7e550b0a0ec0.lovable.app/og-projects.jpg"
        />

        <meta property="og:url" content="/projects" />

        <link rel="canonical" href="/projects" />
      </Helmet>

      <Layout>
        <section className="border-b border-border px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow">Portfolio</p>

            <h1 className="mt-4 max-w-3xl font-display text-5xl md:text-7xl">
              Built with care.
              <br />
              Photographed honestly.
            </h1>

            <p className="mt-6 max-w-2xl text-base text-muted-foreground">
              A selection of recent work across residential, interior and
              commercial. Every image is from a real BuildAbo project.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                to={`/projects/${p._id}`}
                key={p._id}
                className="group block"
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent">
                      {p.category}
                    </p>

                    <h2 className="mt-2 font-display text-2xl">
                      {p.title}
                    </h2>

                    <p className="text-sm text-muted-foreground">
                      {p.location} · {p.sqft}
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {p.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 border-t border-border pt-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Want to see more, or visit a completed project?
            </h2>

            <Link
              to="/contact"
              className="mt-6 inline-block rounded-sm bg-primary px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground hover:bg-accent"
            >
              Request the full portfolio
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}