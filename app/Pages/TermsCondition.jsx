const termSections = [
  {
    title: 'Agreement To Terms',
    paragraphs: [
      'By accessing and using the Al-Arbi Jewellers website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue use of the website.',
    ],
  },
  {
    title: 'Use License',
    paragraphs: [
      'Permission is granted to temporarily access the materials on this website for personal, non-commercial viewing only. This is a license, not a transfer of ownership.',
      'Under this license, you may not modify or copy materials, use them for commercial display, attempt to reverse engineer any software, remove proprietary notices, mirror content on another server, or violate applicable laws relating to access and use.',
    ],
  },
  {
    title: 'Disclaimer',
    paragraphs: [
      'All materials on the Al-Arbi Jewellers website are provided on an as-is basis. We make no guarantees or warranties, whether expressed or implied, including warranties related to merchantability, fitness for a particular purpose, or non-infringement.',
    ],
  },
  {
    title: 'Limitations Of Liability',
    paragraphs: [
      'Al-Arbi Jewellers and its suppliers shall not be liable for any damages arising from the use or inability to use materials on the website, including but not limited to loss of data, profits, or business interruption, even if advised of the possibility of such damages.',
    ],
  },
  {
    title: 'Product Information',
    paragraphs: [
      'We aim to present accurate product descriptions, pricing, and imagery. However, we do not guarantee that all descriptions or content will always be fully complete, current, or error-free.',
      'Product appearance may vary slightly due to lighting, display differences, and photography conditions. Availability may also change without prior notice.',
    ],
  },
  {
    title: 'Pricing And Payment Terms',
    paragraphs: [
      'Prices shown on the website are subject to change without notice. Applicable taxes, shipping charges, and related fees may be added at checkout where relevant.',
      'Payment must be received and successfully processed before an order is confirmed, prepared, or dispatched.',
    ],
  },
  {
    title: 'Return And Refund Policy',
    paragraphs: [
      'Items may be eligible for return within the stated return window if they are unused, undamaged, and returned with original packaging and relevant documentation.',
      'Refunds, where approved, are processed after inspection of the returned item. Return shipping costs may apply unless the return is due to a verified defect or fulfilment error.',
    ],
  },
  {
    title: 'Warranty',
    paragraphs: [
      'Certain jewellery items may be covered by a limited warranty against manufacturing defects for the period communicated at purchase. This warranty does not cover misuse, accidental damage, improper storage, or normal wear and tear.',
    ],
  },
  {
    title: 'User Conduct',
    paragraphs: [
      'You agree not to use the website for unlawful activity or in any way that may damage, disable, overburden, or impair our services. Prohibited activity includes harassment, fraud, unauthorized access attempts, and transmission of offensive or harmful content.',
    ],
  },
  {
    title: 'Intellectual Property Rights',
    paragraphs: [
      'All content on this website, including text, graphics, logos, images, product presentation, and software, is the property of Al-Arbi Jewellers or its licensors and is protected by applicable intellectual property laws.',
    ],
  },
  {
    title: 'Modification Of Terms',
    paragraphs: [
      'We reserve the right to revise these Terms and Conditions at any time. Continued use of the website following updates constitutes acceptance of the revised terms.',
    ],
  },
  {
    title: 'Governing Law',
    paragraphs: [
      'These Terms and Conditions are governed by the applicable laws of the relevant jurisdiction. Any disputes arising from use of this website will be subject to the exclusive jurisdiction of the appropriate courts.',
    ],
  },
  {
    title: 'Contact Information',
    paragraphs: [
      'If you have questions about these Terms and Conditions, please contact Al-Arbi Jewellers.',
      'Email: al.arbijewellers012024@gmail.com',
      'Address: Shop no.5 Shri Sai Apartment, near Kalam Collection, Sanjiv Nagar, Ambad Link Road, 422010',
      'Phone: 02534043265',
    ],
  },
];

export default function TermsCondition() {
  return (
    <main className="min-h-screen bg-[#f6efe6]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(212,175,99,0.18),transparent_24%),linear-gradient(180deg,#0a0908_0%,#13100e_100%)] pb-12 pt-24 sm:pb-16 sm:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#d4af63]/20 bg-[rgba(15,12,10,0.92)] px-5 py-7 shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:rounded-[2.2rem] sm:px-8 lg:px-12 lg:py-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.42em] text-[#d4af63]">
                  Legal & Policies
                </p>
                <h1 className="mt-4 text-4xl leading-none text-[#f7eddc] sm:text-6xl lg:text-[5rem]">
                  Terms And Conditions
                </h1>
              </div>

              <div className="rounded-full border border-[#d4af63]/20 bg-[rgba(212,175,99,0.06)] px-4 py-2 text-xs text-[#eadfcd] sm:text-sm">
                Home / Terms & Conditions
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28 lg:pt-14">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[1.6rem] border border-[#dcc8a4]/45 bg-[#fff9f2] p-4 shadow-[0_30px_70px_rgba(15,12,10,0.08)] sm:rounded-[2rem] sm:p-8 lg:p-10">
            <div className="mb-8 rounded-[1.25rem] border border-[#e6d7bf] bg-[linear-gradient(180deg,#fffdf9_0%,#f6eee4_100%)] px-4 py-4 text-[#594c41] sm:mb-10 sm:rounded-[1.5rem] sm:px-5 sm:py-5">
              <p className="text-sm leading-7">
                These Terms and Conditions explain the rules, responsibilities, and legal
                commitments that apply when you access, browse, or interact with the
                Al-Arbi Jewellers website and its services.
              </p>
            </div>

            <div className="space-y-8">
              {termSections.map((section, index) => (
                <section
                  key={section.title}
                  className="rounded-[1.3rem] border border-[#e6d7bf] bg-[linear-gradient(180deg,#fffdfa_0%,#f8f1e7_100%)] px-4 py-5 sm:rounded-[1.6rem] sm:px-6 sm:py-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af63]/45 bg-[#fff5e7] text-sm font-semibold text-[#7a5d24]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-[1.55rem] leading-none text-[#1d1a18] sm:text-[2.2rem]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-8 text-[#54493e] sm:text-[15px]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
