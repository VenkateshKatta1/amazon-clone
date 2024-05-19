import { create } from 'zustand';
import { ProductCategory } from '../types';

export type HomeStore = {
    productCategories: ProductCategory[] | null;
    setProductCategories: (productCategories: ProductCategory[] | null) => void;
};

const useHomeStore = create<HomeStore>((set) => ({
    productCategories: null,
    setProductCategories: (productCategories: ProductCategory[] | null) =>
        set(() => ({
            productCategories,
        })),
}));

export default useHomeStore;
