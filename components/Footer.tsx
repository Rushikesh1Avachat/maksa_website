'use client';

export default function Footer() {
  return (
    <footer className="mt-16 bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-bold text-xl mb-4">Quick links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Our Founders</a></li>
            <li><a href="#" className="hover:underline">Product Journey</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Connect With Us!</h3>
          <ul className="space-y-2">
            <li>+91 6395661727</li>
            <li>info@maskabutters.in</li>
            <li>Company Name : Niramish Now Nutrition</li>
            <li>Facility Address :438, Transport Nagar, Kota, Rajasthan 324005</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-amber-300">Facebook</a>
            <a href="#" className="hover:text-amber-300">Instagram</a>
            <a href="#" className="hover:text-amber-300">X</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-amber-100">&copy; {new Date().getFullYear()} MASKA. All rights reserved.</div>
    </footer>
  );
}
