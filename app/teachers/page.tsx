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
    <main className="bg-[#F7F3EC] text-[#2F2A26]">

      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Join our network of yoga professionals
          </h1>
          <p className="text-lg leading-8 text-[#2F2A26]/80 mb-8 max-w-2xl mx-auto">
            Inar Ventures connects qualified Indian yoga instructors and yoga
            therapists with online classes, sessions, and programme
            opportunities for clients based outside India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/yoga-professionals"
              className="inline-block rounded-full px-6 py-3 bg-[#5E6B4E] text-[#F7F3EC] font-medium hover:bg-[#46513C] transition"
            >
              Apply to Join
            </a>
            <a
              href="/about"
              className="inline-block rounded-full px-6 py-3 border border-[#5E6B4E] text-[#5E6B4E] font-medium hover:bg-[#EAE3D8] transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            What we offer
          </h2>
          <p className="text-center text-lg leading-8 text-[#2F2A26]/80 max-w-2xl mx-auto mb-12">
            Being part of the Inar Ventures network opens doors to professional
            online teaching opportunities you may not find elsewhere.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl p-6 bg-[#F7F3EC] border border-[#EAE3D8]">
              <div className="w-10 h-10 rounded-full bg-[#5E6B4E]/15 flex items-center justify-center mb-4">
                <span className="text-[#5E6B4E] text-lg">✦</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Visibility</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                Get in front of clients and organisations based outside India
                who are actively looking for qualified yoga professionals.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[#F7F3EC] border border-[#EAE3D8]">
              <div className="w-10 h-10 rounded-full bg-[#5E6B4E]/15 flex items-center justify-center mb-4">
                <span className="text-[#5E6B4E] text-lg">✦</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Client matching</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                We match you with opportunities that suit your speciality,
                experience, and availability — so you can focus on teaching.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[#F7F3EC] border border-[#EAE3D8]">
              <div className="w-10 h-10 rounded-full bg-[#5E6B4E]/15 flex items-center justify-center mb-4">
                <span className="text-[#5E6B4E] text-lg">✦</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Professional support
              </h3>
              <p className="text-[#2F2A26]/75 leading-7">
                We handle coordination and communication so you can maintain a
                professional experience for every client engagement.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[#F7F3EC] border border-[#EAE3D8]">
              <div className="w-10 h-10 rounded-full bg-[#5E6B4E]/15 flex items-center justify-center mb-4">
                <span className="text-[#5E6B4E] text-lg">✦</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible work</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                Online assignments that fit around your schedule — classes,
                sessions, and programme support from wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-[#EAE3D8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            How it works
          </h2>
          <p className="text-center text-lg leading-8 text-[#2F2A26]/80 mb-14">
            Three simple steps to start teaching online with Inar Ventures.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#5E6B4E] text-[#F7F3EC] flex items-center justify-center mx-auto mb-5 text-xl font-semibold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                Submit your application with details about your training,
                experience, speciality, and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#5E6B4E] text-[#F7F3EC] flex items-center justify-center mx-auto mb-5 text-xl font-semibold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Get verified</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                We review your application carefully. If there is a good fit, we
                will get in touch to learn more about you and your work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#5E6B4E] text-[#F7F3EC] flex items-center justify-center mx-auto mb-5 text-xl font-semibold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Start teaching</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                Once you join the network, we match you with suitable online
                opportunities and support you through each engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Professionals */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Our yoga professionals
          </h2>
          <p className="text-center text-lg leading-8 text-[#2F2A26]/80 max-w-2xl mx-auto mb-12">
            A selection of the qualified instructors and therapists in our
            network, available for online classes and sessions.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((pro) => (
              <div
                key={pro.name}
                className="rounded-2xl bg-[#F7F3EC] border border-[#EAE3D8] p-6 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#EAE3D8] border-2 border-[#ddd3c6] flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-[#5E6B4E]">
                    {pro.initials}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{pro.name}</h3>
                <p className="text-sm text-[#5E6B4E] font-medium mb-1">
                  {pro.specialty}
                </p>
                <p className="text-sm text-[#2F2A26]/60 mb-5">{pro.city}</p>
                <a
                  href="/contact"
                  className="inline-block rounded-full px-5 py-2 border border-[#5E6B4E] text-[#5E6B4E] text-sm font-medium hover:bg-[#EAE3D8] transition"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-20 bg-[#46513C] text-[#F7F3EC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to join?
          </h2>
          <p className="text-lg leading-8 text-[#F7F3EC]/85 mb-8">
            If you are a qualified yoga instructor or yoga therapist in India,
            we would love to hear from you. Apply to join the Inar Ventures
            network and start teaching online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/yoga-professionals"
              className="inline-block rounded-full px-6 py-3 bg-[#F7F3EC] text-[#46513C] font-medium hover:opacity-90 transition"
            >
              Apply as a Yoga Professional
            </a>
            <a
              href="/contact"
              className="inline-block rounded-full px-6 py-3 border border-[#F7F3EC] text-[#F7F3EC] font-medium hover:bg-[#5E6B4E] transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
