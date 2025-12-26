import { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, Truck, Shield, CreditCard, Phone, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
    title: 'FAQ - Frequently Asked Questions',
    description: 'Find answers to common questions about shipping, compliance, payments, and technical support for Rheingold Royal Medica.',
}

const faqs = [
    {
        category: 'Shipping & Delivery',
        icon: Truck,
        questions: [
            {
                q: 'How long does shipping from Germany take?',
                a: '7-14 business days with full tracking. We ship via DHL Express and FedEx for faster delivery.',
            },
            {
                q: 'Do you ship to all of Egypt?',
                a: 'Yes, we deliver to all governorates in Egypt including Cairo, Alexandria, Giza, and other major cities.',
            },
            {
                q: 'What are the shipping costs?',
                a: 'Shipping costs depend on order weight and destination. Partners receive preferential shipping rates.',
            },
        ],
    },
    {
        category: 'Compliance & Quality',
        icon: Shield,
        questions: [
            {
                q: 'Are products compliant with EDA Egypt?',
                a: 'Yes, all products are EDA-licensed and manufactured under European GMP standards. Verify our company at NorthData or D&B.',
            },
            {
                q: 'Do you provide certificates of analysis?',
                a: 'Yes, all shipments include CoA, GMP certificates, and complete regulatory documentation.',
            },
            {
                q: 'Are products suitable for pharmacy resale?',
                a: 'Absolutely. All products come with proper documentation for pharmacy registration and resale.',
            },
        ],
    },
    {
        category: 'Payments & Pricing',
        icon: CreditCard,
        questions: [
            {
                q: 'What are the payment methods?',
                a: 'Bank transfer, Letter of Credit (LC), PayPal (partners only). We offer NET 30 terms for approved partners.',
            },
            {
                q: 'What is the minimum order value?',
                a: 'Minimum order is 5000 EGP for new partners. Volume discounts available for larger orders.',
            },
            {
                q: 'Do you offer credit terms?',
                a: 'Yes, established partners can apply for NET 30 credit terms after 3 successful orders.',
            },
        ],
    },
    {
        category: 'Technical Support',
        icon: Phone,
        questions: [
            {
                q: 'How can I contact you?',
                a: 'WhatsApp: +49-1234567890 (24/7), Email: info@rheingold-medica.com, or use our contact form.',
            },
            {
                q: 'Do you provide product training?',
                a: 'Yes, we offer product training sessions for pharmacy staff on our nutraceutical range.',
            },
            {
                q: 'How do I become a partner?',
                a: 'Apply through our Partner Portal. Approval takes 48 hours with valid EDA pharmacy license.',
            },
        ],
    },
]

export default function FAQPage() {
    return (
        <div className="page-content min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-300" />
                        <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                        <p className="text-xl text-blue-100">
                            Find answers to common questions about our products, shipping, and partnership program.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {faqs.map((category, catIndex) => (
                            <div key={catIndex}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <category.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                                </div>
                                <div className="space-y-4">
                                    {category.questions.map((faq, faqIndex) => (
                                        <details key={faqIndex} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                                            <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                                                <span>{faq.q}</span>
                                                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                                            </summary>
                                            <div className="px-6 pb-6 pt-2 text-gray-600">
                                                {faq.a}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verification Links */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600 mb-4">Verify our company registration:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NorthData ↗</a>
                        <span className="text-gray-300">•</span>
                        <a href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">D&B Profile ↗</a>
                        <span className="text-gray-300">•</span>
                        <a href="https://implisense.com/de/companies/rheingold-royal-medica-gmbh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Implisense ↗</a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
                    <p className="text-gray-600 mb-6">Contact our support team for personalized assistance.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        <Phone className="w-5 h-5" />
                        Contact Support
                    </Link>
                </div>
            </section>

            {/* Last Updated */}
            <div className="text-center py-4 text-sm text-gray-400">
                Last Updated: December 26, 2025
            </div>
        </div>
    )
}
