
import { Metadata } from 'next'
import ProductsClient from './ProductsClient'
import { getProducts } from '@/lib/api'
import { products as staticProducts, ProductData } from '@/data/products'

export const metadata: Metadata = {
    title: 'Product Portfolio | Rheingold Royal Medica',
    description: 'Browse our distribution catalog of pharmaceutical and nutraceutical products.',
}

export default async function ProductsPage() {
    let products: ProductData[] = []

    try {
        // Attempt fetch from KV Backend
        // Cast API generic type to ProductData if needed, or ensure they match
        // For now, using 'as any' safely because we know the schema is aligned
        const apiProducts = await getProducts()
        if (apiProducts && apiProducts.length > 0) {
            products = apiProducts as unknown as ProductData[]
        } else {
            console.log('API returned empty list, using static fallback.')
            products = staticProducts
        }
    } catch (error) {
        console.error('Failed to fetch products from API, falling back to static data:', error)
        products = staticProducts
    }

    return <ProductsClient initialProducts={products} />
}
