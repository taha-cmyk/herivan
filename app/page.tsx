import Image from 'next/image';
import Link from 'next/link';
import { SAMPLE_VANS, SAMPLE_EXPERIENCES, SAMPLE_TESTIMONIALS } from '../constants';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section with van in hills background */}
      <section className="w-full h-[90vh] relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Herivan - Van in Moroccan hills" 
            fill 
            style={{objectFit: 'cover'}} 
            priority
          />
        </div>
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="z-10 text-center p-8 max-w-3xl">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Herivan</h1>
          <p className="text-2xl text-white mb-8 drop-shadow-md">Your Moroccan Van Adventure</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/vans" 
              className="btn-primary group"
            >
              Explore Our Vans
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link 
              href="/#experiences" 
              className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-md hover:bg-white/30 transition-colors"
            >
              View Experiences
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#vans" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Van Fleet Section */}
      <section id="vans" className="w-full py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center section-heading mb-16">Our Van Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SAMPLE_VANS.map(van => (
              <div key={van.id} className="modern-card group">
                <div className="h-72 relative overflow-hidden">
                  <Image 
                    src={van.imageUrl} 
                    alt={van.name} 
                    fill 
                    style={{objectFit: 'cover'}} 
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-bold text-xl">{van.pricePerDay} MAD/day</p>
                    <p>Capacity: {van.capacity} people</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{van.name}</h3>
                  <p className="text-gray-600 italic mb-4">{van.tagline}</p>
                  <p className="mb-4">{van.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {van.features.map(feature => (
                        <li key={feature} className="flex items-center">
                          <span className="mr-2 text-primary">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="w-full py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center section-heading mb-16">Curated Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SAMPLE_EXPERIENCES.map(exp => (
              <div key={exp.id} className="modern-card bg-white group h-full flex flex-col">
                <div className="h-56 relative overflow-hidden">
                  <Image 
                    src={exp.imageUrl} 
                    alt={exp.title} 
                    fill 
                    style={{objectFit: 'cover'}} 
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-0 left-0 text-xl font-bold text-white p-6">{exp.title}</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4 flex-grow">{exp.description}</p>
                  <div className="mt-auto">
                    <p className="text-sm text-gray-500 mb-4">
                      Suitable for: {exp.suitableVanIds?.map(id => {
                        const van = SAMPLE_VANS.find(v => v.id === id);
                        return van ? van.name : '';
                      }).join(', ')}
                    </p>
                    <Link 
                      href={`/experiences/${exp.id}`}
                      className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors group"
                    >
                      View Details
                      <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center section-heading mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAMPLE_TESTIMONIALS.slice(0, 4).map(testimonial => (
              <div key={testimonial.id} className="p-8 modern-card bg-gray-50 relative">
                <div className="absolute -top-5 -left-5 text-6xl text-primary opacity-20"></div>
                <p className="italic mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  {testimonial.avatarUrl && (
                    <div className="mr-4 w-12 h-12 rounded-full overflow-hidden relative">
                      <Image 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.author} 
                        fill 
                        style={{objectFit: 'cover'}} 
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    {testimonial.location && (
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center section-heading mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 modern-card bg-white hover:bg-primary hover:text-white transition-colors group">
              <div className="w-20 h-20 bg-primary group-hover:bg-white rounded-full flex items-center justify-center text-white group-hover:text-primary text-3xl font-bold mx-auto mb-6 transition-colors">1</div>
              <h3 className="text-2xl font-bold mb-4">Choose Your Van</h3>
              <p>Select from our fleet of fully-equipped vans tailored for Moroccan adventures.</p>
            </div>
            <div className="text-center p-6 modern-card bg-white hover:bg-primary hover:text-white transition-colors group">
              <div className="w-20 h-20 bg-primary group-hover:bg-white rounded-full flex items-center justify-center text-white group-hover:text-primary text-3xl font-bold mx-auto mb-6 transition-colors">2</div>
              <h3 className="text-2xl font-bold mb-4">Plan Your Route</h3>
              <p>Use our curated experiences or create your own custom itinerary.</p>
            </div>
            <div className="text-center p-6 modern-card bg-white hover:bg-primary hover:text-white transition-colors group">
              <div className="w-20 h-20 bg-primary group-hover:bg-white rounded-full flex items-center justify-center text-white group-hover:text-primary text-3xl font-bold mx-auto mb-6 transition-colors">3</div>
              <h3 className="text-2xl font-bold mb-4">Hit the Road</h3>
              <p>Pick up your van and start your unforgettable Moroccan adventure!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center section-heading mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="modern-card p-6 hover:border-l-4 hover:border-primary transition-all">
              <h3 className="text-xl font-bold mb-3">Do I need a special license to drive your vans?</h3>
              <p className="text-gray-600">{"No, a standard driver's license is sufficient for our vans. International visitors should have an International Driving Permit alongside their home country license."}</p>
            </div>
            <div className="modern-card p-6 hover:border-l-4 hover:border-primary transition-all">
              <h3 className="text-xl font-bold mb-3">{"What's included in the rental price?"}</h3>
              <p className="text-gray-600">Our rental price includes the fully-equipped van, basic insurance, roadside assistance, and a detailed guidebook with tips and recommendations.</p>
            </div>
            <div className="modern-card p-6 hover:border-l-4 hover:border-primary transition-all">
              <h3 className="text-xl font-bold mb-3">Can I take the van anywhere in Morocco?</h3>
              <p className="text-gray-600">Yes, our vans are suitable for most Moroccan roads. However, we provide recommendations based on your chosen van model and the current season.</p>
            </div>
            <div className="modern-card p-6 hover:border-l-4 hover:border-primary transition-all">
              <h3 className="text-xl font-bold mb-3">What if I have a breakdown?</h3>
              <p className="text-gray-600">{"All our vans come with 24/7 roadside assistance. Simply call our emergency number, and we'll help resolve the issue as quickly as possible."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Moroccan Adventure?</h2>
          <p className="text-xl mb-8">Book your van today and start exploring the beauty of Morocco at your own pace.</p>
          <Link 
            href="/vans" 
            className="px-8 py-4 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors text-lg font-bold inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}