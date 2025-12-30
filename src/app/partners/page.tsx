import { Metadata } from 'next'
import Link from 'next/link'
import {
    Users, CheckCircle, Truck, Clock, Shield, Phone,
    ArrowRight, FileText, Award, Building
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
    title: 'Partner Portal - For Pharmacies & Distributors',
    description: 'Join Rheingold Royal Medica partner network. Exclusive wholesale prices, fast shipping from Germany, and 24/7 support for registered partners worldwide.',
}

const benefits = [
    {
        icon: Award,
        title: 'Competitive Wholesale Pricing',
        description: 'Direct-from-manufacturer pricing structure for authorized distributors',
    },
    {
        icon: Truck,
        title: 'Fast Shipping',
        description: '7-14 business days delivery from Germany to your certified facility',
    },
    {
        icon: Phone,
        title: '24/7 Technical Support',
        description: 'Dedicated support via WhatsApp Business for all partners',
    },
    {
        icon: Shield,
        title: 'GMP & EDA Compliance',
        description: 'Fully documented regulatory compliance for all products',
    },
]

const steps = [
    { step: 1, title: 'Apply for Partnership', description: 'Fill out the application form below' },
    { step: 2, title: 'Document Review', description: 'We verify your pharmacy license (EDA)' },
    { step: 3, title: 'Account Activation', description: 'Get approved within 48 hours' },
]

export default function PartnersPage() {
    return (
        <div className="page-content min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }} />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-sm mb-6">
                            Partner Program
                        </span>
                        <h1 className="text-5xl font-bold mb-6">
                            Partner Portal for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                                Pharmacies & Distributors
                            </span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Join our growing international network of partners. Access premium European nutraceuticals at wholesale prices with full regulatory compliance.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <Button size="xl" className="bg-emerald-500 hover:bg-emerald-600">
                                    Apply for Partnership
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/docs">
                                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                                    View Documentation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Exclusive Partner Benefits</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Rheingold Royal Medica offers unmatched advantages for healthcare partners and distributors worldwide.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="hover:shadow-xl transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                        <benefit.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Join */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How to Join</h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8 justify-center">
                            {steps.map((item, index) => (
                                <div key={item.step} className="flex-1 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                        {item.step}
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute right-0 top-8 w-8">
                                            <ArrowRight className="w-6 h-6 text-gray-300" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">150+</div>
                            <div className="text-emerald-100">Active Partners</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">30-40%</div>
                            <div className="text-emerald-100">Average Savings</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">7-14</div>
                            <div className="text-emerald-100">Days Shipping</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">48h</div>
                            <div className="text-emerald-100">Activation Time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Verification */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Verified German Company</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow text-gray-700 font-medium">
                            NorthData Registry ↗
                        </a>
                        <a href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow text-gray-700 font-medium">
                            D&B Profile ↗
                        </a>
                        <a href="https://implisense.com/de/companies/rheingold-royal-medica-gmbh" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow text-gray-700 font-medium">
                            Implisense ↗
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Partner with Us?</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Contact us today to discuss partnership opportunities and start accessing premium European nutraceuticals.
                    </p>
                    <Link href="/contact">
                        <Button size="xl">
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
