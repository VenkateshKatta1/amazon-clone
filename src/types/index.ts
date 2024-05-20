export type ProductCategory = {
    id: string;
    name: string;
};

export type Deal = {
    deal_id: string;
    deal_type: string;
    deal_title: string;
    deal_photo: string;
    deal_state: string;
    deal_url: string;
    canonical_deal_url: string;
    deal_starts_at: string;
    deal_ends_at: string;
    deal_price: DealPrice;
    list_price: ListPrice;
    savings_percentage: number;
    savings_amount: SavingsAmount;
    deal_badge: string;
    type: string;
    product_asin: string;
};

export type DealPrice = {
    amount: string;
    currency: string;
};

export type ListPrice = {
    amount: string;
    currency: string;
};

export type SavingsAmount = {
    amount: string;
    currency: string;
};
