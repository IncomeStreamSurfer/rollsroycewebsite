import { Metadata } from 'next';
import Link from 'next/link';
import { getAlternateUrls } from '../../../utils/i18n';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Rolls-Royce Luxury Car Rental',
  description: 'Our terms and conditions for Rolls-Royce rental services. Please read these terms carefully before booking our services.',
  alternates: {
    canonical: '/en/terms-and-conditions',
    languages: {
      'en': '/en/terms-and-conditions',
      'it': '/it/terms-and-conditions',
    },
  },
};

export default function EnglishTermsAndConditionsPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-center">
            Terms and Conditions
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>
      
      <div className="py-16 bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Last Updated: March 6, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                These terms and conditions govern your use of our Rolls-Royce rental services. By booking our services, 
                you agree to these terms and conditions in full. If you disagree with these terms and conditions or any part of them, 
                you must not use our services.
              </p>
              
              <h2>2. Booking and Reservation</h2>
              <p>
                All bookings are subject to availability and confirmation. A booking is not confirmed until you receive a written confirmation 
                from us and the required deposit has been paid. We reserve the right to refuse any booking without giving reasons.
              </p>
              <p>
                To secure a booking, a non-refundable deposit of 30% of the total rental fee is required. The remaining balance must be paid 
                in full at least 14 days before the rental date for weddings and 7 days before for other events.
              </p>
              
              <h2>3. Cancellation Policy</h2>
              <p>
                Cancellations must be made in writing. Our cancellation policy is as follows:
              </p>
              <ul>
                <li>Cancellations made more than 30 days before the rental date: Deposit is non-refundable, but can be transferred to another date within 6 months.</li>
                <li>Cancellations made between 14-30 days before the rental date: 50% of the total rental fee is payable.</li>
                <li>Cancellations made less than 14 days before the rental date: 100% of the total rental fee is payable.</li>
              </ul>
              
              <h2>4. Vehicle Use and Restrictions</h2>
              <p>
                Our Rolls-Royce vehicles are provided with a professional chauffeur. Self-drive options are not available. The chauffeur has 
                complete discretion over the operation and use of the vehicle. The chauffeur may refuse to transport any person who is thought 
                to be under the influence of alcohol or drugs, or whose behavior is considered dangerous or unacceptable.
              </p>
              <p>
                The following restrictions apply to all rentals:
              </p>
              <ul>
                <li>No smoking is permitted in the vehicle at any time.</li>
                <li>No food or drink may be consumed in the vehicle without prior permission.</li>
                <li>The maximum number of passengers must not exceed the vehicle's legal capacity.</li>
                <li>Any damage caused to the vehicle by the client or their guests will be charged accordingly.</li>
              </ul>
              
              <h2>5. Delays and Timing</h2>
              <p>
                While we make every effort to arrive at the agreed time, we cannot be held responsible for delays due to circumstances beyond 
                our control, such as traffic conditions, road closures, weather conditions, or mechanical breakdown. In such cases, we will 
                make reasonable efforts to provide an alternative vehicle or service.
              </p>
              <p>
                For wedding bookings, we recommend allowing extra time in your schedule to accommodate potential delays.
              </p>
              
              <h2>6. Photography and Marketing</h2>
              <p>
                We reserve the right to take photographs of our vehicles at your event for marketing purposes, unless you specifically request 
                otherwise in writing before the event.
              </p>
              
              <h2>7. Liability</h2>
              <p>
                Our liability for any loss or damage suffered by you as a result of our negligence or breach of contract is limited to the total 
                amount paid by you for the rental. We are not liable for any indirect or consequential loss, such as loss of enjoyment or 
                disappointment.
              </p>
              <p>
                We maintain comprehensive insurance for our vehicles and passengers as required by law. However, personal items left in the 
                vehicle are not covered by our insurance, and we cannot accept responsibility for any loss or damage to such items.
              </p>
              
              <h2>8. Force Majeure</h2>
              <p>
                We will not be liable for any failure or delay in performing our obligations where such failure or delay results from any cause 
                that is beyond our reasonable control. Such causes include, but are not limited to: power failure, internet service provider 
                failure, strikes, lock-outs or other industrial action, civil unrest, fire, explosion, flood, storms, earthquakes, subsidence, 
                acts of terrorism, acts of war, governmental action, epidemic or pandemic, or any other natural or man-made event outside our 
                control.
              </p>
              
              <h2>9. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Italy. Any disputes relating to these 
                terms and conditions shall be subject to the exclusive jurisdiction of the courts of Italy.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about these terms and conditions, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:info@rollsroycerent.it" className="text-gold hover:underline">info@rollsroycerent.it</a><br />
                Phone: +39 3791398291<br />
                Address: Campania, Italy
              </p>
              
              <div className="mt-12 text-center">
                <Link href="/en" className="btn btn-primary">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
