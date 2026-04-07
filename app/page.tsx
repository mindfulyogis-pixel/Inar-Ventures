export default function Home() {
  return (
    <main className="bg-[#F7F3EC] text-[#2F2A26]">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Qualified Indian yoga professionals for online work with clients
              outside India
            </h1>
            <p className="text-lg leading-8 text-[#2F2A26]/80 mb-8">
              We work with qualified yoga instructors and yoga therapists in
              India for online classes, sessions, and programme support with
              clients based outside India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/yoga-professionals"
                className="inline-block rounded-full px-6 py-3 bg-[#5E6B4E] text-[#F7F3EC] font-medium hover:bg-[#46513C] transition"
              >
                Apply as a Yoga Professional
              </a>
              <a
                href="/contact"
                className="inline-block rounded-full px-6 py-3 border border-[#5E6B4E] text-[#5E6B4E] font-medium hover:bg-[#EAE3D8] transition"
              >
                Partner with Us
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-3xl overflow-hidden border border-[#EAE3D8] bg-white">
              <img
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1200&q=80"
                alt="Yoga professional in a calm online teaching setup"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Inar Ventures Does */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            A curated network of qualified Indian yoga professionals
          </h2>
          <p className="text-lg leading-8 text-[#2F2A26]/80 mb-4">
            Inar Ventures works with qualified yoga instructors and yoga
            therapists in India for online classes, sessions, and programme
            support with clients based outside India.
          </p>
          <p className="text-lg leading-8 text-[#2F2A26]/80 mb-4">
            Our focus is on quality, professionalism, and the ability to
            deliver yoga effectively in an online setting.
          </p>
          <p className="text-lg leading-8 text-[#2F2A26]/80">
            We support clients who need dependable yoga professionals for online
            classes, programmes, and related services.
          </p>
        </div>
      </section>

      {/* For Yoga Professionals */}
      <section className="px-6 py-20 bg-[#EAE3D8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              For yoga professionals
            </h2>
            <p className="text-lg leading-8 text-[#2F2A26]/80 mb-6">
              If you are a qualified yoga instructor or yoga therapist, Inar
              Ventures offers opportunities to contribute to online classes,
              sessions, and programmes for clients based outside India.
            </p>
            <p className="text-lg leading-8 text-[#2F2A26]/80 mb-8">
              We work with yoga professionals who bring depth,
              professionalism, strong communication, and the ability to hold a
              class or session well in an online environment.
            </p>
            <a
              href="/yoga-professionals"
              className="inline-block rounded-full px-6 py-3 bg-[#5E6B4E] text-[#F7F3EC] font-medium hover:bg-[#46513C] transition"
            >
              Apply as a Yoga Professional
            </a>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl bg-white p-6 border border-[#ddd3c6]">
              <h3 className="text-xl font-semibold mb-2">
                Qualified and experienced
              </h3>
              <p className="text-[#2F2A26]/75 leading-7">
                We work with yoga professionals who bring relevant training, a
                grounded approach, and confidence in their work.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-[#ddd3c6]">
              <h3 className="text-xl font-semibold mb-2">Online-ready</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                You should be able to teach clearly and effectively in an
                online setting.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-[#ddd3c6]">
              <h3 className="text-xl font-semibold mb-2">
                Professional and dependable
              </h3>
              <p className="text-[#2F2A26]/75 leading-7">
                Clear communication, reliability, and consistency matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Assignments */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Online assignments we support
          </h2>
          <p className="text-center text-lg leading-8 text-[#2F2A26]/80 max-w-3xl mx-auto mb-12">
            The work may include different formats depending on client needs.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-8 bg-[#F7F3EC] border border-[#EAE3D8]">
              <h3 className="text-xl font-semibold mb-3">Online yoga classes</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                Regular live classes delivered in an online format.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-[#F7F3EC] border border-[#EAE3D8]">
              <h3 className="text-xl font-semibold mb-3">Programme support</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                Ongoing contribution to online yoga programmes and offerings.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-[#F7F3EC] border border-[#EAE3D8]">
              <h3 className="text-xl font-semibold mb-3">
                Yoga therapy-related work
              </h3>
              <p className="text-[#2F2A26]/75 leading-7">
                Online work suited to qualified yoga therapists where
                appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Clients */}
      <section className="px-6 py-20 bg-[#F7F3EC]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              For clients offering yoga classes and programmes online
            </h2>
            <p className="text-lg leading-8 text-[#2F2A26]/80 mb-6">
              Inar Ventures works with clients who offer yoga classes and
              programmes online and are looking for qualified Indian yoga
              instructors and yoga therapists.
            </p>
            <p className="text-lg leading-8 text-[#2F2A26]/80 mb-8">
              We provide carefully curated Indian yoga professionals chosen for
              quality, communication skills, and the ability to deliver
              effective classes and sessions online.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full px-6 py-3 border border-[#5E6B4E] text-[#5E6B4E] font-medium hover:bg-[#EAE3D8] transition"
            >
              Partner with Us
            </a>
          </div>

          <div>
            <div className="rounded-3xl overflow-hidden border border-[#EAE3D8] bg-white">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
                alt="Clean online yoga programme environment"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Inar Ventures */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Why Inar Ventures
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl p-6 bg-[#F7F3EC] border border-[#EAE3D8]">
              <h3 className="text-lg font-semibold mb-2">
                Qualified Indian yoga professionals
              </h3>
              <p className="text-[#2F2A26]/75 leading-7">
                Work with instructors and yoga therapists with relevant training
                and experience.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[#F7F3EC] border border-[#EAE3D8]">
              <h3 className="text-lg font-semibold mb-2">Careful curation</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                We take a selective approach to who joins the network.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[#F7F3EC] border border-[#EAE3D8]">
              <h3 className="text-lg font-semibold mb-2">Strong communication</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                We value clarity, professionalism, and reliability.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[#F7F3EC] border border-[#EAE3D8]">
              <h3 className="text-lg font-semibold mb-2">Online delivery</h3>
              <p className="text-[#2F2A26]/75 leading-7">
                We focus on people who can teach effectively in an online
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-[#46513C] text-[#F7F3EC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Qualified Indian yoga professionals for online classes, sessions,
            and programme support
          </h2>
          <p className="text-lg leading-8 text-[#F7F3EC]/85 mb-8">
            Inar Ventures works with qualified Indian yoga professionals and
            clients who need dependable support for online yoga classes,
            sessions, and programmes.
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