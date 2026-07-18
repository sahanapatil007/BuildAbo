import { useId, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

function LeadForm({ compact = false }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  const messageId = useId();

  if (sent) {
    return (
      <div className="rounded-sm border border-accent/30 bg-accent/5 p-8 text-center">
        <Check className="mx-auto h-10 w-10 text-accent" />
        <h3 className="mt-4 font-display text-2xl">Thank you</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We've received your enquiry. A project consultant will reach out
          within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={compact ? "" : "grid gap-4 md:grid-cols-2"}>
        <Field
          label="Name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <Field
        label="Email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Select
          label="Project type"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          options={[
            "Residential build",
            "Interior design",
            "Renovation",
            "Commercial fit-out",
            "Other",
          ]}
        />

        <Select
          label="Budget range"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          options={[
            "Under ₹10L",
            "₹10L – ₹50L",
            "₹50L – ₹1Cr",
            "₹1Cr+",
          ]}
        />
      </div>

      <div>
        <label
          htmlFor={messageId}
          className="eyebrow !text-foreground/55"
        >
          Tell us about your project
        </label>

        <textarea
          id={messageId}
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-accent"
          placeholder="Location, square footage, timeline…"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-accent disabled:opacity-60"
      >
        {loading ? "Sending…" : "Request Consultation"}

        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </button>

      <p className="text-xs text-muted-foreground">
        We respond within 24 hours. Your details are confidential.
      </p>
    </form>
  );
}

export default LeadForm

function Field({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
}) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="eyebrow !text-foreground/55">
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-accent"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  value,
  onChange,
}) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="eyebrow !text-foreground/55">
        {label}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-accent"
      >
        <option value="">Select…</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}