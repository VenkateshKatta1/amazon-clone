const mockDeals = [
    {
        deal_id: '7ff715e1',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone – Space Gray',
        deal_photo: 'https://m.media-amazon.com/images/I/81jqUPkIVRL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/New-Apple-AirPods-Max-Space/dp/B08PZHYWJS',
        canonical_deal_url: 'https://www.amazon.com/deal/7ff715e1',
        deal_starts_at: '2024-05-09T07:00:00.000Z',
        deal_ends_at: '2024-05-24T06:59:59.000Z',
        deal_price: {
            amount: '449.99',
            currency: 'USD',
        },
        list_price: {
            amount: '549.0',
            currency: 'USD',
        },
        savings_percentage: 18,
        savings_amount: {
            amount: '99.01',
            currency: 'USD',
        },
        deal_badge: '18% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B08PZHYWJS',
    },
    {
        deal_id: 'eaacaf73',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Apple iPad Air (5th Generation): with M1 chip, 10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Space Gray',
        deal_photo: 'https://m.media-amazon.com/images/I/61XZQXFQeVL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/2022-Apple-iPad-10-9-inch-Wi-Fi/dp/B09V3HN1KC',
        canonical_deal_url: 'https://www.amazon.com/deal/eaacaf73',
        deal_starts_at: '2024-05-10T07:00:00.000Z',
        deal_ends_at: '2024-07-01T06:59:59.000Z',
        deal_price: {
            amount: '399.0',
            currency: 'USD',
        },
        list_price: {
            amount: '599.0',
            currency: 'USD',
        },
        savings_percentage: 33,
        savings_amount: {
            amount: '200.0',
            currency: 'USD',
        },
        deal_badge: '33% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B09V3HN1KC',
    },
    {
        deal_id: '9e021b86a',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Amazon Fire TV Stick 4K streaming device, more than 1.5 million movies and TV episodes, supports Wi-Fi 6, watch free & live TV',
        deal_photo: 'https://m.media-amazon.com/images/I/41vhe0X8wbL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Amazon-Fire-TV-Stick-4K-streaming-device/dp/B0BP9MDCQZ',
        canonical_deal_url: 'https://www.amazon.com/deal/9e021b86a',
        deal_starts_at: '2024-05-17T07:00:00.000Z',
        deal_ends_at: '2024-05-28T15:00:00.000Z',
        deal_price: {
            amount: '29.99',
            currency: 'USD',
        },
        list_price: {
            amount: '49.99',
            currency: 'USD',
        },
        savings_percentage: 40,
        savings_amount: {
            amount: '20.0',
            currency: 'USD',
        },
        deal_badge: '40% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0BP9MDCQZ',
    },
    {
        deal_id: '02fe2795',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Queen Size 4 Piece Sheet Set - Comfy Breathable & Cooling Sheets - Hotel Luxury Bed Sheets for Women & Men - Deep Pockets, Easy-Fit, Extra Soft & Wrinkle Free Sheets - White Oeko-Tex Bed Sheet Set',
        deal_photo: 'https://m.media-amazon.com/images/I/71McJ2ijNdL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Queen-Size-Sheet-Set-Breathable/dp/B01M16WBW1',
        canonical_deal_url: 'https://www.amazon.com/deal/02fe2795',
        deal_starts_at: '2024-05-13T07:00:00.000Z',
        deal_ends_at: '2024-05-20T06:45:00.000Z',
        deal_price: {
            amount: '25.49',
            currency: 'USD',
        },
        list_price: {
            amount: '29.99',
            currency: 'USD',
        },
        savings_percentage: 15,
        savings_amount: {
            amount: '4.5',
            currency: 'USD',
        },
        deal_badge: '15% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B01M16WBW1',
    },
    {
        deal_id: '9e021b86',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Amazon Fire TV Stick 4K Max streaming device, supports Wi-Fi 6E, free & live TV without cable or satellite',
        deal_photo: 'https://m.media-amazon.com/images/I/41P0qtzxWSL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/all-new-amazon-fire-tv-stick-4k-max/dp/B0BP9SNVH9',
        canonical_deal_url: 'https://www.amazon.com/deal/9e021b86',
        deal_starts_at: '2024-05-17T07:00:00.000Z',
        deal_ends_at: '2024-05-28T15:00:00.000Z',
        deal_price: {
            amount: '39.99',
            currency: 'USD',
        },
        list_price: {
            amount: '59.99',
            currency: 'USD',
        },
        savings_percentage: 33,
        savings_amount: {
            amount: '20.0',
            currency: 'USD',
        },
        deal_badge: '33% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0BP9SNVH9',
    },
    {
        deal_id: '990fba37',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Coway Airmega AP-1512HH(W) True HEPA Purifier with Air Quality Monitoring, Auto, Timer, Filter Indicator, and Eco Mode, 16.8 x 18.3 x 9.7, White',
        deal_photo: 'https://m.media-amazon.com/images/I/61ze-OpH5YL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Coway-AP-1512HH-Mighty-Purifier-White/dp/B01728NLRG',
        canonical_deal_url: 'https://www.amazon.com/deal/990fba37',
        deal_starts_at: '2024-04-28T07:00:00.000Z',
        deal_ends_at: '2024-05-20T06:59:59.000Z',
        deal_price: {
            amount: '141.64',
            currency: 'USD',
        },
        list_price: {
            amount: '229.99',
            currency: 'USD',
        },
        savings_percentage: 38,
        savings_amount: {
            amount: '88.35',
            currency: 'USD',
        },
        deal_badge: '38% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B01728NLRG',
    },
    {
        deal_id: '0d74d7f4',
        deal_type: 'BEST_DEAL',
        deal_title:
            'BISSELL Little Green Multi-Purpose Portable Carpet and Upholstery Cleaner, Car and Auto Detailer, with Exclusive Specialty Tools, Green, 1400B',
        deal_photo: 'https://m.media-amazon.com/images/I/71rVn38FjXL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Bissell-Multi-Purpose-Portable-Upholstery-1400B/dp/B0016HF5GK',
        canonical_deal_url: 'https://www.amazon.com/deal/0d74d7f4',
        deal_starts_at: '2024-04-30T07:00:00.000Z',
        deal_ends_at: '2024-06-05T06:59:59.999Z',
        deal_price: {
            amount: '98.59',
            currency: 'USD',
        },
        list_price: {
            amount: '123.59',
            currency: 'USD',
        },
        savings_percentage: 20,
        savings_amount: {
            amount: '25.0',
            currency: 'USD',
        },
        deal_badge: '20% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0016HF5GK',
    },
    {
        deal_id: 'c40b6b3e',
        deal_type: 'LIGHTNING_DEAL',
        deal_title:
            'EF ECOFLOW Solar Generator DELTA 2 Max 2048Wh With 400W Solar Panel, LFP Battery Portable Power Station Up to 3400W AC Output Fast Charging 0-80% in 43 Min solar powered generator For Camping, RV',
        deal_photo: 'https://m.media-amazon.com/images/I/71kPU-HF+QL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/EF-ECOFLOW-Generator-Portable-generator/dp/B0C8T7TW4X',
        canonical_deal_url: 'https://www.amazon.com/deal/c40b6b3e',
        deal_starts_at: '2024-05-19T14:45:00.000Z',
        deal_ends_at: '2024-05-20T02:45:00.000Z',
        deal_price: {
            amount: '1999.0',
            currency: 'USD',
        },
        list_price: {
            amount: '2998.0',
            currency: 'USD',
        },
        savings_percentage: 33,
        savings_amount: {
            amount: '999.0',
            currency: 'USD',
        },
        deal_badge: '33% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0C8T7TW4X',
    },
    {
        deal_id: '9e021b86b',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Amazon Fire TV Stick, HD, sharp picture quality, fast streaming, free & live TV, Alexa Voice Remote with TV controls',
        deal_photo: 'https://m.media-amazon.com/images/I/51TjJOTfslL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/fire-tv-stick-with-3rd-gen-alexa-voice-remote/dp/B08C1W5N87',
        canonical_deal_url: 'https://www.amazon.com/deal/9e021b86b',
        deal_starts_at: '2024-05-17T07:00:00.000Z',
        deal_ends_at: '2024-05-28T15:00:00.000Z',
        deal_price: {
            amount: '24.99',
            currency: 'USD',
        },
        list_price: {
            amount: '39.99',
            currency: 'USD',
        },
        savings_percentage: 38,
        savings_amount: {
            amount: '15.0',
            currency: 'USD',
        },
        deal_badge: '38% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B08C1W5N87',
    },
    {
        deal_id: 'c955c2b4',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Blink Outdoor 4 (4th Gen) – Wire-free smart security camera, two-year battery life, two-way audio, HD live view, enhanced motion detection, Works with Alexa – 5 camera system',
        deal_photo: 'https://m.media-amazon.com/images/I/41Op5wMrmpL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Blink-Outdoor-4th-Gen-5-Camera/dp/B0B1N4LM4J',
        canonical_deal_url: 'https://www.amazon.com/deal/c955c2b4',
        deal_starts_at: '2024-05-06T04:00:00.000Z',
        deal_ends_at: '2024-05-28T04:00:00.000Z',
        deal_price: {
            amount: '199.99',
            currency: 'USD',
        },
        list_price: {
            amount: '399.99',
            currency: 'USD',
        },
        savings_percentage: 50,
        savings_amount: {
            amount: '200.0',
            currency: 'USD',
        },
        deal_badge: '50% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0B1N4LM4J',
    },
    {
        deal_id: 'e17f7f75',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Echo Show 8 (3rd Gen, 2023 release) | With Spatial Audio, Smart Home Hub, and Alexa | Charcoal',
        deal_photo: 'https://m.media-amazon.com/images/I/71JSM9i1bQL.jpg',
        deal_state: 'AVAILABLE',
        deal_url: 'https://www.amazon.com/All-New-Echo-Show-8/dp/B0BLS3Y632',
        canonical_deal_url: 'https://www.amazon.com/deal/e17f7f75',
        deal_starts_at: '2024-05-19T04:00:00.000Z',
        deal_ends_at: '2024-05-29T03:55:00.000Z',
        deal_price: {
            amount: '94.99',
            currency: 'USD',
        },
        list_price: {
            amount: '149.99',
            currency: 'USD',
        },
        savings_percentage: 37,
        savings_amount: {
            amount: '55.0',
            currency: 'USD',
        },
        deal_badge: '37% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0BLS3Y632',
    },
    {
        deal_id: '5bb635cc',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Worx String Trimmer Cordless GT3.0 20V PowerShare 12" Edger & Weed Trimmer (2 Batteries & Charger Included) WG163',
        deal_photo: 'https://m.media-amazon.com/images/I/51NJEhSAjnL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Worx-WG163-Cordless-Batteries-Included/dp/B018S68U40',
        canonical_deal_url: 'https://www.amazon.com/deal/5bb635cc',
        deal_starts_at: '2024-05-14T07:00:00.000Z',
        deal_ends_at: '2024-05-21T06:59:59.000Z',
        deal_price: {
            amount: '97.99',
            currency: 'USD',
        },
        list_price: {
            amount: '139.99',
            currency: 'USD',
        },
        savings_percentage: 30,
        savings_amount: {
            amount: '42.0',
            currency: 'USD',
        },
        deal_badge: '30% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B018S68U40',
    },
    {
        deal_id: 'd936776f',
        deal_type: 'BEST_DEAL',
        deal_title:
            'LOAAO 48"X40" LED Bathroom Mirror with Lights, Anti-Fog, Dimmable, Backlit + Front Lit, Lighted Bathroom Vanity Mirror for Wall, Memory Function, Tempered Glass, Shatter-Proof, ETL Listed',
        deal_photo: 'https://m.media-amazon.com/images/I/718F9Ko9sTL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/LOAAO-Bathroom-Anti-Fog-Dimmable-Shatter-Proof/dp/B0C4Y9N5NR',
        canonical_deal_url: 'https://www.amazon.com/deal/d936776f',
        deal_starts_at: '2024-05-13T07:00:00.000Z',
        deal_ends_at: '2024-05-20T06:45:00.000Z',
        deal_price: {
            amount: '424.99',
            currency: 'USD',
        },
        list_price: {
            amount: '499.99',
            currency: 'USD',
        },
        savings_percentage: 15,
        savings_amount: {
            amount: '75.0',
            currency: 'USD',
        },
        deal_badge: '15% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0C4Y9N5NR',
    },
    {
        deal_id: '5b5c5bd7',
        deal_type: 'BEST_DEAL',
        deal_title:
            'EF ECOFLOW DELTA Pro Ultra 6000Wh Power Station, 120/240V 7200W AC Output, Lifepo4 Home Battery Backup Expandable to 90kWh, 2H to Full Charge, Solar Generator for Home Use, Emergency, Camping, RV',
        deal_photo: 'https://m.media-amazon.com/images/I/71CY5wdQ2aL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/EF-ECOFLOW-Expandable-Generator-Emergency/dp/B0CQXMZ5BK',
        canonical_deal_url: 'https://www.amazon.com/deal/5b5c5bd7',
        deal_starts_at: '2024-05-13T07:00:00.000Z',
        deal_ends_at: '2024-05-20T06:45:00.000Z',
        deal_price: {
            amount: '5099.0',
            currency: 'USD',
        },
        list_price: {
            amount: '6299.0',
            currency: 'USD',
        },
        savings_percentage: 19,
        savings_amount: {
            amount: '1200.0',
            currency: 'USD',
        },
        deal_badge: '19% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0CQXMZ5BK',
    },
    {
        deal_id: 'b9a98571a',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Ring Stick Up Cam Battery | Weather-Resistant Outdoor Camera, Live View, Color Night Vision, Two-way Talk, Motion alerts, Works with Alexa | White',
        deal_photo: 'https://m.media-amazon.com/images/I/41EMzkDF2KL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Ring-Battery-security-privacy-controls/dp/B0C5QRZ47P',
        canonical_deal_url: 'https://www.amazon.com/deal/b9a98571a',
        deal_starts_at: '2024-05-16T04:00:00.000Z',
        deal_ends_at: '2024-05-28T04:00:00.000Z',
        deal_price: {
            amount: '69.99',
            currency: 'USD',
        },
        list_price: {
            amount: '99.99',
            currency: 'USD',
        },
        savings_percentage: 30,
        savings_amount: {
            amount: '30.0',
            currency: 'USD',
        },
        deal_badge: '30% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0C5QRZ47P',
    },
    {
        deal_id: '48fe314aa',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Garmin epix Pro (Gen 2) Sapphire Edition, 51mm, High Performance Smartwatch, Advanced Training Technology, Built-in Flashlight, Black',
        deal_photo: 'https://m.media-amazon.com/images/I/71RRI0WgfKL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Garmin-Performance-Smartwatch-Technology-Flashlight/dp/B0BYFCZZ9F',
        canonical_deal_url: 'https://www.amazon.com/deal/48fe314aa',
        deal_starts_at: '2024-05-17T07:00:00.000Z',
        deal_ends_at: '2024-06-17T06:59:59.999Z',
        deal_price: {
            amount: '899.99',
            currency: 'USD',
        },
        list_price: {
            amount: '1099.99',
            currency: 'USD',
        },
        savings_percentage: 18,
        savings_amount: {
            amount: '200.0',
            currency: 'USD',
        },
        deal_badge: '18% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0BYFCZZ9F',
    },
    {
        deal_id: '73c3fd70',
        deal_type: 'BEST_DEAL',
        deal_title:
            'DEWALT 20V MAX Cordless Drill and Impact Driver, Power Tool Combo Kit with 2 Batteries and Charger (DCK240C2)',
        deal_photo: 'https://m.media-amazon.com/images/I/71aDTgJIkNL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/DEWALT-DCK240C2-Lithium-Driver-Impact/dp/B00IJ0ALYS',
        canonical_deal_url: 'https://www.amazon.com/deal/73c3fd70',
        deal_starts_at: '2024-05-01T07:00:00.000Z',
        deal_ends_at: '2024-07-01T06:59:59.000Z',
        deal_price: {
            amount: '139.0',
            currency: 'USD',
        },
        list_price: {
            amount: '239.0',
            currency: 'USD',
        },
        savings_percentage: 42,
        savings_amount: {
            amount: '100.0',
            currency: 'USD',
        },
        deal_badge: '42% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B00IJ0ALYS',
    },
    {
        deal_id: '506fabac',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Hisense 65-Inch Class U6HF Series ULED 4K UHD Smart Fire TV (65U6HF, 2024) - QLED, 600-Nit Dolby Vision, Game Mode Plus VRR, HDR 10+, 240 Motion Rate, MEMC, Voice Remote, Compatible with Alexa, Black',
        deal_photo: 'https://m.media-amazon.com/images/I/71gZJWg1n2L.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Hisense-65-Inch-Class-Smart-65U6HF/dp/B0CHJ87V95',
        canonical_deal_url: 'https://www.amazon.com/deal/506fabac',
        deal_starts_at: '2024-05-13T07:00:00.000Z',
        deal_ends_at: '2024-06-03T06:59:59.000Z',
        deal_price: {
            amount: '449.99',
            currency: 'USD',
        },
        list_price: {
            amount: '594.82',
            currency: 'USD',
        },
        savings_percentage: 24,
        savings_amount: {
            amount: '144.83',
            currency: 'USD',
        },
        deal_badge: '24% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0CHJ87V95',
    },
    {
        deal_id: '20c303f5',
        deal_type: 'BEST_DEAL',
        deal_title:
            'JBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - Black',
        deal_photo: 'https://m.media-amazon.com/images/I/61ZDwijKtxL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B08WM3LMJF',
        canonical_deal_url: 'https://www.amazon.com/deal/20c303f5',
        deal_starts_at: '2024-04-28T04:00:00.000Z',
        deal_ends_at: '2024-05-20T03:55:00.000Z',
        deal_price: {
            amount: '29.95',
            currency: 'USD',
        },
        list_price: {
            amount: '49.95',
            currency: 'USD',
        },
        savings_percentage: 40,
        savings_amount: {
            amount: '20.0',
            currency: 'USD',
        },
        deal_badge: '40% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B08WM3LMJF',
    },
    {
        deal_id: 'c617c303',
        deal_type: 'BEST_DEAL',
        deal_title:
            'SAMSUNG Galaxy S23 FE AI Phone, 128GB Unlocked Android Smartphone, Long Battery Life, Premium Processor, Tough Gorilla Glass Display, Hi-Res 50MP Camera, US Version, 2023, Graphite',
        deal_photo: 'https://m.media-amazon.com/images/I/716dMJ9stNL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/SAMSUNG-Unlocked-Smartphone-Processor-Graphite/dp/B0CD9645MM',
        canonical_deal_url: 'https://www.amazon.com/deal/c617c303',
        deal_starts_at: '2024-05-06T07:00:00.000Z',
        deal_ends_at: '2024-05-20T06:59:59.000Z',
        deal_price: {
            amount: '499.99',
            currency: 'USD',
        },
        list_price: {
            amount: '599.99',
            currency: 'USD',
        },
        savings_percentage: 17,
        savings_amount: {
            amount: '100.0',
            currency: 'USD',
        },
        deal_badge: '17% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0CD9645MM',
    },
    {
        deal_id: '8aa9a85c',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Amazon Kindle Scribe (32 GB) - 10.2” 300 ppi Paperwhite display, a Kindle and a notebook all in one, convert notes to text and share, includes Premium Pen',
        deal_photo: 'https://m.media-amazon.com/images/I/71dZG7-QflL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Kindle-Scribe-the-first-Kindle-for-reading-writing-journaling-and-sketching/dp/B09BSGFTHY',
        canonical_deal_url: 'https://www.amazon.com/deal/8aa9a85c',
        deal_starts_at: '2024-05-05T07:00:00.000Z',
        deal_ends_at: '2024-05-21T15:00:00.000Z',
        deal_price: {
            amount: '279.99',
            currency: 'USD',
        },
        list_price: {
            amount: '389.99',
            currency: 'USD',
        },
        savings_percentage: 28,
        savings_amount: {
            amount: '110.0',
            currency: 'USD',
        },
        deal_badge: '28% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B09BSGFTHY',
    },
    {
        deal_id: '5e8886b6',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Roku Streaming Stick 4K | Portable Roku Streaming Device 4K/HDR/Dolby Vision, Roku Voice Remote, Free & Live TV',
        deal_photo: 'https://m.media-amazon.com/images/I/711N40bFiLL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Roku-Streaming-Device-Vision-Controls/dp/B09BKCDXZC',
        canonical_deal_url: 'https://www.amazon.com/deal/5e8886b6',
        deal_starts_at: '2024-05-19T07:05:00.000Z',
        deal_ends_at: '2024-05-26T06:59:59.000Z',
        deal_price: {
            amount: '34.0',
            currency: 'USD',
        },
        list_price: {
            amount: '49.99',
            currency: 'USD',
        },
        savings_percentage: 32,
        savings_amount: {
            amount: '15.99',
            currency: 'USD',
        },
        deal_badge: '32% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B09BKCDXZC',
    },
    {
        deal_id: '86226df0',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Utopia Bedding Queen Bed Sheets Set - 4 Piece Bedding - Brushed Microfiber - Shrinkage and Fade Resistant - Easy Care (Queen, Grey)',
        deal_photo: 'https://m.media-amazon.com/images/I/713afJ6oJ+L.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Utopia-Bedding-4-Piece-Queen-Sheets/dp/B00NX0WXQI',
        canonical_deal_url: 'https://www.amazon.com/deal/86226df0',
        deal_starts_at: '2024-05-13T07:00:00.000Z',
        deal_ends_at: '2024-05-20T06:45:00.000Z',
        deal_price: {
            amount: '15.94',
            currency: 'USD',
        },
        list_price: {
            amount: '29.95',
            currency: 'USD',
        },
        savings_percentage: 47,
        savings_amount: {
            amount: '14.01',
            currency: 'USD',
        },
        deal_badge: '47% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B00NX0WXQI',
    },
    {
        deal_id: 'b9a98571',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Ring Battery Doorbell Plus | Head-to-Toe HD+ Video, motion detection & alerts, and Two-Way Talk (2023 release)',
        deal_photo: 'https://m.media-amazon.com/images/I/61MBp1T6huL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/All-new-Ring-Battery-Doorbell-detection/dp/B09WZBPX7K',
        canonical_deal_url: 'https://www.amazon.com/deal/b9a98571',
        deal_starts_at: '2024-05-16T04:00:00.000Z',
        deal_ends_at: '2024-05-28T04:00:00.000Z',
        deal_price: {
            amount: '119.99',
            currency: 'USD',
        },
        list_price: {
            amount: '149.99',
            currency: 'USD',
        },
        savings_percentage: 20,
        savings_amount: {
            amount: '30.0',
            currency: 'USD',
        },
        deal_badge: '20% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B09WZBPX7K',
    },
    {
        deal_id: '25ed827d',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Amazon Fire HD 10 Kids Pro tablet- 2023, ages 6-12 | Bright 10.1" HD screen | Slim case for older kids, ad-free content, parental controls, 13-hr battery, 32 GB, Nebula',
        deal_photo: 'https://m.media-amazon.com/images/I/71dyQaDogRL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Amazon_Fire_HD_10_Kids_Pro/dp/B0BL6DCNGR',
        canonical_deal_url: 'https://www.amazon.com/deal/25ed827d',
        deal_starts_at: '2024-05-05T16:00:00.000Z',
        deal_ends_at: '2024-05-20T04:00:00.000Z',
        deal_price: {
            amount: '149.99',
            currency: 'USD',
        },
        list_price: {
            amount: '189.99',
            currency: 'USD',
        },
        savings_percentage: 21,
        savings_amount: {
            amount: '40.0',
            currency: 'USD',
        },
        deal_badge: '21% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0BL6DCNGR',
    },
    {
        deal_id: '48fe314a',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Garmin fēnix 7 Pro Sapphire Solar, Multisport GPS Smartwatch, Built-in Flashlight, Solar Charging Capability, Black',
        deal_photo: 'https://m.media-amazon.com/images/I/71xr9LGXt+L.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Garmin-Multisport-Smartwatch-Flashlight-Capability/dp/B0BYFDZ6BM',
        canonical_deal_url: 'https://www.amazon.com/deal/48fe314a',
        deal_starts_at: '2024-05-17T07:00:00.000Z',
        deal_ends_at: '2024-06-17T06:59:59.999Z',
        deal_price: {
            amount: '699.99',
            currency: 'USD',
        },
        list_price: {
            amount: '899.99',
            currency: 'USD',
        },
        savings_percentage: 22,
        savings_amount: {
            amount: '200.0',
            currency: 'USD',
        },
        deal_badge: '22% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0BYFDZ6BM',
    },
    {
        deal_id: '9982dcfb',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Bestway Steel Pro MAX 15" x 42" Round Above Ground Swimming Pool Set Outdooor Metal Frame Family Pool with Filter Pump, Ladder, and Cover',
        deal_photo: 'https://m.media-amazon.com/images/I/81VL5iKLQFL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/Bestway-56687E-Steel-15x42-Ground/dp/B0799D1LDP',
        canonical_deal_url: 'https://www.amazon.com/deal/9982dcfb',
        deal_starts_at: '2024-05-10T07:00:00.000Z',
        deal_ends_at: '2024-05-20T06:59:59.000Z',
        deal_price: {
            amount: '318.99',
            currency: 'USD',
        },
        list_price: {
            amount: '499.99',
            currency: 'USD',
        },
        savings_percentage: 36,
        savings_amount: {
            amount: '181.0',
            currency: 'USD',
        },
        deal_badge: '36% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0799D1LDP',
    },
    {
        deal_id: '892b9728',
        deal_type: 'LIGHTNING_DEAL',
        deal_title:
            'hOmeLabs 1500 Sq. Ft. Energy Star Dehumidifier - Ideal for Home Bedrooms, Bathrooms and Medium Size Rooms - Powerful Moisture Removal and Humidity Control - 22 Pint (Previously 30 Pint)',
        deal_photo: 'https://m.media-amazon.com/images/I/51EbHn1rhdL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/hOmeLabs-Energy-Dehumidifier-Medium-Basements/dp/B073V9MG3Y',
        canonical_deal_url: 'https://www.amazon.com/deal/892b9728',
        deal_starts_at: '2024-05-19T16:40:00.000Z',
        deal_ends_at: '2024-05-20T04:40:00.000Z',
        deal_price: {
            amount: '189.99',
            currency: 'USD',
        },
        list_price: {
            amount: '249.99',
            currency: 'USD',
        },
        savings_percentage: 24,
        savings_amount: {
            amount: '60.0',
            currency: 'USD',
        },
        deal_badge: '24% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B073V9MG3Y',
    },
    {
        deal_id: '66145a21',
        deal_type: 'BEST_DEAL',
        deal_title:
            'Amazon Fire HD 10 tablet, built for relaxation, 10.1" vibrant Full HD screen, octa-core processor, 3 GB RAM, latest model (2023 release), 32 GB, Black',
        deal_photo: 'https://m.media-amazon.com/images/I/61mmQjjSEeL.jpg',
        deal_state: 'AVAILABLE',
        deal_url: 'https://www.amazon.com/Amazon_Fire_HD_10/dp/B0BHZT5S12',
        canonical_deal_url: 'https://www.amazon.com/deal/66145a21',
        deal_starts_at: '2024-05-05T16:00:00.000Z',
        deal_ends_at: '2024-05-28T04:00:00.000Z',
        deal_price: {
            amount: '94.99',
            currency: 'USD',
        },
        list_price: {
            amount: '139.99',
            currency: 'USD',
        },
        savings_percentage: 32,
        savings_amount: {
            amount: '45.0',
            currency: 'USD',
        },
        deal_badge: '32% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0BHZT5S12',
    },
    {
        deal_id: 'f3e3bc77',
        deal_type: 'BEST_DEAL',
        deal_title:
            'KOANTTI Queen Mattress,12 Inch Queen Size Mattresses Memory Foam Hybrid White Mattress in a Box,with Provide Support and Improve Sleep Mattresses,Medium Firm,CertiPUR-US.',
        deal_photo: 'https://m.media-amazon.com/images/I/91X6KlqKEYL.jpg',
        deal_state: 'AVAILABLE',
        deal_url:
            'https://www.amazon.com/KOANTTI-Mattress-Mattresses-Provide-CertiPUR-US/dp/B0CS927LN9',
        canonical_deal_url: 'https://www.amazon.com/deal/f3e3bc77',
        deal_starts_at: '2024-05-13T07:00:00.000Z',
        deal_ends_at: '2024-05-20T06:45:00.000Z',
        deal_price: {
            amount: '279.99',
            currency: 'USD',
        },
        list_price: {
            amount: '349.99',
            currency: 'USD',
        },
        savings_percentage: 20,
        savings_amount: {
            amount: '70.0',
            currency: 'USD',
        },
        deal_badge: '20% off',
        type: 'SINGLE_ITEM',
        product_asin: 'B0CS927LN9',
    },
];

export default mockDeals;
