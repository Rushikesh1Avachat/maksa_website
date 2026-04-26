'use client';

const faqs = [
  {
    q: 'What is meant by Oil Separation ?',
    a: 'Oil separation is a natural process in peanut butter. Just stir well before use!'
  },
  {
    q: 'If we see a pool of oil on the top, What should be our next steps?',
    a: 'Simply stir the oil back in. It’s a sign of natural peanut butter.'
  },
  {
    q: 'How should I store Maska peanutbutter?',
    a: 'Store in a cool, dry place. Refrigeration is optional but keeps it fresh longer.'
  },
  {
    q: 'What makes Maska\'s products unique?',
    a: 'All-natural, no added sugars, and a perfect blend of taste and health.'
  },
  {
    q: 'Are Maska products suitable for all age groups?',
    a: 'Yes, our products are suitable for everyone!'
  },
  {
    q: 'What is the shelf life of Maska products?',
    a: 'Typically 6-9 months from manufacturing date.'
  },
  {
    q: 'Do Maska products contain added sugars?',
    a: 'No, our products are unsweetened and contain no added sugars.'
  },
  {
    q: 'Are your products vegetarian or vegan?',
    a: 'Yes, all our peanut butters are vegetarian and most are vegan.'
  },
];

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-white border border-amber-100 rounded-lg p-4 group">
            <summary className="font-semibold text-lg cursor-pointer flex items-center gap-2 text-amber-800 group-open:text-amber-900">
              ✓ {faq.q}
            </summary>
            <div className="mt-2 text-gray-700 text-base pl-6">{faq.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
