'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Pill, Heart, Brain, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Featured products with icons
const featuredProducts = [
    {
        id: '1',
        slug: 'king-lovee-vital',
        name: 'King Lovee Vital',
        activeIngredient: 'Tadalafil 5mg + Multivitamins',
        category: 'Neurology & Energy',
        price: 24.99,
        icon: Brain,
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
    },
    {
        id: '2',
        slug: 'cardio-plus-forte',
        name: 'Cardio Plus Forte',
        activeIngredient: 'Aspirin 100mg + Omega-3',
        category: 'Cardiology',
        price: 18.50,
        icon: Heart,
        color: 'from-rose-500 to-rose-600',
        bgColor: 'bg-rose-50',
    },
    {
        id: '3',
        slug: 'neuro-balance-pro',
        name: 'Neuro Balance Pro',
        activeIngredient: 'Vitamin B Complex + Magnesium',
        category: 'Nutraceuticals',
        price: 32.00,
        icon: Pill,
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        id: '4',
        slug: 'immuno-shield-plus',
        name: 'Immuno Shield Plus',
        activeIngredient: 'Vitamin C + Zinc + Elderberry',
        category: 'General Health',
        price: 28.75,
        icon: Shield,
        color: 'from-emerald-500 to-emerald-600',
        bgColor: 'bg-emerald-50',
    },
]

export default function FeaturedProductsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4"
                        >
                            Featured Products
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900"
                        >
                            Quality{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                                Pharmaceuticals
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="mt-4 text-lg text-gray-600 max-w-2xl"
                        >
                            Explore our range of EDA & GMP certified pharmaceutical products from trusted European manufacturers.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/products">
                            <Button size="lg">
                                View All Products
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Products Grid - Improved Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/products/${product.slug}`}>
                                <div className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    {/* Image Area with Icon */}
                                    <div className={`relative h-52 ${product.bgColor} flex items-center justify-center`}>
                                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                            <product.icon className="w-10 h-10 text-white" />
                                        </div>
                                        {/* EDA Badge */}
                                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-sm">
                                            EDA Certified
                                        </div>
                                        {/* GMP Badge */}
                                        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-blue-500 text-white text-xs font-bold shadow-sm">
                                            GMP
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <p className="text-xs text-blue-600 font-semibold mb-2 uppercase tracking-wide">{product.category}</p>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-4 line-clamp-1">{product.activeIngredient}</p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div>
                                                <p className="text-xs text-gray-400">Starting from</p>
                                                <span className="text-2xl font-bold text-gray-900">€{product.price}</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                                                <ArrowRight className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
