// Images sourced from Unsplash — royalty-free, no auth required
const IMAGES = {
  kitchen:
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
  bathroom:
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80',
  outdoor:
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
} as const;

export default function ExpertTeam() {
  return (
    <section
      id="expert-team"
      aria-label="Expert Remodeling Team"
      className="bg-[#f5f2ee] py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Column: Photo Collage ───────────────────────────────── */}
          <div className="grid grid-cols-2 gap-3 h-full">
            {/* Tall kitchen image — spans full height of col 1 */}
            <div className="row-span-2">
              <img
                src={IMAGES.kitchen}
                alt="Modern white kitchen with pendant lighting and open shelving"
                className="w-full h-full object-cover rounded-2xl shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Top-right: bathroom */}
            <div>
              <img
                src={IMAGES.bathroom}
                alt="Luxury bathroom with patterned tile floor and white vanity"
                className="w-full h-48 lg:h-52 object-cover rounded-2xl shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Bottom-right: outdoor covered patio */}
            <div>
              <img
                src={IMAGES.outdoor}
                alt="Modern outdoor covered patio with glass walls and minimalist design"
                className="w-full h-48 lg:h-52 object-cover rounded-2xl shadow-sm"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── Right Column: Text Content ───────────────────────────────── */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Expert Remodeling Team
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our team at Experts Remodel consists of skilled{' '}
              <strong className="font-semibold text-gray-900">
                home remodeling contractors
              </strong>
              , making us a premier{' '}
              <strong className="font-semibold text-gray-900">
                home design expert
              </strong>{' '}
              in Maryland.
            </p>

            <p className="text-gray-700 leading-relaxed">
              As renowned{' '}
              <strong className="font-semibold text-gray-900">
                home renovation contractors
              </strong>
              , we specialize in{' '}
              <strong className="font-semibold text-gray-900">
                luxury home remodels
              </strong>
              , providing a touch of elegance to every project.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We offer{' '}
              <strong className="font-semibold text-gray-900">
                complimentary design consultations
              </strong>{' '}
              for{' '}
              <strong className="font-semibold text-gray-900">
                home remodeling projects
              </strong>{' '}
              throughout Maryland. Get in touch for the most reliable and
              cost-effective designers&apos; service:{' '}
              <strong className="font-semibold text-gray-900">
                <a
                  href="tel:8779653854"
                  className="hover:text-gold-600 transition-colors duration-200"
                >
                  (877)-965-3854
                </a>
              </strong>
            </p>

            <div className="mt-2">
              <a
                href="#quote"
                className="
                  inline-block
                  bg-gold-500 hover:bg-gold-600
                  text-white font-semibold
                  px-8 py-3
                  rounded
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2
                "
              >
                Get In Touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
