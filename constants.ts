import { Van, Testimonial, FaqItemData, AppNavLink, Experience } from './types';

export const NAV_LINKS: AppNavLink[] = [
  { label: 'Home', to: '/', end: true },
  { label: 'Our Vans', to: '/vans' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Experiences', to: '/#experiences' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'FAQ', to: '/#faq' },
];


export const SAMPLE_VANS: Van[] = [
  {
    id: 'rifino',
    name: 'Rifino',
    tagline: 'Explore the Blue Pearl & Rif Mountains',
    description: 'Compact and agile, Rifino is your perfect companion for navigating the charming streets of Chefchaouen and the scenic routes of the Rif Mountains. Ideal for couples or solo adventurers seeking authentic Moroccan experiences.',
    pricePerDay: 800,
    imageUrl: 'https://picsum.photos/seed/rifino/600/400', // Placeholder, ideally replace with an actual Rifino van image
    features: ['Kitchenette', 'Convertible Bed', 'Mountain Maps', 'Compact Size', 'Solar Power'],
    capacity: 2,
  },
  {
    id: 'tangynomad',
    name: 'Tangy Nomad',
    tagline: 'Coastal Adventures from Tangier',
    description: 'Spacious and comfortable, the Tangy Nomad is ready for your coastal explorations starting from Tangier. Enjoy the sea breeze and discover hidden gems along Morocco\'s northern coast. Perfect for small groups or families.',
    pricePerDay: 1000,
    imageUrl: 'https://picsum.photos/seed/tangynomad/600/400', // Placeholder, ideally replace with an actual Tangy Nomad van image
    features: ['Awning', 'Outdoor Shower', 'Spacious Interior', 'Coastal Guides', 'Fridge/Freezer'],
    capacity: 3,
  }
];

export const SAMPLE_EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    title: 'Coastal Charm: Tangier & Beyond',
    description: 'Wind through scenic coastal roads from Tangier, discover charming fishing villages, and explore pristine northern beaches.',
    imageUrl: 'https://picsum.photos/seed/exp1/600/400',
    longDescription: 'Embark on a mesmerizing journey along Morocco\'s northern Atlantic coast. Start in the vibrant city of Tangier, a gateway between Europe and Africa. Explore its historic kasbah, bustling souks, and legendary cafes. Continue along the coast to discover hidden beaches, picturesque towns like Asilah, and enjoy fresh seafood. This trip is perfect for those who love the ocean, cultural fusion, and scenic drives.',
    galleryImages: [
      'https://picsum.photos/seed/exp1-gallery1/800/600',
      'https://picsum.photos/seed/exp1-gallery2/800/600',
      'https://picsum.photos/seed/exp1-gallery3/800/600',
    ],
    suggestedItinerary: [
      { day: 1, title: 'Arrival in Tangier', description: 'Explore the Kasbah, Grand Socco, and enjoy views of the Strait of Gibraltar.' },
      { day: 2, title: 'Asilah & Coastal Drive', description: 'Drive south to the charming white-washed town of Asilah, known for its art murals and ramparts.' },
      { day: 3, title: 'Beach Relaxation & Cap Spartel', description: 'Discover secluded beaches along the coast and visit Cap Spartel and the Caves of Hercules.' },
      { day: 4, title: 'Return Journey', description: 'Enjoy a scenic drive back to Tangier, perhaps stopping at local markets.' }
    ],
    suitableVanIds: ['tangynomad'],
  },
  {
    id: 'exp2',
    title: 'Rif Mountain & Chefchaouen Escape',
    description: 'Navigate breathtaking mountain passes in the Rif, visit traditional Berber villages, and immerse yourself in the blue hues of Chefchaouen.',
    imageUrl: 'https://picsum.photos/seed/exp2/600/400',
    longDescription: 'Journey into the heart of the Rif Mountains. Traverse winding roads that offer panoramic views, discover traditional Berber villages, and experience the unique culture of this region. The highlight is Chefchaouen, the "Blue Pearl," with its enchanting blue-painted medina. This adventure is for those seeking cultural immersion, stunning natural beauty, and a tranquil escape.',
    galleryImages: [
      'https://picsum.photos/seed/exp2-gallery1/800/600',
      'https://picsum.photos/seed/exp2-gallery2/800/600',
    ],
    suggestedItinerary: [
      { day: 1, title: 'Journey to Chefchaouen', description: 'Drive into the Rif Mountains, settle into Chefchaouen and start exploring its blue streets.' },
      { day: 2, title: 'Chefchaouen Exploration', description: 'Wander through the medina, visit the Kasbah Museum, and hike to the Rif Mountains viewpoint (Rass El Maa waterfall).' },
      { day: 3, title: 'Akchour Waterfalls (Optional)', description: 'Take a day trip to the stunning Akchour waterfalls for a hike in nature.' },
      { day: 4, title: 'Return Journey', description: 'Enjoy the scenic drive back, perhaps stopping at a local craft cooperative.' }
    ],
    suitableVanIds: ['rifino'],
  },
  {
    id: 'exp3',
    title: 'Desert Oasis & Starry Nights (Extended)',
    description: 'Journey to the edge of the Sahara, ride camels over dunes, and sleep under a canopy of stars. Requires a longer drive.',
    imageUrl: 'https://picsum.photos/seed/exp3/600/400',
    longDescription: 'Experience the magic of the Sahara Desert on an unforgettable expedition. Travel through diverse landscapes before reaching the iconic dunes of Erg Chebbi or Erg Chigaga. Embark on a camel trek into the heart of the desert, watch a breathtaking sunset over the golden sands, and spend a night in a traditional Berber camp (or your van!). Enjoy local music, cuisine, and an unparalleled view of the starlit sky. This is a journey for the soul, offering peace, adventure, and a profound connection with nature. This journey is more suited for our larger vans.',
    galleryImages: [
        'https://picsum.photos/seed/exp3-gallery1/800/600',
        'https://picsum.photos/seed/exp3-gallery2/800/600',
        'https://picsum.photos/seed/exp3-gallery3/800/600',
    ],
    suggestedItinerary: [
        { day: 1, title: 'Journey to Merzouga', description: 'Travel through the Ziz Valley, known for its palm groves, towards Merzouga, on the edge of Erg Chebbi dunes.' },
        { day: 2, title: 'Camel Trek & Desert Camp', description: 'Explore the dunes, visit local nomadic families if possible, and embark on an evening camel trek to a desert camp (or find a serene spot for your van).' },
        { day: 3, title: 'Sunrise & Todra Gorge', description: 'Witness a spectacular desert sunrise. Afterwards, travel towards the Todra Gorge, known for its towering canyon walls.' },
        { day: 4, title: 'Dades Valley & Return', description: 'Explore the Dades Valley ("Valley of a Thousand Kasbahs") before starting your return journey.' }
    ],
    suitableVanIds: ['tangynomad'], // Tangy Nomad is larger and might be better for longer trips.
  },
];


export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Our trip to Chefchaouen with the 'Rifino' van from Herivan was magical! The van was perfect for the mountain roads, and the blue city was stunning. Highly recommend Herivan!",
    author: 'Layla & Karim B.',
    location: 'Chefchaouen',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    id: 't2',
    quote: "The 'Tangy Nomad' was amazing for our coastal tour from Tangier. So much space and comfort! Herivan's service was top-notch.",
    author: 'The Rodriguez Family',
    location: 'Spain',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    id: 't3',
    quote: "An unforgettable Moroccan adventure thanks to Herivan. The booking was easy, and the van was everything we hoped for. We'll be back!",
    author: 'Chloe S.',
    location: 'Canada',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

export const FAQ_DATA: FaqItemData[] = [
  {
    id: 'faq1',
    question: 'What documents do I need to rent a van from Herivan?',
    answer: 'You typically need a valid driver\'s license (international if required), a passport or national ID, and a credit card for the security deposit. Minimum age is usually 25.',
  },
  {
    id: 'faq2',
    question: 'Is there a minimum rental period?',
    answer: 'Yes, our minimum rental period is usually 3 days, but this can vary depending on the season. Please check specific van details or contact us.',
  },
  {
    id: 'faq3',
    question: 'What is included in the rental price?',
    answer: 'The rental price typically includes the van, standard insurance, kitchen essentials, bedding, and a mileage allowance. Specifics are detailed on each van\'s page.',
  },
  {
    id: 'faq4',
    question: 'Can I travel outside of Morocco with the van?',
    answer: 'Currently, our Herivan vans are permitted for travel within Morocco only. Please contact us if you have specific cross-border travel inquiries.',
  },
];

export const ALL_VAN_FEATURES = Array.from(new Set(SAMPLE_VANS.flatMap(van => van.features))).sort();