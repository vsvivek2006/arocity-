import { ShieldCheck, Lock, Clock, DollarSign, Sparkles, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Fastest 15-20 Min Aerocity Dispatch',
    desc: 'Our models are stationed directly within the Aerocity Hospitality District, ensuring rapid 15-20 minute room arrival to all luxury hotels.',
  },
  {
    icon: ShieldCheck,
    title: '100% Verified Untouched Profiles',
    desc: 'Every companion photograph is authentic and in-person verified. We strictly enforce a zero-catfish policy.',
  },
  {
    icon: Lock,
    title: 'Absolute Discretion for Travelers',
    desc: 'Companions arrive impeccably styled in discreet business or cocktail attire that blends naturally into 5-star hotel lobbies.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Cash on Delivery (COD)',
    desc: 'No upfront fee demands or untraceable transfers. Inspect and verify your companion in your suite before settling payment.',
  },
  {
    icon: Sparkles,
    title: 'Multilingual & Cultured Companions',
    desc: 'Fluent in English with refined social etiquette, ideal for corporate dinners, executive gatherings, or intimate suite evenings.',
  },
  {
    icon: CheckCircle2,
    title: '24/7 Concierge Support',
    desc: 'Round-the-clock availability for flight delays, midnight arrivals, early morning layovers, and extended hotel stays.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0C0B14] relative border-b border-charcoal-800/60">
      <div className="container-luxury">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 font-sans text-xs tracking-ultra uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            The Gold Standard in <span className="text-gradient-gold">Aerocity VIP Escort Services</span>
          </h2>
          <p className="text-charcoal-300 text-sm md:text-base leading-relaxed">
            Designed specifically for international travelers, business executives, and hotel guests who value discretion, beauty, and prompt professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-8 rounded-2xl bg-charcoal-900/50 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-500/20 transition-colors">
                <r.icon size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                {r.title}
              </h3>
              <p className="text-charcoal-400 text-xs md:text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
