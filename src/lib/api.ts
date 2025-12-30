export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://rheingold-medica-api.mahm-zahran22.workers.dev';

export interface Product {
    id: string;
    slug: string;
    name: string;
    // nameAr removed
    nameDe?: string;
    description: string;
    fullDescription?: string;
    price?: number;
    currency: string;
    category: string;
    categorySlug: string;
    productType: 'Rx' | 'Supplement' | 'OTC' | 'MedicalDevice';
    distributionModel?: string;
    filesAvailable?: string[];
    edaLicense?: string;
    gmpCertified?: boolean;
    activeIngredient?: string;
    manufacturer?: string;
    origin?: string;
    packingStyle?: string;
    dosageForm?: string;
    strength?: string;
    image: string;
    gallery?: string[];
    // Alignment with Frontend types
    availability?: 'in_stock' | 'out_of_stock' | 'pre_order';
    certifications?: string[];
    indications?: string[];
    contraindications?: string[];
    sideEffects?: string[];
    storageConditions?: string;
    shelfLife?: string;
    active: boolean;
    updatedAt: string;
}

export async function getProducts(): Promise<Product[]> {
    try {
        const res = await fetch(`${API_BASE_URL}/products`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        return data.products || [];
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
    try {
        const products = await getProducts();
        return products.find(p => p.slug === slug) || null;
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

export async function createProduct(product: Partial<Product>, adminSecret: string): Promise<any> {
    const res = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Admin-Secret': adminSecret
        },
        body: JSON.stringify(product)
    });
    return res.json();
}

export async function updateProduct(id: string, product: Partial<Product>, adminSecret: string): Promise<any> {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Admin-Secret': adminSecret
        },
        body: JSON.stringify(product)
    });
    return res.json();
}

export async function deleteProduct(id: string, adminSecret: string): Promise<any> {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Admin-Secret': adminSecret
        }
    });
    return res.json();
}
