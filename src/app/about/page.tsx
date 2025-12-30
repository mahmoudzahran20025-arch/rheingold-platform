'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Globe, Building, Leaf, ExternalLink } from 'lucide-react'
import TrustBadges from '@/components/shared/TrustBadges'
import CTASection from '@/components/sections/CTASection'

const timeline = [
    { year: '2009', title: 'Foundation', description: 'Rheingold Royal Medica GmbH established in Bad Homburg, Germany' },
    { year: '2012', title: 'First Export', description: 'Initial pharmaceutical exports to MENA region' },
    { year: '2015', title: 'EDA Partnership', description: 'Official partnership with Egyptian Drug Authority' },
    { year: '2018', title: 'GMP Certification', description: 'Achieved EU GMP compliance certification' },
    { year: '2021', title: 'Expansion', description: 'Expanded to 30+ countries worldwide' },
    { year: '2024', title: 'Nutraceuticals Focus', description: 'Launched premium nutraceuticals division' },
]

const values = [
    {
        icon: Award,
        title: 'Quality Excellence',
        description: 'Unwavering commitment to pharmaceutical quality and safety standards.',
    },
    {
        icon: Users,
        title: 'Partner Focus',
        description: 'Building lasting relationships with pharmacies and healthcare providers.',
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'Connecting European quality with MENA healthcare needs.',
    },
    {
        icon: Target,
        title: 'Precision',
        description: 'German precision in every aspect of our operations.',
    },
]

const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Nutraceuticals' },
    { value: '50+', label: 'Countries' },
    { value: '150+', label: 'Partners' },
]

export default function AboutPage() {
    return (
        <div className="page-content">
            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-24 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-sm mb-6"
                        >
                            <Leaf className="w-4 h-4" />
                            About Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                        >
                            Premium{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                                Nutraceuticals
                            </span>{' '}
                            from Europe
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-blue-100"
                        >
                            For over 15 years, Rheingold Royal Medica has been your trusted German partner for quality nutraceuticals and pharmaceutical products.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 font-semibold text-sm mb-4">
                                Our Mission
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Delivering Quality Nutraceuticals Worldwide
                            </h2>
                            At Rheingold Royal Medica, our mission is to ensure that high-quality, certified nutraceutical and pharmaceutical products are accessible to healthcare partners for professional distribution across the MENA region.
                            <p className="text-gray-600 mb-8">
                                We combine German precision and quality standards with deep market expertise to deliver healthcare solutions that meet the highest international standards, including EDA, GMP, and EMA compliance.
                            </p>
                            <TrustBadges variant="default" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl p-8 aspect-square flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-2xl">
                                        <Building className="w-16 h-16 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Bad Homburg, Germany</h3>
                                    <p className="text-gray-600 mb-4">Our European Headquarters</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <a href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                                            NorthData <ExternalLink className="w-3 h-3" />
                                        </a>
                                        <span className="text-gray-300">•</span>
                                        <a href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                                            D&B <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-600 font-semibold text-sm mb-4">
                            Our Values
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Drives Us Forward
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our core values guide every decision we make and every partnership we build.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4">
                            Our Journey
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            15+ Years of Excellence
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-8 mb-8"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold">
                                        {item.year}
                                    </div>
                                    {index < timeline.length - 1 && (
                                        <div className="w-0.5 h-full bg-blue-200 mt-2" />
                                    )}
                                </div>
                                <div className="flex-1 pb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection />
        </div>
    )
}
