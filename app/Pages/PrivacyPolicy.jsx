const policySections = [
  {
    title: 'Introduction',
    paragraphs: [
      'Al-Arbi Jewellers is committed to protecting your privacy and handling personal information with care. This Privacy Policy explains how information is collected, used, and safeguarded when you visit our website or interact with our services.',
      'We believe trust is part of luxury. For that reason, we present our privacy commitments clearly so you understand what data we collect, why we collect it, and how you remain in control of it.',
    ],
  },
  {
    title: 'What Information Is Collected About You',
    paragraphs: [
      'When you contact us, place an inquiry, or complete a transaction, we may collect information such as your name, phone number, email address, mailing address, and other relevant contact details.',
      'When you browse the website, certain technical information may be collected automatically, including your browser type, IP address, device information, pages viewed, referral source, and visit timing.',
      'Payment and billing information may also be processed through secure payment systems when purchases are made through our services.',
    ],
  },
  {
    title: 'How We Use The Information We Collect',
    paragraphs: [
      'Your information may be used to respond to inquiries, process transactions, provide service updates, improve the user experience, personalize communication, and protect the security of our website.',
      'We may also use information to analyze customer preferences, improve product presentation, and share promotional updates where you have given consent or where permitted by applicable law.',
    ],
  },
  {
    title: 'Sharing Of Information',
    paragraphs: [
      'We do not sell, trade, or rent your personal information. We may share relevant data only with trusted service providers who support website operations, secure payment handling, communications, analytics, or legal compliance.',
      'Such third parties are expected to handle information responsibly and only for the purpose of supporting our services.',
    ],
  },
  {
    title: 'Your Choices',
    paragraphs: [
      'You may choose how you interact with promotional messages and may opt out of marketing communication at any time. You may also request access to, correction of, or deletion of your personal information where applicable.',
    ],
  },
  {
    title: 'Security',
    paragraphs: [
      'We use reasonable technical and organizational measures to protect the information we collect. While no digital platform can guarantee absolute security, we work to maintain appropriate safeguards for your personal data.',
    ],
  },
  {
    title: 'Links To Other Websites',
    paragraphs: [
      'Our website may contain links to third-party platforms. We are not responsible for the privacy practices or content of those external websites and encourage you to review their privacy policies separately.',
    ],
  },
  {
    title: 'Changes To This Privacy Policy',
    paragraphs: [
      'This Privacy Policy may be updated periodically to reflect changes in our services, business operations, or legal obligations. Updates will become effective when posted on this website.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: [
      'If you have questions about this Privacy Policy or how your information is handled, please contact Al-Arbi Jewellers.',
      'Email: al.arbijewellers012024@gmail.com',
      'Address: Shop no.5 Shri Sai Apartment, near Kalam Collection, Sanjiv Nagar, Ambad Link Road, 422010',
      'Phone: 02534043265',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f6efe6]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(212,175,99,0.18),transparent_24%),linear-gradient(180deg,#0a0908_0%,#13100e_100%)] pb-12 pt-24 sm:pb-16 sm:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#d4af63]/20 bg-[rgba(15,12,10,0.92)] px-5 py-7 shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:rounded-[2.2rem] sm:px-8 lg:px-12 lg:py-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.42em] text-[#d4af63]">
                  Legal & Privacy
                </p>
                <h1 className="mt-4 text-4xl leading-none text-[#f7eddc] sm:text-6xl lg:text-[5rem]">
                  Privacy Policy
                </h1>
              </div>

              <div className="rounded-full border border-[#d4af63]/20 bg-[rgba(212,175,99,0.06)] px-4 py-2 text-xs text-[#eadfcd] sm:text-sm">
                Home / Privacy Policy
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
                This Privacy Policy is intended to inform you about the personal data that may be
                collected from you, how your information may be used and disclosed, and how you
                can control the use of your information while interacting with Al-Arbi Jewellers.
              </p>
            </div>

            <div className="space-y-8">
              {policySections.map((section, index) => (
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
