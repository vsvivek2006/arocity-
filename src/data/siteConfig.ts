export const siteConfig = {
  name: 'ALINA VIP',
  phone: '+91-9996265679',
  phoneDisplay: '+91 99962 65679',
  whatsapp: '919996265679',
  email: 'contact@aerocityescortservice.site',
  address: 'Aerocity, Indira Gandhi International Airport, New Delhi 110037 & DLF Phase 3, Gurgaon',
  url: 'https://aerocityescortservice.site',
  domain: 'aerocityescortservice.site',
  tagline: 'Escort Service in Aerocity & Gurgaon | VIP Escorts Service',
  description: 'Premier escort service in Aerocity New Delhi and Gurgaon. Providing 100% verified VIP escorts, Russian call girls, and discreet 20-30 min 5-star hotel outcalls across Aerocity hotels and Gurgaon.',
  keywords: [
    'escort service in aerocity',
    'aerocity escort service',
    'call girls in aerocity',
    'aerocity call girls',
    'escort service in gurgaon',
    'escorts service in gurgaon',
    'escort service in gurugram',
    'vip escort service in aerocity',
    'russian escorts in aerocity',
    '5 star hotel escorts aerocity',
  ],
  socialLinks: [
    { name: 'Instagram', url: 'https://instagram.com/alinavip', icon: 'Instagram' },
    { name: 'Twitter', url: 'https://twitter.com/gurgaonescort', icon: 'Twitter' },
    { name: 'Facebook', url: 'https://facebook.com/alinavip', icon: 'Facebook' },
  ],
};

export function getAlternateLanguages(path: string = '') {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  return {
    'en': `https://aerocityescortservice.site${cleanPath}`,
  };
}

export const generalFaqs = [
  {
    question: 'What is ALINA VIP Aerocity?',
    answer: 'ALINA VIP is a premier luxury escort service catering to elite business and leisure travelers in Aerocity New Delhi and Gurgaon. We provide verified companions for 5-star luxury hotels with absolute confidentiality.',
  },
  {
    question: 'How fast can an escort arrive at Aerocity luxury hotels?',
    answer: 'Our average outcall dispatch time to premier Aerocity hotels (JW Marriott, Andaz, Pullman, Novotel, Roseate House, Aloft) is 20-30 minutes.',
  },
  {
    question: 'Are all companion profiles authentic and verified?',
    answer: 'Yes, every profile undergoes complete in-person verification with 100% authentic, untouched photographs. What you see is guaranteed to be who arrives.',
  },
  {
    question: 'How do I book an escort service in Aerocity?',
    answer: 'Booking is simple and discreet. Message our 24/7 concierge via WhatsApp or call +91-9996265679 with your preferred hotel and timing.',
  },
];
