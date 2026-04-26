import { SectionHeading } from '@/components/section-heading';
import { brandHighlights, type ProductFaq, type ProductItem } from '@/data/maska';

export function ProductDetails({
  description,
  benefits,
  ingredients,
  features,
  faqs,
}: Pick<ProductItem, 'description' | 'benefits' | 'ingredients' | 'features' | 'faqs'>) {
  return (
    <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
        <SectionHeading eyebrow="Product Details" title="Description, benefits, and ingredients" />
        <div className="mt-6 space-y-5 text-sm leading-6 text-[#604d43]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6653]">Description</div>
            <p className="mt-3">{description}</p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6653]">Benefits</div>
            <ul className="mt-3 space-y-2">
              {benefits.map((item) => (
                <li key={item} className="rounded-2xl border border-[#eadfd3] bg-[#fffaf7] px-4 py-3">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6653]">How to use</div>
            <ul className="mt-3 space-y-2">
              <li>• Spread on brown bread, toast, pancakes, and baked goods.</li>
              <li>• Blend into smoothies or shakes for a richer dessert-style flavor.</li>
              <li>• Use as a spoonable snack when you want a quick chocolate hit.</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6653]">Ingredients</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {ingredients.map((item) => (
                <span key={item} className="rounded-full bg-[#f6ebe1] px-4 py-2 text-sm font-medium text-[#7d4f2a]">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6653]">Additional info</div>
            <p className="mt-3">
              size-300g, 500g, 1KG
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] bg-[#241915] p-6 text-white shadow-[0_28px_70px_rgba(68,42,26,0.18)]">
        <SectionHeading eyebrow="Media review section" title="A compact social-proof footer for the product page." />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {brandHighlights.slice(0, 4).map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-white/10 p-4">
              <div className="text-sm text-white/70">{item}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[1.75rem] bg-white/8 p-5 ring-1 ring-white/10">
          <div className="text-sm uppercase tracking-[0.25em] text-white/55">Features</div>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
            {features.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 rounded-[1.75rem] bg-white/8 p-5 ring-1 ring-white/10">
          <div className="text-sm uppercase tracking-[0.25em] text-white/55">FAQs snapshot</div>
          <div className="mt-4 space-y-3">
            {faqs.slice(0, 2).map((faq) => (
              <details key={faq.question} className="rounded-2xl bg-white/10 px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold">{faq.question}</summary>
                <p className="mt-2 text-sm leading-6 text-white/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
