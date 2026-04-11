const professionals = [
  {
    name: "Ananya Krishnamurthy",
    specialty: "Hatha & Pranayama",
    city: "Mysuru",
    initials: "AK",
  },
  {
    name: "Rohan Desai",
    specialty: "Vinyasa Flow",
    city: "Pune",
    initials: "RD",
  },
  {
    name: "Meera Iyer",
    specialty: "Yoga Therapy",
    city: "Chennai",
    initials: "MI",
  },
  {
    name: "Vikram Nair",
    specialty: "Yin & Restorative",
    city: "Bengaluru",
    initials: "VN",
  },
  {
    name: "Priya Sharma",
    specialty: "Ashtanga",
    city: "Rishikesh",
    initials: "PS",
  },
  {
    name: "Deepa Menon",
    specialty: "Yoga Therapy",
    city: "Kochi",
    initials: "DM",
  },
];

export default function TeachersPage() {
  return (
    <main style={{ background: "#fafaf8", color: "#18181b" }}>

      {/* ── Hero ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#fff", borderBottom: "1px solid #e4e4e7" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-medium mb-3 uppercase tracking-widest"
            style={{ color: "#71717a" }}
          >
            Our network
          </p>
          <h1
            className="text-3xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            Join our network of yoga professionals
          </h1>
          <p className="text-base md:text-lg leading-8 mb-7" style={{ color: "#52525b", maxWidth: "52ch" }}>
            Inar Ventures connects qualified Indian yoga instructors and yoga
            therapists with online classes, sessions, and programme
            opportunities for clients based outside India.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/yoga-professionals"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
              style={{ background: "#3f6145", color: "#fff" }}
            >
              Apply to Join
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
              style={{
                border: "1px solid #e4e4e7",
                color: "#18181b",
                background: "#fff",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#fafaf8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p
              className="text-xs font-medium mb-2 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              What we offer
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Why join the network
            </h2>
            <p className="text-sm md:text-base leading-8" style={{ color: "#52525b", maxWidth: "55ch" }}>
              Being part of the Inar Ventures network opens doors to professional
              online teaching opportunities you may not find elsewhere.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "↗",
                title: "Visibility",
                body: "Get in front of clients and organisations based outside India who are actively looking for qualified yoga professionals.",
              },
              {
                icon: "◎",
                title: "Client matching",
                body: "We match you with opportunities that suit your speciality, experience, and availability — so you can focus on teaching.",
              },
              {
                icon: "◉",
                title: "Professional support",
                body: "We handle coordination and communication so you can maintain a professional experience for every client engagement.",
              },
              {
                icon: "◈",
                title: "Flexible work",
                body: "Online assignments that fit around your schedule — classes, sessions, and programme support from wherever you are.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #e4e4e7" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 text-base font-bold"
                  style={{ background: "#edf3ee", color: "#3f6145" }}
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-7" style={{ color: "#71717a" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#f0e9de", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs font-medium mb-2 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              The process
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              How it works
            </h2>
            <p className="text-sm md:text-base leading-8" style={{ color: "#52525b" }}>
              Three simple steps to start teaching online with Inar Ventures.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Apply",
                body: "Submit your application with details about your training, experience, speciality, and availability.",
              },
              {
                step: "2",
                title: "Get verified",
                body: "We review your application carefully. If there is a good fit, we will get in touch to learn more about you and your work.",
              },
              {
                step: "3",
                title: "Start teaching",
                body: "Once you join the network, we match you with suitable online opportunities and support you through each engagement.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 text-lg font-semibold"
                  style={{ background: "#3f6145", color: "#fff" }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm leading-7" style={{ color: "#52525b" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse Professionals ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#fff", borderTop: "1px solid #e4e4e7" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p
              className="text-xs font-medium mb-2 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              Our professionals
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              A selection from our network
            </h2>
            <p className="text-sm md:text-base leading-8" style={{ color: "#52525b", maxWidth: "52ch" }}>
              Qualified instructors and therapists available for online classes
              and sessions with international clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {professionals.map((pro) => (
              <div
                key={pro.name}
                className="rounded-2xl p-6 flex flex-col items-center text-center"
                style={{ background: "#fafaf8", border: "1px solid #e4e4e7" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: "#edf3ee",
                    border: "2px solid #d5e4d7",
                  }}
                >
                  <span className="text-lg font-semibold" style={{ color: "#3f6145" }}>
                    {pro.initials}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-1">{pro.name}</h3>
                <p className="text-sm font-medium mb-1" style={{ color: "#3f6145" }}>
                  {pro.specialty}
                </p>
                <p className="text-xs mb-5" style={{ color: "#71717a" }}>{pro.city}</p>
                <a
                  href="/contact"
                  className="inline-block rounded-full px-5 py-2 text-sm font-medium"
                  style={{
                    border: "1px solid #e4e4e7",
                    color: "#3f6145",
                    background: "#fff",
                  }}
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#e8f0e9", borderTop: "1px solid #d4dfd5" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{ color: "#1e2d1f" }}
          >
            Ready to join?
          </h2>
          <p
            className="text-sm md:text-base leading-8 mb-7"
            style={{ color: "#3a5040", maxWidth: "46ch", margin: "0 auto 1.75rem" }}
          >
            If you are a qualified yoga instructor or yoga therapist in India,
            we would love to hear from you. Apply to join the Inar Ventures
            network and start teaching online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="/yoga-professionals"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
              style={{ background: "#3f6145", color: "#fff" }}
            >
              Apply as a Yoga Professional
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
              style={{
                border: "1px solid rgba(63,97,69,0.3)",
                color: "#1e2d1f",
                background: "rgba(255,255,255,0.5)",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
