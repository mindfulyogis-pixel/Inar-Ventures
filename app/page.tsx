"use client";

export default function Home() {
  return (
    <main style={{ background: "#fafaf8", color: "#18181b" }}>

      {/* ── Hero ── */}
      <section className="px-5 py-14 md:py-22">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              India's finest yoga instructors and therapists, available online
            </h1>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#52525b", maxWidth: "48ch" }}
            >
              Inar Ventures is a curated network of qualified Indian yoga
              professionals — available for online classes, therapy sessions, and
              programme support for clients and organisations based outside India.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition"
                style={{ background: "#3f6145", color: "#fff" }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "#2d4832")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "#3f6145")
                }
              >
                Find a Yoga Professional
              </a>
              <a
                href="/yoga-professionals"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition"
                style={{
                  border: "1px solid #e4e4e7",
                  color: "#18181b",
                  background: "#fff",
                }}
              >
                Join Our Network
              </a>
            </div>
          </div>

          <div className="relative mt-6 md:mt-0">
            <div
              className="rounded-2xl md:rounded-3xl overflow-hidden"
              style={{ border: "1px solid #e4e4e7" }}
            >
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                alt="Yoga instructor in a calm, professional setting"
                className="w-full object-cover"
                style={{ height: "400px" }}
              />
            </div>
            <div
              className="absolute bottom-5 left-5 flex items-center gap-3 px-4 py-3 rounded-xl shadow-md"
              style={{ background: "#fff", border: "1px solid #e4e4e7" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold"
                style={{ background: "#edf3ee", color: "#3f6145" }}
              >
                ✓
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#18181b" }}>
                  Verified professionals
                </p>
                <p className="text-xs" style={{ color: "#71717a" }}>
                  Carefully reviewed and curated
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── For Clients label ── */}
      <div style={{ borderTop: "1px solid #e4e4e7", background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-5 py-2.5">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#3f6145" }}
          >
            For Clients — Worldwide
          </span>
        </div>
      </div>

      {/* ── For Clients content ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e4e4e7" }}>
        <div className="max-w-6xl mx-auto px-5 pt-8 pb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 leading-snug">
            The right yoga professional for your programme
          </h2>
          <p
            className="text-base mb-6"
            style={{ color: "#52525b", maxWidth: "65ch", lineHeight: "1.8" }}
          >
            Finding a qualified, reliable yoga instructor or therapist for your
            online platform can be time-consuming. Inar Ventures does the work
            for you — we maintain a carefully vetted network of Indian yoga
            instructors and therapists who are trained, experienced, and proven
            in online delivery.
          </p>
          <ul className="space-y-2.5 text-sm" style={{ color: "#52525b" }}>
            {[
              "All professionals are verified for qualifications and teaching experience",
              "Screened specifically for online delivery capability and communication",
              "Matched to your programme's format — classes, therapy, or structured courses",
              "Flexible consultancy arrangements to suit your organisation",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: "0.65rem", lineHeight: "1.7" }}>
                <span style={{ color: "#3f6145", fontWeight: 600, flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Online Assignments ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#fafaf8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-9">
            <p
              className="text-xs font-medium mb-2 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              Types of work
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Online assignments we support
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                title: "Online Yoga Classes",
                body: "Regular, scheduled live yoga classes delivered via video — from group sessions to one-to-one.",
              },
              {
                title: "Programme Support",
                body: "Ongoing contribution to structured online yoga programmes, workshops, and course-based offerings.",
              },
              {
                title: "Yoga Therapy",
                body: "Therapeutic one-to-one work online, suited to qualified yoga therapists working with individual clients.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6 md:p-7"
                style={{ background: "#fff", border: "1px solid #e4e4e7" }}
              >
                <h3 className="text-base font-semibold mb-2.5">{card.title}</h3>
                <p className="text-sm" style={{ color: "#71717a", lineHeight: "1.75" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Inar Ventures ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#f0e9de" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div
            className="rounded-2xl md:rounded-3xl overflow-hidden order-2 md:order-1"
            style={{ border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
              alt="Online yoga programme"
              className="w-full object-cover"
              style={{ height: "360px" }}
            />
          </div>

          <div className="order-1 md:order-2">
            <p
              className="text-xs font-medium mb-3 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              Why Inar Ventures
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5 leading-snug">
              A network built on quality, not just availability
            </h2>
            <p className="text-sm md:text-base mb-4" style={{ color: "#52525b", lineHeight: "1.8" }}>
              Anyone can build a directory. Inar Ventures is different — we work
              only with yoga instructors and therapists who meet a clear standard
              of training, experience, and online professionalism.
            </p>
            <p className="text-sm md:text-base mb-7" style={{ color: "#52525b", lineHeight: "1.8" }}>
              For clients, that means confidence. For professionals, it means
              being part of a network that takes quality seriously.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              style={{ background: "#3f6145", color: "#fff" }}
            >
              Find a Yoga Professional
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── For Yoga Professionals label ── */}
      <div style={{ borderTop: "1px solid #d4dfd5", background: "#e8f0e9" }}>
        <div className="max-w-6xl mx-auto px-5 py-2.5">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#3f6145" }}
          >
            For Yoga Professionals — Based in India
          </span>
        </div>
      </div>

      {/* ── For Yoga Professionals ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#e8f0e9", color: "#1e2d1f" }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-9">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
              Expand your practice. Work with clients worldwide.
            </h2>
            <p className="text-sm md:text-base" style={{ color: "#3a5040", lineHeight: "1.8" }}>
              If you are a qualified yoga instructor or yoga therapist based in
              India, Inar Ventures can connect you with online work
              opportunities — with wellness platforms, studios, and organisations
              based outside India. You remain fully independent: this is a
              consultancy arrangement, and you are free to continue working with
              your existing clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                title: "International reach",
                body: "Connect with clients in Europe, North America, and beyond without leaving India.",
              },
              {
                title: "Work on your terms",
                body: "Consultancy-based arrangements — no exclusivity, no restrictions on your other work.",
              },
              {
                title: "Matched opportunities",
                body: "We match you based on your speciality, experience, and availability.",
              },
              {
                title: "Professional support",
                body: "We handle the client coordination so you can focus on teaching.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-5 md:p-6"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(63,97,69,0.15)",
                }}
              >
                <h3 className="text-sm md:text-base font-semibold mb-2" style={{ color: "#1e2d1f" }}>
                  {card.title}
                </h3>
                <p className="text-sm" style={{ color: "#3a5040", lineHeight: "1.7" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/yoga-professionals"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            style={{ background: "#3f6145", color: "#fff" }}
          >
            Join Our Network
            <span>→</span>
          </a>
        </div>
      </section>

    </main>
  );
}
