import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products, getProductBySlug, getRelatedProducts } from '@/data/products'
import ProductDetailClient from './ProductDetailClient'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const product = getProductBySlug(slug)

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
    const product = getProductBySlug(slug)

    if (!product) {
        notFound()
    }

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

            <ProductDetailClient product={product} relatedProducts={relatedProducts} />
        </>
    )
}
