import { Metadata } from 'next'
import { FileText, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for Rheingold Royal Medica GmbH pharmaceutical import and distribution services.',
}

export default function TermsPage() {
    return (
        <div className="page-content min-h-screen bg-white">
            <article className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <FileText className="w-10 h-10 text-blue-600" />
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
                        <p className="text-gray-500">Effective: December 26, 2025</p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <h2>1. Services</h2>
                    <p>
                        Rheingold Royal Medica GmbH provides <strong>pharmaceutical and nutraceutical import/distribution</strong> services
                        compliant with EDA Egypt and EMA Europe standards. Our services include:
                    </p>
                    <ul>
                        <li>Wholesale distribution of nutraceuticals and pharmaceuticals</li>
                        <li>Import facilitation from European manufacturers</li>
                        <li>Regulatory compliance support</li>
                        <li>Partner Portal access for registered pharmacies</li>
                    </ul>

                    <h2>2. Partner Portal Access</h2>
                    <ul>
                        <li><strong>Eligibility:</strong> Valid EDA pharmacy license required</li>
                        <li><strong>Minimum Order:</strong> 5000 EGP</li>
                        <li><strong>Payment Terms:</strong> 30 days net for approved partners</li>
                        <li><strong>Account Creation:</strong> Subject to verification (48 hours)</li>
                    </ul>

                    <h2>3. Product Quality</h2>
                    <p>
                        All products meet <strong>GMP standards</strong> and are sourced from verified European manufacturers.
                        Company verification available at{' '}
                        <a href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            D&B Profile <ExternalLink className="inline w-3 h-3" />
                        </a>.
                    </p>
                    <p>
                        <strong>Limitation of Liability:</strong> We are not liable for product misuse, improper storage,
                        or use contrary to provided instructions and documentation.
                    </p>

                    <h2>4. Orders & Shipping</h2>
                    <ul>
                        <li>Orders are processed within 2 business days</li>
                        <li>Shipping: 7-14 business days from Germany to Egypt</li>
                        <li>All shipments include full documentation (CoA, invoices, certificates)</li>
                        <li>Incoterms: DAP (Delivered at Place) unless otherwise agreed</li>
                    </ul>

                    <h2>5. Payment</h2>
                    <ul>
                        <li>Accepted methods: Bank Transfer, Letter of Credit (LC)</li>
                        <li>Currency: EUR or EGP (at daily exchange rate)</li>
                        <li>Late payment: 5% monthly interest after 30 days</li>
                    </ul>

                    <h2>6. Intellectual Property</h2>
                    <p>
                        All content, logos, and materials on this website are property of Rheingold Royal Medica GmbH
                        and may not be used without written permission.
                    </p>

                    <h2>7. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate Partner Portal accounts that violate EDA regulations,
                        fail to maintain valid pharmacy licenses, or breach these terms.
                    </p>

                    <h2>8. Governing Law</h2>
                    <p>
                        These terms are governed by <strong>German law</strong>. Any disputes shall be resolved in the
                        courts of Bad Homburg v.d.Höhe, Germany.
                    </p>

                    <h2>9. Contact</h2>
                    <p>
                        Rheingold Royal Medica GmbH<br />
                        Höhe Str. 31-33<br />
                        61348 Bad Homburg v.d.Höhe, Germany<br />
                        Email: legal@rheingold-royal-medica.com
                    </p>
                </div>

                <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500">
                        For company verification: {' '}
                        <a href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH" target="_blank" rel="noopener noreferrer" className="text-blue-600">NorthData</a> |{' '}
                        <a href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh" target="_blank" rel="noopener noreferrer" className="text-blue-600">D&B</a> |{' '}
                        <a href="https://implisense.com/de/companies/rheingold-royal-medica-gmbh" target="_blank" rel="noopener noreferrer" className="text-blue-600">Implisense</a>
                    </p>
                </div>
            </article>
        </div>
    )
}
