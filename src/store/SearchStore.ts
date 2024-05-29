import { create } from 'zustand';
import { ProductData } from '../types';

export type SearchStore = {
    isFocused: boolean;
    searchTerm: string;
    products: ProductData[] | null;
    setIsFocused: (setIsFocused: boolean) => void;
    setProducts: (setProducts: ProductData[] | null) => void;
    setSearchTerm: (searchTerm: string) => void;
};

const useSearchStore = create<SearchStore>((set) => ({
    searchTerm: '',
    products: [],
    isFocused: false,
    setSearchTerm: (searchTerm: string) =>
        set(() => ({
            searchTerm,
        })),
    setProducts: (products: ProductData[] | null) =>
        set(() => ({
            products,
        })),
    setIsFocused: (isFocused: boolean) =>
        set(() => ({
            isFocused,
        })),
}));

export default useSearchStore;
