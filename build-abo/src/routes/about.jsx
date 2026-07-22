import React from "react";
import { Link } from "react-router-dom";

import  Layout  from "../Components/site/Layout";
import craft from "../assets/about.jpg";

function AboutPage() {
  const values = [
    {
      t: "Craft",
      d: "We obsess over edges, alignments and the way a door closes. Details aren't decoration — they're the work.",
    },
    {
      t: "Clarity",
      d: "Transparent budgets, weekly updates, and one accountable lead. No surprises, no silence.",
    },
    {
      t: "Calm",
      d: "A building project should feel like a partnership, not a battle. Our process is designed for it.",
    },
  ];

  return (
    <Layout>
      <section className="border-b border-border px-6 py-20 lg:px-7">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Studio</p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl">
              We build for people who care how things are made.
            </h1>
          </div>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            BuildAbo is a small studio of architects, builders and interior
            designers. We take on a deliberately limited number of projects
            each year so we can give every one the attention it deserves — from
            first sketch to final styling.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-15 lg:px-8">
        <img
          src={craft}
          alt="BuildAbo team on-site"
          loading="lazy"
          className="h-[480px] w-full rounded-sm object-cover"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <p className="eyebrow">What we value</p>

        <div className="mt-8 grid gap-px bg-border md:grid-cols-3">
          {values.map((v) => (
            <div key={v.t} className="bg-background p-8">
              <h2 className="font-display text-4xl text-accent">{v.t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {v.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Our promise</p>

          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-snug">
            "Every BuildAbo project is delivered by the same people who pitched
            it — from first meeting to final handover."
          </h2>

          <Link
            to="/contact"
            className="mt-10 inline-block rounded-sm bg-primary px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground hover:bg-accent"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;