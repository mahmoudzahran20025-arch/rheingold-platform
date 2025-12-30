'use client'

import { motion } from 'framer-motion'

const partners = [
    { name: 'Biozenta', country: 'United Kingdom' },
    { name: 'Khwality Pharma', country: 'India' },
    { name: 'PharmaCure', country: 'Germany' },
    { name: 'MedLife Global', country: 'Switzerland' },
    { name: 'EuroMed', country: 'France' },
    { name: 'Apex Pharma', country: 'USA' },
]

export default function PartnersSection() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-4"
                    >
                        Manufacturing Network
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Our Manufacturing{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                            Partners
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        We collaborate with established pharmaceutical manufacturers operating under recognized international quality standards.
                    </motion.p>
                </div>

                {/* Partners Carousel */}
                <div className="relative overflow-hidden mb-12">
                    <motion.div
                        animate={{ x: [0, -1200] }}
                        transition={{
                            x: { duration: 30, repeat: Infinity, ease: "linear" },
                        }}
                        className="flex gap-8"
                    >
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex-shrink-0 w-64 p-6 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center group hover:bg-white hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-16 h-16 mb-4 rounded-lg bg-white shadow-sm flex items-center justify-center text-xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                                    {partner.name.charAt(0)}
                                </div>
                                <h3 className="font-bold text-gray-900 text-center text-sm">{partner.name}</h3>
                                <p className="text-xs text-gray-400 text-center mt-1">{partner.country}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Mandatory Disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center pt-8 border-t border-gray-100"
                >
                    <p className="text-xs text-gray-400 italic">
                        * Partner references are for informational purposes only and do not constitute endorsements, exclusivity, or ownership relationships.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
