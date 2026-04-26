'use client'
import Image from 'next/image';
import { useState } from 'react';

const images = [
  'https://www.maskabutters.in/cdn/shop/files/1stimage_97e43668-94e5-4e14-b412-03974ad7d17d.jpg',
  'https://www.maskabutters.in/cdn/shop/files/2_fb7f5d2e-2794-4ce3-b5e8-453bf383fd35.jpg',
  'https://www.maskabutters.in/cdn/shop/files/3_d0dda42b-142e-4396-b13d-da3243a3971f.jpg',
  'https://www.maskabutters.in/cdn/shop/files/4thimage_c083b744-6546-4105-8535-c5cfd4635dcb.jpg',
  'https://www.maskabutters.in/cdn/shop/files/5thslide_bc00c9a1-a129-45d0-87fa-155ef1f05562.jpg',
];

export default function ProductSection() {
  const [main, setMain] = useState(0);
  const [size, setSize] = useState('500g');
  const [qty, setQty] = useState(1);

  const prices:any = {
    '300g': { original: 249, sale: 199 },
    '500g': { original: 379, sale: 322.2 },
    '1Kg': { original: 679, sale: 598.2 },
  };
  const current = prices[size];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Images */}
      <div>
        <div className="w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center border">
          <Image src={images[main]} alt="Chocolate Salvation Peanut Butter" width={400} height={400} className="object-contain rounded-xl" />
        </div>
        <div className="flex gap-2 mt-4">
          {images.map((img, i) => (
            <button key={i} onClick={() => setMain(i)} className={`border rounded-lg p-1 ${main===i?'border-[#4b2c0d]':'border-gray-200'}`}>
              <Image src={img} alt="thumb" width={60} height={60} className="object-cover rounded-lg" />
            </button>
          ))}
        </div>
      </div>
      {/* Info */}
      <div className="space-y-6">
        <div className="text-sm text-[#4b2c0d] uppercase tracking-wide">Maskabutters</div>
        <h1 className="text-4xl font-bold text-[#4b2c0d]">Chocolate Salvation Peanut Butter</h1>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-[#4b2c0d]">₹{current.sale}</span>
          <span className="text-lg text-gray-500 line-through">₹{current.original}</span>
          <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">Sale</span>
        </div>
        <div className="flex gap-3">
          {['300g','500g','1Kg'].map(s => (
            <button key={s} onClick={()=>setSize(s)} className={`px-4 py-2 rounded-lg border-2 font-medium ${size===s?'border-[#4b2c0d] bg-[#f7f3ef] text-[#4b2c0d]':'border-gray-300 text-gray-700 hover:border-gray-400'}`}>{s}</button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={()=>setQty(Math.max(1,qty-1))} className="px-3 py-1 border rounded">-</button>
          <input type="number" value={qty} onChange={e=>setQty(Math.max(1,parseInt(e.target.value)||1))} className="w-16 text-center border rounded" />
          <button onClick={()=>setQty(qty+1)} className="px-3 py-1 border rounded">+</button>
        </div>
        <button className="w-full bg-[#4b2c0d] text-white py-4 rounded-lg font-semibold hover:bg-[#6b3f1d] transition flex items-center justify-center gap-2">
          Add to cart
        </button>
        <div className="flex gap-4 mt-4">
          <span className="bg-[#f7f3ef] text-[#4b2c0d] px-3 py-1 rounded-full text-xs font-medium border">Lab Tested</span>
          <span className="bg-[#f7f3ef] text-[#4b2c0d] px-3 py-1 rounded-full text-xs font-medium border">Backed by Science</span>
          <span className="bg-[#f7f3ef] text-[#4b2c0d] px-3 py-1 rounded-full text-xs font-medium border">Fast Shipping</span>
        </div>
      </div>
    </section>
  );
}
