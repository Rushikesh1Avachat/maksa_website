import { SectionHeading } from '@/components/section-heading';
import type { ProductFaq } from '@/data/maska';

export function FaqSection({ faqs }: { faqs: ProductFaq[] }) {
  return (
    <section className="mt-12 rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
      <SectionHeading eyebrow="Frequently Asked Questions" title="Helpful answers for customers" />
      <div className="mt-6 grid gap-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-[1.5rem] border border-[#eadfd3] bg-[#fffaf7] px-5 py-4">
            <summary className="cursor-pointer list-none text-sm font-semibold text-[#201613]">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-[#604d43]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

