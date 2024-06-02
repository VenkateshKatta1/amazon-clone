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

export interface ProductDetailsData {
    asin: string;
    product_title: string;
    product_price: string;
    product_original_price: any;
    currency: string;
    country: string;
    product_star_rating: string;
    product_num_ratings: number;
    product_url: string;
    product_photo: string;
    product_num_offers: any;
    product_availability: any;
    is_best_seller: boolean;
    is_amazon_choice: boolean;
    climate_pledge_friendly: boolean;
    sales_volume: any;
    about_product: any[];
    product_description: string;
    product_information: ProductInformation;
    rating_distribution: RatingDistribution;
    product_photos: string[];
    product_details: ProductDetails;
    customers_say: string;
    review_aspects: ReviewAspects;
    category_path: CategoryPath[];
    product_variations: ProductVariations;
    is_prime: boolean;
}

export interface ProductInformation {
    'Package Dimensions': string;
    'Item model number': string;
    Department: string;
    'Date First Available': string;
    Manufacturer: string;
    ASIN: string;
    'Best Sellers Rank': string;
    'Customer Reviews': string;
}

export interface RatingDistribution {
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
}

export interface ProductDetails {}

export interface ReviewAspects {
    Comfort: string;
    Appearance: string;
    Fit: string;
}

export interface CategoryPath {
    id: string;
    name: string;
    link: string;
}

export interface ProductVariations {
    size: Size[];
    color: Color[];
}

export interface Size {
    asin: string;
    value: string;
    is_available: boolean;
}

export interface Color {
    asin: string;
    value: string;
    photo: string;
    is_available: boolean;
}
