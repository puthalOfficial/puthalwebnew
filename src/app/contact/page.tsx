"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      // API yahan connect karna
      console.log(formData);

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      alert("Thank you for reaching out!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-[#fcf9ff] px-5 py-25 md:px-10 lg:px-20">
      
      {/* Header */}
      <section className="mx-auto mb-2 max-w-6xl text-center">
       

        
      </section>

      {/* Main Card */}
      <section className="mx-auto grid max-w-6xl overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-[0_20px_70px_rgba(80,50,120,0.10)] lg:grid-cols-[0.85fr_1.15fr]">

        {/* LEFT */}
        <div className="relative overflow-hidden bg-[#005d90] p-8 text-white md:p-12">
          
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="relative z-10">
            <span className="text-sm font-medium text-purple-100">
              CONTACT US
            </span>

           


            {/* Contact details */}
            <div className="mt-10 space-y-7">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-purple-200">
                    Email us
                  </p>

                  <a
                    href="mailto:hello@puthal.com"
                    className="mt-1 block font-medium hover:underline"
                  >
                    hello@puthal.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-purple-200">
                    Call us
                  </p>

                  <a
                    href="tel:+919999999999"
                    className="mt-1 block font-medium hover:underline"
                  >
                    +91 99999 99999
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-purple-200">
                    Our location
                  </p>

                  <p className="mt-1 max-w-xs font-medium leading-6">
                    Puthal Wellness,
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Clock3 size={20} />
                </div>

                <div>
                  <p className="text-sm text-purple-200">
                    Support hours
                  </p>

                  <p className="mt-1 font-medium">
                    Monday – Saturday
                  </p>

                  <p className="text-sm text-purple-100">
                    10:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom message */}
            <div className="mt-12 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4">
              <MessageCircle
                size={20}
                className="mt-0.5 shrink-0"
              />

              <p className="text-sm leading-6 text-purple-100">
                Your feedback helps us create a better and more
                supportive experience for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-12">
          <div className="mb-8">

            <h2 className="mt-2 text-3xl font-bold text-[#24133d]">
              Share your feedback
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Tell us what you think, ask a question, or let us know
              how we can improve.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name + Email */}
            <div className="grid gap-5 md:grid-cols-2">
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#30203f]">
                  Email address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#6d4aff] focus:bg-white focus:ring-4 focus:ring-purple-100"
                />
              </div>

            </div>


            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#30203f]">
                Your message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={6}
                required
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#6d4aff] focus:bg-white focus:ring-4 focus:ring-purple-100"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#005d90] px-6 py-4 font-semibold text-white transition hover:bg-[#005d99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>

            <p className="text-center text-xs leading-5 text-gray-400">
              We respect your privacy and will only use your
              information to respond to your message.
            </p>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto mt-12 max-w-6xl rounded-3xl bg-[#f0eaff] p-8 text-center md:p-10">
        <h3 className="text-2xl font-bold text-[#24133d]">
          You don&apos;t have to figure everything out alone.
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          If you&apos;re looking for support or have questions about
          our services, reach out to our team.
        </p>
      </section>
    </main>
    <Footer/>
    </>
  );
}