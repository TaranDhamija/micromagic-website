import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ProductGallery from '../components/ProductGallery';
import ProductsGrid from '../components/ProductsGrid';
import CTASection from '../components/CTASection';
import WaIcon from '../components/WaIcon';
import { usePageReveal } from '../hooks/useReveal';
import { products, waLink } from '../data/products';

function Breadcrumbs({ product }) {
  return (
    <div className="bg-parchment border-b border-forest/8 px-6 pt-24 pb-4">
      <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-textlight">
        <Link to="/" className="hover:text-sage transition-colors">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-sage transition-colors">Products</Link>
        <span>/</span>
        <span className="text-forest font-medium">{product.name}</span>
      </div>
    </div>
  );
}

function WheatgrassExperience({ product }) {
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <div>
      <Breadcrumbs product={product} />

      <section className="py-16 px-6 bg-warmwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] gap-16 items-start">
          <div className="reveal">
            <ProductGallery product={product} />
          </div>

          <div className="reveal reveal-delay-1">
            <p className="section-label mb-3">{product.category}</p>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <h1 className="font-serif text-4xl md:text-5xl text-forest font-bold">
                {product.name}
              </h1>
              <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[2px] text-earth">
                {product.weight}
              </span>
            </div>

            <p className="font-display italic text-[28px] leading-[1.15] text-sage mb-7">
              A simple daily ritual built around clean nutrition and natural vitality.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              {product.quickFacts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-[24px] border border-forest/8 bg-white px-5 py-4 text-sm text-textmid shadow-[0_10px_35px_rgba(18,35,25,0.05)]"
                >
                  {fact}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={waLink(product.orderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa inline-flex py-4 px-8 text-base"
              >
                <WaIcon size={20} />
                Order via WhatsApp
              </a>
              <a
                href="#ingredients"
                className="inline-flex items-center gap-2 rounded-full border border-forest/14 bg-white px-6 py-3 text-sm font-medium text-forest transition-colors hover:bg-parchment"
              >
                View Ingredients
              </a>
            </div>

            <div className="rounded-[30px] border border-sage/15 bg-sage/8 p-7">
              <p className="text-[10px] uppercase tracking-[2.4px] text-sage font-medium mb-3">
                Ingredient Story
              </p>
              <p className="font-display text-[25px] italic leading-[1.18] text-textmid">
                100% Organic Wheatgrass, prepared to feel simple, clean, and easy to return to every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-22 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="section-label reveal">Why Wheatgrass</p>
            <h2 className="text-[clamp(32px,4.4vw,54px)] text-forest reveal reveal-delay-1 mb-4">
              Why People Choose Wheatgrass
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {product.whyPeopleChoose.map((item, index) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} rounded-[28px] border border-forest/8 bg-warmwhite p-7 shadow-[0_12px_36px_rgba(18,35,25,0.05)]`}
              >
                <p className="mb-3 text-[10px] uppercase tracking-[2.2px] text-sage font-medium">
                  {item.title}
                </p>
                <p className="font-display text-[24px] italic leading-[1.14] text-textmid">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 px-6 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="section-label reveal">Benefits</p>
            <h2 className="text-[clamp(32px,4.4vw,54px)] text-forest reveal reveal-delay-1 mb-4">
              Supports Your Everyday Wellness Ritual
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {product.dailyBenefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} rounded-[26px] border border-sage/14 bg-white p-6`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sage/12 text-sage">
                  ✦
                </div>
                <p className="text-sm leading-relaxed text-textmid">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 px-6 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="section-label reveal">How To Use</p>
            <h2 className="text-[clamp(32px,4.4vw,54px)] text-forest reveal reveal-delay-1 mb-4">
              Simple Ways To Enjoy Wheatgrass
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {product.howToUseCards.map((item, index) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} rounded-[28px] border border-forest/8 bg-white p-7 shadow-[0_12px_36px_rgba(18,35,25,0.05)]`}
              >
                <p className="mb-3 text-[10px] uppercase tracking-[2.3px] text-sage font-medium">{item.title}</p>
                <p className="font-display text-[26px] italic leading-[1.14] text-textmid">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ingredients" className="py-22 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="section-label reveal">Specifications</p>
            <h2 className="text-[clamp(32px,4.4vw,54px)] text-forest reveal reveal-delay-1 mb-4">
              Product Specifications
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {product.specifications.map(([label, value], index) => (
              <div
                key={label}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} rounded-[24px] border border-forest/8 bg-warmwhite px-5 py-5`}
              >
                <p className="mb-2 text-[10px] uppercase tracking-[2.2px] text-textlight">{label}</p>
                <p className="text-sm leading-relaxed text-textmid">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 px-6 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="section-label reveal">Trust</p>
            <h2 className="text-[clamp(32px,4.4vw,54px)] text-forest reveal reveal-delay-1 mb-4">
              Certified Quality
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {product.certifications.map((item, index) => (
              <div
                key={item}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} rounded-[24px] border border-gold/16 bg-white px-5 py-6 text-center shadow-[0_12px_36px_rgba(18,35,25,0.04)]`}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/12 text-gold">
                  ✓
                </div>
                <p className="text-sm leading-relaxed text-textmid">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 px-6 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="section-label reveal">Why MicroMagic</p>
            <h2 className="text-[clamp(32px,4.4vw,54px)] text-forest reveal reveal-delay-1 mb-4">
              Why Choose MicroMagic
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {product.whyChooseMicroMagic.map((item, index) => (
              <div
                key={item}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} rounded-[26px] border border-forest/8 bg-parchment/72 px-6 py-5`}
              >
                <p className="text-sm font-medium text-forest">✓ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="section-label reveal">Beyond Daily Use</p>
            <h2 className="text-[clamp(32px,4.4vw,54px)] text-forest reveal reveal-delay-1 mb-4">
              More Ways To Use Wheatgrass
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {product.beyondDailyUse.map((item, index) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} rounded-[30px] border border-forest/8 bg-warmwhite p-7 shadow-[0_12px_36px_rgba(18,35,25,0.05)]`}
              >
                <p className="mb-3 text-[10px] uppercase tracking-[2.3px] text-sage font-medium">{item.title}</p>
                <p className="font-display text-[28px] italic leading-[1.12] text-textmid">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-forest mb-3">Continue exploring</h2>
            <p className="font-display text-lg text-textlight">
              More rituals from the same quiet collection.
            </p>
          </div>
          <ProductsGrid products={related} compact />
        </div>
      </section>

      <CTASection
        heading="Ready to bring Wheatgrass into your routine?"
        sub="Order via WhatsApp and we’ll share everything you need to get started."
        ctaText="Order Wheatgrass via WhatsApp"
        ctaHref={waLink(product.orderMessage)}
      />
    </div>
  );
}

function GenericProductExperience({ product }) {
  const [openFaq, setOpenFaq] = useState(null);
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <div>
      <Breadcrumbs product={product} />

      <section className="py-16 px-6 bg-warmwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-16 items-start">
          <div className="reveal">
            <ProductGallery product={product} />
          </div>

          <div className="reveal reveal-delay-1">
            <p className="section-label mb-3">{product.category}</p>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <h1 className="font-serif text-4xl md:text-5xl text-forest font-bold">
                {product.name}
              </h1>
              <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[2px] text-earth">
                {product.weight}
              </span>
            </div>

            <p className="font-display italic text-[28px] leading-[1.12] text-sage mb-4">
              {product.shortDescription}
            </p>
            <p className="text-textmid text-base leading-relaxed mb-8">{product.description}</p>

            <div className="grid gap-5 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] mb-10">
              <div className="rounded-[28px] border border-forest/8 bg-white p-6 shadow-[0_14px_45px_rgba(18,35,25,0.05)]">
                <p className="text-[10px] uppercase tracking-[2px] text-textlight mb-2"></p>
                <p className="font-serif text-4xl text-forest">{product.price}</p>
                <p className="mt-2 text-sm text-textlight">{product.weight} · Small batch packed</p>
              </div>
              <div className="rounded-[28px] border border-sage/15 bg-sage/8 p-6">
                <p className="text-[10px] uppercase tracking-[2px] text-sage font-medium mb-2">Product Story</p>
                <p className="font-display text-[24px] italic leading-[1.16] text-textmid">
                  {product.story}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={waLink(product.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa inline-flex py-4 px-8 text-base"
              >
                <WaIcon size={20} />
                Order via WhatsApp
              </a>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-medium text-textlight hover:text-forest transition-colors"
              >
                Back to collection <span>→</span>
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-forest/8 bg-white p-7 shadow-[0_14px_45px_rgba(18,35,25,0.05)]">
                <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[2.2px] text-textlight">
                  Benefits
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-textmid">
                      <span className="mt-1 text-sage">✦</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-sage/15 bg-sage/8 p-7">
                <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[2.2px] text-sage">
                  How to use
                </h3>
                <ol className="space-y-3">
                  {product.usage.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-textmid">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-cream">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-parchment">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-forest mb-3">Common questions</h2>
            <p className="font-display text-lg text-textlight">Honest answers, no fluff.</p>
          </div>
          <div className="space-y-3">
            {product.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-forest/7 overflow-hidden hover:border-sage/25 transition-colors"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-sans font-medium text-forest text-sm">{faq.q}</span>
                  <span className={`text-sage text-lg flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-sm text-textmid leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-textlight text-sm mb-4">Want guidance before you order?</p>
            <a
              href={waLink(`Hi MicroMagic! I have a question about ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa inline-flex"
            >
              <WaIcon size={17} />
              Ask us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-forest mb-3">Continue exploring</h2>
            <p className="font-display text-lg text-textlight">
              More rituals from the same quiet collection.
            </p>
          </div>
          <ProductsGrid products={related} compact />
        </div>
      </section>

      <CTASection
        heading={`Ready to explore ${product.shortName}?`}
        sub="Order via WhatsApp in 30 seconds. Personal guidance included."
        ctaText={`Explore ${product.shortName} via WhatsApp`}
        ctaHref={waLink(product.waMessage)}
      />
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  usePageReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <Navigate to="/products" replace />;

  if (product.slug === 'wheatgrass-powder') {
    return <WheatgrassExperience product={product} />;
  }

  return <GenericProductExperience product={product} />;
}
