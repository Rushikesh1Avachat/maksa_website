import Image from 'next/image';

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_30px_80px_rgba(68,42,26,0.09)] backdrop-blur">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#291813] via-[#4b2819] to-[#7c4d31] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
        <div className="absolute inset-0 opacity-35">
          <div className="absolute left-6 top-6 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute right-2 top-24 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] bg-white/10 p-5 ring-1 ring-white/15">
            <div className="text-xs uppercase tracking-[0.35em] text-white/70">Shop preview</div>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              {title}
            </h1>

            <div className="mt-8 flex items-end justify-center">
              <div className="relative h-[26rem] w-full max-w-[26rem]">
                <Image
                  src={images[0]}
                  alt={`${title} jar illustration`}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_32px_40px_rgba(0,0,0,0.28)]"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] bg-white/12 p-5 ring-1 ring-white/15">
              <div className="text-xs uppercase tracking-[0.35em] text-white/65">Preview strip</div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {images.slice(1).map((src) => (
                  <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/10">
                    <Image src={src} alt={title} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[1.5rem] bg-white/12 p-5 ring-1 ring-white/15">
                <div className="text-sm text-white/65">Live buyers</div>
                <div className="mt-2 text-3xl font-semibold text-white">128</div>
                <div className="mt-3 text-xs uppercase tracking-[0.3em] text-white/60">browsing right now</div>
              </div>
              <div className="rounded-[1.5rem] bg-white/12 p-5 ring-1 ring-white/15">
                <div className="text-sm text-white/65">Customer photos</div>
                <div className="mt-2 text-3xl font-semibold text-white">1,286+</div>
                <div className="mt-3 text-xs uppercase tracking-[0.3em] text-white/60">tagged moments</div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Shipping', value: 'Free above Rs. 499' },
                { label: 'Promise', value: 'No added drama' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] bg-white/12 p-5 ring-1 ring-white/15">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/65">{item.label}</div>
                  <div className="mt-2 text-lg font-medium text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

