'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Lock, Eye, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getFeaturedProducts } from '@/data/products'
import Image from 'next/image'

export default function FeaturedProductsSection() {
    const featuredProducts = getFeaturedProducts()

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-4"
                        >
                            <span className="w-8 h-[2px] bg-blue-600" />
                            Premium Portfolio
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
                        >
                            Advanced Pharmaceutical{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                                Trade Solutions
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-lg text-slate-600 leading-relaxed"
                        >
                            Explore our curated selection of high-demand medical devices and pharmaceuticals.
                            All products are sourced from GMP-certified facilities with full regulatory documentation.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link href="/products">
                            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all group">
                                Explore Portfolio
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="group h-full flex flex-col bg-white/70 backdrop-blur-md rounded-[2rem] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 overflow-hidden">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        {product.image ? (
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
                                            />
                                        ) : (
                                            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-300 text-3xl">
                                                {product.name[0]}
                                            </div>
                                        )}
                                    </div>

                                    {/* Type Badge */}
                                    <div className="absolute top-6 left-6">
                                        {product.productType === 'Rx' ? (
                                            <Badge className="bg-slate-900/90 backdrop-blur-sm text-white border-none py-1.5 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                <Lock className="w-3 h-3 mr-1.5" /> Professional Use
                                            </Badge>
                                        ) : (
                                            <Badge className="bg-emerald-500/90 backdrop-blur-sm text-white border-none py-1.5 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                <CheckCircle2 className="w-3 h-3 mr-1.5" /> Certified Supply
                                            </Badge>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">
                                            {product.category}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-500 font-medium line-clamp-1">
                                            {product.activeIngredient}
                                        </p>
                                    </div>

                                    <div className="mt-auto space-y-6">
                                        {/* Meta Stats */}
                                        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 border-t border-slate-100 pt-6">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase text-slate-300 mb-0.5">Origin</span>
                                                <span className="text-slate-700">{product.origin.split(' ')[0]}</span>
                                            </div>
                                            <div className="w-px h-6 bg-slate-100" />
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase text-slate-300 mb-0.5">Packing</span>
                                                <span className="text-slate-700 truncate max-w-[80px]">{product.packingStyle}</span>
                                            </div>
                                        </div>

                                        <Link href={`/products/${product.slug}`}>
                                            <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all font-bold group/btn">
                                                View Datasheet
                                                <Eye className="w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-all" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
