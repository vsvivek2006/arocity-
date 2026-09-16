import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck, Lock, Clock, Star } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const trustPillars = [
  { icon: ShieldCheck, title: 'Verified Aerocity Models', desc: 'Strict zero-catfish policy' },
  { icon: Lock, title: 'Absolute Secrecy', desc: 'Zero client digital footprint' },
  { icon: Clock, title: '15-20 Min Arrival', desc: 'Direct Aerocity hotel dispatch' },
  { icon: Star, title: 'Cash On Delivery', desc: 'Verify companion first' },
];

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#050508] via-[#0C0B14] to-[#141022]">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float transform-gpu" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-float transform-gpu"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="container-luxury relative z-10 text-center pt-24 pb-16">
          <p className="section-subtitle text-gold-400 font-sans text-xs md:text-sm tracking-ultra uppercase mb-4 animate-fade-down">
            #1 Premier Escort Agency • Aerocity New Delhi
          </p>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-up leading-tight">
            Escort Service in <span className="text-gradient-gold">Aerocity</span>
          </h1>

          <p
            className="text-charcoal-300 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            New Delhi&apos;s leading verified <Link href="/services" className="text-gold-400 hover:underline font-medium">aerocity escort service</Link>. Elite <Link href="/category/vip-call-girls" className="text-gold-400 hover:underline font-medium">VIP call girls</Link>, Russian models, and celebrity companions with 15–20 min discreet hotel outcalls across JW Marriott, Pullman, Andaz, and Roseate House.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up mb-12"
            style={{ animationDelay: '0.4s' }}
          >
            <Link
              href="/services"
              className="btn-gold shadow-lg shadow-gold-500/20"
            >
              Explore Aerocity Profiles <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-outline"
            >
              <Phone size={16} className="text-gold-400" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-charcoal-800/80">
            {trustPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="text-left p-3 rounded-xl bg-charcoal-900/40 border border-charcoal-800/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <pillar.icon size={16} className="text-gold-400 flex-shrink-0" />
                  <span className="font-serif text-xs font-semibold text-charcoal-100">
                    {pillar.title}
                  </span>
                </div>
                <p className="text-[10px] text-charcoal-400 leading-snug">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rapid Booking Banner tailored for Aerocity Airport Hotels */}
      <section className="bg-gradient-to-r from-gold-950/60 via-charcoal-900 to-gold-950/60 border-y border-gold-500/20 py-5">
        <div className="container-luxury flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/30 flex-shrink-0">
              <Clock className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">
                Aerocity 5-Star Hotel Instant Dispatch (15–20 Mins)
              </p>
              <p className="text-charcoal-400 text-xs">
                JW Marriott • Andaz • Pullman • Novotel • Roseate House • Aloft • Holiday Inn
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hi Aerocity Escorts, I need immediate hotel dispatch to Aerocity.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              <span>Quick WhatsApp Dispatch</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
