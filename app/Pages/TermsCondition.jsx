'use client';

export default function TermsCondition() {
  return (
    <div className="bg-black min-h-screen text-yellow-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-4">
            Terms & Conditions
          </h1>
          {/* <p className="text-yellow-200 text-lg">Last updated: April 2026</p> */}
        </div>

        {/* Content */}
        <div className="space-y-6 md:space-y-8">
          {/* Agreement */}
          <section className="border-l-4 border-yellow-500 pl-4 md:pl-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              By accessing and using the Al-Arbi Jewellers website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Use License */}
          <section className="border-l-4 border-yellow-500 pl-4 md:pl-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">Use License</h2>
            <p className="text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
              Permission is granted to temporarily download one copy of the materials (information or software) from Al-Arbi Jewellers website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm sm:text-base">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations relating to access to or use of the website</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              The materials on Al-Arbi Jewellers website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          {/* Limitations */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Limitations of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall Al-Arbi Jewellers or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the website materials, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          {/* Product Information */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Product Information</h2>
            <div className="space-y-3 text-gray-300">
              <p>
                We strive to provide accurate descriptions and images of our jewellery products. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.
              </p>
              <p>
                Product colors on our website may appear slightly different due to monitor settings and lighting conditions. All items are subject to availability. We reserve the right to discontinue any product at any time.
              </p>
            </div>
          </section>

          {/* Pricing & Payment */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Pricing & Payment Terms</h2>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>All prices are listed in the currency specified on the website</li>
              <li>Prices are subject to change without notice</li>
              <li>We accept all major credit cards and secure payment methods</li>
              <li>Payment must be received before items are shipped</li>
              <li>Applicable taxes and shipping fees will be added to your order</li>
            </ul>
          </section>

          {/* Return & Refund Policy */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Return & Refund Policy</h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-white">Return Window:</strong> Items may be returned within 30 days of purchase in original condition with all packaging and accessories.
              </p>
              <p>
                <strong className="text-white">Condition:</strong> Returned items must be unworn, undamaged, and in their original packaging.
              </p>
              <p>
                <strong className="text-white">Refund Process:</strong> Refunds will be processed within 10-14 business days after receipt and inspection of the returned item.
              </p>
              <p>
                <strong className="text-white">Shipping:</strong> Customer is responsible for return shipping costs unless the item is defective or received in error.
              </p>
            </div>
          </section>

          {/* Warranty */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Product Warranty</h2>
            <p className="text-gray-300 leading-relaxed">
              All jewellery items come with a warranty against manufacturing defects for one year from the date of purchase. This warranty does not cover damage from misuse, accidents, or normal wear and tear. For warranty claims, contact our customer service team.
            </p>
          </section>

          {/* User Conduct */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">User Conduct</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              You agree not to use the website for any unlawful purpose or in any way that could damage or impair our services. Prohibited behavior includes:
            </p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Transmitting obscene or offensive content</li>
              <li>Disrupting the normal flow of dialogue within our website</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Engaging in any form of fraud</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Intellectual Property Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of Al-Arbi Jewellers and is protected by international copyright laws. Unauthorized use of any materials is prohibited.
            </p>
          </section>

          {/* Modification Rights */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Modification of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              Al-Arbi Jewellers reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4 bg-yellow-900 bg-opacity-10 rounded">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          {/* Contact Information */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="text-gray-300">
              <p><strong className="text-white">Email:</strong>  al.arbijewellers012024@gmail.com</p>
              <p><strong className="text-white">Address:</strong> Shop no.5 shri Sai Apartment, near kalam collection sanjiv nagar, Ambad Link Road-422010</p>
              <p><strong className="text-white">Phone:-</strong> 2534043265</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}