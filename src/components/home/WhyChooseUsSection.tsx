import { ShieldCheck, Lock, Clock, DollarSign, Sparkles, Phone, BadgeCheck, Camera } from 'lucide-react';

const whyChooseUs = [
  {
    icon: Clock,
    title: 'Fastest 15-20 Min Aerocity Dispatch',
    description:
      'Our models are stationed directly within the Aerocity Hospitality District, ensuring rapid 15-20 minute room arrival to JW Marriott, Pullman, Andaz, and all airport hotels.',
  },
  {
    icon: ShieldCheck,
    title: '100% Verified Untouched Profiles',
    description:
      'Every model photograph is authentic and in-person verified. We strictly enforce a zero-catfish policy with genuine recent photos.',
  },
  {
    icon: Lock,
    title: 'Absolute Discretion for Travelers',
    description:
      'VIP escorts arrive impeccably styled in discreet business or cocktail attire that blends naturally into luxury 5-star hotel lobbies.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Cash on Delivery (COD)',
    description:
      'No upfront fee demands or untraceable transfers. Inspect and verify your escort in your suite before settling the service fee.',
  },
  {
    icon: Sparkles,
    title: 'Multilingual & Cultured VIP Escorts',
    description:
      'Fluent in English with refined social etiquette, ideal for corporate dinners, executive gatherings, or intimate suite evenings.',
  },
  {
    icon: Phone,
    title: 'Dedicated 24/7 VIP Concierge',
    description:
      'Round-the-clock availability for flight delays, midnight arrivals, early morning layovers, and extended hotel stays.',
  },
];

const standards = [
  {
    title: 'Identity Verified',
    description:
      'All profiles provide valid government identification securely verified by our concierge team prior to profile listing.',
    icon: BadgeCheck,
  },
  {
    title: 'Photos Verified',
    description:
      'Profile galleries are verified to be recent, genuine representations with zero misleading edits or false representations.',
    icon: Camera,
  },
  {
    title: 'Background Checked',
    description:
      'We conduct thorough background checks to maintain highest standards of safety, professional etiquette, and client discretion.',
    icon: ShieldCheck,
  },
];

export default function WhyChooseUsSection() {
  return (
    <>
      <section className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Why Choose Us</p>
            <h2 className="section-title mb-4 text-[#0F172A]">
              The <span className="text-gradient-gold">Aerocity Escort</span> Difference
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-600 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
              We provide the highest level of confidentiality, verified profile safety, and rapid 15-20 min 5-star hotel outcall service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-500 group-hover:bg-gold-50/50 transition-colors rounded-lg">
                    <Icon size={24} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-xl text-[#0F172A] mb-3 font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Client Confidence</p>
            <h2 className="section-title mb-4 text-[#0F172A]">
              Rigorous <span className="text-gradient-gold">Verification Standards</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
              Every profile on Aerocity Escort Service undergoes a comprehensive screening process to ensure total authenticity, safety, and mutual peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standards.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-50 p-8 text-center rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 mx-auto border-2 border-gold-500/30 rounded-full flex items-center justify-center mb-6 group-hover:border-gold-500 group-hover:bg-gold-50 transition-colors">
                    <Icon size={28} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-xl text-[#0F172A] mb-3 font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
