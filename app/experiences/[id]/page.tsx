'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SAMPLE_EXPERIENCES, SAMPLE_VANS } from '../../../constants';

export default function ExperienceDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const experience = SAMPLE_EXPERIENCES.find(exp => exp.id === id);
  
  if (!experience) {
    return (
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-3xl font-bold mb-4">Experience Not Found</h1>
        <p className="mb-8 text-gray-600 max-w-md mx-auto">Sorry, we couldn't find the experience you're looking for.</p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    );
  }

  // Find suitable vans for this experience
  const suitableVans = experience.suitableVanIds
    ? SAMPLE_VANS.filter(van => experience.suitableVanIds?.includes(van.id))
    : [];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full mb-12 rounded-xl overflow-hidden modern-card">
        <Image 
          src={experience.imageUrl} 
          alt={experience.title} 
          fill 
          style={{objectFit: 'cover'}} 
          priority
          className="transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
          <div className="p-12 text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{experience.title}</h1>
            <p className="text-xl drop-shadow-md">{experience.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Description */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6 section-heading">About This Experience</h2>
          <p className="mb-12 text-lg leading-relaxed">{experience.longDescription}</p>
          
          {/* Suitable Vans */}
          <h2 className="text-3xl font-bold mb-6 section-heading">Recommended Vans</h2>
          {suitableVans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {suitableVans.map(van => (
                <div key={van.id} className="modern-card group">
                  <div className="h-56 relative overflow-hidden">
                    <Image 
                      src={van.imageUrl} 
                      alt={van.name} 
                      fill 
                      style={{objectFit: 'cover'}} 
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{van.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{van.tagline}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-primary">{van.pricePerDay} MAD/day</p>
                      <Link 
                        href={`/vans#${van.id}`} 
                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors group inline-flex items-center"
                      >
                        View Details
                        <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mb-12 text-gray-600">No specific van recommendations for this experience.</p>
          )}
        </div>

        {/* Right Column - Itinerary & Gallery */}
        <div>
          {/* Itinerary */}
          <div className="modern-card p-8 mb-12 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6 section-heading">Suggested Itinerary</h2>
            <div className="space-y-6">
              {experience.suggestedItinerary.map((day) => (
                <div key={day.day} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {day.day}
                    </div>
                    <h3 className="font-bold text-xl">{day.title}</h3>
                  </div>
                  <p className="text-gray-700 pl-14">{day.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          {experience.galleryImages && experience.galleryImages.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 section-heading">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {experience.galleryImages.map((img, index) => (
                  <div key={index} className="relative h-48 modern-card overflow-hidden group">
                    <Image 
                      src={img} 
                      alt={`${experience.title} - Gallery image ${index + 1}`} 
                      fill 
                      style={{objectFit: 'cover'}} 
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-16 text-center">
        <Link 
          href="/" 
          className="btn-primary inline-flex items-center"
        >
          <span className="mr-2 inline-block">←</span>
          Back to Experiences
        </Link>
      </div>
    </div>
  );
}