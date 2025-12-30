import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products as staticProducts, getProductBySlug as getStaticProduct, getRelatedProducts } from '@/data/products'
import { getProductBySlug as getApiProduct } from '@/lib/api'
import ProductDetailClient from './ProductDetailClient'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return staticProducts.map((product) => ({
        slug: product.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    // Try API first
    let product = await getApiProduct(slug) as any
    if (!product) {
        product = getStaticProduct(slug)
    }

    if (!product) {
        return {
            title: 'Product Not Found | Rheingold Royal Medica',
        }
    }

    return {
        title: `${product.name} - ${product.activeIngredient} | Rheingold Royal Medica`,
        description: `${product.description} EDA certified pharmaceutical product from Rheingold Royal Medica GmbH. Manufacturer: ${product.manufacturer}`,
        keywords: [
            product.name,
            product.activeIngredient,
            product.manufacturer,
            product.category,
            'EDA certified',
            'GMP pharmaceutical',
            'European pharmaceuticals',
        ],
        openGraph: {
            title: product.name,
            description: product.description,
            type: 'website',
            images: product.image ? [{ url: product.image }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: product.name,
            description: product.activeIngredient,
        },
    }
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params

    // Try API first, then Static
    let product = await getApiProduct(slug)

    if (!product) {
        // Fallback to static
        const staticProd = getStaticProduct(slug)
        if (staticProd) {
            // Cast static product to match anticipated API shape logic if needed, 
            // but here we just assign it. 
            // We use 'any' or explicit intersection to handle the unified type locally if strictly needed.
            product = staticProd as any
        }
    }

    if (!product) {
        notFound()
    }

    // Cast to 'any' to bypass strict type mismatch between lib/api Product and data/products ProductData 
    // for the purpose of passing to the client component which expects ProductData of a specific shape.
    const productData = product as any

    const relatedProducts = getRelatedProducts(slug, 4)


    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: product.name,
                        description: product.description,
                        image: product.image,
                        brand: {
                            '@type': 'Brand',
                            name: product.manufacturer,
                        },
                        manufacturer: {
                            '@type': 'Organization',
                            name: 'Rheingold Royal Medica GmbH',
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: 'Höhe Str. 31-33',
                                addressLocality: 'Bad Homburg v. d. Höhe',
                                postalCode: '61348',
                                addressCountry: 'DE',
                            },
                        },
                        offers: {
                            '@type': 'Offer',
                            priceCurrency: product.currency,
                            price: product.price,
                            availability: product.availability === 'in_stock'
                                ? 'https://schema.org/InStock'
                                : 'https://schema.org/PreOrder',
                            seller: {
                                '@type': 'Organization',
                                name: 'Rheingold Royal Medica GmbH',
                            },
                        },
                        category: product.category,
                        sku: product.id,
                    }),
                }}
            />

            <ProductDetailClient product={product as any} relatedProducts={relatedProducts} />
        </>
    )
}
