'use client';

import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: 'Birendra Shukla',
    location: 'Ranchi',
    date: '23 Apr 2026',
    rating: 5,
    text: 'Unexpectedly Nice Woke up feeling bleh and grabbed this item from the shelf... i thought what could go wrong? It\'s like a thick spread of roasted peanuts no weird stuff in it. The crunchiness? Yeah it\'s there kinda satisfying. Honestly i wasn\'t expecting much but it totally hit different. The earthy flavor is nice not sweet or artificial at all. Love that it\'s clean too no junk added. Perfect for my toast or even just straight from the jar. Definitely keeping this around',
    image: 'https://rms-patient-data.s3.ap-south-1.amazonaws.com/reviews/78e26430-01e7-444f-9614-6b3bb9dca125.jpg',
    size: '-'
  },
  {
    id: 2,
    name: 'Yukta Shah',
    location: 'Gwalior',
    date: '23 Apr 2026',
    rating: 5,
    text: 'Healthy surprise Arre yaar never imagined I\'d relish health stuff. Maska Butter ka unsweetened peanut butter... unexpectedly GOOD That crunchy wala texture it\'s like... satisfying somehow. Taste not bad maybe I\'ll munch again... or maybe not?',
    image: 'https://rms-patient-data.s3.ap-south-1.amazonaws.com/reviews/3648c519-1aba-4459-a797-96cd4c893060.jpg',
    size: '-'
  },
  {
    id: 3,
    name: 'Bhavesh1971',
    location: 'Haldwani',
    date: '21 Apr 2026',
    rating: 5,
    text: 'Maska Peanut Butter - Healthy ya Scam? Maska peanut butter ka taste ok... thoda earthy hai... par mujhe scam laga kyunki healthy bola tha but mood achanak se kharab ho gaya. Glass jar accha hai eco-friendly lagta hai. Packaging mein 5-star de sakte.',
    image: 'https://rms-patient-data.s3.ap-south-1.amazonaws.com/reviews/55650774-a8d2-44e6-878e-290c4c515e4e.jpg',
    size: '-'
  },
  {
    id: 4,
    name: 'Shridam',
    location: 'Hyderabad',
    date: '20 Apr 2026',
    rating: 5,
    text: 'the real deal, no lies i can\'t believe i\'m stating this but consuming this peanut butter with a spoon felt strangely therapeutic. the consistency is thick and crunchylike a mini workout for my mouth . it\'s unsweetened so no odd aftertaste... just pure nutty delight. even my dog was eyeing it like it was a treat lol. knowing it\'s gluten-free and made with genuine peanuts makes it feel like a snack i can genuinely relish without guilt. definitely worth a shot if you\'re into the healthier side of life. 5 stars all the way',
    image: 'https://rms-patient-data.s3.ap-south-1.amazonaws.com/reviews/e29d5408-1ad4-40ae-9aaf-65b5d71b78e2.jpg',
    size: '-'
  }
];

const customerImages = [
  'https://rms-patient-data.s3.ap-south-1.amazonaws.com/reviews/78e26430-01e7-444f-9614-6b3bb9dca125.jpg',
  'https://rms-patient-data.s3.ap-south-1.amazonaws.com/reviews/3648c519-1aba-4459-a797-96cd4c893060.jpg',
  'https://rms-patient-data.s3.ap-south-1.amazonaws.com/reviews/55650774-a8d2-44e6-878e-290c4c515e4e.jpg',
  'https://rms-patient-data.s3.ap-south-1.amazonaws.com/reviews/e29d5408-1ad4-40ae-9aaf-65b5d71b78e2.jpg'
];

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#4b2c0d] mb-4">
            What Our Peanut Butter Lovers Say
          </h2>
          <p className="text-lg text-gray-600">Real stories from happy customers</p>
        </div>

        {/* Customer Images Grid */}
        <div className="mb-12">
          <p className="text-center text-gray-700 mb-6">Click any photo to read the full review</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {customerImages.map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-[#4b2c0d] transition cursor-pointer">
                <Image
                  src={img}
                  alt={`Customer ${i + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex gap-4 mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="w-15 h-15 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-[#4b2c0d]">{review.name}</span>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {review.date} · {review.location}
                  </div>
                  <div className="text-sm text-gray-500">Size: {review.size}</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
              <div className="flex gap-4 text-sm text-gray-600">
                <button className="hover:text-[#4b2c0d] transition">♥️ Like</button>
                <button className="hover:text-[#4b2c0d] transition">👍 Helpful</button>
                <button className="hover:text-[#4b2c0d] transition">🔗 Share</button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#4b2c0d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6b3f1d] transition">
            Show More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
