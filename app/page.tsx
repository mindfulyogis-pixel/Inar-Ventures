"use client";

export default function Home() {
  return (
    <main style={{ background: "#fafaf8", color: "#18181b" }}>

      {/* ── Hero ── */}
      <section className="px-5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p
              className="text-xs font-medium mb-4 tracking-widest uppercase"
              style={{ color: "#71717a" }}
            >
              India's curated yoga network
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Qualified Indian yoga professionals, online
            </h1>

            <p
              className="text-base md:text-lg leading-8 mb-5"
              style={{ color: "#71717a", maxWidth: "46ch" }}
            >
              We connect certified yoga instructors and therapists across India
              with clients and organisations offering online classes and
              programmes worldwide.
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
                Partner with Us
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
                Apply as a Yoga Professional
              </a>
            </div>
          </div>

          <div className="relative mt-6 md:mt-0">
            <div
              className="rounded-2xl md:rounded-3xl overflow-hidden"
              style={{ border: "1px solid #e4e4e7" }}
            >
              <img
                src="https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?auto=format&fit=crop&w=1200&q=80"
                alt="Yoga instructor teaching an online class via video"
                className="w-full object-cover"
                style={{ height: "380px" }}
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
            For Clients — organisations &amp; studios based outside India
          </span>
        </div>
      </div>

      {/* ── Our curated network ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e4e4e7" }}>
        <div className="max-w-6xl mx-auto px-5 pt-10 pb-14">
          <p
            className="text-base leading-8 mb-5"
            style={{ color: "#52525b", maxWidth: "65ch" }}
          >
            Inar Ventures maintains a carefully selected network of qualified
            Indian yoga instructors and therapists — professionals reviewed for
            their training, teaching experience, and ability to deliver
            effectively in an online setting. We do the curation work so you
            don't have to.
          </p>
          <ul
            className="space-y-2 text-sm"
            style={{ color: "#52525b" }}
          >
            <li style={{ display: "flex", gap: "0.6rem" }}>
              <span style={{ color: "#3f6145", fontWeight: 600 }}>—</span>
              Verified qualifications and genuine teaching background
            </li>
            <li style={{ display: "flex", gap: "0.6rem" }}>
              <span style={{ color: "#3f6145", fontWeight: 600 }}>—</span>
              Curated for reliability and professionalism, not just availability
            </li>
            <li style={{ display: "flex", gap: "0.6rem" }}>
              <span style={{ color: "#3f6145", fontWeight: 600 }}>—</span>
              Experienced in online delivery and working with international clients
            </li>
            <li style={{ display: "flex", gap: "0.6rem" }}>
              <span style={{ color: "#3f6145", fontWeight: 600 }}>—</span>
              Matched to your programme's specific requirements
            </li>
          </ul>
        </div>
      </section>

      {/* ── Online Assignments ── */}
      <section className="px-5 py-16 md:py-20" style={{ background: "#fafaf8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p
              className="text-xs font-medium mb-2"
              style={{ color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase" }}
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
                className="rounded-2xl p-6 md:p-8"
                style={{ background: "#fff", border: "1px solid #e4e4e7" }}
              >
                <h3 className="text-base md:text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm leading-7" style={{ color: "#71717a" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Inar Ventures ── */}
      <section className="px-5 py-16 md:py-20" style={{ background: "#f0e9de" }}>
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
              className="text-xs font-medium mb-2"
              style={{ color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Why Inar Ventures
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
              Reliable yoga professionals for your online programmes
            </h2>
            <p className="text-sm md:text-base leading-8 mb-3" style={{ color: "#52525b" }}>
              Whether you run a wellness platform, a corporate wellbeing
              programme, or an online yoga studio, Inar Ventures gives you
              access to qualified Indian yoga instructors and therapists who are
              experienced, professional, and effective online.
            </p>
            <p className="text-sm md:text-base leading-8 mb-7" style={{ color: "#52525b" }}>
              We do the curation so you don't have to — every professional in
              our network is reviewed for qualifications, communication, and
              online delivery ability.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              style={{ background: "#3f6145", color: "#fff" }}
            >
              Partner with Us
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
            For Yoga Professionals — based in India
          </span>
        </div>
      </div>

      {/* ── For Yoga Professionals ── */}
      <section className="px-5 py-16 md:py-20" style={{ background: "#e8f0e9", color: "#1e2d1f" }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 leading-snug">
              Built for serious yoga teachers and therapists
            </h2>
            <p className="text-sm md:text-base leading-8" style={{ color: "#3a5040" }}>
              If you bring real qualifications, genuine experience, and the
              ability to teach well online, Inar Ventures can connect you with
              meaningful work — with clients based outside India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                title: "International exposure",
                body: "Work with clients and organisations based in Europe, North America, and beyond.",
              },
              {
                title: "Matched to your profile",
                body: "Opportunities suited to your speciality, availability, and experience level.",
              },
              {
                title: "Flexible assignments",
                body: "Online classes, programme support, and therapy-related work — on your schedule.",
              },
              {
                title: "Handled professionally",
                body: "We manage coordination so you can focus entirely on your teaching.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-5 md:p-6"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(63,97,69,0.15)",
                }}
              >
                <h3 className="text-sm md:text-base font-semibold mb-2" style={{ color: "#1e2d1f" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-6 md:leading-7" style={{ color: "#3a5040" }}>
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
            Apply to Join the Network
            <span>→</span>
          </a>
        </div>
      </section>

    </main>
  );
}
