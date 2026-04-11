export default function About() {
  return (
    <main style={{ background: "#fafaf8", color: "#18181b" }}>

      {/* ── Hero ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#fff", borderBottom: "1px solid #e4e4e7" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-medium mb-3 uppercase tracking-widest"
            style={{ color: "#71717a" }}
          >
            About
          </p>
          <h1
            className="text-3xl md:text-5xl font-semibold leading-tight mb-5"
            style={{ letterSpacing: "-0.01em" }}
          >
            We believe India has some of the world's finest yoga talent — and the world should have access to it.
          </h1>
        </div>
      </section>

      {/* ── Mission + Story ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#fafaf8", borderBottom: "1px solid #e4e4e7" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p
              className="text-xs font-medium mb-3 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              Our mission
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5 leading-snug">
              Creating real opportunities on both sides
            </h2>
            <p className="text-sm md:text-base mb-4" style={{ color: "#52525b", lineHeight: "1.8" }}>
              Inar Ventures exists to create meaningful online work opportunities
              for qualified yoga instructors and therapists based in India, while
              giving clients and organisations worldwide access to a curated,
              reliable network of professionals.
            </p>
            <p className="text-sm md:text-base" style={{ color: "#52525b", lineHeight: "1.8" }}>
              We operate as a consultancy network — professionals retain full
              independence, and clients get access to expertise that would
              otherwise be difficult to find and vet.
            </p>
          </div>

          <div>
            <p
              className="text-xs font-medium mb-3 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              How we started
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5 leading-snug">
              Founded to solve a real problem
            </h2>
            <p className="text-sm md:text-base mb-4" style={{ color: "#52525b", lineHeight: "1.8" }}>
              Inar Ventures was founded on a simple observation: the demand for
              authentic, qualified yoga instruction online is growing globally,
              but finding the right professional — one who is genuinely trained,
              experienced in online delivery, and dependable — remains difficult.
            </p>
            <p className="text-sm md:text-base" style={{ color: "#52525b", lineHeight: "1.8" }}>
              We set out to solve that — by building a network where quality is
              the entry requirement, not an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who we serve ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#f0e9de", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p
              className="text-xs font-medium mb-3 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              Who we serve
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Two audiences, one curated network
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-2xl p-7 md:p-8"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#3f6145" }}
              >
                For clients
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Organisations and programmes worldwide
              </h3>
              <p className="text-sm md:text-base mb-5" style={{ color: "#52525b", lineHeight: "1.8" }}>
                Wellness platforms, corporate wellbeing programmes, online yoga
                studios, and health organisations looking for qualified yoga
                professionals for online delivery. We handle the curation,
                verification, and coordination — you focus on your programme.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                style={{ background: "#3f6145", color: "#fff" }}
              >
                Partner with Us →
              </a>
            </div>

            <div
              className="rounded-2xl p-7 md:p-8"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#3f6145" }}
              >
                For professionals
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Yoga instructors and therapists in India
              </h3>
              <p className="text-sm md:text-base mb-5" style={{ color: "#52525b", lineHeight: "1.8" }}>
                Yoga instructors and yoga therapists based in India who are
                qualified, experienced, and looking to expand their practice to
                international clients online. Joining the network is a
                consultancy arrangement — you stay fully independent.
              </p>
              <a
                href="/yoga-professionals"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                style={{
                  border: "1px solid #3f6145",
                  color: "#3f6145",
                  background: "transparent",
                }}
              >
                Apply to Join →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#fafaf8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p
              className="text-xs font-medium mb-3 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              What we stand for
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">Our values</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                title: "Quality",
                body: "We are selective about who joins the network. Every professional is reviewed for qualifications, teaching experience, and online delivery — not simply listed.",
              },
              {
                title: "Integrity",
                body: "We are straightforward about what we do and how we operate — with both the professionals in our network and the clients we work with.",
              },
              {
                title: "Independence",
                body: "Professionals in our network are independent consultants, free to work with their own clients. We connect, not control.",
              },
              {
                title: "Professionalism",
                body: "We manage coordination and communication so that both clients and professionals have a smooth, reliable experience at every stage.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #e4e4e7" }}
              >
                <h3 className="text-base font-semibold mb-2.5">{v.title}</h3>
                <p className="text-sm" style={{ color: "#71717a", lineHeight: "1.75" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
