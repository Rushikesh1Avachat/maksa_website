import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  variant: '300g' | '500g' | '1kg';
  quantity: number;
  salePrice: number;
  regularPrice: number;
}

interface CartStore {
  items: CartItem[];
  hasHydrated: boolean;
  setHasHydrated: (v: boolean) => void;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (slug: string, variant: string) => void;
  updateQuantity: (slug: string, variant: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      hasHydrated: false,
      setHasHydrated: (v) => set({ hasHydrated: v }),

      addItem: (item) => {
        const existing = get().items.find(
          (i) => i.slug === item.slug && i.variant === item.variant
        );
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.slug === item.slug && i.variant === item.variant
                ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                : i
            ),
          });
        } else {
          set({
            items: [
              ...get().items,
              { ...item, quantity: item.quantity || 1 },
            ],
          });
        }
      },

      removeItem: (slug, variant) => {
        set({
          items: get().items.filter(
            (i) => !(i.slug === slug && i.variant === variant)
          ),
        });
      },

      updateQuantity: (slug, variant, quantity) => {
        if (quantity <= 0) {
          get().removeItem(slug, variant);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.slug === slug && i.variant === variant
              ? { ...i, quantity }
              : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),

      getTotalPrice: () =>
        get().items.reduce(
          (sum, item) => sum + item.salePrice * item.quantity,
          0
        ),
    }),
    { name: 'maska-cart',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

