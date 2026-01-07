'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Globe, Building, Leaf, ExternalLink } from 'lucide-react'
import TrustBadges from '@/components/shared/TrustBadges'
import CTASection from '@/components/sections/CTASection'

const timeline = [
    { year: '2017', title: 'Establishment', description: 'Founded as Rheingold Pharma-Medica and Hospital Supplies GmbH in Wiesbaden.' },
    { year: '2020', title: 'Leadership Growth', description: 'Internal restructuring and expansion of the management team to align with global distribution goals.' },
    { year: '2022', title: 'Strategic Rebrand', description: 'Relocation to Bad Homburg v. d. Höhe and rebranding to Rheingold Royal Medica GmbH to reflect premium positioning.' },
    { year: '2023', title: 'Portfolio Expansion', description: 'Major expansion into hospital supplies, ambulances, and emergency equipment trade.' },
    { year: '2025', title: 'Market Leadership', description: 'Transitioning to advanced wholesale models and strengthening partnerships with EU GMP certified manufacturers.' },
]

const values = [
    {
        icon: Award,
        title: 'Quality Excellence',
        description: 'Authorized wholesale of pharmaceutical products compliant with District Court of Bad Homburg HRB 15799 standards.',
    },
    {
        icon: Users,
        title: 'Partner Focus',
        description: 'Building lasting relationships with healthcare providers through transparent and verified corporate data.',
    },
    {
        icon: Globe,
        title: 'Wholesale Trade',
        description: 'Global import and export of pharmaceutical products, hospital supplies, and high-performance medical equipment.',
    },
    {
        icon: Target,
        title: 'Precision Supply',
        description: 'German engineering in medical tourism distribution and specialized power supply systems (Batteries/Solar).',
    },
]

const stats = [
    { value: 'HRB 15799', label: 'Commercial Register' },
    { value: '€25k', label: 'Initial Capital' },
    { value: '50+', label: 'Countries Reached' },
    { value: '150+', label: 'Verified Partners' },
]

export default function AboutPage() {
    return (
        <div className="page-content">
            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-28 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-8"
                        >
                            Corporate Identity
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
                        >
                            Rheingold Royal{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                Medica GmbH
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
                        >
                            A leading German pharmaceutical wholesaler and medical logistics provider, integrated into the global healthcare supply chain since 2017.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Corporate Purpose */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Corporate Purpose</h2>
                            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                                Integrated Healthcare & Industrial Supply
                            </h3>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p>
                                    Rheingold Royal Medica GmbH focuses on the wholesale, import, and export of high-quality pharmaceutical products, hospital supplies, and personal protective equipment.
                                </p>
                                <p>
                                    Our operational scope extends beyond medicine to include high-performance machines, bactericides, ambulances (including equipment and spare parts), and even specialized power systems such as solar and battery technology.
                                </p>
                                <p className="font-medium text-slate-800 italic">
                                    "Officially registered to distribute allopathic and Ayurvedic products, disinfectants, and essential sanitary articles worldwide."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8">
                                    <Building className="w-24 h-24 text-slate-200/50 group-hover:text-blue-500/10 transition-colors" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
                                            <Building className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Headquarters</h4>
                                            <p className="text-sm text-slate-500">Bad Homburg v. d. Höhe</p>
                                        </div>
                                    </div>
                                    <address className="not-italic text-slate-600 space-y-2 mb-8">
                                        <p className="font-bold text-slate-900">Rheingold Royal Medica GmbH</p>
                                        <p>Höhe Str. 31-33</p>
                                        <p>61348 Bad Homburg v. d. Höhe, Germany</p>
                                        <p className="pt-4 text-blue-600 font-bold">HRB 15799</p>
                                    </address>
                                    <div className="flex gap-4">
                                        <a href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                                            NorthData <ExternalLink className="w-3 h-3" />
                                        </a>
                                        <a href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh.e9ab0c24c7f660293208acf3e55caf0e.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                                            D&B <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Corporate Journey */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-600/5 blur-[120px]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">Official History</h2>
                        <h3 className="text-4xl font-bold mb-6">Historical Path & Milestones</h3>
                        <p className="text-slate-400">Validated records of our development from Wiesbaden to Bad Homburg.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800" />

                        <div className="space-y-16">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="flex-1 md:text-right">
                                        <div className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-slate-400">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-blue-600 border-[6px] border-slate-900 flex items-center justify-center font-bold text-xl shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                                            {item.year.slice(2)}
                                        </div>
                                    </div>

                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-28 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">{value.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Network */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">Strategic Network</h2>
                        <h3 className="text-4xl font-bold text-slate-900 mb-6">Our Corporate Ecosystem</h3>
                        <p className="text-slate-600">Building trust through a robust network of specialized pharmaceutical and logistics partners.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                                <Building className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Printemps Global Pharma</h4>
                            <p className="text-sm text-slate-500">Trusted Pharmaceutical Partner</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-[2rem] bg-blue-600 text-white flex flex-col items-center text-center shadow-xl shadow-blue-200"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-6">
                                <Award className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold mb-2">Rheingold Royal Medica</h4>
                            <p className="text-sm text-blue-100 text-opacity-80">Central Hub & German HQ</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Kindersonne e. V.</h4>
                            <p className="text-sm text-slate-500">Social Responsibility Partner</p>
                        </motion.div>
                    </div>

                    <div className="mt-12 text-center text-xs text-slate-400">
                        * Distribution managed under Rheingold Pharma-Medica Deutschland Ltd framework.
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    )
}
