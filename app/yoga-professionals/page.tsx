type YogaProfessionalsPageProps = {
  searchParams: Promise<{ success?: string }>;
};

export default async function YogaProfessionalsPage({
  searchParams,
}: YogaProfessionalsPageProps) {
  const params = await searchParams;
  const success = params.success;

  return (
    <main style={{ background: "#fafaf8", color: "#18181b" }}>

      {/* ── Hero ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#fff", borderBottom: "1px solid #e4e4e7" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-medium mb-3 uppercase tracking-widest"
            style={{ color: "#71717a" }}
          >
            For Yoga Professionals
          </p>
          <h1
            className="text-3xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            Apply to join the network
          </h1>
          <p className="text-base md:text-lg leading-8" style={{ color: "#52525b", maxWidth: "50ch" }}>
            Join a curated network of qualified yoga instructors and therapists
            for online work with clients based outside India.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="px-5 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">

          {success && (
            <div
              className="mb-8 p-4 rounded-xl text-sm text-center"
              style={{ background: "#edf3ee", color: "#1e2d1f" }}
            >
              Your application has been submitted successfully. We will be in touch.
            </div>
          )}

          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: "#fff", border: "1px solid #e4e4e7" }}
          >
            <form
              action="https://formspree.io/f/maqpaqnq"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_next"
                value="/yoga-professionals?success=true"
              />
              <input
                type="hidden"
                name="_subject"
                value="New Yoga Professional Application"
              />

              <div className="form-field">
                <label className="form-label" htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    className="form-input"
                    placeholder="+91..."
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="applicantType">I am applying as</label>
                <select
                  id="applicantType"
                  name="applicantType"
                  className="form-input"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select an option</option>
                  <option>Yoga Instructor</option>
                  <option>Yoga Therapist</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="qualifications">Qualifications</label>
                <input
                  id="qualifications"
                  type="text"
                  name="qualifications"
                  className="form-input"
                  placeholder="List your main qualifications"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="form-field">
                  <label className="form-label" htmlFor="experienceYears">Years of Experience</label>
                  <input
                    id="experienceYears"
                    type="text"
                    name="experienceYears"
                    className="form-input"
                    placeholder="e.g. 5 years"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="styles">Styles you teach</label>
                  <input
                    id="styles"
                    type="text"
                    name="styles"
                    className="form-input"
                    placeholder="e.g. Hatha, Vinyasa"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="internationalExperience">
                  Have you taught students outside India before?
                </label>
                <select
                  id="internationalExperience"
                  name="internationalExperience"
                  className="form-input"
                  defaultValue=""
                >
                  <option value="" disabled>Select an option</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="experience">Experience teaching online</label>
                <textarea
                  id="experience"
                  name="experience"
                  className="form-input"
                  rows={4}
                  placeholder="Describe your experience teaching online"
                  style={{ resize: "vertical" }}
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="demoVideo">Demo Video Link</label>
                <input
                  id="demoVideo"
                  type="text"
                  name="demoVideo"
                  className="form-input"
                  placeholder="Google Drive or YouTube link"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="availability">Availability</label>
                <textarea
                  id="availability"
                  name="availability"
                  className="form-input"
                  rows={3}
                  placeholder="Mention days and time ranges (IST)"
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full py-3.5 text-sm font-medium transition"
                style={{ background: "#3f6145", color: "#fff" }}
              >
                Submit Application for Review
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
