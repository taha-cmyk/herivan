import React from 'react';

type VanFiltersProps = {
  capacityFilter: number | null;
  setCapacityFilter: (capacity: number | null) => void;
};

export default function VanFilters({ capacityFilter, setCapacityFilter }: VanFiltersProps) {
  // Capacity options based on the new van offerings (Rifino: 2, Tangy Nomad: 3)
  const capacityOptions = [2, 3];

  return (
    <div className="modern-card p-6 mb-8 bg-white sticky top-24">
      <h2 className="text-xl font-bold mb-6 section-heading">Filter Vans</h2>
      
      <div>
        <h3 className="font-medium mb-4">Capacity</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setCapacityFilter(null)}
            className={`px-4 py-2 rounded-md transition-all ${capacityFilter === null 
              ? 'bg-primary text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All
          </button>
          {capacityOptions.map(capacity => (
            <button
              key={capacity}
              onClick={() => setCapacityFilter(capacity)}
              className={`px-4 py-2 rounded-md transition-all ${capacityFilter === capacity 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {capacity} {capacity === 1 ? 'Person' : 'People'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}