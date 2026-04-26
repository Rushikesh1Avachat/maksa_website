type SocialProofStripProps = {
  sold: number;
  repeatRate: number;
  liveNow: number;
};

export function SocialProofStrip({ sold, repeatRate, liveNow }: SocialProofStripProps) {
  return (
    <section className="mt-10 rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_28px_70px_rgba(68,42,26,0.08)] backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Word of Mouth elements</div>
          <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">
            Live counters, proof widgets, and customer comments in one clean block.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#685246]">
            The goal is to show a sharper review system with product description context and enough variation to demonstrate design thinking.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="rounded-full bg-[#f6ebe1] px-4 py-2 text-sm font-medium text-[#8a5530]">{sold.toLocaleString()} jars shipped</div>
          <div className="rounded-full bg-[#f6ebe1] px-4 py-2 text-sm font-medium text-[#8a5530]">{repeatRate}% repeat buyers</div>
          <div className="rounded-full bg-[#f6ebe1] px-4 py-2 text-sm font-medium text-[#8a5530]">{liveNow} people viewing</div>
        </div>
      </div>
    </section>
  );
}

