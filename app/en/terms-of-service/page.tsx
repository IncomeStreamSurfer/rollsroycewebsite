import { Metadata } from 'next';
import Link from 'next/link';
import { getAlternateUrls } from '../../../utils/i18n';

export const metadata: Metadata = {
  title: 'Terms of Service | Rolls-Royce Luxury Car Rental',
  description: 'Our terms of service for the Rolls-Royce rental website. Please read these terms carefully before using our website.',
  alternates: {
    canonical: '/en/terms-of-service',
    languages: {
      'en': '/en/terms-of-service',
      'it': '/it/terms-of-service',
    },
  },
};

export default function EnglishTermsOfServicePage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-center">
            Terms of Service
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Please read these terms carefully before using our website
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
                These terms of service govern your use of our website located at rollsroycerent.it (the "Website"). By accessing or using the Website, 
                you agree to these terms of service in full. If you disagree with these terms of service or any part of them, you must not use the Website.
              </p>
              
              <h2>2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, we or our licensors own the intellectual property rights in the Website and material on the Website. Subject to the 
                license below, all these intellectual property rights are reserved.
              </p>
              <p>
                You may view, download for caching purposes only, and print pages from the Website for your own personal use, subject to the restrictions set out below and elsewhere in these terms of service.
              </p>
              <p>
                You must not:
              </p>
              <ul>
                <li>Republish material from this Website (including republication on another website);</li>
                <li>Sell, rent or sub-license material from the Website;</li>
                <li>Show any material from the Website in public;</li>
                <li>Reproduce, duplicate, copy or otherwise exploit material on our Website for a commercial purpose;</li>
                <li>Edit or otherwise modify any material on the Website; or</li>
                <li>Redistribute material from this Website except for content specifically and expressly made available for redistribution.</li>
              </ul>
              
              <h2>3. Acceptable Use</h2>
              <p>
                You must not use our Website in any way that causes, or may cause, damage to the Website or impairment of the availability or accessibility of the Website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
              </p>
              <p>
                You must not use our Website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
              </p>
              <p>
                You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our Website without our express written consent.
              </p>
              
              <h2>4. User Content</h2>
              <p>
                In these terms of service, "your user content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to our Website, for whatever purpose.
              </p>
              <p>
                You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media. You also grant to us the right to sub-license these rights, and the right to bring an action for infringement of these rights.
              </p>
              <p>
                Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or us or a third party (in each case under any applicable law).
              </p>
              
              <h2>5. No Warranties</h2>
              <p>
                This Website is provided "as is" without any representations or warranties, express or implied. We make no representations or warranties in relation to this Website or the information and materials provided on this Website.
              </p>
              <p>
                Without prejudice to the generality of the foregoing paragraph, we do not warrant that:
              </p>
              <ul>
                <li>This Website will be constantly available, or available at all; or</li>
                <li>The information on this Website is complete, true, accurate or non-misleading.</li>
              </ul>
              <p>
                Nothing on this Website constitutes, or is meant to constitute, advice of any kind. If you require advice in relation to any legal, financial or medical matter you should consult an appropriate professional.
              </p>
              
              <h2>6. Limitations of Liability</h2>
              <p>
                We will not be liable to you (whether under the law of contract, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this Website:
              </p>
              <ul>
                <li>To the extent that the Website is provided free-of-charge, for any direct loss;</li>
                <li>For any indirect, special or consequential loss; or</li>
                <li>For any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>
              </ul>
              <p>
                These limitations of liability apply even if we have been expressly advised of the potential loss.
              </p>
              
              <h2>7. Indemnity</h2>
              <p>
                You hereby indemnify us and undertake to keep us indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by us to a third party in settlement of a claim or dispute on the advice of our legal advisers) incurred or suffered by us arising out of any breach by you of any provision of these terms of service, or arising out of any claim that you have breached any provision of these terms of service.
              </p>
              
              <h2>8. Breaches of These Terms of Service</h2>
              <p>
                Without prejudice to our other rights under these terms of service, if you breach these terms of service in any way, we may take such action as we deem appropriate to deal with the breach, including suspending your access to the Website, prohibiting you from accessing the Website, blocking computers using your IP address from accessing the Website, contacting your internet service provider to request that they block your access to the Website and/or bringing court proceedings against you.
              </p>
              
              <h2>9. Variation</h2>
              <p>
                We may revise these terms of service from time-to-time. Revised terms of service will apply to the use of our Website from the date of the publication of the revised terms of service on our Website. Please check this page regularly to ensure you are familiar with the current version.
              </p>
              
              <h2>10. Assignment</h2>
              <p>
                We may transfer, sub-contract or otherwise deal with our rights and/or obligations under these terms of service without notifying you or obtaining your consent.
              </p>
              <p>
                You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms of service.
              </p>
              
              <h2>11. Severability</h2>
              <p>
                If a provision of these terms of service is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.
              </p>
              
              <h2>12. Entire Agreement</h2>
              <p>
                These terms of service, together with our privacy policy, constitute the entire agreement between you and us in relation to your use of our Website, and supersede all previous agreements in respect of your use of this Website.
              </p>
              
              <h2>13. Law and Jurisdiction</h2>
              <p>
                These terms of service will be governed by and construed in accordance with Italian law, and any disputes relating to these terms of service will be subject to the exclusive jurisdiction of the courts of Italy.
              </p>
              
              <h2>14. Contact Us</h2>
              <p>
                If you have any questions about these terms of service, please contact us at:
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
