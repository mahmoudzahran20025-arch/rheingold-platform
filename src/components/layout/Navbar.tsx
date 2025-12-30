'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TopBarSwiper from './TopBarSwiper'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Bar - Mobile Swiper & Desktop Flex */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white text-xs md:text-sm overflow-hidden">
                <div className="container mx-auto px-4 py-2">
                    {/* Desktop View */}
                    <div className="hidden md:flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <a href="tel:+491633344008" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                                <Phone className="w-4 h-4" />
                                <span>+49 163 334 4008</span>
                            </a>
                            <a href="mailto:info@rheingold-medica.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>info@rheingold-medica.com</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Bad Homburg v. d. Höhe, Germany</span>
                            </div>
                            {/* Trust Indicator (Check Mark) */}
                            <div className="flex items-center gap-2 text-emerald-300">
                                <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
                                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="font-semibold">B2B Only</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Swiper (Ticker) */}
                    <div className="md:hidden">
                        <TopBarSwiper />
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 md:h-20 items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-10 h-10 md:w-12 md:h-12">
                                {/* Using absolute path for safety, but prefer checking asset existence first. 
                                    Assuming /images/logo.png or generic placeholder if not found. 
                                    Will act as placeholder until asset confirmed. 
                                */}
                                <div className="absolute inset-0 bg-blue-900 rounded-lg transform group-hover:rotate-6 transition-transform flex items-center justify-center">
                                    <span className="text-white font-serif font-bold text-xl">R</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-gray-900 text-lg md:text-xl leading-none tracking-tight">RHEINGOLD</span>
                                <span className="text-[0.6rem] md:text-xs text-blue-900 uppercase tracking-widest font-medium">Royal Medica</span>
                            </div>
                        </Link>


                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            <Link href="/login">
                                <Button variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                                    Partner Login
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="default" size="lg">
                                    Get in Touch
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
                        >
                            <div className="container mx-auto px-4 py-4 space-y-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="pt-4 border-t border-gray-100">
                                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                        <Button size="lg" className="w-full">
                                            Get in Touch
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}
