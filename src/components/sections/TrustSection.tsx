'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Award, Globe, CheckCircle, Leaf, Pill } from 'lucide-react'

const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '500+', label: 'Nutraceuticals', icon: Leaf },
    { value: '50+', label: 'Countries', icon: Globe },
    { value: '150+', label: 'Partners', icon: CheckCircle },
]

const certifications = [
    { name: 'EDA', fullName: 'Egyptian Drug Authority', color: 'bg-emerald-500' },
    { name: 'GMP', fullName: 'Good Manufacturing Practice', color: 'bg-blue-500' },
    { name: 'ISO', fullName: 'ISO 9001:2015', color: 'bg-purple-500' },
    { name: 'EU', fullName: 'European Standards', color: 'bg-amber-500' },
]

export default function TrustSection() {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 relative overflow-hidden">
            {/* Background Pattern - Circles instead of + */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                <stat.icon className="w-8 h-8 text-emerald-400" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-blue-200 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/20 mb-12" />

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-blue-200 mb-8 font-medium text-lg">Trusted by Healthcare Professionals Worldwide</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="group relative"
                            >
                                <div className={`px-8 py-4 rounded-xl ${cert.color} text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform cursor-default`}>
                                    {cert.name}
                                </div>
                                {/* Tooltip */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                    <div className="px-3 py-1 rounded-lg bg-gray-900 text-white text-xs">
                                        {cert.fullName}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
