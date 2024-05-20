import { create } from 'zustand';
import { Deal, ProductCategory } from '../types';

export type HomeStore = {
    deals: Deal[] | null;
    productCategories: ProductCategory[] | null;
    setDeals: (deals: Deal[] | null) => void;
    setProductCategories: (productCategories: ProductCategory[] | null) => void;
};

const useHomeStore = create<HomeStore>((set) => ({
    deals: null,
    productCategories: null,
    setDeals: (deals: Deal[] | null) =>
        set(() => ({
            deals,
        })),
    setProductCategories: (productCategories: ProductCategory[] | null) =>
        set(() => ({
            productCategories,
        })),
}));

export default useHomeStore;
