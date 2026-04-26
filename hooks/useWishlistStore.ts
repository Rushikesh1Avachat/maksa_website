import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WishlistItem {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  salePrice: number;
  regularPrice: number;
  category: string;
}

interface WishlistStore {
  items: WishlistItem[];
  hasHydrated: boolean;
  setHasHydrated: (v: boolean) => void;
  addItem: (item: WishlistItem) => void;
  removeItem: (slug: string) => void;
  isInWishlist: (slug: string) => boolean;
  toggleItem: (item: WishlistItem) => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      hasHydrated: false,
      setHasHydrated: (v) => set({ hasHydrated: v }),

      addItem: (item) => {
        if (!get().items.find((i) => i.slug === item.slug)) {
          set({ items: [...get().items, item] });
        }
      },

      removeItem: (slug) => {
        set({ items: get().items.filter((i) => i.slug !== slug) });
      },

      isInWishlist: (slug) => {
        return get().items.some((i) => i.slug === slug);
      },

      toggleItem: (item) => {
        if (get().isInWishlist(item.slug)) {
          get().removeItem(item.slug);
        } else {
          get().addItem(item);
        }
      },
    }),
    { name: 'maska-wishlist',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

