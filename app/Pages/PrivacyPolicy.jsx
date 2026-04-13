'use client';

export default function PrivacyPolicy() {
  return (
    <div className="bg-black min-h-screen text-yellow-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-4">
            Privacy Policy
          </h1>
          {/* <p className="text-yellow-200 text-lg">Last updated: April 2026</p> */}
        </div>

        {/* Content */}
        <div className="space-y-6 md:space-y-8">
          {/* Introduction */}
          <section className="border-l-4 border-yellow-500 pl-4 md:pl-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">Introduction</h2>
            <p className="text-yellow-200 leading-relaxed text-sm sm:text-base">
              Welcome to Al-Arbi Jewellers. We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          {/* Information Collection */}
          <section className="border-l-4 border-yellow-500 pl-4 md:pl-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">Information We Collect</h2>
            <div className="space-y-3 text-yellow-200 text-sm sm:text-base">
              <p>
                <strong className="text-white">Personal Information:</strong> Name, email address, phone number, mailing address, and other contact details when you voluntarily submit them through our website, contact forms, or purchase transactions.
              </p>
              <p>
                <strong className="text-white">Automatic Information:</strong> Browser type, IP address, pages visited, time and date of visits, and other usage data collected through cookies and similar technologies.
              </p>
              <p>
                <strong className="text-white">Payment Information:</strong> Credit card details and billing information processed through secure payment gateways.
              </p>
            </div>
          </section>

          {/* Use of Information */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your purchase or inquiry</li>
              <li>Improve our website and services</li>
              <li>Send promotional content and updates (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Data Protection & Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, and destruction. All sensitive data is encrypted and transmitted securely through SSL technology.
            </p>
          </section>

          {/* Third-Party Sharing */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Sharing Your Information</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>
          </section>

          {/* Cookies */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain website functionalities.
            </p>
          </section>

          {/* Your Rights */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also opt-out of marketing communications at any time. To exercise these rights, please contact us at privacy@al-arbi-jewellers.com.
            </p>
          </section>

          {/* Contact Information */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 text-gray-300">
              <p><strong className="text-white">Email:</strong> al.arbijewellers012024@gmail.com</p>
              <p><strong className="text-white">Address:</strong> Shop no.5 shri Sai Apartment, near kalam collection sanjiv nagar, Ambad Link Road-422010</p>
              <p><strong className="text-white">Phone:-</strong> 2534043265</p>
            </div>
          </section>

          {/* Changes Notice */}
          <section className="border-l-4 border-yellow-500 pl-6 py-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices and other factors. Your continued use of our website following the posting of revised changes constitutes your acceptance of such changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}