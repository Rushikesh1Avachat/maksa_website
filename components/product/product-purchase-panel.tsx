import { getDiscountPercent } from '@/utils/maska';

type Variant = {
  label: '300g' | '500g' | '1kg';
  salePrice: number;
  regularPrice: number;
};

type ProductPurchasePanelProps = {
  productTitle: string;
  price: Variant;
  selectedVariant: Variant['label'];
  quantity: number;
  onVariantChange: (value: Variant['label']) => void;
  onQuantityChange: (value: number) => void;
  toneButtons: Array<{ key: 'cocoa' | 'almond' | 'honey' | 'mint'; label: string; accent: string }>;
  selectedTone: 'cocoa' | 'almond' | 'honey' | 'mint';
  onToneChange: (value: 'cocoa' | 'almond' | 'honey' | 'mint') => void;
};

export function ProductPurchasePanel({
  productTitle,
  price,
  selectedVariant,
  quantity,
  onVariantChange,
  onQuantityChange,
  toneButtons,
  selectedTone,
  onToneChange,
}: ProductPurchasePanelProps) {
  const discount = getDiscountPercent(price.regularPrice, price.salePrice);

  return (
    <aside className="rounded-[2rem] border border-white/80 bg-white/78 p-6 shadow-[0_30px_80px_rgba(68,42,26,0.09)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-[#9b735a]">Product details</div>
          <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">
            {productTitle}
          </h2>
        </div>
        <div className="rounded-2xl bg-[#f7ebe0] px-4 py-3 text-right">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8a6551]">Rating</div>
          <div className="mt-1 text-2xl font-semibold text-[#2a1b15]">4.8</div>
          <div className="flex items-center gap-1 text-[#b26b2e]">★★★★★</div>
        </div>
      </div>

      <div className="mt-5 flex items-baseline gap-4">
        <div className="text-4xl font-semibold text-[#211511]">Rs. {price.salePrice}</div>
        <div className="text-lg text-[#967a6a] line-through">Rs. {price.regularPrice}</div>
        <div className="rounded-full bg-[#1e8e4d] px-3 py-1 text-sm font-medium text-white">{discount}% off</div>
      </div>

      <div className="mt-2 text-sm text-[#6b564a]">Free shipping available across India.</div>

      <div className="mt-6">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6653]">Tone</div>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          {toneButtons.map((tone) => (
            <button
              key={tone.key}
              type="button"
              onClick={() => onToneChange(tone.key)}
              className={`rounded-2xl border px-3 py-3 text-left transition ${
                selectedTone === tone.key
                  ? 'border-[#7b4c30] bg-[#f8eadf] text-[#7b4c30]'
                  : 'border-[#dfd2c6] bg-white text-[#5f4b41] hover:border-[#bda18e]'
              }`}
            >
              <div className="text-sm font-semibold">{tone.label}</div>
              <div className="mt-2 h-2 rounded-full bg-[#eee2d6]">
                <div className="h-2 rounded-full" style={{ width: '72%', backgroundColor: tone.accent }} />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6653]">Size</div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {(['300g', '500g', '1kg'] as const).map((variant) => (
            <button
              key={variant}
              type="button"
              onClick={() => onVariantChange(variant)}
              className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                selectedVariant === variant
                  ? 'border-[#7b4c30] bg-[#f8eadf] text-[#7b4c30]'
                  : 'border-[#dfd2c6] bg-white text-[#5f4b41] hover:border-[#bda18e]'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6653]">Quantity</div>
        <div className="mt-3 flex w-fit items-center overflow-hidden rounded-2xl border border-[#dfd2c6] bg-white">
          <button type="button" onClick={() => onQuantityChange(Math.max(1, quantity - 1))} className="px-4 py-3 text-lg text-[#3f2a22] transition hover:bg-[#f7efe8]">
            -
          </button>
          <div className="min-w-14 px-5 py-3 text-center text-sm font-semibold text-[#241713]">{quantity}</div>
          <button type="button" onClick={() => onQuantityChange(quantity + 1)} className="px-4 py-3 text-lg text-[#3f2a22] transition hover:bg-[#f7efe8]">
            +
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button type="button" className="rounded-2xl bg-[#221713] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#37241c]">
          Add to cart
        </button>
        <button type="button" className="rounded-2xl border border-[#dfd2c6] bg-white px-5 py-4 text-sm font-semibold text-[#201613] transition hover:bg-[#faf5ef]">
          Buy now
        </button>
      </div>
    </aside>
  );
}

