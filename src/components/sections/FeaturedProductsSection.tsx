'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Pill, Heart, Brain, Shield, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// B2B Featured Portfolio
const featuredProducts = [
    {
        id: '1',
        slug: 'king-lovee-vital',
        name: 'King Lovee Vital',
        activeIngredient: 'Tadalafil 5mg + Multivitamins',
        category: 'Prescription Pharmaceuticals',
        icon: Brain,
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
        isRx: true
    },
    {
        id: '2',
        slug: 'cardio-plus-forte',
        name: 'Cardio Plus Forte',
        activeIngredient: 'Aspirin 100mg + Omega-3',
        category: 'Prescription Pharmaceuticals',
        icon: Heart,
        color: 'from-rose-500 to-rose-600',
        bgColor: 'bg-rose-50',
        isRx: true
    },
    {
        id: '3',
        slug: 'neuro-balance-pro',
        name: 'Neuro Balance Pro',
        activeIngredient: 'Vitamin B Complex + Magnesium',
        category: 'Food Supplements',
        icon: Pill,
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
        isRx: false
    },
    {
        id: '4',
        slug: 'immuno-shield-plus',
        name: 'Immuno Shield Plus',
        activeIngredient: 'Vitamin C + Zinc + Elderberry',
        category: 'Food Supplements',
        icon: Shield,
        color: 'from-emerald-500 to-emerald-600',
        bgColor: 'bg-emerald-50',
        isRx: false
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
                            Distribution Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900"
                        >
                            Pharmaceutical{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                                Trade & Supply
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="mt-4 text-lg text-gray-600 max-w-2xl"
                        >
                            Authorized distribution of EDA registered pharmaceuticals and premium food supplements. Sourced directly from GMP certified manufacturers.
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
                                View Full Portfolio
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Products Grid */}
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
                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4">
                                            {product.isRx ? (
                                                <Badge className="bg-slate-900 text-white border-none shadow-sm text-[10px] px-2">
                                                    <Lock className="w-3 h-3 mr-1" /> Professional Use
                                                </Badge>
                                            ) : (
                                                <Badge className="bg-emerald-600 text-white border-none shadow-sm text-[10px]">
                                                    Available for Supply
                                                </Badge>
                                            )}
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
                                                <p className="text-xs text-gray-400 mb-1">Status</p>
                                                <span className="text-sm font-medium text-gray-900">
                                                    {product.isRx ? 'Partner Access Only' : 'Wholesale Available'}
                                                </span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                <ArrowRight className="w-4 h-4" />
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
