'use client'

import { motion } from 'framer-motion'
import ProductCard, { Product } from './ProductCard'

interface ProductGridProps {
    products: Product[]
    title?: string
    subtitle?: string
}

export default function ProductGrid({ products, title, subtitle }: ProductGridProps) {
    return (
        <section className="py-16">
            {(title || subtitle) && (
                <div className="text-center mb-12">
                    {title && (
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-gray-900 mb-4"
                        >
                            {title}
                        </motion.h2>
                    )}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>
        </section>
    )
}
