import { Metadata } from 'next'
import { Building, ExternalLink, MapPin, Phone, Mail, Scale } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Imprint / Legal Notice',
    description: 'Legal notice (Impressum) for Rheingold Royal Medica GmbH, Bad Homburg, Germany. Required by German law.',
}

export default function ImprintPage() {
    return (
        <div className="page-content min-h-screen bg-white">
            <article className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <Scale className="w-10 h-10 text-blue-600" />
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Imprint / Legal Notice</h1>
                        <p className="text-gray-500">Impressum gemäß § 5 TMG</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Building className="w-6 h-6 text-blue-600" />
                            <h2 className="text-xl font-bold text-gray-900">Company Information</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-2xl font-bold text-gray-900">Rheingold Royal Medica GmbH</p>
                                <p className="text-gray-600">Mohamed Hussein (Managing Director)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                                <div>
                                    <p className="text-gray-900">Höhe Str. 31-33</p>
                                    <p className="text-gray-900">61348 Bad Homburg v.d.Höhe</p>
                                    <p className="text-gray-900">Germany</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gray-400" />
                                <p className="text-gray-900">+49 (0) 6100 9999</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gray-400" />
                                <p className="text-gray-900">info@rheingold-royal-medica.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Registration */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Commercial Register</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Registration Court</p>
                                <p className="font-medium text-gray-900">Amtsgericht Bad Homburg v.d.H.</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Registration Number</p>
                                <p className="font-medium text-gray-900">HRB 15799</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">EUID</p>
                                <p className="font-medium text-gray-900">DEM1202.HRB15799</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Managing Director</p>
                                <p className="font-medium text-gray-900">Mohamed Hussein</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Verification Links */}
                <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Official Registry Verification</h2>
                    <p className="text-gray-600 mb-6">
                        Verify our company registration through these official business databases:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <a
                            href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <span className="font-semibold text-gray-900">NorthData</span>
                            <ExternalLink className="w-4 h-4 text-blue-600" />
                        </a>
                        <a
                            href="https://www.northdata.de/Rheingold+Royal+Medica+GmbH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <span className="font-semibold text-gray-900">NorthData DE</span>
                            <ExternalLink className="w-4 h-4 text-blue-600" />
                        </a>
                        <a
                            href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <span className="font-semibold text-gray-900">Dun & Bradstreet</span>
                            <ExternalLink className="w-4 h-4 text-blue-600" />
                        </a>
                        <a
                            href="https://implisense.com/de/companies/rheingold-royal-medica-gmbh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <span className="font-semibold text-gray-900">Implisense</span>
                            <ExternalLink className="w-4 h-4 text-blue-600" />
                        </a>
                    </div>
                </div>

                {/* Regulatory Compliance */}
                <div className="prose prose-lg max-w-none">
                    <h2>Regulatory Compliance</h2>
                    <ul>
                        <li><strong>EDA Egypt:</strong> Import License for pharmaceutical products</li>
                        <li><strong>EMA Europe:</strong> GMP Certified operations</li>
                        <li><strong>Chamber of Commerce:</strong> IHK Frankfurt am Main</li>
                    </ul>

                    <h2>Corporate Purpose</h2>
                    <p>
                        The import and export as well as the wholesale of pharmaceutical products and hospital supplies,
                        cosmetics, disinfectants, personal protective equipment, sanitary articles, and medical devices,
                        insofar as this does not require official approval. The distribution and implementation of
                        medical tourism, the establishment of hospitals, the distribution of power supply systems.
                    </p>

                    <h2>Responsible for Content</h2>
                    <p>
                        Mohamed Hussein<br />
                        Rheingold Royal Medica GmbH<br />
                        Höhe Str. 31-33, 61348 Bad Homburg v.d.Höhe, Germany
                    </p>

                    <h2>Dispute Resolution</h2>
                    <p>
                        The European Commission provides a platform for online dispute resolution (OS):
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr</a>
                    </p>
                    <p>
                        We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                    </p>
                </div>
            </article>
        </div>
    )
}
