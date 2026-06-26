"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [result, setResult] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);

    formData.append("access_key", "50ab2c59-52fc-46e9-88b1-e5134ad65f9c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <section className="py-10 bg-slate-50 w-10/12 mx-auto">
      <div className="w-10/12 mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold tracking-[4px]">CONTACT</p>

          <h2 className="text-5xl font-bold mt-2">Let's Work Together</h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
            Have a project in mind, an internship opportunity, or just want to
            connect? Feel free to send me a message. I'll get back to you as
            soon as possible.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-6 bg-white rounded-3xl shadow-xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Your Name</label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:ring-2 focus:ring-slate-300 transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Email Address</label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your Email"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:ring-2 focus:ring-slate-300 transition"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">Message</label>

            <textarea
              name="message"
              rows="6"
              required
              placeholder="Write your message..."
              className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:ring-2 focus:ring-slate-300 transition"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary px-8 py-5 rounded-xl flex items-center gap-3 font-semibold transition-all hover:scale-105"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
