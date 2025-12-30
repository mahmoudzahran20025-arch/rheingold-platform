import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ExternalLink, Leaf } from 'lucide-react'
import Logo from '@/components/ui/logo'

const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Partner Portal', href: '/partners' },
        { name: 'Contact', href: '/contact' },
    ],
    products: [
        { name: 'All Products', href: '/products' },
        { name: 'Nutraceuticals', href: '/products?category=nutraceuticals' },
        { name: 'Pharmaceuticals', href: '/products?category=pharmaceuticals' },
        { name: 'Vitamins', href: '/products?category=vitamins' },
    ],
    resources: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'FAQ', href: '/faq' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Imprint', href: '/imprint' },
    ],
}

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
]

const verifyLinks = [
    { name: 'NorthData', href: 'https://www.northdata.com/Rheingold+Royal+Medica+GmbH' },
    { name: 'D&B', href: 'https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh' },
    { name: 'Implisense', href: 'https://implisense.com/de/companies/rheingold-royal-medica-gmbh' },
]

const certifications = [
    { name: 'EDA Certified', color: 'bg-emerald-600' },
    { name: 'GMP Certified', color: 'bg-blue-600' },
    { name: 'ISO 9001', color: 'bg-purple-600' },
    { name: 'EU Standards', color: 'bg-amber-600' },
]

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6 group">
                            <Logo variant="light" />
                        </Link>
                        <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-emerald-900/30 border border-emerald-800/50 w-fit">
                            <Leaf className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">Premium Nutraceuticals from Europe</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted German partner for quality nutraceuticals and pharmaceutical imports. EDA & GMP certified products from European manufacturers.
                        </p>
                        <div className="space-y-3">
                            <a href="tel:+49163344008" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                                <Phone className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                                <span>+49 163 344 008</span>
                            </a>
                            <a href="mailto:info@rheingold-medica.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span>info@rheingold-medica.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-blue-400" />
                                <span>Höhe Str. 31-33, 61348 Bad Homburg, Germany</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>



                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Certifications & Verification */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        {/* Certifications */}
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-sm text-gray-500">Certifications:</span>
                            {certifications.map((cert) => (
                                <span
                                    key={cert.name}
                                    className={`px-3 py-1.5 rounded-lg ${cert.color} text-white text-xs font-semibold`}
                                >
                                    {cert.name}
                                </span>
                            ))}
                        </div>
                        {/* Verification Links */}
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="text-sm text-gray-500">Verify:</span>
                            {verifyLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Rheingold Royal Medica GmbH. All rights reserved. HRB 15799
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
