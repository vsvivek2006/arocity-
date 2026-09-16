import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const stats = [
  { value: '100%', label: 'In-Person Verified' },
  { value: '15-20m', label: 'Aerocity Hotel Dispatch' },
  { value: '11', label: 'Curated Categories' },
  { value: '24/7', label: 'VIP Concierge Available' },
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="section-subtitle text-gold-600">About Aerocity Escort Service</p>
            <h2 className="section-title mb-6 text-[#0F172A]">
              The Gold Standard of{' '}
              <span className="text-gradient-gold font-normal">
                Escort Service in Aerocity
              </span>
            </h2>
            <div className="gold-divider mb-8" />
            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>
                <strong className="text-[#0F172A]">Aerocity Escort Service</strong> stands as the definitive luxury <Link href="/services" className="text-gold-600 hover:underline font-medium">escort service in Aerocity New Delhi</Link>, dedicated to coordinating exceptional <Link href="/category/vip-call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link> and verified <Link href="/services" className="text-gold-600 hover:underline font-medium">VIP escorts</Link> for international transit layovers, executive business trips, and confidential 5-star hotel suite appointments.
              </p>
              <p>
                Rooted directly within Delhi&apos;s Hospitality District of Indira Gandhi International (IGI) Airport—from <em>JW Marriott, Andaz Delhi, Pullman, Roseate House, to Novotel</em>—our concierge team enforces strict operational secrecy, 15 to 20-minute dispatch times, and transparent Cash on Delivery payment policies.
              </p>
              <p>
                Each model in our roster is personally verified to ensure unmatched poise, engaging conversational chemistry, and immaculate presentation—delivering a 100% photo-accurate experience with top <Link href="/category/russian-call-girls" className="text-gold-600 hover:underline font-medium">Russian call girls</Link> and elite fashion models every single time.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/about" className="btn-outline-gold">
                Learn More <ArrowRight size={16} />
              </Link>
              <a
                href={siteConfig.url}
                className="text-gold-600 hover:text-gold-700 font-semibold flex items-center gap-2 text-sm"
              >
                Visit {siteConfig.domain} <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 text-center rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-lg transition-all"
              >
                <p className="font-serif text-4xl md:text-5xl text-gold-600 font-light mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 tracking-wider uppercase font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
