import Link from 'next/link';
import { ShieldCheck, Clock, Hotel, CheckCircle2 } from 'lucide-react';

const aerocityHotels = [
  'JW Marriott Hotel New Delhi Aerocity',
  'Andaz Delhi - a Concept by Hyatt',
  'Pullman New Delhi Aerocity',
  'Novotel New Delhi Aerocity',
  'Roseate House New Delhi',
  'Aloft New Delhi Aerocity',
  'Holiday Inn New Delhi International Airport',
  'Pride Plaza Hotel Aerocity',
  'Ibis New Delhi Aerocity',
];

export default function ExecutiveGuideSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle text-gold-600">Executive Outcall Guide</p>
          <h2 className="section-title mb-8 text-[#0F172A]">
            Comprehensive Guide to{' '}
            <span className="text-gradient-gold font-normal">
              Aerocity Escort Service
            </span>
          </h2>
          <div className="gold-divider mb-10" />

          <div className="space-y-6 text-gray-700 leading-relaxed text-base">
            <p>
              Strategically located adjacent to Indira Gandhi International (IGI) Airport, the Aerocity Hospitality District represents the apex of corporate hospitality in New Delhi. Our executive outcall service provides seamless, discreet access to verified <Link href="/category/vip-call-girls" className="text-gold-600 hover:underline font-medium">VIP call girls</Link> and <Link href="/category/russian-call-girls" className="text-gold-600 hover:underline font-medium">Russian escorts</Link> across all 5-star properties.
            </p>

            <h3 className="text-2xl font-bold text-[#0F172A] mt-8 mb-4 flex items-center gap-3">
              <Hotel className="text-gold-600 w-6 h-6 flex-shrink-0" />
              5-Star Hotel Outcalls in Aerocity Hospitality District
            </h3>
            <p>
              We maintain dedicated concierge dispatch for corporate executives, transit passengers, and hotel guests across all premier establishments:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-6">
              {aerocityHotels.map((hotel) => (
                <div key={hotel} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-gray-100 shadow-sm text-xs text-gray-800">
                  <CheckCircle2 size={16} className="text-gold-500 flex-shrink-0" />
                  <span className="font-medium">{hotel}</span>
                </div>
              ))}
            </div>

            <p>
              When booking, simply provide your hotel name and suite number. Our VIP escorts arrive impeccably styled, ensuring smooth, unobtrusive room entry without attracting attention in lobbies.
            </p>

            <h3 className="text-2xl font-bold text-[#0F172A] mt-8 mb-4 flex items-center gap-3">
              <Clock className="text-gold-600 w-6 h-6 flex-shrink-0" />
              Rapid 15-20 Min Layover & Transit Coordination
            </h3>
            <p>
              Whether you have a 4-hour layover at Terminal 3 or an overnight stay before a morning flight, our rapid 15 to 20-minute dispatch ensures you maximize your downtime in absolute comfort.
            </p>

            <h3 className="text-2xl font-bold text-[#0F172A] mt-8 mb-4 flex items-center gap-3">
              <ShieldCheck className="text-gold-600 w-6 h-6 flex-shrink-0" />
              Zero Upfront Advance Fees & 100% Cash on Delivery
            </h3>
            <p>
              We strictly operate on transparency: inspect and verify your chosen escort in person in your room before settling the service fee. No advance deposits, no gift card scams, and zero digital tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
