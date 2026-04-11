export default function Home() {
  return (
    <main style={{ background: "#fafaf8", color: "#18181b" }}>

      {/* ── Hero ── */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-sm font-medium"
              style={{ background: "#edf3ee", color: "#3f6145" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#3f6145" }}
              />
              India's curated yoga network
            </div>

            <h1
              className="text-5xl md:text-6xl font-semibold leading-tight mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Qualified Indian yoga professionals, online
            </h1>

            <p
              className="text-lg leading-8 mb-6"
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
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "#2d4832")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "#3f6145")
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

          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ border: "1px solid #e4e4e7" }}
            >
              <img
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1200&q=80"
                alt="Yoga professional in a calm teaching environment"
                className="w-full object-cover"
                style={{ height: "460px" }}
              />
            </div>
            <div
              className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg"
              style={{ background: "#fff", border: "1px solid #e4e4e7" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold"
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

      {/* ── Audience divider: For Clients ── */}
      <div style={{ borderTop: "1px solid #e4e4e7", background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-6 py-3">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#3f6145" }}
          >
            For Clients — organisations &amp; studios based outside India
          </span>
        </div>
      </div>

      {/* ── Curated Network (3 feature blocks) ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e4e4e7" }}>
        <div className="max-w-6xl mx-auto px-6 pb-14 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "◎",
              label: "Qualified",
              sub: "Instructors and therapists with verified training credentials and genuine teaching experience.",
            },
            {
              icon: "◈",
              label: "Experienced",
              sub: "Professionals with a meaningful track record in yoga, not just certification on paper.",
            },
            {
              icon: "◉",
              label: "Dependable",
              sub: "Online-ready, consistent, and professional — curated for reliability in a remote setting.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-7"
              style={{ background: "#fafaf8", border: "1px solid #e4e4e7" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg font-bold"
                style={{ background: "#edf3ee", color: "#3f6145" }}
              >
                {item.icon}
              </div>
              <p className="font-semibold text-base mb-2" style={{ color: "#18181b" }}>
                {item.label}
              </p>
              <p className="text-sm leading-6" style={{ color: "#71717a" }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Online Assignments We Support ── */}
      <section className="px-6 py-20 md:py-24" style={{ background: "#fafaf8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-medium mb-3"
              style={{ color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Types of work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Online assignments we support
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Online Yoga Classes",
                body: "Regular, scheduled live yoga classes delivered to clients via video — from group sessions to one-to-one.",
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
                className="rounded-2xl p-8"
                style={{ background: "#fff", border: "1px solid #e4e4e7" }}
              >
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <p className="text-sm leading-7" style={{ color: "#71717a" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Inar Ventures ── */}
      <section className="px-6 py-20 md:py-24" style={{ background: "#f0e9de" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div
            className="rounded-3xl overflow-hidden"
            style={{ border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
              alt="Online yoga programme"
              className="w-full object-cover"
              style={{ height: "400px" }}
            />
          </div>

          <div>
            <p
              className="text-sm font-medium mb-3"
              style={{ color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Why Inar Ventures
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 leading-snug">
              Reliable yoga professionals for your online programmes
            </h2>
            <p className="text-base leading-8 mb-4" style={{ color: "#52525b" }}>
              Whether you run a wellness platform, a corporate wellbeing
              programme, or an online yoga studio, Inar Ventures gives you
              access to qualified Indian yoga instructors and therapists who are
              experienced, professional, and effective online.
            </p>
            <p className="text-base leading-8 mb-8" style={{ color: "#52525b" }}>
              We do the curation so you don't have to — every professional in
              our network is reviewed for qualifications, communication, and
              online delivery ability.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition"
              style={{ background: "#3f6145", color: "#fff" }}
            >
              Partner with Us
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Audience divider: For Yoga Professionals ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#162618" }}>
        <div className="max-w-6xl mx-auto px-6 py-3">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "rgba(244,244,245,0.5)" }}
          >
            For Yoga Professionals — based in India
          </span>
        </div>
      </div>

      {/* ── For Yoga Professionals ── */}
      <section className="px-6 py-16 md:py-20" style={{ background: "#1e2d1f", color: "#f4f4f5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
              Built for serious yoga teachers and therapists
            </h2>
            <p className="text-lg leading-8" style={{ color: "rgba(244,244,245,0.7)" }}>
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
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h3 className="text-base font-semibold mb-3" style={{ color: "#fff" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-7" style={{ color: "rgba(244,244,245,0.65)" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/yoga-professionals"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition"
            style={{ background: "#fff", color: "#1e2d1f" }}
          >
            Apply to Join the Network
            <span>→</span>
          </a>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="px-6 py-20 md:py-24"
        style={{ background: "#f5f0e8", color: "#18181b" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-sm font-medium mb-4"
            style={{ color: "#71717a", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Get started
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-5 leading-tight">
            Ready to work together?
          </h2>
          <p
            className="text-lg leading-8 mb-10"
            style={{ color: "#52525b", maxWidth: "44ch", margin: "0 auto 2.5rem" }}
          >
            Whether you are a yoga professional looking for online work, or an
            organisation seeking qualified instructors — we would love to hear
            from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition"
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
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition"
              style={{
                border: "1px solid #d1ccc4",
                color: "#18181b",
                background: "transparent",
              }}
            >
              Apply as a Yoga Professional
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
