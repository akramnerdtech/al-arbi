import Image from 'next/image';

export default function Home() {
  const collections = [
    {
      id: 1,
      name: 'Necklaces',
      description: 'Elegant necklaces for every style',
      image: '/necklace.png'
    },
    {
      id: 2,
      name: 'Chains',
      description: 'Premium gold and silver chains',
      image: '/chain.png'
    },
    {
      id: 3,
      name: 'Bangles',
      description: 'Beautiful bangles for every occasion',
      image: '/bangles.png'
    }
  ];

  return (
    <main className="bg-black min-h-screen text-white relative overflow-hidden">

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Elegant Logo/Brand */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-black/40 px-6 py-3">
              <span className="text-base uppercase tracking-[0.4em] text-yellow-300 font-semibold">
                Luxury Made Simple
              </span>
            </div>
            <div className="mt-4">
              <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tight text-yellow-300">
              Al-Arbi Jewellers
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl sm:text-3xl md:text-4xl text-yellow-100 mb-6 font-light tracking-wide leading-relaxed">
              Premium Jewelry for Every Occasion
            </p>
            <p className="text-base sm:text-lg md:text-xl text-yellow-200 leading-relaxed font-light italic px-4">
              Discover our exclusive collection of exquisite jewellery pieces, crafted with precision and elegance.
              Each piece tells a story of luxury and sophistication, designed to make you shine brighter than ever.
            </p>
          </div>

          {/* Premium Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <button className="px-8 sm:px-12 py-4 cursor-pointer text-base sm:text-lg rounded-2xl border border-yellow-300/50 transition duration-300 hover:bg-yellow-100 hover:text-black w-full sm:w-auto">
              Shop Now
            </button>
            <button className="px-8 sm:px-12 py-4 border cursor-pointer border-yellow-400 text-yellow-300 font-black text-base sm:text-lg rounded-2xl bg-black/30 transition duration-300 hover:bg-yellow-100 hover:text-black hover:-translate-y-0.5 w-full sm:w-auto">
              View Collection
            </button>
          </div>
        </div>

        {/* Featured Collections */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-yellow-300">
                Our Collections
            </h2>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-16 sm:w-24 h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-16 sm:w-24 h-1 bg-yellow-400 rounded-full"></div>
            </div>
            <p className="text-yellow-200 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed px-4">
              Explore our meticulously crafted collections, each piece a masterpiece of elegance and sophistication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="relative bg-[#111111] rounded-3xl border border-yellow-500/40 overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 sm:h-80 md:h-96 bg-black overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-3 tracking-wide">
                    {collection.name}
                  </h3>
                  <p className="text-yellow-100 text-sm sm:text-base mb-6 leading-relaxed font-light">
                    {collection.description}
                  </p>

                  <button className="w-full py-3 cursor-pointer text-black font-bold text-sm sm:text-base rounded-2xl border border-yellow-300/50 transition duration-300 hover:bg-yellow-100 hover:text-black hover:-translate-y-0.5">
                    Explore Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-yellow-300">
                Why Choose Us
            </h2>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 sm:w-16 h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-12 sm:w-16 h-1 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Premium Quality',
                description: 'Finest jewellery crafted with precision and attention to detail, using only the highest grade materials'
              },
              {
                title: 'Authentic Designs',
                description: 'Unique designs that reflect cultural heritage and modern elegance, handcrafted by master artisans'
              },
              {
                title: 'True Value',
                description: 'Honest pricing without compromising on quality and craftsmanship, offering exceptional value'
              }
            ].map((feature, index) => (
              <div key={index} className="relative bg-[#111111] p-6 md:p-10 rounded-3xl border border-yellow-500/40 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-center">
                  <div className="mx-auto mb-6 md:mb-8 h-1 w-20 md:w-28 rounded-full bg-yellow-400"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-200 mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-yellow-100 leading-relaxed font-light text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-24 md:mt-32 text-center px-4">
          <div className="bg-[#111111] rounded-3xl p-8 md:p-12 border border-yellow-400/30">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-5">
              Ready to Find Your Perfect Piece?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-yellow-200 mb-8 md:mb-10 font-light leading-relaxed max-w-3xl mx-auto">
              Browse our complete collection and discover timeless elegance that will make you shine brighter than ever.
            </p>
            <button className="px-12 sm:px-16 py-4 md:py-5 cursor-pointer text-black font-bold text-lg md:text-xl rounded-3xl border border-yellow-300/50 transition duration-300 hover:bg-yellow-100 hover:text-black hover:-translate-y-0.5 w-full sm:w-auto">
              Explore All Collections
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}