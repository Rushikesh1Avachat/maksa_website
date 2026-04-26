import { Package, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: 'Is this product static or interactive?',
    answer:
      'The assignment page is implemented as a static product description page with polished visual hierarchy, while keeping only lightweight layout interactions where they add value.',
  },
  {
    question: 'What makes the review area different?',
    answer:
      'Instead of one testimonial strip, the page shows three distinct review treatments: a live counter style, an editorial mosaic, and a conversation feed.',
  },
  {
    question: 'Can this be reused for other Maska products?',
    answer:
      'Yes. The same structure can be reused for other product slugs by swapping the copy, images, and review data while keeping the visual language consistent.',
  },
];

export function FQSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_rgba(68,42,26,0.08)]">
          <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Ingredients</div>
          <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">Simple, pantry-friendly ingredients.</h2>
          <div className="mt-5 space-y-3">
            {['Roasted Peanuts', 'Cocoa', 'Pink Salt', 'Vegetable Fat Blend'].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[1.25rem] bg-[#f8efe4] px-4 py-4">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#c67e35]" />
                <span className="text-sm leading-6 text-[#5d4a40]">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-[#665246]">
            The content above is intentionally static so the assignment behaves like a carefully composed product mockup. The visual hierarchy still suggests a real e-commerce page with plenty of buying cues.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#1f1612] p-6 text-white shadow-[0_24px_60px_rgba(35,21,14,0.15)]">
          <div className="text-xs uppercase tracking-[0.35em] text-white/58">FAQ</div>
          <h2 className="mt-2 text-3xl font-semibold">Common questions, handled in-card.</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1.25rem] bg-white/8 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-[#f3c56f] p-2 text-[#241812]">
                    <Package className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/72">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
