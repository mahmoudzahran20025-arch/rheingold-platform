// Product types and data for the platform
export interface ProductData {
    id: string
    slug: string
    name: string
    nameAr?: string
    nameDe?: string
    category: string
    categorySlug: string
    activeIngredient: string
    description: string
    fullDescription?: string
    manufacturer: string
    origin: string
    edaLicense?: string
    gmpCertified: boolean
    packingStyle: string
    dosageForm: string
    strength?: string
    price: number
    currency: string
    availability: 'in_stock' | 'out_of_stock' | 'pre_order'
    image: string
    gallery?: string[]
    certifications: string[]
    indications?: string[]
    contraindications?: string[]
    sideEffects?: string[]
    storageConditions?: string
    shelfLife?: string
    relatedProducts?: string[]
    featured?: boolean
    createdAt?: string
    updatedAt?: string
}

export const productCategories = [
    { id: 'nutraceuticals', name: 'Nutraceuticals', nameAr: 'المكملات الغذائية', icon: '💊' },
    { id: 'pharmaceuticals', name: 'Pharmaceuticals', nameAr: 'الأدوية', icon: '💉' },
    { id: 'neurology', name: 'Neurology & Energy', nameAr: 'الأعصاب والطاقة', icon: '🧠' },
    { id: 'cardiology', name: 'Cardiology', nameAr: 'القلب والأوعية', icon: '❤️' },
    { id: 'vitamins', name: 'Vitamins & Supplements', nameAr: 'الفيتامينات', icon: '🌿' },
    { id: 'hospital-supplies', name: 'Hospital Supplies', nameAr: 'مستلزمات طبية', icon: '🏥' },
]

export const products: ProductData[] = [
    {
        id: 'klv-001',
        slug: 'king-lovee-vital',
        name: 'King Lovee Vital',
        nameAr: 'كينج لافي فيتال',
        category: 'Neurology & Energy',
        categorySlug: 'neurology',
        activeIngredient: 'Tadalafil 5mg + Multivitamin Complex',
        description: 'Premium neurological support combining PDE-5 inhibition with essential vitamins for enhanced vitality.',
        fullDescription: `King Lovee Vital is a premium pharmaceutical formula designed to support neurological health and daily energy levels. This unique combination brings together the vascular benefits of Tadalafil with a comprehensive B-vitamin complex for optimal performance.

**Key Benefits:**
- Supports healthy blood circulation
- Enhances energy metabolism
- Promotes nervous system function
- Carefully formulated for daily use

Manufactured under strict EU GMP standards by Adwia Pharmaceuticals, this product represents our commitment to bringing quality European pharmaceuticals to the MENA region.`,
        manufacturer: 'Adwia Pharmaceuticals',
        origin: 'Egypt (EU GMP Certified Facility)',
        edaLicense: 'EDA-2024-12345',
        gmpCertified: true,
        packingStyle: 'Blister Pack - 30 Film-Coated Tablets',
        dosageForm: 'Film-Coated Tablets',
        strength: '5mg Tadalafil per tablet',
        price: 24.99,
        currency: 'EUR',
        availability: 'in_stock',
        image: '/images/products/king-lovee-vital.png',
        gallery: [
            '/images/products/klv-pack-front.png',
            '/images/products/klv-pack-back.png',
            '/images/products/klv-blister.png',
        ],
        certifications: ['EDA', 'GMP', 'ISO-9001'],
        indications: [
            'Support for vascular health',
            'Energy and vitality enhancement',
            'Neurological function support',
        ],
        contraindications: [
            'Hypersensitivity to tadalafil or any component',
            'Concurrent use of nitrate medications',
            'Severe cardiovascular disease',
            'Age under 18 years',
        ],
        sideEffects: [
            'Headache (common)',
            'Flushing (common)',
            'Dyspepsia (uncommon)',
            'Nasal congestion (uncommon)',
        ],
        storageConditions: 'Store at 15-25°C, protect from moisture and light',
        shelfLife: '36 months',
        relatedProducts: ['neuro-balance-pro', 'vitamin-b-complex-forte'],
        featured: true,
    },
    {
        id: 'cpf-002',
        slug: 'cardio-plus-forte',
        name: 'Cardio Plus Forte',
        nameAr: 'كارديو بلس فورت',
        category: 'Cardiology',
        categorySlug: 'cardiology',
        activeIngredient: 'Aspirin 100mg + Omega-3 1000mg',
        description: 'Cardiovascular support formula combining antiplatelet therapy with essential fatty acids.',
        fullDescription: `Cardio Plus Forte is a comprehensive cardiovascular support formulation designed for heart health maintenance. This unique combination provides dual-action protection through aspirin's antiplatelet effects and omega-3's lipid-modulating properties.

Developed for healthcare professionals seeking a convenient combination therapy option.`,
        manufacturer: 'Pharco Pharmaceuticals',
        origin: 'Egypt (EU GMP Certified Facility)',
        edaLicense: 'EDA-2024-23456',
        gmpCertified: true,
        packingStyle: 'Blister Pack - 28 Soft Gel Capsules',
        dosageForm: 'Soft Gel Capsules',
        strength: 'Aspirin 100mg + Omega-3 1000mg',
        price: 18.50,
        currency: 'EUR',
        availability: 'in_stock',
        image: '/images/products/cardio-plus-forte.png',
        certifications: ['EDA', 'GMP'],
        indications: [
            'Secondary prevention of cardiovascular events',
            'Lipid profile support',
            'Heart health maintenance',
        ],
        storageConditions: 'Store below 25°C',
        shelfLife: '24 months',
        featured: false,
    },
    {
        id: 'nbp-003',
        slug: 'neuro-balance-pro',
        name: 'Neuro Balance Pro',
        nameAr: 'نيورو بالانس برو',
        category: 'Nutraceuticals',
        categorySlug: 'nutraceuticals',
        activeIngredient: 'Vitamin B Complex + Magnesium Citrate 400mg',
        description: 'Advanced neurological support with complete B-vitamin spectrum and highly bioavailable magnesium.',
        fullDescription: `Neuro Balance Pro represents the next generation of neurological support supplementation. Featuring a complete B-vitamin complex combined with magnesium citrate in its most bioavailable form.

Ideal for healthcare providers seeking a comprehensive nervous system support option for their patients.`,
        manufacturer: 'EIPICO',
        origin: 'Egypt (EU GMP Certified Facility)',
        edaLicense: 'EDA-2024-34567',
        gmpCertified: true,
        packingStyle: 'Bottle - 60 Coated Tablets',
        dosageForm: 'Coated Tablets',
        price: 32.00,
        currency: 'EUR',
        availability: 'in_stock',
        image: '/images/products/neuro-balance-pro.png',
        certifications: ['EDA', 'GMP', 'ISO-9001'],
        indications: [
            'Nervous system support',
            'Energy metabolism',
            'Reduction of tiredness and fatigue',
            'Normal psychological function',
        ],
        storageConditions: 'Store at room temperature',
        shelfLife: '36 months',
        featured: true,
    },
    {
        id: 'isp-004',
        slug: 'immuno-shield-plus',
        name: 'Immuno Shield Plus',
        nameAr: 'إميونو شيلد بلس',
        category: 'Nutraceuticals',
        categorySlug: 'nutraceuticals',
        activeIngredient: 'Vitamin C 1000mg + Zinc 25mg + Elderberry Extract',
        description: 'Triple-action immune support combining vitamin C, zinc, and elderberry for comprehensive protection.',
        manufacturer: 'Amoun Pharmaceutical',
        origin: 'Egypt (EU GMP Certified Facility)',
        edaLicense: 'EDA-2024-45678',
        gmpCertified: true,
        packingStyle: 'Bottle - 90 Vegetarian Capsules',
        dosageForm: 'Vegetarian Capsules',
        price: 28.75,
        currency: 'EUR',
        availability: 'pre_order',
        image: '/images/products/immuno-shield-plus.png',
        certifications: ['EDA', 'GMP'],
        featured: false,
    },
    {
        id: 'o3p-005',
        slug: 'omega-3-premium',
        name: 'Omega-3 Premium Triple Strength',
        nameAr: 'أوميجا-3 بريميوم',
        category: 'Cardiology',
        categorySlug: 'cardiology',
        activeIngredient: 'Fish Oil 1200mg (EPA 600mg + DHA 400mg)',
        description: 'High-concentration omega-3 fatty acids for cardiovascular and cognitive health support.',
        manufacturer: 'Sedico Pharma',
        origin: 'Egypt (EU GMP Certified Facility)',
        edaLicense: 'EDA-2024-56789',
        gmpCertified: true,
        packingStyle: 'Bottle - 120 Softgels',
        dosageForm: 'Soft Gel Capsules',
        price: 22.00,
        currency: 'EUR',
        availability: 'in_stock',
        image: '/images/products/omega-3-premium.png',
        certifications: ['EDA', 'GMP'],
        featured: false,
    },
    {
        id: 'vd3-006',
        slug: 'vitamin-d3-forte-5000',
        name: 'Vitamin D3 Forte 5000 IU',
        nameAr: 'فيتامين د3 فورت',
        category: 'Vitamins & Supplements',
        categorySlug: 'vitamins',
        activeIngredient: 'Cholecalciferol 5000 IU (125 mcg)',
        description: 'High-potency vitamin D3 for bone health, immune function, and overall well-being.',
        manufacturer: 'Memphis Pharma',
        origin: 'Egypt (EU GMP Certified Facility)',
        edaLicense: 'EDA-2024-67890',
        gmpCertified: true,
        packingStyle: 'Bottle - 90 Chewable Tablets',
        dosageForm: 'Chewable Tablets',
        price: 15.50,
        currency: 'EUR',
        availability: 'in_stock',
        image: '/images/products/vitamin-d3-forte.png',
        certifications: ['EDA', 'GMP', 'ISO-9001'],
        featured: false,
    },
]

export function getProductBySlug(slug: string): ProductData | undefined {
    return products.find(p => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): ProductData[] {
    if (categorySlug === 'all') return products
    return products.filter(p => p.categorySlug === categorySlug)
}

export function getFeaturedProducts(): ProductData[] {
    return products.filter(p => p.featured)
}

export function getRelatedProducts(productSlug: string, limit = 4): ProductData[] {
    const product = getProductBySlug(productSlug)
    if (!product) return []

    // First try to get specified related products
    if (product.relatedProducts?.length) {
        const related = product.relatedProducts
            .map(slug => getProductBySlug(slug))
            .filter(Boolean) as ProductData[]
        if (related.length >= limit) return related.slice(0, limit)
    }

    // Fall back to same category products
    return products
        .filter(p => p.categorySlug === product.categorySlug && p.slug !== productSlug)
        .slice(0, limit)
}
