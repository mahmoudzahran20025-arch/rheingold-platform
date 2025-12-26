import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download, ShieldCheck, Truck, CreditCard, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
    title: 'Documentation - Regulatory & Import Requirements',
    description: 'Access GMP certificates, EDA import licenses, and regulatory documentation for Rheingold Royal Medica products.',
}

const certificates = [
    { name: 'GMP Certificate', description: 'Good Manufacturing Practice certification', icon: ShieldCheck },
    { name: 'EDA Import License', description: 'Egyptian Drug Authority import approval', icon: FileText },
    { name: 'EMA Compliance', description: 'European Medicines Agency standards', icon: ShieldCheck },
    { name: 'ISO 9001:2015', description: 'Quality management certification', icon: FileText },
]

const requirements = [
    { requirement: 'Pharmacy License', specification: 'Valid EDA license required' },
    { requirement: 'Minimum Order', specification: '5000 EGP' },
    { requirement: 'Payment Methods', specification: 'Bank Transfer / Letter of Credit' },
    { requirement: 'Delivery Time', specification: '7-14 business days' },
    { requirement: 'Documentation', specification: 'Commercial invoice, packing list, certificates' },
]

export default function DocsPage() {
    return (
        <div className="page-content min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6">
                            Documentation
                        </span>
                        <h1 className="text-5xl font-bold mb-6">Regulatory Documentation</h1>
                        <p className="text-xl text-gray-300">
                            Access all quality certificates, import requirements, and compliance documentation for Rheingold Royal Medica products.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quality Certificates */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Quality Certificates</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certificates.map((cert, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 mb-4 rounded-xl bg-emerald-100 flex items-center justify-center">
                                        <cert.icon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
                                    <Button variant="outline" size="sm" className="w-full">
                                        <Download className="w-4 h-4" />
                                        Request PDF
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Import Requirements */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Import Requirements</h2>
                    <Card>
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Requirement</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Specifications</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {requirements.map((req, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 font-medium text-gray-900">{req.requirement}</td>
                                                <td className="px-6 py-4 text-gray-600">{req.specification}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* External Verification */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Company Verification</h2>
                    <p className="text-gray-600 text-center mb-8">
                        Verify Rheingold Royal Medica GmbH registration through official business registries
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <a
                            href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <span className="font-semibold text-gray-900">NorthData</span>
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                        </a>
                        <a
                            href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <span className="font-semibold text-gray-900">D&B Profile</span>
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                        </a>
                        <a
                            href="https://implisense.com/de/companies/rheingold-royal-medica-gmbh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <span className="font-semibold text-gray-900">Implisense</span>
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                        </a>
                    </div>
                </div>
            </section>

            {/* User Guides */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="p-6">
                                <Truck className="w-8 h-8 text-blue-600 mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">Shipping Terms</h3>
                                <p className="text-sm text-gray-600 mb-4">Detailed shipping policies, Incoterms, and delivery guidelines.</p>
                                <Link href="/contact">
                                    <Button variant="ghost" size="sm">
                                        Learn More <ExternalLink className="w-3 h-3 ml-1" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <CreditCard className="w-8 h-8 text-blue-600 mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">Payment Methods</h3>
                                <p className="text-sm text-gray-600 mb-4">Bank transfer, Letter of Credit, and payment terms for partners.</p>
                                <Link href="/contact">
                                    <Button variant="ghost" size="sm">
                                        Learn More <ExternalLink className="w-3 h-3 ml-1" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">Product Datasheets</h3>
                                <p className="text-sm text-gray-600 mb-4">Technical specifications and product information sheets.</p>
                                <Link href="/products">
                                    <Button variant="ghost" size="sm">
                                        View Products <ExternalLink className="w-3 h-3 ml-1" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
