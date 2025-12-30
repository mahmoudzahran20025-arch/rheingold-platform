'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Award, Globe, CheckCircle, Leaf, BookOpen } from 'lucide-react'

// Company Highlights
const stats = [
    { value: '15+', label: 'Years of industry experience', icon: Award },
    { value: '500+', label: 'Nutraceutical formulations', icon: Leaf },
    { value: '50+', label: 'International markets', icon: Globe },
    { value: '150+', label: 'Professional partners', icon: CheckCircle },
]

// Compliance & Quality Standards
const standards = [
    { name: 'GMP Compliant', description: 'Manufactured by GMP-compliant partners', icon: ShieldCheck },
    { name: 'ISO 9001:2015', description: 'Operations aligned with quality standards', icon: Award },
    { name: 'Regulatory Compliant', description: 'EU & EDA regulatory alignment', icon: BookOpen },
]

export default function TrustSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Intro */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Company Highlights
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-100 text-lg"
                    >
                        Serving professional healthcare and wellness markets globally
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-white/10 pb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                <stat.icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-blue-200 font-medium px-4">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Compliance Section */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-10">Compliance & Quality</h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {standards.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <item.icon className="w-10 h-10 text-amber-400 mb-4" />
                                    <h4 className="text-lg font-bold mb-2">{item.name}</h4>
                                    <p className="text-sm text-blue-100/80 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 text-xs text-blue-300/60 max-w-2xl mx-auto italic"
                    >
                        Compliant with applicable local and international regulatory frameworks,
                        including EU-regulated markets and EDA requirements where applicable.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
