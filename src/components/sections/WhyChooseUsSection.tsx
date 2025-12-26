'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Truck, HeadphonesIcon, Award, Globe, Clock } from 'lucide-react'

const features = [
    {
        icon: ShieldCheck,
        title: 'Quality Assurance',
        description: 'All products are EDA and GMP certified, ensuring the highest standards of safety and efficacy.',
        color: 'from-emerald-500 to-emerald-600',
        shadowColor: 'shadow-emerald-500/25',
    },
    {
        icon: Truck,
        title: 'Fast & Reliable Delivery',
        description: 'Efficient logistics network ensuring timely delivery to pharmacies and distributors worldwide.',
        color: 'from-blue-500 to-blue-600',
        shadowColor: 'shadow-blue-500/25',
    },
    {
        icon: HeadphonesIcon,
        title: 'Expert Support',
        description: 'Dedicated pharmaceutical specialists available to answer your questions and provide guidance.',
        color: 'from-purple-500 to-purple-600',
        shadowColor: 'shadow-purple-500/25',
    },
    {
        icon: Award,
        title: 'Premium Products',
        description: 'Carefully selected pharmaceuticals from leading European manufacturers with proven track records.',
        color: 'from-amber-500 to-amber-600',
        shadowColor: 'shadow-amber-500/25',
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'Serving partners across MENA region with established import/export channels and documentation.',
        color: 'from-cyan-500 to-cyan-600',
        shadowColor: 'shadow-cyan-500/25',
    },
    {
        icon: Clock,
        title: '15+ Years Experience',
        description: 'Decades of expertise in pharmaceutical distribution and regulatory compliance.',
        color: 'from-rose-500 to-rose-600',
        shadowColor: 'shadow-rose-500/25',
    },
]

export default function WhyChooseUsSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Your Partner in{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                            Pharmaceutical Excellence
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        We combine German precision with global reach to deliver quality pharmaceuticals
                        that healthcare providers and patients can trust.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg ${feature.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Decorative Corner */}
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-5 rounded-2xl rounded-tl-none rounded-br-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
