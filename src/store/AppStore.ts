import { create } from 'zustand';

export type AppStore = {
    selectedASIN: string | null;
    setSelectedASIN: (ASIN: string | null) => void;
};

const useAppStore = create<AppStore>((set) => ({
    selectedASIN: null,
    setSelectedASIN: (ASIN: string | null) => {
        set(() => ({
            selectedASIN: ASIN,
        }));
    },
}));

export default useAppStore;
