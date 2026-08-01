export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'visa' | 'passport' | 'attestation' | 'travel';
  iconName: string;
  badge?: string;
  features: string[];
  requiredDocs: string[];
  turnaroundTime: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location?: string;
  rating: number;
  timeAgo?: string;
  text: string;
  tag?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface InquiryFormState {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  destinationCountry: string;
  message: string;
  submitted: boolean;
}
