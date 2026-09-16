export const siteConfig = {
  name: 'Aerocity Escort Service',
  phone: '+91-9996265679',
  phoneDisplay: '+91 99962 65679',
  whatsapp: '919996265679',
  email: 'contact@aerocityescortservice.site',
  address: 'Asset Area 4, Hospitality District, IGI Airport, Aerocity, New Delhi 110037, India',
  url: 'https://aerocityescortservice.site',
  domain: 'aerocityescortservice.site',
  tagline: 'Escort Service in Aerocity New Delhi | 5-Star Hotel VIP Call Girls',
  description: 'Premier escort service in Aerocity New Delhi. Providing 100% verified VIP call girls, Russian models, and high-profile escorts with discreet 15-20 min hotel outcalls to JW Marriott, Pullman, Andaz, Novotel, and Roseate House.',
  keywords: [
    'escort service in aerocity',
    'aerocity escort service',
    'call girls in aerocity',
    'aerocity call girls',
    'aerocity escorts',
    'escorts in aerocity',
    'aerocity hotel escorts',
    '5 star hotel escorts aerocity',
    'russian escorts in aerocity',
    'delhi airport escorts',
    'call girls near aerocity',
    'vip escorts aerocity new delhi',
    'escort service in gurgaon',
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
    question: 'What is Aerocity Escort Service?',
    answer: 'Aerocity Escort Service by ALINA VIP is a premier luxury escort service agency based in the Hospitality District of Aerocity, New Delhi. We cater to corporate executives, VIP transit travelers, and luxury hotel guests with verified companions.',
  },
  {
    question: 'How fast can an escort arrive at Aerocity 5-star hotels?',
    answer: 'Our average arrival time is 15-20 minutes across all premier Aerocity hotels including JW Marriott, Andaz Delhi, Pullman New Delhi Aerocity, Novotel, Roseate House, Aloft, Holiday Inn, and Pride Plaza.',
  },
  {
    question: 'Can I book an escort during a flight layover at Delhi Airport (IGI)?',
    answer: 'Yes! Aerocity is directly connected to IGI Airport Terminals 1, 2, and 3 via the Airport Express Metro and shuttle services. We specialize in swift, discreet escort service for travelers on international and domestic layovers.',
  },
  {
    question: 'Do you offer Cash on Delivery (COD) in Aerocity?',
    answer: 'Yes. We operate with 100% transparency: you can meet and verify your companion in the comfort and privacy of your hotel room before settling the service fee in cash.',
  },
  {
    question: 'Are all companion photos 100% genuine and verified?',
    answer: 'Every profile published on our portal undergoes thorough in-person photo and background verification. We guarantee zero-catfish dispatch — the companion who arrives matches the profile you selected.',
  },
  {
    question: 'How is client privacy maintained for hotel outcalls?',
    answer: 'Our companions dress in refined, elegant executive attire that blends seamlessly into upscale hotel lobbies and luxury suites. All WhatsApp booking chats and numbers are purged immediately after the appointment.',
  },
];
