
// Product types and data for the platform
// STRICT B2B COMPLIANCE MODE
// NO DIRECT CONSUMER SALES
// NO DISEASE CLAIMS (TREATS/CURES)

export interface ProductData {
    id: string
    slug: string
    name: string
    // nameAr removed for international consistency
    nameDe?: string
    // Allowed Categories Only:
    // 'Prescription Pharmaceuticals' | 'Food Supplements & Nutraceuticals' | 'OTC & Wellness Products' | 'Medical & Healthcare Supplies'
    category: string
    categorySlug: 'pharmaceuticals' | 'nutraceuticals' | 'otc' | 'medical-supplies'
    activeIngredient: string
    description: string
    fullDescription?: string
    manufacturer: string
    origin: string
    edaLicense?: string // Internal use only, mostly hidden or "Available upon request"
    gmpCertified: boolean
    packingStyle: string
    dosageForm: string
    strength?: string
    price?: number // Optional, Hidden for Rx
    currency: string
    availability: 'in_stock' | 'out_of_stock' | 'pre_order' // Internal status, not always shown
    image: string
    gallery?: string[]
    certifications: string[]
    indications?: string[] // "Recommended use" or "Indications" (Rx only)
    contraindications?: string[]
    sideEffects?: string[]
    storageConditions?: string
    shelfLife?: string
    relatedProducts?: string[]
    featured?: boolean
    createdAt?: string
    updatedAt?: string
    // B2B specific
    productType: 'Rx' | 'Supplement' | 'OTC' | 'MedicalDevice'
    distributionModel: string
    filesAvailable: string[] // e.g. ['COA', 'GMP Certificate']
}

export const productCategories = [
    { id: 'pharmaceuticals', name: 'Prescription Pharmaceuticals', icon: '💊' },
    { id: 'nutraceuticals', name: 'Food Supplements & Nutraceuticals', icon: '🌿' },
    { id: 'otc', name: 'OTC & Wellness Products', icon: '❤️' },
    { id: 'medical-supplies', name: 'Medical & Healthcare Supplies', icon: '🏥' },
]

export const products: ProductData[] = [
    {
        id: 'klv-001',
        slug: 'king-lovee-vital',
        name: 'King Lovee Vital',
        category: 'Prescription Pharmaceuticals',
        categorySlug: 'pharmaceuticals',
        activeIngredient: 'Tadalafil 5mg + Multivitamin Complex',
        description: 'Pharmaceutical grade product combining PDE-5 inhibition with essential vitamins.',
        fullDescription: `Product intended for professional partner distribution. King Lovee Vital combines Tadalafil with a B-vitamin complex.

**Formula Composition:**
- Tadalafil: 5mg
- Vitamin B Complex

**Regulatory Status:**
- Sourced from EU GMP Certified partner.
- Distributed in compliance with local regulations.`,
        manufacturer: 'Adwia Pharmaceuticals',
        origin: 'Germany (EU GMP Certified Facility)',
        edaLicense: 'Regulated Product',
        gmpCertified: true,
        packingStyle: 'Blister Pack - 30 Film-Coated Tablets',
        dosageForm: 'Film-Coated Tablets',
        strength: '5mg Tadalafil per tablet',
        price: 0,
        currency: 'EUR',
        availability: 'in_stock',
        image: '/images/products/king-lovee-vital.png',
        gallery: [
            '/images/products/klv-pack-front.png',
            '/images/products/klv-pack-back.png',
            '/images/products/klv-blister.png',
        ],
        certifications: ['GMP', 'ISO-9001'],
        indications: [
            'Prescription use only',
            'Refer to professional datasheet',
        ],
        contraindications: [
            'Refer to SmPC',
        ],
        sideEffects: [
            'Refer to SmPC',
        ],
        storageConditions: 'Store at 15-25°C',
        shelfLife: '36 months',
        featured: true,
        productType: 'Rx',
        distributionModel: 'Authorized Pharmacy Distribution',
        filesAvailable: ['COA', 'GMP Certificate', 'Product SmPC']
    },
    {
        id: 'inj-001',
        slug: 'synvisc-one-injection',
        name: 'Synvisc-One',
        category: 'Medical & Healthcare Supplies',
        categorySlug: 'medical-supplies',
        activeIngredient: 'Hylan G-F 20 (Cross-linked Hyaluronic Acid)',
        description: 'Single-injection viscosupplement intended for intra-articular use by healthcare professionals.',
        fullDescription: `
      Synvisc-One is a sterile, non-pyrogenic elastoviscous preparation.
      
      **Professional Information:**
      - Hyaluronic acid derivative (Hylan G-F 20)
      - Intended for intra-articular administration
      - Single-use prefilled syringe
      
      **Regulatory Note:**
      Medical device supplied for professional use only.
      `,
        manufacturer: 'Sanofi',
        origin: 'USA / EU',
        edaLicense: 'Medical Device – Available upon request',
        gmpCertified: true,
        packingStyle: 'Prefilled Syringe – Single Dose',
        dosageForm: 'Intra-articular Injection',
        strength: '48 mg / 6 mL',
        currency: 'EUR',
        availability: 'in_stock',
        image: '/images/products/synvisc-one.png',
        certifications: ['CE Mark', 'ISO 13485'],
        indications: ['Professional use only'],
        contraindications: ['Refer to IFU'],
        sideEffects: ['Refer to IFU'],
        storageConditions: 'Store at 2–8°C',
        shelfLife: '36 months',
        productType: 'MedicalDevice',
        distributionModel: 'Hospital & Authorized Distributor Supply',
        filesAvailable: ['CE Certificate', 'IFU', 'ISO Certificate']
    },
    {
        id: 'inj-002',
        slug: 'monovisc-injection',
        name: 'Monovisc',
        category: 'Medical & Healthcare Supplies',
        categorySlug: 'medical-supplies',
        activeIngredient: 'High Molecular Weight Hyaluronic Acid',
        description: 'Single-injection hyaluronic acid product for intra-articular administration.',
        fullDescription: `
      Monovisc is a non-animal sourced hyaluronic acid preparation.
      
      **Key Characteristics:**
      - Single injection protocol
      - Sterile and non-pyrogenic
      - Intended for trained medical professionals
      `,
        manufacturer: 'Anika Therapeutics',
        origin: 'USA',
        edaLicense: 'Medical Device – Available upon request',
        gmpCertified: true,
        packingStyle: 'Prefilled Syringe – Single Use',
        dosageForm: 'Intra-articular Injection',
        strength: '88 mg / 4 mL',
        currency: 'EUR',
        availability: 'pre_order',
        image: '/images/products/monovisc.png',
        certifications: ['CE Mark', 'ISO 13485'],
        // indications: ['Professional use only'], // Added based on context, user omitted but standard
        storageConditions: 'Store below 25°C',
        shelfLife: '36 months',
        productType: 'MedicalDevice',
        distributionModel: 'Orthopedic & Hospital Supply',
        filesAvailable: ['CE Certificate', 'IFU']
    },
    {
        id: 'inj-003',
        slug: 'sculptra-injection',
        name: 'Sculptra',
        category: 'Medical & Healthcare Supplies',
        categorySlug: 'medical-supplies',
        activeIngredient: 'Poly-L-Lactic Acid (PLLA)',
        description: 'Injectable biostimulatory product intended for professional aesthetic use.',
        fullDescription: `
      Sculptra is supplied as a sterile lyophilized powder.
      
      **Professional Information:**
      - Poly-L-lactic acid based
      - Requires reconstitution prior to use
      - Intended for trained healthcare professionals only
      `,
        manufacturer: 'Galderma',
        origin: 'EU',
        edaLicense: 'Medical Device – Available upon request',
        gmpCertified: true,
        packingStyle: 'Vial – Powder for Injection',
        dosageForm: 'Injectable Suspension (after reconstitution)',
        strength: '150 mg PLLA per vial',
        currency: 'EUR',
        availability: 'in_stock',
        image: '/images/products/sculptra.png',
        certifications: ['CE Mark', 'ISO 13485'],
        indications: ['Professional aesthetic use only'],
        contraindications: ['Refer to IFU'],
        storageConditions: 'Store at controlled room temperature',
        shelfLife: '24 months',
        productType: 'MedicalDevice',
        distributionModel: 'Authorized Aesthetic Clinics',
        filesAvailable: ['CE Certificate', 'IFU', 'MSDS']
    },
    {
        id: 'inj-004',
        slug: 'duralane-injection',
        name: 'Duralane',
        category: 'Medical & Healthcare Supplies',
        categorySlug: 'medical-supplies',
        activeIngredient: 'Stabilized Hyaluronic Acid (NASHA Technology)',
        description: 'Single-injection hyaluronic acid medical device for intra-articular use.',
        fullDescription: `
      Duralane utilizes NASHA technology for prolonged residence time.
      
      **Product Details:**
      - Non-animal stabilized hyaluronic acid
      - Single injection format
      - Supplied sterile and ready to use
      `,
        manufacturer: 'Bioventus',
        origin: 'Sweden / EU',
        edaLicense: 'Medical Device – Available upon request',
        gmpCertified: true,
        packingStyle: 'Prefilled Syringe – Single Use',
        dosageForm: 'Intra-articular Injection',
        strength: '60 mg / 3 mL',
        currency: 'EUR',
        availability: 'in_stock',
        image: '/images/products/duralane.png',
        certifications: ['CE Mark', 'ISO 13485'],
        indications: ['Professional use only'],
        storageConditions: 'Store below 25°C',
        shelfLife: '36 months',
        productType: 'MedicalDevice',
        distributionModel: 'Hospital & Orthopedic Distribution',
        filesAvailable: ['CE Certificate', 'IFU']
    }
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

    // Fall back to same category products
    return products
        .filter(p => p.categorySlug === product.categorySlug && p.slug !== productSlug)
        .slice(0, limit)
}
