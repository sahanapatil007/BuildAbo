import React from "react";
import { Helmet } from "react-helmet-async";
import  Layout  from "../Components/site/Layout";
import  LeadForm  from "../Components/site/LeadForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function ContactPage() {
  return (
    <Layout>
      {/* SEO (TanStack head() replacement) */}
      <Helmet>
        <title>Contact BuildAbo — Free Project Consultation</title>

        <meta
          name="description"
          content="Tell us about your build or interior project. Free 20-minute consultation. We respond within 24 hours."
        />

        <meta property="og:title" content="Contact | BuildAbo" />
        <meta
          property="og:description"
          content="Tell us about your project. Free 20-minute consultation."
        />
        <meta property="og:url" content="/contact" />

        <link rel="canonical" href="/contact" />
      </Helmet>

      <section className="border-b border-border px-6 py-22 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl md:text-7xl">
            Let's design something worth living in.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Tell us about your site, brief and timeline. A project lead will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <h2 className="font-display text-3xl">Get in touch</h2>

            <Item icon={Phone} label="Call" value="+919876543210 " href="tel:+919876543210" />
            <Item icon={Mail} label="Email" value="info@buildabo.in" href="mailto:info@buildabo.in" />
            <Item icon={MapPin} label="Studio" value="3rd Floor, 44  Main Rd,  Kallumantapa, Horamavu,  Bengaluru, Karnataka 560113  " />
            <Item icon={Clock} label="Hours" value="Mon – Sat · 9am – 7pm" />

            <div className="rounded-sm border border-border bg-secondary/40 p-6">
              <p className="eyebrow">What happens next</p>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>1. We review your enquiry within 24 hours.</li>
                <li>2. A 20-minute call to understand brief & site.</li>
                <li>3. Indicative scope, timeline and budget.</li>
                <li>4. If it's a fit — we send a detailed proposal.</li>
              </ol>
            </div>
          </div>

          <div className="rounded-sm border border-border bg-card p-8 md:p-10">
            <h2 className="font-display text-3xl mb-6">Send us a message</h2>
            <LeadForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Item({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex gap-4">
      <Icon className="mt-1 h-5 w-5 text-accent" />
      <div>
        <p className="eyebrow !text-foreground/55">{label}</p>
        <p className="mt-1 font-display text-2xl">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition hover:text-accent">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

export default ContactPage;