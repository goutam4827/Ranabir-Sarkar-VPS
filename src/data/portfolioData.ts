import { ServiceItem, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: "Ranabir Sarkar",
  title: "Founder & Lead Travel & Visa Consultant",
  company: "Visa Passport Services (VPS)",
  tagline: "Your Trusted Travel Partner",
  yearsExperience: "10+",
  clientsSatisfied: "1,000+",
  rating: "5.0",
  location: "Kolkata, West Bengal, India",
  address: "127C James Long Sarani, Kolkata - 700008 (Opp. Samar Roychowdhury Sishu Uddyan)",
  landline: "+91 33 4001 7655",
  mobile: "+91 9830741022",
  email: "vpsinfohelp@gmail.com",
  website: "https://www.vpsglobal.in/",
  googleReviewUrl: "https://g.page/r/CTKrqrymsP4xEBM/review",
  justdialUrl: "https://www.justdial.com/Kolkata/Visa-Passport-Services",
  linkedinUrl: "https://www.linkedin.com/feed/",
  whatsappNumber: "919830741022",
  aboutText: "The Visa Passport Services (VPS) team is formed with industry-experienced professionals who have seen every corner of this industry. Under the leadership of Mr. Ranabir Sarkar, we actively offer our services as a service provider & consulting company, bringing a one-stop solution to all your travel and migration-related queries and needs. We are always ready to serve you with excellence across Passport, Business Visa, Tourist Visa, Student Visa, eVisa, Work Permit, Permanent Residency (PR), Attestation & Apostille of documents.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    shortDesc: "End-to-end guidance for Tourist, Business, Student, Work Permit, eVisa, and Permanent Residency (PR) filings globally.",
    fullDesc: "VPS is a one-stop solution for all types of visa application services across the globe. Our experienced professionals assist you through every nuance of visa documentation, form filling, cover letter drafting, biometrics appointment scheduling, and mock consular interviews. With our door-step service option in Kolkata, visa filing is effortless.",
    category: "visa",
    iconName: "Globe",
    badge: "Most Popular",
    features: [
      "Tourist, Business, Student & Work Visas for US, UK, Schengen, Canada, Australia, Japan & Gulf",
      "Urgent Visa Slot Booking & Appointment Assistance",
      "Cover Letter Drafting & Financial Documentation Review",
      "Door-step collection & submission support in Kolkata"
    ],
    requiredDocs: [
      "Valid Passport (min. 6 months validity)",
      "Recent passport-size photographs",
      "Bank Statements (Last 6 months)",
      "Proof of Employment / Business Registration",
      "Travel Itinerary & Hotel Confirmations"
    ],
    turnaroundTime: "Express & Standard options available (3 - 15 business days)"
  },
  {
    id: "passport-assistance",
    title: "Passport Assistance",
    shortDesc: "Hassle-free application for Fresh Passports, Renewals, Name/Address Changes, and Police Clearance Certificates (PCC).",
    fullDesc: "Get your passport done easily without any hassle. Our expert executives guide you until your passport is delivered to your hands. We assist with fresh passport filings, passport renewals, Tatkaal appointments, PCC applications, and procurement of necessary documents from Regional Passport Offices (RPO). Doorstep assistance within Kolkata is provided with nominal extra charges.",
    category: "passport",
    iconName: "FileText",
    badge: "Door-Step Kolkata",
    features: [
      "Fresh & Renewal Passport Documentation",
      "Tatkaal Passport Appointment Scheduling",
      "Police Clearance Certificate (PCC) Assistance",
      "Name, Address & Spouse Details Update",
      "Door-step executive visits in Kolkata"
    ],
    requiredDocs: [
      "Aadhaar Card / Voter ID / Utility Bill",
      "Birth Certificate or Class 10th Admit Card",
      "Existing Passport (for renewals)",
      "Marriage Certificate (for name changes)"
    ],
    turnaroundTime: "Tatkaal (3-7 days) | Normal (10-21 days)"
  },
  {
    id: "attestation-legalization",
    title: "Attestation & Legalization",
    shortDesc: "HRD/GAD State Attestation, Ministry of External Affairs (MEA) Apostille, and Embassy Legalization for all documents.",
    fullDesc: "It is often difficult to get documents attested within required timeframes due to continuous follow-ups with government departments. VPS assists you with HRD/GAD state attestation, MEA Apostille, and Embassy Legalization for educational, personal, and commercial certificates for employment or study abroad.",
    category: "attestation",
    iconName: "Award",
    badge: "MEA Verified",
    features: [
      "State HRD / GAD Attestation",
      "Ministry of External Affairs (MEA) Apostille",
      "Embassy & Consulate Legalization (UAE, Saudi, Kuwait, Qatar, Oman, etc.)",
      "Commercial Document & Educational Certificate Verification"
    ],
    requiredDocs: [
      "Original Certificates / Marksheets",
      "Passport Copy (First & Last Page)",
      "Aadhaar Card Copy"
    ],
    turnaroundTime: "5 - 12 business days"
  },
  {
    id: "visa-extension-frro",
    title: "Visa Extension & FRRO",
    shortDesc: "Foreigner Registration (FRRO), Visa Extension, Exit Permits, and Conversion guidance in India.",
    fullDesc: "We assist international tourists, students, workers, and foreign nationals with complete registration requirements at the Foreigners Regional Registration Office (FRRO) in India. We handle visa extensions, exit permit applications, and status conversions smoothly.",
    category: "visa",
    iconName: "UserCheck",
    features: [
      "Online FRRO Registration & e-FRRO Filings",
      "Indian Visa Extension Filings",
      "Exit Permit processing for foreign citizens",
      "Residential Permit updates"
    ],
    requiredDocs: [
      "Foreign Passport with current Indian Visa",
      "C-Form / Hotel registration proof",
      "Proof of residence in India",
      "Reason/Documentation for extension"
    ],
    turnaroundTime: "3 - 7 business days"
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    shortDesc: "Comprehensive medical, baggage, flight cancellation, and emergency risk travel insurance coverage.",
    fullDesc: "Safe travel is always a top priority. It is essential to protect your travel risks against unforeseen medical emergencies, baggage loss, or flight disruptions. We provide customized travel insurance policies with high coverage and competitive premiums.",
    category: "travel",
    iconName: "ShieldCheck",
    features: [
      "Schengen & US Consular compliant policies",
      "Medical & Cashless Hospitalization Coverage",
      "Baggage Loss & Flight Delay Reimbursements",
      "Senior Citizen & Student Special Plans"
    ],
    requiredDocs: [
      "Passport copy",
      "Travel Start & End Dates",
      "Destination Country"
    ],
    turnaroundTime: "Instant / Same Day Policy Delivery"
  },
  {
    id: "flight-hotel-booking",
    title: "Flight & Hotel Booking",
    shortDesc: "Best quotation rates for international flights, hotel vouchers for visa applications, and custom itineraries.",
    fullDesc: "Save precious time searching for flights and hotels. Share your travel plan with VPS, and we will curate the best flight itineraries and verifiable hotel reservations tailored for visa applications and comfortable travel.",
    category: "travel",
    iconName: "Plane",
    features: [
      "Verifiable Flight Dummy/Hold Tickets for Visa Filings",
      "Confirmed Hotel Reservations & Vouchers",
      "Custom Multi-destination Travel Itineraries",
      "Group Travel & Discounted Fares"
    ],
    requiredDocs: [
      "Passenger Names (as in Passport)",
      "Travel Dates & Preferred Routes"
    ],
    turnaroundTime: "1 - 2 hours"
  },
  {
    id: "forex-solutions",
    title: "FOREX Solutions",
    shortDesc: "Foreign Exchange currency notes, multi-currency travel cards, and international wire transfers.",
    fullDesc: "One-stop solution for all FOREX needs for your overseas travel. Access live competitive exchange rates for USD, EUR, GBP, CAD, AUD, SGD, AED, and more without searching around.",
    category: "travel",
    iconName: "DollarSign",
    features: [
      "Multi-Currency Travel Forex Cards",
      "Foreign Currency Cash Exchange",
      "Overseas University Fee Payments for Students",
      "Door-step Forex delivery option"
    ],
    requiredDocs: [
      "Valid Passport & Visa",
      "Confirmed Flight Ticket",
      "PAN Card Copy"
    ],
    turnaroundTime: "Same day dispatch"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Venkatesan S",
    rating: 5,
    timeAgo: "4 months ago",
    text: "Service was excellent. I really appreciate MR. Ranabir for the co-operation through out the complete process. I would like to suggest this visa passport service to my friend for getting US Visa in short span of time.",
    tag: "US Visa Assistance"
  },
  {
    id: "2",
    author: "Amitabha Ghosh",
    rating: 5,
    timeAgo: "1 year ago",
    text: "Service provided is excellent for my passport related issue. Highly recommend for all passport and visa related issues.",
    tag: "Passport Assistance"
  },
  {
    id: "3",
    author: "SHANKAR",
    rating: 5,
    timeAgo: "1 year ago",
    text: "I opt for visa services from here and I have to say they are best specially Ranabir, they keep me posted with all the updates specially in this COVID time.",
    tag: "Visa & Status Tracking"
  },
  {
    id: "4",
    author: "Tapas Kumar Sinha",
    rating: 5,
    timeAgo: "8 months ago",
    text: "All the services provided were perfectly efficient which made the entire process very smooth and enjoyable. Would highly recommend their service.",
    tag: "Efficient & Smooth"
  },
  {
    id: "5",
    author: "Debmallya Konar",
    rating: 5,
    timeAgo: "5 months ago",
    text: "I was unable to secure visa slot on my own. But this institute do it for me in a very reasonable price and their support system is very appreciative. Go for it, they are not scam.",
    tag: "Visa Slot Securing"
  },
  {
    id: "6",
    author: "SONAL SINHA",
    rating: 5,
    timeAgo: "6 months ago",
    text: "VPS did an excellent job with my Visa application. Friendly and professional team. I am very thankful to the owner Mr. Ranabir and appreciate all his efforts. I would highly recommend your service to others.",
    tag: "Professional Service"
  },
  {
    id: "7",
    author: "versatile subrata",
    rating: 5,
    timeAgo: "4 months ago",
    text: "Best in business, truly reliable, honest and genuine agency for visa process. MR Ranabir Sarkar is a great human being always helpful. Thanks for everything.",
    tag: "Reliable & Genuine"
  },
  {
    id: "8",
    author: "SHYAMALI MITRA",
    rating: 5,
    timeAgo: "7 months ago",
    text: "We're much satisfied with the service of Mr. Ranabir Sarkar, the proprietor of M/s. VPS.",
    tag: "Highly Satisfied"
  }
];

export const RESUME_HIGHLIGHTS = {
  summary: "Ranabir Sarkar is a seasoned Visa, Passport, and Migration Consultant with over 10 years of experience helping thousands of individuals, families, students, and corporate clients navigate complex global travel documentation.",
  specialties: [
    "Consular & Embassy Visa Filings (US, Schengen, UK, Canada, Australia)",
    "Passport Application & PCC Dispute Resolution",
    "MEA Apostille & HRD Document Attestation",
    "FRRO Indian Visa Extension & Exit Permits",
    "Door-Step Client Assistance in Kolkata Region"
  ],
  educationExperience: [
    {
      title: "Founder & Chief Visa Consultant",
      organization: "Visa Passport Services (VPS Global)",
      period: "2015 - Present",
      description: "Spearheaded VPS to become Kolkata's leading travel and migration consultancy. Maintained a 100% genuine processing record, building a client base of 1,000+ satisfied clients."
    },
    {
      title: "Senior Travel & Documentation Specialist",
      organization: "Global Travel & Immigration Consultants",
      period: "2012 - 2015",
      description: "Managed complex consular visa filings, student visa mock interviews, and high-priority document legalizations across South Asia."
    }
  ]
};
