import { Hotel, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const aerocityHotels = [
  'JW Marriott Hotel New Delhi Aerocity',
  'Andaz Delhi - a Concept by Hyatt',
  'Pullman New Delhi Aerocity',
  'Novotel New Delhi Aerocity',
  'Roseate House New Delhi',
  'Aloft New Delhi Aerocity',
  'Holiday Inn New Delhi International Airport',
  'Pride Plaza Hotel Aerocity New Delhi',
  'Ibis New Delhi Aerocity',
];

export default function ExecutiveGuideSection() {
  return (
    <section className="py-20 md:py-28 bg-[#050508] relative border-b border-charcoal-800/60">
      <div className="container-luxury max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-sans text-xs tracking-ultra uppercase mb-3 block">
            Executive Travel & Outcall Guide
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Guide to <span className="text-gradient-gold">Aerocity Escort Service</span>
          </h2>
          <p className="text-charcoal-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Essential information on hotel outcall protocols, flight layover bookings, and verified booking standards in Delhi&apos;s Aerocity Hospitality District.
          </p>
        </div>

        <div className="space-y-12 text-charcoal-300 text-sm md:text-base leading-relaxed">
          <div className="p-8 rounded-2xl bg-charcoal-900/40 border border-charcoal-800">
            <div className="flex items-center gap-3 mb-4">
              <Hotel className="text-gold-400 w-6 h-6 flex-shrink-0" />
              <h3 className="font-serif text-xl font-bold text-white">
                5-Star Hotel Outcalls in Aerocity Hospitality District
              </h3>
            </div>
            <p className="mb-4">
              Aerocity is home to Delhi&apos;s most sophisticated 5-star international hotel cluster, neighboring Indira Gandhi International Airport. Our escort agency maintains regular, seamless outcall service across all luxury establishments:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-6">
              {aerocityHotels.map((hotel) => (
                <div key={hotel} className="flex items-center gap-2 p-2.5 rounded-lg bg-charcoal-800/40 border border-charcoal-700/40 text-xs text-charcoal-200">
                  <CheckCircle2 size={14} className="text-gold-400 flex-shrink-0" />
                  <span>{hotel}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-charcoal-400">
              When booking, simply provide your hotel name and room number. Our companions arrive with understated sophistication, allowing for seamless room entry without awkward lobby questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-charcoal-900/40 border border-charcoal-800">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-gold-400 w-6 h-6 flex-shrink-0" />
                <h3 className="font-serif text-lg font-bold text-white">
                  Layover & Transit Outcall Coordination
                </h3>
              </div>
              <p className="text-xs md:text-sm text-charcoal-300 leading-relaxed">
                Whether you have a 4-hour international layover at Terminal 3 or an overnight stay before an early morning flight, our rapid 15-20 min dispatch ensures you make the most of your private downtime.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-900/40 border border-charcoal-800">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-gold-400 w-6 h-6 flex-shrink-0" />
                <h3 className="font-serif text-lg font-bold text-white">
                  Zero Upfront Fee & COD Policy
                </h3>
              </div>
              <p className="text-xs md:text-sm text-charcoal-300 leading-relaxed">
                We strictly reject deceptive upfront deposit scams common across unregistered Delhi escorts. You verify your selected companion in person before completing the companionship fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
