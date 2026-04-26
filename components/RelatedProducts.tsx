'use client';

const products = [
  {
    name: 'Smooth Peanut Butter (Creamy)',
    price: 288.2,
    original: 339,
    img: 'bg-gradient-to-br from-amber-100 to-orange-100',
    color: 'text-amber-700',
  },
  {
    name: 'Unsweetened Smooth Peanut Butter',
    price: 288.2,
    original: 339,
    img: 'bg-gradient-to-br from-blue-100 to-blue-200',
    color: 'text-blue-700',
  },
  {
    name: 'Chatpata Peanut Butter (Spicy)',
    price: 288.2,
    original: 339,
    img: 'bg-gradient-to-br from-orange-200 to-orange-400',
    color: 'text-orange-700',
  },
  {
    name: 'Choco – Crunch Peanut Butter',
    price: 322.2,
    original: 379,
    img: 'bg-gradient-to-br from-purple-200 to-purple-400',
    color: 'text-purple-700',
  },
];

export default function RelatedProducts() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((p, idx) => (
          <div key={idx} className="rounded-2xl border border-amber-100 bg-white p-4 flex flex-col items-center group hover:shadow-xl transition-all">
            <div className={`w-32 h-32 rounded-xl mb-4 flex items-center justify-center ${p.img} group-hover:scale-105 transition-transform`}></div>
            <div className={`font-bold text-lg mb-2 ${p.color}`}>{p.name}</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-bold text-gray-900">From ₹{p.price}</span>
              <span className="text-gray-400 line-through">₹{p.original}</span>
            </div>
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">Sale</span>
          </div>
        ))}
      </div>
    </div>
  );
}
