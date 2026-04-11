export default function About() {
  return (
    <main style={{ background: "#fafaf8", color: "#18181b" }}>

      {/* ── Hero ── */}
      <section className="px-5 py-16 md:py-24" style={{ background: "#fff" }}>
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
            Connecting India's yoga professionals with the world
          </h1>
          <p className="text-base md:text-lg leading-8" style={{ color: "#52525b", maxWidth: "55ch" }}>
            Inar Ventures is a curated network that brings qualified Indian yoga
            instructors and therapists together with clients and organisations
            offering online programmes worldwide.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#fafaf8", borderTop: "1px solid #e4e4e7" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p
              className="text-xs font-medium mb-3 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              Our mission
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5 leading-snug">
              Professional yoga, made accessible across borders
            </h2>
            <p className="text-sm md:text-base leading-8 mb-4" style={{ color: "#52525b" }}>
              Our mission is to make it straightforward for organisations and
              individuals outside India to access qualified, vetted Indian yoga
              professionals for online classes, programmes, and therapeutic work.
            </p>
            <p className="text-sm md:text-base leading-8" style={{ color: "#52525b" }}>
              We believe that India's depth of yoga knowledge deserves a global
              audience — and that international clients deserve a professional,
              reliable experience when they seek it out. We provide the
              infrastructure and curation to make both possible.
            </p>
          </div>

          <div>
            <p
              className="text-xs font-medium mb-3 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              Our story
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5 leading-snug">
              Founded to bridge a real gap
            </h2>
            <p className="text-sm md:text-base leading-8 mb-4" style={{ color: "#52525b" }}>
              Inar Ventures was founded from a straightforward observation:
              India has an extraordinary breadth of qualified, experienced yoga
              teachers and therapists. Meanwhile, organisations outside India —
              wellness platforms, corporate wellbeing teams, online studios, and
              private clients — often struggle to find reliable professionals for
              their online programmes.
            </p>
            <p className="text-sm md:text-base leading-8" style={{ color: "#52525b" }}>
              We exist to bridge that gap — carefully, selectively, and with
              quality at the centre of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who we serve ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#f0e9de", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p
              className="text-xs font-medium mb-3 uppercase tracking-widest"
              style={{ color: "#71717a" }}
            >
              Who we serve
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Two audiences, one carefully curated network
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-2xl p-7 md:p-8"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Clients &amp; organisations
              </h3>
              <p className="text-sm md:text-base leading-8 mb-4" style={{ color: "#52525b" }}>
                We work with online yoga studios, corporate wellness and
                wellbeing teams, health and fitness platforms, and individual
                clients based outside India — anyone who needs qualified yoga
                professionals for regular classes, structured programmes, or
                therapeutic sessions.
              </p>
              <p className="text-sm leading-7" style={{ color: "#71717a" }}>
                We handle the curation, verification, and coordination — you
                focus on your programme.
              </p>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                  style={{ background: "#3f6145", color: "#fff" }}
                >
                  Partner with Us →
                </a>
              </div>
            </div>

            <div
              className="rounded-2xl p-7 md:p-8"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Yoga professionals in India
              </h3>
              <p className="text-sm md:text-base leading-8 mb-4" style={{ color: "#52525b" }}>
                We work with certified yoga instructors and yoga therapists
                based in India who have the training, experience, and online
                capability to serve international clients. We look for
                professionals who take their work seriously and bring both
                knowledge and reliability to every session.
              </p>
              <p className="text-sm leading-7" style={{ color: "#71717a" }}>
                Joining the network requires a review process — we are
                selective, not a directory.
              </p>
              <div className="mt-6">
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
        </div>
      </section>

      {/* ── Values ── */}
      <section className="px-5 py-14 md:py-20" style={{ background: "#fafaf8", borderTop: "1px solid #e4e4e7" }}>
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                title: "Quality over volume",
                body: "We are selective about who joins our network. Every professional is reviewed for their qualifications, teaching experience, and online delivery ability — not simply accepted.",
              },
              {
                title: "Professionalism",
                body: "We manage coordination, communication, and follow-through so that both clients and professionals have a smooth, reliable experience at every stage.",
              },
              {
                title: "Transparency",
                body: "We are clear about what we do, who we work with, and how the process works. No ambiguity about what clients are getting or what professionals can expect.",
              },
              {
                title: "Respect for the practice",
                body: "Yoga is not a commodity. We work with professionals who take the discipline seriously — and we present their work to clients who genuinely value it.",
              },
              {
                title: "Long-term relationships",
                body: "We aim to build lasting connections between professionals and clients, not one-off transactions. Consistency matters to us on both sides.",
              },
              {
                title: "India's yoga heritage",
                body: "India has a depth of yoga knowledge that is unmatched. We are proud to help share it professionally and responsibly with the world.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6 md:p-7"
                style={{ background: "#fff", border: "1px solid #e4e4e7" }}
              >
                <h3 className="text-base font-semibold mb-2">{v.title}</h3>
                <p className="text-sm leading-7" style={{ color: "#71717a" }}>
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
