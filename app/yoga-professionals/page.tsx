type YogaProfessionalsPageProps = {
  searchParams: Promise<{ success?: string }>;
};

export default async function YogaProfessionalsPage({
  searchParams,
}: YogaProfessionalsPageProps) {
  const params = await searchParams;
  const success = params.success;

  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
        Apply as a Yoga Professional
      </h1>

      {success && (
        <div className="mb-8 p-4 rounded-lg bg-green-100 text-green-800 text-center">
          Your application has been submitted successfully.
        </div>
      )}

      <p className="text-gray-600 text-center mb-10">
        Join a curated network of qualified yoga instructors and yoga therapists
        for online work with clients based outside India.
      </p>

      <form
        action="https://formspree.io/f/maqpaqnq"
        method="POST"
        className="space-y-6"
      >
        <input
          type="hidden"
          name="_next"
          value="/yoga-professionals?success=true"
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
          <label className="block text-sm mb-2">I am applying as</label>
          <select
            name="applicantType"
            className="w-full border rounded-lg px-4 py-3"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>Yoga Instructor</option>
            <option>Yoga Therapist</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2">Qualifications</label>
          <input
            type="text"
            name="qualifications"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="List your main qualifications"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Experience Teaching Online</label>
          <textarea
            name="experience"
            className="w-full border rounded-lg px-4 py-3"
            rows={4}
            placeholder="Describe your experience"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Years of Experience</label>
          <input
            type="text"
            name="experienceYears"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="e.g. 2 years, 5 years"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">
            Have you taught students outside India before?
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
          <label className="block text-sm mb-2">What styles do you teach?</label>
          <input
            type="text"
            name="styles"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="e.g. Hatha, Vinyasa, Therapy"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Demo Video Link</label>
          <input
            type="text"
            name="demoVideo"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Google Drive or YouTube link"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Availability</label>
          <textarea
            name="availability"
            className="w-full border rounded-lg px-4 py-3"
            rows={3}
            placeholder="Mention days and time ranges"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#5E6B4E] text-[#F7F3EC] py-4 rounded-full text-sm font-medium hover:bg-[#46513C] transition"
        >
          Submit Application for Review
        </button>
      </form>
    </main>
  );
}