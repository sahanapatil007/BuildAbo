import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";

function SignupPopup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        source: "popup",
      }),
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem("buildabo_popup", "closed");
      setOpen(false);

      alert("Thank you! We'll contact you soon.");
    } else {
      alert(data.message || "Something went wrong.");
    }
  } catch (error) {
    console.error(error);
    alert("Unable to connect to the server.");
  }
};

  useEffect(() => {
    console.log("SignupPopup mounted");

    const alreadyClosed = localStorage.getItem("buildabo_popup");

    console.log(alreadyClosed);

    if (alreadyClosed) return;

    const timer = setTimeout(() => {
      console.log("Opening popup...");
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    localStorage.setItem("buildabo_popup", "closed");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-[95%] max-w-lg rounded-md bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95">

        <button
          onClick={closePopup}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        <p className="eyebrow text-accent">
          FREE CONSULTATION
        </p>

        <h2 className="mt-3 font-display text-4xl">
          Build your dream home with us.
        </h2>

        <p className="mt-4 text-muted-foreground">
          Register today and receive a free 20-minute consultation with one of
          our design experts.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full rounded-sm border px-4 py-3"
          />

          <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full rounded-sm border px-4 py-3"
/>

          <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  className="w-full rounded-sm border px-4 py-3"
/>

          <button
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-4 text-white hover:bg-accent transition"
          >
            Book Free Consultation

            <ArrowRight size={18} />
          </button>

        </form>

        <button
          onClick={closePopup}
          className="mt-5 w-full text-sm text-muted-foreground hover:text-accent"
        >
          Maybe Later
        </button>

      </div>
    </div>
  );
}

export default SignupPopup;