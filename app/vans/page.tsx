'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SAMPLE_VANS } from '../../constants';
import VanFilters from './VanFilters';
import BookingModal from './BookingModal';

export default function AllVansPage() {
  const [capacityFilter, setCapacityFilter] = useState<number | null>(null);
  const [selectedVan, setSelectedVan] = useState<typeof SAMPLE_VANS[0] | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  // Apply filters
  const filteredVans = SAMPLE_VANS.filter(van => {
    // Apply capacity filter if set
    if (capacityFilter !== null && van.capacity !== capacityFilter) {
      return false;
    }
    return true;
  });

  const handleBookVan = (van: typeof SAMPLE_VANS[0]) => {
    setSelectedVan(van);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-12 section-heading">Our Van Fleet</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <VanFilters 
            capacityFilter={capacityFilter}
            setCapacityFilter={setCapacityFilter}
          />
        </div>
        
        <div className="lg:col-span-3">
          {filteredVans.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg modern-card">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-xl mb-4">No vans match your filters.</p>
              <button 
                onClick={() => {
                  setCapacityFilter(null);
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredVans.map(van => (
                <div key={van.id} className="modern-card group" id={van.id}>
                  <div className="h-64 relative overflow-hidden">
                    <Image 
                      src={van.imageUrl} 
                      alt={van.name} 
                      fill 
                      style={{objectFit: 'cover'}} 
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{van.name}</h3>
                    <p className="text-gray-600 italic mb-4">{van.tagline}</p>
                    <p className="mb-4">{van.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-primary text-lg">{van.pricePerDay} MAD/day</p>
                      <p className="bg-gray-100 px-3 py-1 rounded-full text-sm">Capacity: {van.capacity} people</p>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {van.features.map(feature => (
                          <li key={feature} className="flex items-center">
                            <span className="mr-2 text-primary">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button 
                      className="w-full mt-6 btn-primary"
                      onClick={() => handleBookVan(van)}
                    >
                      Book This Van
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedVan && (
        <BookingModal 
          van={selectedVan}
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}
    </div>
  );
}