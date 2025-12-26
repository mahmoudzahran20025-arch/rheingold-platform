import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Privacy Policy - GDPR Compliant',
    description: 'Privacy Policy for Rheingold Royal Medica GmbH. GDPR and EDA compliant data protection practices.',
}

export default function PrivacyPage() {
    return (
        <div className="page-content min-h-screen bg-white">
            <article className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <Shield className="w-10 h-10 text-blue-600" />
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
                        <p className="text-gray-500">Last Updated: December 26, 2025</p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="lead text-xl text-gray-600">
                        Rheingold Royal Medica GmbH, Bad Homburg v.d.Höhe, Germany (registered at{' '}
                        <a href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            NorthData <ExternalLink className="inline w-3 h-3" />
                        </a>) respects your privacy and is committed to protecting your personal data.
                    </p>

                    <h2>1. Data We Collect</h2>
                    <ul>
                        <li><strong>Personal Data:</strong> Name, email, phone number (from contact forms and WhatsApp inquiries)</li>
                        <li><strong>Partner Data:</strong> Pharmacy license, business details (Partner Portal registrations only)</li>
                        <li><strong>Usage Data:</strong> IP address, browser type, pages visited (via Google Analytics with anonymized IP)</li>
                    </ul>

                    <h2>2. Legal Basis (GDPR/EDA)</h2>
                    <ul>
                        <li><strong>Consent:</strong> For marketing communications and newsletters</li>
                        <li><strong>Contract:</strong> For Partner Portal access and order processing</li>
                        <li><strong>Legitimate Interest:</strong> For security and fraud prevention</li>
                    </ul>

                    <h2>3. Your Rights</h2>
                    <p>Under GDPR, you have the right to:</p>
                    <ul>
                        <li>Access your personal data</li>
                        <li>Rectify inaccurate data</li>
                        <li>Request erasure (right to be forgotten)</li>
                        <li>Object to processing</li>
                        <li>Data portability</li>
                    </ul>
                    <p>To exercise your rights, contact: <strong>privacy@rheingold-royal-medica.com</strong></p>

                    <h2>4. Data Retention</h2>
                    <ul>
                        <li><strong>General inquiries:</strong> 12 months</li>
                        <li><strong>Partner data:</strong> Duration of contract + 5 years (GMP audit requirements)</li>
                        <li><strong>Marketing data:</strong> Until consent is withdrawn</li>
                    </ul>

                    <h2>5. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your data, including encryption, access controls, and regular security assessments.
                    </p>

                    <h2>6. Third-Party Services</h2>
                    <ul>
                        <li>Google Analytics (anonymized IP)</li>
                        <li>WhatsApp Business API (Meta)</li>
                        <li>Cloudflare (hosting and CDN)</li>
                    </ul>

                    <h2>7. Contact</h2>
                    <p>
                        <strong>Data Controller:</strong><br />
                        Rheingold Royal Medica GmbH<br />
                        Höhe Str. 31-33<br />
                        61348 Bad Homburg v.d.Höhe, Germany<br />
                        Email: privacy@rheingold-royal-medica.com
                    </p>
                </div>

                <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500">
                        This privacy policy is compliant with GDPR (EU), EDA (Egypt), and German data protection laws.
                        For company verification, visit{' '}
                        <a href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH" target="_blank" rel="noopener noreferrer" className="text-blue-600">NorthData</a> or{' '}
                        <a href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh" target="_blank" rel="noopener noreferrer" className="text-blue-600">D&B</a>.
                    </p>
                </div>
            </article>
        </div>
    )
}
