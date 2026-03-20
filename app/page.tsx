export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Inar Ventures
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Managed Yoga Teaching Support for Global Programs
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            We source, vet, and coordinate experienced Indian yoga teachers and
            therapists so you can deliver high-quality online programs without
            managing operations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/teachers"
              className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Apply to Work with Us
            </a>
            <a
              href="/contact"
              className="border border-gray-300 px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-50 transition"
            >
              Request Information
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            A Structured Approach to Global Yoga Delivery
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Inar Ventures builds and manages a curated network of Indian yoga
            teachers and therapists for international studios and educators.
            This is not a marketplace. We handle sourcing, vetting,
            onboarding, and coordination so programs run smoothly and
            consistently.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            What We Handle
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Teacher Sourcing</h3>
              <p className="text-gray-600 leading-relaxed">
                We identify experienced yoga teachers and therapists suited for
                structured online delivery.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                Vetting and Onboarding
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each teacher is screened for communication, professionalism, and
                online readiness.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                Ongoing Coordination
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We manage scheduling, communication, and continuity so programs
                run smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Work with International Yoga Programs
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Join a structured network of yoga teachers and therapists working
            with global clients, supported by clear communication and
            coordination.
          </p>

          <a
            href="/teachers"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Apply to Work with Us
          </a>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Understand requirements",
              "Match suitable teachers",
              "Onboard and coordinate",
              "Provide ongoing support",
            ].map((step, i) => (
              <div key={i} className="border rounded-2xl p-6 text-center">
                <div className="text-sm text-gray-500 mb-2">Step {i + 1}</div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t px-6 py-10 text-center text-sm text-gray-500">
        Bangalore, India · hello@inarventures.com
      </footer>
    </main>
  );
}