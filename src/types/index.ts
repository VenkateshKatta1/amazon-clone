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

export type ProductPrice = {
    amount: string;
    currency: string;
};

export type SearchResponse = {
    total_products: number;
    country: string;
    domain: string;
    products: ProductData[];
};

export type ProductData = {
    asin: string;
    product_title: string;
    product_price?: string | null;
    product_original_price?: string | null;
    currency?: string | null;
    product_star_rating: string;
    product_num_ratings: number;
    product_url: string;
    product_photo: string;
    product_num_offers: number;
    product_minimum_offer_price?: string | null;
    is_best_seller: boolean;
    is_amazon_choice: boolean;
    is_prime: boolean;
    climate_pledge_friendly: boolean;
    sales_volume: string;
    delivery: string;
};
