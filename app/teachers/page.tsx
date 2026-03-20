"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function TeachersContent() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
        Apply to Work with Inar Ventures
      </h1>

      {success && (
        <div className="mb-8 p-4 rounded-lg bg-green-100 text-green-800 text-center">
          Your application has been submitted successfully.
        </div>
      )}

      <p className="text-gray-600 text-center mb-10">
        Join a structured network of yoga teachers and therapists working with
        international clients.
      </p>

      <form
        action="https://formspree.io/f/maqpaqnq"
        method="POST"
        className="space-y-6"
      >
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/teachers?success=true"
        />

        <div>
          <label className="block text-sm mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="+91..."
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Certifications</label>
          <input
            type="text"
            name="certifications"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="e.g. RYT 200, Yoga Therapy, etc."
          />
        </div>

        <div>
          <label className="block text-sm mb-2">
            Experience Teaching Online
          </label>
          <textarea
            name="experience"
            className="w-full border rounded-lg px-4 py-3"
            rows={4}
            placeholder="Describe your experience"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">
            Years of Teaching Experience
          </label>
          <input
            type="text"
            name="experienceYears"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="e.g. 2 years, 5 years"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">
            Have you taught international students before?
          </label>
          <select
            name="internationalExperience"
            className="w-full border rounded-lg px-4 py-3"
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2">
            What styles do you teach?
          </label>
          <input
            type="text"
            name="styles"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="e.g. Hatha, Vinyasa, Therapy"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">
            Can you share a demo video link?
          </label>
          <input
            type="text"
            name="demoVideo"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Google Drive or YouTube link"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">
            What time slots are you available for?
          </label>
          <textarea
            name="availability"
            className="w-full border rounded-lg px-4 py-3"
            rows={3}
            placeholder="Mention days and time ranges"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          Submit Application for Review
        </button>
      </form>
    </main>
  );
}

export default function Teachers() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <TeachersContent />
    </Suspense>
  );
}