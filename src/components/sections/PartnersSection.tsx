'use client'

import { motion } from 'framer-motion'

const partners = [
    { name: 'Adwia Pharmaceuticals', country: 'Egypt' },
    { name: 'Pharco Pharmaceuticals', country: 'Egypt' },
    { name: 'EIPICO', country: 'Egypt' },
    { name: 'Amoun Pharmaceutical', country: 'Egypt' },
    { name: 'Sedico Pharma', country: 'Egypt' },
    { name: 'Memphis Pharma', country: 'Egypt' },
]

export default function PartnersSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4"
                    >
                        Our Partners
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Trusted Pharmaceutical{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                            Manufacturers
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        We partner with leading GMP-certified pharmaceutical manufacturers to bring you quality products.
                    </motion.p>
                </div>

                {/* Partners Carousel */}
                <div className="relative overflow-hidden">
                    <motion.div
                        animate={{ x: [0, -1200] }}
                        transition={{
                            x: { duration: 20, repeat: Infinity, ease: "linear" },
                        }}
                        className="flex gap-8"
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex-shrink-0 w-64 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                            >
                                <div className="h-16 mb-4 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-gray-500">
                                            {partner.name.charAt(0)}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-900 text-center">{partner.name}</h3>
                                <p className="text-sm text-gray-500 text-center">{partner.country}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Trust Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500">
                        All our manufacturing partners are EU GMP certified and comply with international pharmaceutical standards.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
