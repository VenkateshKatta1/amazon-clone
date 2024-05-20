import { create } from 'zustand';

export type SearchStore = {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
};

const useSearchStore = create<SearchStore>((set) => ({
    searchTerm: '',
    setSearchTerm: (searchTerm: string) =>
        set(() => ({
            searchTerm,
        })),
}));

export default useSearchStore;
