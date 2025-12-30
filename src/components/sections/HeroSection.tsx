'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Truck, Award, Globe, Leaf, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-400/20 mb-6"
                        >
                            <Briefcase className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-medium text-amber-300">B2B Pharmaceutical Distribution</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight mb-6"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 font-serif">
                                Trusted Source
                            </span><br />
                            For Medical Supply
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-slate-300 mb-8 max-w-xl leading-relaxed"
                        >
                            Rheingold Royal Medica GmbH provides access to a carefully selected portfolio of pharmaceutical products and food supplements, sourced from licensed manufacturers and distributed through authorized supply channels.
                        </motion.p>

                        {/* Key Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm text-slate-200">Regulatory Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                                <Globe className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-slate-200">Intl. Distribution</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                                <Award className="w-4 h-4 text-amber-400" />
                                <span className="text-sm text-slate-200">GMP Sourced</span>
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
                                <Button size="xl" className="bg-amber-600 hover:bg-amber-700 text-white border-none">
                                    View Portfolio
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <WhatsAppButton size="xl" label="Partner Inquiry" />
                        </motion.div>
                    </motion.div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative mt-12 lg:mt-0"
                    >
                        <div className="relative transform scale-90 md:scale-100 origin-center">
                            {/* Floating Card 1 */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-6 -left-2 md:-top-8 md:-left-8 z-20 bg-slate-800/90 backdrop-blur rounded-xl p-3 md:p-4 shadow-2xl border border-slate-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-100">Quality Assured</p>
                                        <p className="text-xs text-slate-400">EU Standards</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card 2 */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 z-20 bg-slate-800/90 backdrop-blur rounded-xl p-3 md:p-4 shadow-2xl border border-slate-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                        <Truck className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-100">Global Logistics</p>
                                        <p className="text-xs text-slate-400">Efficient Supply Chain</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Main Visual Card */}
                            <div className="relative bg-gradient-to-br from-slate-100 to-white rounded-2xl p-8 shadow-2xl border border-slate-200">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-900 flex items-center justify-center shadow-lg border-4 border-amber-500">
                                        <span className="text-3xl font-serif font-bold text-amber-500">R</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-slate-900">Rheingold Royal</h3>
                                    <p className="text-sm font-medium text-amber-600 tracking-widest uppercase mt-1">Medica GmbH</p>
                                    <p className="text-xs text-slate-500 mt-2">Bad Homburg v. d. Höhe, Germany</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                                        <span className="text-sm font-medium text-slate-700">Registration</span>
                                        <span className="text-xs font-mono text-slate-500">HRB 14768</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                                        <span className="text-sm font-medium text-slate-700">License Type</span>
                                        <span className="text-xs font-mono text-slate-500">Wholesale / Trade</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave - Dark Mode */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
                        fill="#f8fafc" // slate-50 to match next section
                    />
                </svg>
            </div>
        </section>
    )
}
