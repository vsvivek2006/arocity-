import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-[#08070D] relative overflow-hidden border-b border-charcoal-800/60">
      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-gold-500/5">
                <Image
                  src="/images/categories/vip-escorts.webp"
                  alt="Elite Aerocity Escort Service VIP Model"
                  title="Elite Aerocity Escort Service VIP Model - 5-Star Hotel VIP Escorts"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-charcoal-900 border border-gold-500/30 p-5 rounded-2xl shadow-xl backdrop-blur-md hidden sm:block">
                <p className="text-gold-400 font-serif text-3xl font-bold">15-20m</p>
                <p className="text-charcoal-300 text-xs tracking-wider uppercase">Aerocity Hotel Dispatch</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-gold-400 font-sans text-xs tracking-ultra uppercase mb-3 block">
              About Aerocity Escort Service
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Premier Luxury Escort Service in <span className="text-gradient-gold">Delhi Aerocity</span>
            </h2>
            <div className="space-y-4 text-charcoal-300 text-sm md:text-base leading-relaxed mb-8">
              <p>
                Strategically located in the high-profile Hospitality District of Indira Gandhi International (IGI) Airport, <strong>Aerocity Escort Service</strong> offers an exclusive sanctuary of elegance, discretion, and world-class VIP escort services for discerning business executives, luxury hotel guests, and international transit passengers.
              </p>
              <p>
                Whether you are staying at <em>JW Marriott, Andaz Delhi, Pullman, Roseate House, Novotel</em>, or on an extended layover at IGI Airport, our curated roster of sophisticated <Link href="/category/russian-call-girls" className="text-gold-400 hover:underline">Russian call girls</Link>, elite fashion models, and educated <Link href="/category/vip-call-girls" className="text-gold-400 hover:underline">VIP escorts</Link> guarantees an unforgettable, private experience.
              </p>
              <p>
                We adhere to an uncompromising zero-compromise code of conduct: 100% verified real photographs, complete client confidentiality, and transparent Cash on Delivery payment directly in the security of your hotel suite.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-charcoal-900/60 border border-charcoal-800/80 mb-8 text-center">
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-gold-400">100%</p>
                <p className="text-charcoal-400 text-xs">Verified Photos</p>
              </div>
              <div className="border-x border-charcoal-800">
                <p className="font-serif text-2xl md:text-3xl font-bold text-gold-400">15-20m</p>
                <p className="text-charcoal-400 text-xs">Airport Dispatch</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-gold-400">24/7</p>
                <p className="text-charcoal-400 text-xs">VIP Concierge</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-gold">
                Learn More About Us <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-outline">
                View All Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
