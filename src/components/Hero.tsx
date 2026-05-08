import { useState } from 'react';
import { Phone, Star, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const services = [
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Basement Finishing',
    'Home Addition',
    'Flooring',
    'Painting',
    'Other',
  ];

  return (
    <section className="relative min-h-[580px] md:min-h-[620px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: headline */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#c8860d" className="text-gold-500" />
              ))}
              <span className="text-gold-400 text-sm font-medium ml-1">5-Star Rated</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 font-serif">
              Maryland's Home Remodeling{' '}
              <span className="text-gold-400">Experts</span>
            </h1>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              Transform your home without breaking the bank! At Experts Remodel, we offer top-notch
              home remodeling services at prices that fit your budget.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Licensed & Insured Contractors',
                'Free Design Consultations',
                'No-Surprise Pricing',
                'Serving All of Maryland',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-200 text-sm">
                  <CheckCircle size={15} className="text-gold-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="#quote"
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3 rounded transition-all duration-200 text-sm shadow-lg shadow-gold-900/30 hover:shadow-gold-900/50"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:3015655854"
                className="flex items-center gap-2 border-2 border-white/70 hover:border-gold-400 hover:text-gold-400 text-white font-semibold px-6 py-3 rounded transition-all duration-200 text-sm"
              >
                <Phone size={15} />
                (301) 565-5854
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">500+</div>
                <div className="text-xs text-gray-400">Projects Done</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">15+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">100%</div>
                <div className="text-xs text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right: quote form */}
          <div id="quote" className="bg-olive-800/90 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gold-700/30 shadow-2xl">
            <div className="mb-1">
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
                Special Offer
              </span>
            </div>
            <h2 className="text-white text-xl md:text-2xl font-bold mb-1">
              Get A 20% Discount On Your Home Remodeling!
            </h2>
            <p className="text-gray-300 text-sm mb-5">
              Fill out the form below and we'll contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 focus:border-gold-400 text-white placeholder-gray-400 rounded px-4 py-2.5 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 focus:border-gold-400 text-white placeholder-gray-400 rounded px-4 py-2.5 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 focus:border-gold-400 text-white placeholder-gray-400 rounded px-4 py-2.5 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 focus:border-gold-400 text-white rounded px-4 py-2.5 text-sm outline-none transition-colors appearance-none"
                >
                  <option value="" className="text-gray-800">
                    Select a Service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} className="text-gray-800">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 rounded transition-colors text-sm tracking-wide mt-2 shadow-lg"
              >
                Book My Free Consultation
              </button>
            </form>

            <p className="text-gray-400 text-xs text-center mt-4">
              No spam. We respect your privacy. Unsubscribe anytime.
            </p>

            {/* Phone CTA */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
              <Phone size={15} className="text-gold-400" />
              <span className="text-gray-300 text-sm">
                Or call us:{' '}
                <a href="tel:3015655854" className="text-gold-400 font-semibold hover:underline">
                  1-833-221-0133
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
