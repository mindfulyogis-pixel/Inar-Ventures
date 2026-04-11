type ContactPageProps = {
  searchParams: Promise<{ success?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
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
            Contact
          </p>
          <h1
            className="text-3xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            Get in touch
          </h1>
          <p className="text-base md:text-lg" style={{ color: "#52525b", maxWidth: "52ch", lineHeight: "1.8" }}>
            Whether you are looking to bring yoga professionals into your
            programme, or you are a yoga instructor or therapist interested in
            joining our network — we would love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Contact grid ── */}
      <section className="px-5 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* ── Left: info ── */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-7">
              Contact information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "#edf3ee" }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 4.5C2 3.7 2.7 3 3.5 3h11c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5h-11C2.7 15 2 14.3 2 13.5v-9Z" stroke="#3f6145" strokeWidth="1.3" fill="none"/>
                    <path d="M2 5l7 5 7-5" stroke="#3f6145" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#18181b" }}>Email</p>
                  <a href="mailto:hello@inarventures.com" className="text-sm" style={{ color: "#3f6145" }}>
                    hello@inarventures.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "#edf3ee" }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1.5C6.5 1.5 4.5 3.5 4.5 6c0 4 4.5 10.5 4.5 10.5S13.5 10 13.5 6c0-2.5-2-4.5-4.5-4.5Z" stroke="#3f6145" strokeWidth="1.3" fill="none"/>
                    <circle cx="9" cy="6" r="1.5" stroke="#3f6145" strokeWidth="1.3" fill="none"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#18181b" }}>Based in</p>
                  <p className="text-sm" style={{ color: "#71717a" }}>Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="mt-9 pt-8" style={{ borderTop: "1px solid #e4e4e7" }}>
              <p
                className="text-xs font-medium mb-4 uppercase tracking-widest"
                style={{ color: "#71717a" }}
              >
                What we can help with
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#18181b" }}>For clients</p>
                  <p className="text-sm" style={{ color: "#71717a", lineHeight: "1.7" }}>
                    Partner enquiries and programme support
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#18181b" }}>For professionals</p>
                  <p className="text-sm" style={{ color: "#71717a", lineHeight: "1.7" }}>
                    Network applications and general questions
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 pt-8" style={{ borderTop: "1px solid #e4e4e7" }}>
              <p
                className="text-xs font-medium mb-4 uppercase tracking-widest"
                style={{ color: "#71717a" }}
              >
                Follow us
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                  style={{ border: "1px solid #e4e4e7", color: "#3a3530", background: "#fff" }}
                  aria-label="LinkedIn"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <rect x="0.75" y="0.75" width="13.5" height="13.5" rx="2.5" stroke="#3f6145" strokeWidth="1.2" fill="none"/>
                    <path d="M4 6.5v5M4 4v.5" stroke="#3f6145" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M7 11.5V8.5c0-1 .5-2 2-2s2 1 2 2v3" stroke="#3f6145" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                  style={{ border: "1px solid #e4e4e7", color: "#3a3530", background: "#fff" }}
                  aria-label="Instagram"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <rect x="0.75" y="0.75" width="13.5" height="13.5" rx="3.5" stroke="#3f6145" strokeWidth="1.2" fill="none"/>
                    <circle cx="7.5" cy="7.5" r="2.75" stroke="#3f6145" strokeWidth="1.2" fill="none"/>
                    <circle cx="10.75" cy="4.25" r="0.7" fill="#3f6145"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div
            className="rounded-2xl p-7 md:p-8"
            style={{ background: "#fff", border: "1px solid #e4e4e7" }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Send us a message
            </h2>

            {success && (
              <div
                className="mb-6 p-4 rounded-xl text-sm"
                style={{ background: "#edf3ee", color: "#1e2d1f" }}
              >
                Thank you for reaching out — we will be in touch shortly.
              </div>
            )}

            <form
              action="https://formspree.io/f/maqpaqnq"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_next" value="/contact?success=true" />
              <input type="hidden" name="_subject" value="New message from Inar Ventures website" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="form-field">
                  <label className="form-label" htmlFor="firstName">First name</label>
                  <input id="firstName" type="text" name="firstName" className="form-input" placeholder="Your first name" required />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="lastName">Last name</label>
                  <input id="lastName" type="text" name="lastName" className="form-input" placeholder="Your last name" required />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="email">Email</label>
                <input id="email" type="email" name="email" className="form-input" placeholder="your@email.com" required />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="organisation">
                  Organisation{" "}
                  <span style={{ color: "#b0afac", fontWeight: 400 }}>(optional)</span>
                </label>
                <input id="organisation" type="text" name="organisation" className="form-input" placeholder="Your organisation or studio" />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="subject">What is this about?</label>
                <select id="subject" name="subject" className="form-input" defaultValue="" required>
                  <option value="" disabled>Select a topic</option>
                  <option>Partnering with Inar Ventures (as a client)</option>
                  <option>Joining the network (as a yoga professional)</option>
                  <option>General enquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  rows={5}
                  placeholder="Tell us a bit about what you're looking for..."
                  required
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full py-3.5 text-sm font-medium transition"
                style={{ background: "#3f6145", color: "#fff" }}
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
