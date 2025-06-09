
export interface Van {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pricePerDay: number;
  imageUrl: string;
  features: string[];
  capacity: number; // Number of people it can sleep
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  avatarUrl?: string;
}

export interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

export interface AppNavLink {
  label: string;
  to: string; // Path for react-router Link
  end?: boolean; // Optional: for NavLink `end` prop, useful for `/` exact match
}

export interface Experience {
  id: string;
  title: string;
  description: string; // Short description for card
  imageUrl: string;
  ctaLink?: string; // Optional link for a specific itinerary or related vans (could be deprecated if using router for all nav)

  // New fields for detail page
  longDescription: string; // More detailed text
  galleryImages?: string[]; // Array of image URLs for a gallery
  suggestedItinerary: { day: number; title: string; description: string }[];
  suitableVanIds?: string[]; // IDs of vans suitable for this experience
}

// New booking-related types
export interface Booking {
  id: string;
  vanId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  customerDetails: CustomerDetails;
  paymentDetails: PaymentDetails;
  status: BookingStatus;
  reference: string;
  createdAt: string;
}

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface PaymentDetails {
  cardLast4: string;
  cardExpiry: string;
  paymentMethod: string;
  paymentStatus: PaymentStatus;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed';