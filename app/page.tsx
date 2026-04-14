'use client';

import { useState } from 'react';
import Image from 'next/image';

const cards = [
  {
    title: 'Chain',
    subtitle: 'Categories',
    image: '/chain.png',
    accent: 'Layered gold polish for statement styling.',
  },
  {
    title: 'Necklace',
    subtitle: 'Categories',
    image: '/necklace.png',
    accent: 'Sparkling silhouettes for elegant occasions.',
  },
  {
    title: 'Bangles',
    subtitle: 'Categories',
    image: '/bangles.png',
    accent: 'Symbolic luxury shaped with fine detailing.',
  },
];

const details = [
  {
    title: 'Brilliant Cut',
    copy: 'Layered with luminous stones and warm golden accents for an unmistakably regal finish.',
    top: '18%',
  },
  {
    title: 'Golden Glow',
    copy: 'Balanced proportions create a dramatic centerpiece designed to feel rare and refined.',
    top: '43%',
  },
];

const features = [
  {
    title: 'Curated Luxury',
    copy: 'Each category is presented like a boutique showcase with stronger visual hierarchy and a richer premium finish.',
  },
  {
    title: 'Craftsmanship First',
    copy: 'We design the experience around the jewellery itself so every image, shadow, and surface feels intentional.',
  },
  {
    title: 'Modern Elegance',
    copy: 'A black-and-gold palette paired with soft cream accents gives the homepage a more refined fashion-house tone.',
  },
];

const experience = [
  {
    number: '01',
    title: 'Exclusive Designs',
    copy: 'Distinctive jewellery made to stand apart with timeless form and premium visual balance.',
  },
  {
    number: '02',
    title: 'Premium Finish',
    copy: 'Richer textures, polished presentation, and softer luxurious contrast across every section.',
  },
  {
    number: '03',
    title: 'Memorable Presence',
    copy: 'A stronger digital identity that feels more premium at first glance and more trustworthy on longer viewing.',
  },
];

const videoCards = [
  {
   
    videoSrc: '/hero-video.mp4',
    thumbnail: '/necklace.png',
    position:
      'left-1/2 top-20 z-10 hidden w-48 -translate-x-[132%] rotate-[-4deg] lg:block xl:w-56',
    tint: 'from-[#0f1839]/88 to-[#0c0c14]/92',
  },
  {

    videoSrc: '/video1.mp4',
    thumbnail: '/chain.png',
    position:
      'left-1/2 top-32 z-0 hidden w-48 translate-x-[88%] rotate-[4deg] lg:block xl:w-56',
    tint: 'from-[#1c5c60]/86 to-[#10231f]/92',
  },
  {
 
    videoSrc: '/video2.mp4',
    thumbnail: '/bangles.png',
    position:
      'left-1/2 top-48 z-0 hidden w-48 -translate-x-[140%] rotate-[-2deg] lg:block xl:w-56',
    tint: 'from-[#8B7355]/86 to-[#3E2723]/92',
  },
];

const allVideos = [
  { src: '/hero-video.mp4', title: 'Dazzling Teardrop', subtitle: 'Diamond Drop Earrings', thumbnail: '/necklace.png' },
  { src: '/video1.mp4', title: 'Evening Glow', subtitle: 'Signature Styling', thumbnail: '/chain.png' },
  { src: '/video2.mp4', title: 'Golden Cascade', subtitle: 'Premium Collection', thumbnail: '/bangles.png' },
];

function ProductCard({
  title,
  subtitle,
  image,
  accent,
}: {
  title: string;
  subtitle: string;
  image: string;
  accent: string;
}) {
  return (
    <article className="group shimmer-sweep relative overflow-hidden rounded-[1.7rem] border border-[#d7bf89]/35 bg-[linear-gradient(180deg,#f7ebdc_0%,#efdfcd_100%)] p-4 shadow-[0_28px_70px_rgba(4,16,12,0.22)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_36px_90px_rgba(0,0,0,0.28)]">
      <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] border border-white/25 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d6b56e]/15 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100 group-hover:animate-soft-glow" />

      <p className="text-xs uppercase tracking-[0.22em] text-[#7a6958]">{subtitle}</p>
      <div className="mt-1 flex items-start justify-between gap-4">
        <h3 className="text-[2rem] leading-none tracking-tight text-[#1d1a18] sm:text-[2.25rem]">
          {title}
        </h3>
        <span className="rounded-full border border-[#c9ab67]/45 bg-white/40 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#6f5930]">
          Premium
        </span>
      </div>

      <div className="relative mt-5 h-48 overflow-hidden rounded-[1.25rem] border border-[#ddc9a7]/50 bg-[radial-gradient(circle_at_top,#fffaf3,#ead8c3)]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 320px"
          className="object-contain p-5 transition duration-700 group-hover:scale-[1.08] group-hover:rotate-2"
        />
      </div>

      <p className="mt-4 text-sm leading-7 text-[#695748]">{accent}</p>

      <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#14110f] px-5 py-3 text-sm text-[#f7eddc] transition duration-300 hover:bg-[#231d19] hover:pr-6">
        Check More Products
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % allVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + allVideos.length) % allVideos.length);
  };

  const currentVideo = allVideos[currentVideoIndex];

  return (
    <main className="min-h-screen bg-[#f4ede4]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,99,0.18),transparent_28%),linear-gradient(135deg,#050505_0%,#0a0908_42%,#14110f_100%)] text-[#f6efe3]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20" />
        <div className="animate-soft-glow absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#d4af63]/12 blur-3xl" />
        <div className="animate-soft-glow absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#d4af63]/8 blur-3xl" />
        <div className="absolute inset-y-0 left-[52%] hidden w-px bg-[linear-gradient(180deg,transparent,rgba(219,194,137,0.35),transparent)] lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="max-w-xl pt-6 lg:pt-12">
              <p className="animate-fade-up text-[11px] uppercase tracking-[0.45em] text-[#c9b07a]">
                Jewelry Design With Love
              </p>
              <h1 className="animate-fade-up-delay-1 mt-5 text-4xl leading-[0.92] tracking-tight text-[#f8f1e7] sm:mt-6 sm:text-6xl lg:text-[6.3rem]">
                The Perfect
                <span className="block">Jewels For You</span>
              </h1>
              <p className="animate-fade-up-delay-2 mt-5 max-w-lg text-sm leading-7 text-[#d2c3ad] sm:mt-6 sm:text-lg sm:leading-8">
                Discover a luxurious black-and-gold collection with elegant craftsmanship,
                rich detailing, and a premium boutique presentation.
              </p>

              <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
                <button className="w-full rounded-full bg-white px-6 py-3.5 text-base font-medium text-[#111513] shadow-[0_12px_30px_rgba(255,255,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(255,255,255,0.2)] sm:w-auto sm:px-8 sm:py-4">
                  Contact Us
                </button>
                <button className="w-full rounded-full border border-[rgba(219,194,137,0.45)] px-6 py-3.5 text-sm uppercase tracking-[0.24em] text-[#efe1c2] transition duration-300 hover:-translate-y-0.5 hover:bg-[rgba(219,194,137,0.08)] sm:w-auto sm:px-8 sm:py-4 sm:tracking-[0.28em]">
                  Explore
                </button>
              </div>

              <div className="animate-fade-up-delay-2 mt-10 flex items-center gap-4 text-[#dbc28d] sm:mt-14 sm:gap-5">
                <div className="h-px w-20 bg-gradient-to-r from-[#dbc28d] to-transparent" />
                <span className="text-2xl">→</span>
              </div>
            </div>

            <div className="relative min-h-[280px] sm:min-h-[420px] lg:min-h-[720px]">
              <div className="animate-soft-glow absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(212,175,99,0.16),transparent_62%)]" />
              <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(240,232,220,0.12)]" />

              <div className="animate-float-gold absolute left-1/2 top-1/2 z-10 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/necklace.png"
                  alt="Featured premium jewellery"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
                />
              </div>

              {details.map((item) => (
                <div
                  key={item.title}
                  className="animate-fade-up absolute right-0 z-20 hidden w-52 rounded-[1.1rem] border border-[rgba(219,194,137,0.4)] bg-[rgba(16,13,11,0.88)] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.24)] lg:block"
                  style={{ top: item.top }}
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#d8bf87]">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-[#e0d2bb]">{item.copy}</p>
                </div>
              ))}

              <div className="absolute right-6 top-[15%] hidden flex-col gap-4 lg:flex">
                <div className="animate-soft-glow flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(219,194,137,0.4)] bg-[rgba(12,10,9,0.9)] text-[#e8d6ad] shadow-[0_12px_24px_rgba(0,0,0,0.24)]">
                  ✦
                </div>
                <div className="animate-soft-glow flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(219,194,137,0.4)] bg-[rgba(12,10,9,0.9)] text-[#d6b56e] shadow-[0_12px_24px_rgba(0,0,0,0.24)]">
                  ◯
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:-mb-24 lg:mt-0 lg:grid-cols-3">
            {cards.map((card) => (
              <ProductCard
                key={card.title}
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                accent={card.accent}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4ede4] px-4 pb-16 pt-20 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-[#171210] px-6 py-8 text-[#f6efe3] shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:px-8 sm:py-10">
              <p className="text-[11px] uppercase tracking-[0.42em] text-[#d2ae67]">
                Why Choose Us
              </p>
              <h2 className="mt-4 text-4xl leading-none sm:text-6xl">
                A richer luxury experience from first impression to final detail.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#cdbca4] sm:text-lg">
                We are building the homepage like a premium jewellery showcase, with stronger
                storytelling, more visual confidence, and category cards that feel crafted rather
                than generic.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {features.map((item) => (
                <article
                  key={item.title}
                  className="shimmer-sweep rounded-[1.75rem] border border-[#d7bf89]/25 bg-[linear-gradient(180deg,#fff7ee_0%,#f0e2d2_100%)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)]"
                >
                  <div className="h-10 w-10 rounded-full border border-[#d7bf89]/50 bg-[#fff4e8]" />
                  <h3 className="mt-5 text-[2rem] leading-none text-[#1f1a17]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#66584d]">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] px-4 py-16 text-[#f6efe3] sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-[#d2ae67]">
                Luxury Experience
              </p>
              <h2 className="mt-4 text-4xl leading-none sm:text-6xl">
                More content, stronger presence, premium finish.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#cdbca4]">
              The homepage now carries more storytelling and supporting content so it feels like a
              complete luxury brand experience rather than only a hero section with a few cards.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {experience.map((item) => (
              <article
                key={item.number}
                className="group rounded-[1.9rem] border border-[#d7bf89]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#d7bf89]/40 hover:bg-[linear-gradient(180deg,rgba(212,175,99,0.10),rgba(255,255,255,0.02))]"
              >
                <p className="text-3xl text-[#d8b56d]">{item.number}</p>
                <h3 className="mt-5 text-[2rem] leading-none text-[#f7eedf]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#cdbca4]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f0e6] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#b78d3f]">
              Diamond Styling Edit
            </p>
            <h2 className="mt-4 text-4xl leading-none text-[#2a1d17] sm:text-5xl lg:text-[4.6rem]">
              Styling 101 With Diamonds
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#6e5d51] sm:text-xl">
              Trendsetting diamond jewellery suited for every occasion, presented through a layered
              luxury video showcase.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-6xl pb-6 sm:mt-16">
            {/* Previous Button */}
            <button 
              onClick={prevVideo}
              className="absolute left-0 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#d6b56e]/35 bg-white/90 text-3xl text-[#8c6b2f] shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-110 hover:bg-white lg:flex"
            >
              ‹
            </button>
            
            {/* Next Button */}
            <button 
              onClick={nextVideo}
              className="absolute right-0 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#d6b56e]/35 bg-white/90 text-3xl text-[#8c6b2f] shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-110 hover:bg-white lg:flex"
            >
              ›
            </button>

            {/* Side Video Cards */}
            {videoCards.map((card, index) => (
              <div
                key={card.videoSrc}
                className={`absolute ${card.position} overflow-hidden rounded-[1.6rem] bg-gradient-to-b ${card.tint} p-3 shadow-[0_30px_60px_rgba(0,0,0,0.24)] transition-all duration-500 ${
                  index === currentVideoIndex ? 'scale-105 opacity-100' : 'opacity-60'
                }`}
              >
                <div className="relative aspect-[0.82/1] overflow-hidden rounded-[1.15rem] bg-black">
                  <video
                    className="h-full w-full object-cover opacity-88"
                    src={card.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.58))]" />
                </div>
              </div>
            ))}

            {/* Main Video Player */}
            <div className="relative z-20 mx-auto max-w-xl overflow-hidden rounded-[1.9rem] border border-[#d6b56e]/20 bg-[#11100f] p-3 shadow-[0_34px_80px_rgba(0,0,0,0.28)] transition-all duration-500 sm:max-w-2xl">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-black">
                <video
                  key={currentVideo.src}
                  className="aspect-[0.82/1] w-full object-cover sm:aspect-[0.88/1]"
                  src={currentVideo.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))] p-4 sm:p-5">
                  <div className="flex flex-wrap gap-3">
                    <div className="pointer-events-auto flex items-center gap-3 rounded-[1.1rem] border border-white/15 bg-[rgba(18,17,15,0.82)] px-3 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-md">
                      <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-[#f4e6d3]">
                        <Image
                          src={currentVideo.thumbnail}
                          alt={currentVideo.title}
                          fill
                          sizes="56px"
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-5 text-[#f7efdf]">
                          {currentVideo.title}
                        </p>
                        <p className="text-xs leading-5 text-[#d5c4ab]">
                          {currentVideo.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video Navigation Dots */}
                  <div className="mt-4 flex items-center justify-center gap-3">
                    {allVideos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideoIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentVideoIndex ? 'w-10 bg-white' : 'w-1.5 bg-white/35 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}