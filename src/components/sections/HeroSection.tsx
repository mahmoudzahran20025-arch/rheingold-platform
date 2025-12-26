'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Truck, Award, Globe, Leaf, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
                {/* Pattern Overlay - Dots instead of + */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 py-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 mb-6"
                        >
                            <Leaf className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-medium text-emerald-300">Premium Nutraceuticals & Pharmaceuticals</span>
                        </motion.div>

                        {/* Heading - Focused on Nutraceuticals */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                        >
                            Premium{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                                Nutraceuticals
                            </span>{' '}
                            from Europe
                        </motion.h1>

                        {/* Subtitle - Nutraceuticals Focus */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-blue-100 mb-8 max-w-xl"
                        >
                            Rheingold Royal Medica GmbH - Your German partner for high-quality dietary supplements, vitamins, and nutraceutical products. EDA & GMP certified, imported directly from European manufacturers.
                        </motion.p>

                        {/* Key Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm">EDA Licensed</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10">
                                <Award className="w-4 h-4 text-amber-400" />
                                <span className="text-sm">EU GMP Certified</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10">
                                <Sparkles className="w-4 h-4 text-blue-300" />
                                <span className="text-sm">Premium Quality</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <Link href="/products">
                                <Button size="xl" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                                    Explore Products
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <WhatsAppButton size="xl" />
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap items-center gap-8"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-emerald-400">15+</span>
                                <span className="text-sm text-blue-200">Years<br />Experience</span>
                            </div>
                            <div className="w-px h-12 bg-white/20" />
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-emerald-400">500+</span>
                                <span className="text-sm text-blue-200">Nutraceutical<br />Products</span>
                            </div>
                            <div className="w-px h-12 bg-white/20" />
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-emerald-400">50+</span>
                                <span className="text-sm text-blue-200">Countries<br />Served</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Visual - Nutraceuticals Focus */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative">
                            {/* Floating Badge - Natural */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl p-4 shadow-2xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                                        <Leaf className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">100% Natural</p>
                                        <p className="text-sm text-gray-500">Premium Ingredients</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Badge - Delivery */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl p-4 shadow-2xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                        <Truck className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Fast Delivery</p>
                                        <p className="text-sm text-gray-500">7-14 Days to Egypt</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Main Card */}
                            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
                                {/* Company Header */}
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                                        <span className="text-3xl font-bold text-white">R</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Rheingold Royal Medica</h3>
                                    <p className="text-sm text-gray-500">GmbH • Bad Homburg, Germany</p>
                                </div>

                                {/* Focus Areas */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-emerald-50 rounded-xl p-4 text-center hover:bg-emerald-100 transition-colors border border-emerald-100">
                                        <Leaf className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                                        <p className="font-semibold text-gray-900">Nutraceuticals</p>
                                        <p className="text-xs text-emerald-600 font-medium">Our Main Focus</p>
                                    </div>
                                    <div className="bg-blue-50 rounded-xl p-4 text-center hover:bg-blue-100 transition-colors border border-blue-100">
                                        <Award className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                                        <p className="font-semibold text-gray-900">Pharmaceuticals</p>
                                        <p className="text-xs text-blue-600 font-medium">EDA Certified</p>
                                    </div>
                                </div>

                                {/* Verification Links */}
                                <div className="space-y-2 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-500 text-center mb-3">Verified Company</p>
                                    <div className="flex flex-wrap items-center justify-center gap-2">
                                        <a href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200 transition-colors">
                                            NorthData ↗
                                        </a>
                                        <a href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200 transition-colors">
                                            D&B ↗
                                        </a>
                                        <a href="https://implisense.com/de/companies/rheingold-royal-medica-gmbh" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200 transition-colors">
                                            Implisense ↗
                                        </a>
                                    </div>
                                </div>

                                {/* Globe Decoration */}
                                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center opacity-60">
                                    <Globe className="w-8 h-8 text-emerald-400" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    )
}
