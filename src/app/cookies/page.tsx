import { Metadata } from 'next'
import { Cookie } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Cookie Policy',
    description: 'Cookie Policy for Rheingold Royal Medica GmbH website. Learn about cookies we use and how to manage them.',
}

export default function CookiesPage() {
    return (
        <div className="page-content min-h-screen bg-white">
            <article className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <Cookie className="w-10 h-10 text-blue-600" />
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>
                        <p className="text-gray-500">Last Updated: December 26, 2025</p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="lead text-xl text-gray-600">
                        This policy explains how Rheingold Royal Medica GmbH uses cookies and similar technologies on our website.
                    </p>

                    <h2>Cookies We Use</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4">Cookie</th>
                                    <th className="text-left py-3 px-4">Purpose</th>
                                    <th className="text-left py-3 px-4">Duration</th>
                                    <th className="text-left py-3 px-4">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-3 px-4 font-mono text-sm">_ga</td>
                                    <td className="py-3 px-4">Analytics (anonymized)</td>
                                    <td className="py-3 px-4">2 years</td>
                                    <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">3rd Party</span></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4 font-mono text-sm">_ga_*</td>
                                    <td className="py-3 px-4">Analytics session</td>
                                    <td className="py-3 px-4">2 years</td>
                                    <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">3rd Party</span></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4 font-mono text-sm">session</td>
                                    <td className="py-3 px-4">Authentication</td>
                                    <td className="py-3 px-4">Session</td>
                                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Essential</span></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4 font-mono text-sm">lang</td>
                                    <td className="py-3 px-4">Language preference</td>
                                    <td className="py-3 px-4">1 year</td>
                                    <td className="py-3 px-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Functional</span></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4 font-mono text-sm">cookie_consent</td>
                                    <td className="py-3 px-4">Cookie preferences</td>
                                    <td className="py-3 px-4">1 year</td>
                                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Essential</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Your Choices</h2>
                    <ul>
                        <li><strong>Browser Settings:</strong> Manage cookies through your browser preferences</li>
                        <li><strong>Do Not Track:</strong> We honor DNT browser signals</li>
                        <li><strong>Opt-Out:</strong> Google Analytics opt-out available at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                    </ul>

                    <h2>Third-Party Services</h2>
                    <ul>
                        <li><strong>Google Analytics:</strong> Web analytics with anonymized IP addresses</li>
                        <li><strong>WhatsApp Business API:</strong> Communication widget (Meta)</li>
                        <li><strong>Cloudflare:</strong> Security and performance optimization</li>
                    </ul>

                    <h2>Healthcare Compliance</h2>
                    <p>
                        In compliance with EDA regulations and GDPR, we do not store any Protected Health Information (PHI)
                        in cookies. All pharmaceutical inquiries are processed through secure channels.
                    </p>

                    <h2>Updates to This Policy</h2>
                    <p>
                        We may update this cookie policy from time to time. Changes will be posted on this page with an updated revision date.
                    </p>

                    <h2>Contact</h2>
                    <p>
                        For questions about our cookie practices:<br />
                        Email: privacy@rheingold-royal-medica.com
                    </p>
                </div>
            </article>
        </div>
    )
}
