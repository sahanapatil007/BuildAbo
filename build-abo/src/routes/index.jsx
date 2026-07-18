import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import {
  ArrowRight,
  Award,
  HardHat,
  Compass,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Layout from "../Components/site/Layout";
import LeadForm from "../Components/site/LeadForm";
import hero from "../assets/hero-interior.jpg";
import villa from "../assets/project-villa.jpg";
import kitchen from "../assets/project-kitchen.jpg";
import bath from "../assets/project-bath.jpg";
import office from "../assets/project-office.jpg";
import SignupPopup from "../Components/site/SignupPopup.jsx";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>BuildAbo — Construction & Interior Design Studio</title>

        <meta
          name="description"
          content="BuildAbo designs and builds residential and commercial spaces end-to-end — architecture, construction, and interiors delivered on time, on budget."
        />

        <meta
          property="og:title"
          content="BuildAbo — Construction & Interior Design Studio"
        />

        <meta
          property="og:description"
          content="Turnkey construction and interior design. Homes, villas, offices and retail builds crafted for life."
        />

        <meta
          property="og:image"
          content="https://project--251505e6-3bc4-4e23-a41a-7e550b0a0ec0.lovable.app/og-home.jpg"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />

        <link rel="canonical" href="/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            name: "BuildAbo Construction & Interiors",
            description: "Turnkey construction and interior design studio.",
            url: "/",
            telephone: "+91-98765-43210",
            priceRange: "₹₹₹",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
            areaServed: "IN",
          })}
        </script>
      </Helmet>
      <SignupPopup />
      <Layout>
        <Hero />
        <Trust />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <CTA />
      </Layout>
    </>
  );
}
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={hero}
        alt="Modern interior with golden hour lighting"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/85" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-10">
        <p className="eyebrow !text-background/80">
          Construction · Architecture · Interiors
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-background md:text-7xl lg:text-8xl">
          We build spaces
          <br />
          that <em className="italic text-accent">feel like home.</em>
        </h1>

        <p className="mt-6 max-w-xl text-base text-background/85 md:text-lg">
          A design-led construction studio delivering villas, apartments and
          commercial interiors — from blueprint to handover, under one
          signature.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-sm bg-accent px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-accent-foreground transition hover:bg-background hover:text-ink"
          >
            Start your project
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>

          <Link
            to="/projects"
            className="text-xs uppercase tracking-[0.22em] text-background/80 underline-offset-4 hover:text-accent hover:underline"
          >
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
function Trust() {
  const stats = [
    { v: "120+", l: "Projects delivered" },
    { v: "14", l: "Years of craft" },
    { v: "98%", l: "On-time handover" },
    { v: "4.9★", l: "Client rating" },
  ];

  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-14 md:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-4xl md:text-5xl">{s.v}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Services() {
  const items = [
    {
      icon: HardHat,
      t: "Turnkey Construction",
      d: "Ground-up residential and commercial builds — structural, MEP and finishes managed end-to-end.",
    },
    {
      icon: Compass,
      t: "Architecture & Design",
      d: "Concept, planning permissions, 3D walk-throughs and detailed working drawings.",
    },
    {
      icon: Sparkles,
      t: "Interior Design",
      d: "Bespoke interiors with curated materials, custom joinery, lighting and styling.",
    },
    {
      icon: Ruler,
      t: "Renovations",
      d: "Heritage-sensitive and modern renovations that respect what's there and elevate it.",
    },
    {
      icon: ShieldCheck,
      t: "Project Management",
      d: "A single point of accountability — schedules, budgets, vendors, quality.",
    },
    {
      icon: Award,
      t: "Premium Fit-out",
      d: "Boutique offices, retail and hospitality fit-outs built for brand and longevity.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            A single studio for every stage of building.
          </h2>
        </div>

        <Link
          to="/services"
          className="text-xs uppercase tracking-[0.22em] text-accent hover:underline"
        >
          All services →
        </Link>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, t, d }) => (
          <div
            key={t}
            className="group bg-background p-8 transition hover:bg-card"
          >
            <Icon className="h-7 w-7 text-accent" strokeWidth={1.4} />

            <h3 className="mt-5 font-display text-2xl">{t}</h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 4;

        if (next >= projects.length) {
          return 0;
        }

        return next;
      });
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [projects]);

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

  const visibleProjects = projects.slice(currentIndex, currentIndex + 4);

  return (
    <section className="bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Selected work</p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Projects we're proud of.
            </h2>
          </div>

          <Link
            to="/projects"
            className="text-xs uppercase tracking-[0.22em] text-accent hover:underline"
          >
            View portfolio →
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {visibleProjects.map((p, i) => (
            <Link
              to={`/projects/${p._id}`}
              key={p.title}
              className={`group relative block overflow-hidden rounded-sm ${i % 3 === 0 ? "md:row-span-2" : ""
                }`}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  {p.category}
                </p>

                <h3 className="mt-2 font-display text-3xl text-background">
                  {p.title}
                </h3>

                <p className="text-sm text-background/75">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
function Process() {
  const steps = [
    {
      n: "01",
      t: "Discover",
      d: "We listen — to your site, your brief, your way of living.",
    },
    {
      n: "02",
      t: "Design",
      d: "Concept, layouts and 3D visualisation until it feels right.",
    },
    {
      n: "03",
      t: "Build",
      d: "Transparent timelines, daily reports, in-house quality control.",
    },
    {
      n: "04",
      t: "Handover",
      d: "Snag-free delivery, styled, photographed, and warrantied.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">The process</p>

          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Considered.
            <br />
            Coordinated.
            <br />
            Calm.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            A four-stage workflow refined over 14 years — built so you know
            what's next, who's responsible, and what it costs.
          </p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8">
              <div className="font-display text-5xl text-accent">{s.n}</div>

              <h3 className="mt-4 font-display text-2xl">{s.t}</h3>

              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Testimonials() {
  /*const testimonials = [
    {
      q: "BuildAbo turned a stressful build into the calmest part of our year. The detailing is exquisite.",
      a: "Aarti & Rohit",
      r: "Villa, Lonavala",
    },
    {
      q: "They came in on time, on budget, and the office looks like a magazine spread. Our team loves it.",
      a: "Naveen K.",
      r: "Founder, FinTech Studio",
    },
    {
      q: "A team that genuinely cares. Every finish, every fitting — chosen with intent.",
      a: "Sneha M.",
      r: "Apartment, Bandra",
    },
  ];*/
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/testimonials"
      );

      const data = await response.json();

      if (data.success) {
        setTestimonials(data.testimonials);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log("Testimonials:", testimonials);
  console.log("Count:", testimonials.length);

  return (
    <section className="bg-primary py-28 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow !text-accent">Clients</p>

        <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl">
          Trusted by homeowners and businesses who care about how things are
          made.
        </h2>

        {testimonials.length > 0 && (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={3}
            loop={testimonials.length > 3}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mt-16"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <figure className="border-l border-accent/40 pl-6 h-full">
                  <blockquote className="font-display text-2xl leading-snug">
                    "{item.review}"
                  </blockquote>

                  <figcaption className="mt-5 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
                    {item.name} ·{" "}
                    <span className="text-primary-foreground/50">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Let's talk</p>

          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            Tell us about
            <br />
            your project.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            A 20-minute consultation, free of charge. We'll discuss your brief,
            site, timelines and indicative budget — and tell you honestly if
            we're the right fit.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <div>
              📞{" "}
              <a
                href="tel:+919876543210"
                className="hover:text-accent"
              >
                +91 98765 43210
              </a>
            </div>

            <div>
              ✉{" "}
              <a
                href="mailto:hello@buildabo.com"
                className="hover:text-accent"
              >
                hello@buildabo.com
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-border bg-card p-8 md:p-10">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}