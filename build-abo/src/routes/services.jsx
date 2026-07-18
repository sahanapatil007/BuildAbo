import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  HardHat,
  Compass,
  Sparkles,
  Ruler,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";

import Layout from "../Components/site/Layout";

const services = [
  {
    icon: HardHat,
    t: "Turnkey Construction",
    d: "Ground-up residential and commercial builds. Structural design, MEP, civil works, finishes and handover — all under one contract.",
    points: [
      "Independent homes & villas",
      "Apartment buildings",
      "Commercial structures",
      "Structural & MEP design",
    ],
  },
  {
    icon: Compass,
    t: "Architecture & Planning",
    d: "Concept design, regulatory drawings, 3D walk-throughs and detailed working drawings ready for site.",
    points: [
      "Concept & schematic design",
      "Permission drawings",
      "3D visualisation",
      "Site supervision",
    ],
  },
  {
    icon: Sparkles,
    t: "Interior Design",
    d: "Material palettes, custom joinery, lighting design, soft furnishings and styling — interiors that feel composed, not catalogued.",
    points: [
      "Full home interiors",
      "Modular kitchens & wardrobes",
      "Lighting & styling",
      "Furniture sourcing",
    ],
  },
  {
    icon: Ruler,
    t: "Renovation & Restoration",
    d: "Heritage-sensitive and modern renovations — from kitchen upgrades to full home transformations.",
    points: [
      "Full home renovation",
      "Kitchen & bath remodel",
      "Heritage restoration",
      "Structural retrofits",
    ],
  },
  {
    icon: Award,
    t: "Commercial Fit-out",
    d: "Offices, retail, hospitality and clinics — branded environments built for performance and longevity.",
    points: [
      "Offices & co-working",
      "Retail & showrooms",
      "Cafés & restaurants",
      "Clinics & wellness",
    ],
  },
  {
    icon: ShieldCheck,
    t: "Project Management",
    d: "Single-point accountability for schedule, budget, vendors and quality — for projects where you bring the architect.",
    points: [
      "Vendor management",
      "Budget & schedule control",
      "Quality audits",
      "Snagging & handover",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services — Construction & Interior Design | BuildAbo</title>

        <meta
          name="description"
          content="Turnkey construction, architecture, interior design, renovation and commercial fit-out services delivered by a single accountable studio."
        />

        <meta property="og:title" content="Services | BuildAbo" />

        <meta
          property="og:description"
          content="Turnkey construction, architecture, interior design, renovation and fit-out."
        />

        <meta property="og:url" content="/services" />

        <link rel="canonical" href="/services" />
      </Helmet>

      <Layout>
        <section className="border-b border-border bg-secondary/30 px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow">Services</p>

            <h1 className="mt-4 max-w-3xl font-display text-5xl md:text-7xl">
              From the first sketch to the final styling.
            </h1>

            <p className="mt-6 max-w-2xl text-base text-muted-foreground">
              Six disciplines, one studio. Engage us for the full journey or any
              single stage — the standard stays the same.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-px bg-border md:grid-cols-2">
            {services.map(({ icon: Icon, t, d, points }) => (
              <article key={t} className="bg-background p-10">
                <Icon className="h-8 w-8 text-accent" strokeWidth={1.3} />

                <h2 className="mt-6 font-display text-3xl">{t}</h2>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d}
                </p>

                <ul className="mt-6 space-y-2 text-sm">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-accent">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-primary px-6 py-20 text-primary-foreground lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="max-w-xl font-display text-4xl md:text-5xl">
              Not sure which service fits your project?
            </h2>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-sm bg-accent px-7 py-4 text-xs uppercase tracking-[0.22em] text-accent-foreground hover:bg-background hover:text-ink"
            >
              Book a free consultation

              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}