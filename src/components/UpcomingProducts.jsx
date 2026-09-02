const upcomingProducts = [
  {
    number: '01',
    status: 'COMING SOON',
    name: 'Chia Seeds',
    description: 'A simple everyday staple.',
  },
  {
    number: '02',
    status: 'COMING SOON',
    name: 'Triphala Powder',
    description: 'A timeless botanical ritual.',
  },
];

export default function UpcomingProducts({ compact = false }) {
  return (
    <section className={compact ? 'pt-20' : 'pt-24'}>
      <div className={compact ? 'max-w-6xl mx-auto' : ''}>
        <div className="max-w-2xl">
          <p className="section-label reveal">COMING SOON</p>
          <h2 className="text-[clamp(34px,4.8vw,58px)] text-forest reveal reveal-delay-1 mb-4">
            Two more rituals,
            <br />
            <em className="italic text-sage">arriving soon.</em>
          </h2>
          <p className="font-display text-[22px] leading-relaxed text-textlight reveal reveal-delay-2">
            A quiet preview of what&apos;s next from MicroMagic.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {upcomingProducts.map((product, index) => (
            <article
              key={product.name}
              className={`reveal reveal-delay-${Math.min(index + 1, 4)} min-w-0 rounded-[34px] border border-forest/8 bg-[#fcfaf5] px-6 py-7 shadow-[0_12px_40px_rgba(24,42,29,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-sage/18 hover:bg-white sm:px-8 sm:py-9`}
            >
              <div className="flex min-h-[15rem] flex-col justify-between gap-10 sm:min-h-[17rem]">
                <div>
                  <p className="font-serif text-[54px] leading-none text-sage/16 sm:text-[68px]">
                    {product.number}
                  </p>
                </div>

                <div className="max-w-[24rem]">
                  <p className="mb-5 text-[10px] font-medium uppercase tracking-[2.8px] text-sage">
                    {product.status}
                  </p>
                  <h3 className="font-serif text-[clamp(30px,4vw,40px)] leading-[1.04] text-forest">
                    {product.name}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-textlight sm:text-[17px]">
                    {product.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
