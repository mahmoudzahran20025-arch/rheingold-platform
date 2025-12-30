'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
    ChevronRight, ShieldCheck, Package, MapPin, Award,
    AlertTriangle, Pill, Thermometer, Clock,
    Check, X, Info, FileText, Lock, Building, FileCheck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import TrustBadges from '@/components/shared/TrustBadges'
import { ProductData } from '@/data/products'
import { formatPrice } from '@/lib/utils'

interface ProductDetailClientProps {
    product: ProductData
    relatedProducts: ProductData[]
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'compliance' | 'safety'>('overview')
    const [activeImage, setActiveImage] = useState(0)

    const images = product.gallery?.length ? [product.image, ...product.gallery] : [product.image]
    const isRx = product.productType === 'Rx'

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Info },
        { id: 'details', label: 'Specifications', icon: FileText },
        { id: 'compliance', label: 'Regulatory & Docs', icon: ShieldCheck },
        { id: 'safety', label: 'Safety', icon: AlertTriangle },
    ]

    return (
        <div className="page-content min-h-screen bg-slate-50 font-sans">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-slate-500 hover:text-amber-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <Link href="/products" className="text-slate-500 hover:text-amber-600 transition-colors">Portfolio</Link>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-900 font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-7xl">
                {/* Main Product Layout */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">

                    {/* LEFT COLUMN: Image Gallery */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 mb-4 mix-blend-multiply">
                            <div className="absolute inset-0 flex items-center justify-center bg-white">
                                {product.image ? (
                                    <Image src={images[activeImage]} alt={product.name} fill className="object-contain p-6 md:p-12" />
                                ) : (
                                    <div className="w-48 h-48 rounded-full bg-slate-100 flex items-center justify-center text-slate-300">
                                        <span className="text-6xl font-bold">{product.name.charAt(0)}</span>
                                    </div>
                                )}
                            </div>

                            {/* Corner Badges */}
                            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-2">
                                {isRx && (
                                    <Badge className="bg-slate-900 text-white border-none shadow-md px-2 py-1 md:px-3 text-xs">
                                        <Lock className="w-3 h-3 mr-1" /> Professional Use Only
                                    </Badge>
                                )}
                                {product.gmpCertified && (
                                    <Badge variant="outline" className="bg-white/90 backdrop-blur shadow-sm text-slate-700 text-xs">
                                        <Award className="w-3 h-3 mr-1 text-amber-600" /> GMP Sourced
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Product Info */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 md:space-y-8">

                        {/* Header Info */}
                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
                                <Badge variant="secondary" className="bg-amber-50 text-amber-800 hover:bg-amber-100 border-amber-100">
                                    {product.category}
                                </Badge>
                                {product.productType && (
                                    <Badge variant="outline" className="text-slate-500 border-slate-200">
                                        {product.productType === 'Rx' ? 'Prescription Pharmaceutical' : 'Food Supplement'}
                                    </Badge>
                                )}
                            </div>

                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-2 tracking-tight">{product.name}</h1>

                        </div>

                        {/* Active Ingredient Card (Rx Only Mostly) */}
                        <div className="flex items-start gap-4 p-5 rounded-xl bg-blue-50/50 border border-blue-100">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                <Pill className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-blue-600 font-bold uppercase tracking-wide">Key Composition</p>
                                <p className="text-lg font-semibold text-slate-900 mt-0.5">{product.activeIngredient}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-lg leading-relaxed">{product.description}</p>
                        <p className="text-xs text-slate-400 italic">Product information intended for professional reference.</p>

                        {/* B2B Commercial Selection */}
                        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200">
                            {isRx ? (
                                // RX VIEW: STRICTLY RESTRICTED
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-700">
                                        <Lock className="w-5 h-5 flex-shrink-0 text-amber-600" />
                                        <div className="text-sm">
                                            <p className="font-bold">Commercial Information Restricted</p>
                                            <p>Pricing, MOQ, and availability visible to authorized partners only.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 pt-2">
                                        <Link href="/contact?subject=AccessRequest" className="flex-1">
                                            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12">
                                                Request Partner Access
                                            </Button>
                                        </Link>
                                        <WhatsAppButton productName={`Partner Inquiry: ${product.name}`} size="lg" label="Distribution Inquiry" />
                                    </div>
                                </div>
                            ) : (
                                // SUPPLEMENT VIEW: B2B DISTRIBUTION MODE
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-slate-500 mb-1">Status</p>
                                        <p className="font-bold text-slate-900">Distribution Ready</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <WhatsAppButton productName={product.name} size="lg" label="Supply Inquiry" />
                                        <Link href="/contact">
                                            <Button variant="outline" size="lg">Contact Team</Button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Specs Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-3 border-b border-slate-100">
                                <Package className="w-4 h-4 text-slate-400" />
                                <div className="text-sm">
                                    <span className="text-slate-500 block text-xs">Packing Style</span>
                                    <span className="font-medium text-slate-900">{product.packingStyle}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border-b border-slate-100">
                                <Building className="w-4 h-4 text-slate-400" />
                                <div className="text-sm">
                                    <span className="text-slate-500 block text-xs">Origin</span>
                                    <span className="font-medium text-slate-900">{product.origin}</span>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* TABS SECTION */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-16">
                    <div className="flex border-b border-slate-100 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-8 py-4 font-medium text-sm transition-all whitespace-nowrap ${activeTab === tab.id
                                    ? 'text-amber-600 border-b-2 border-amber-600 bg-amber-50/10'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="p-8 min-h-[300px]">
                        <AnimatePresence mode="wait">
                            {/* OVERVIEW TAB */}
                            {activeTab === 'overview' && (
                                <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                    <div className="prose prose-slate max-w-none">
                                        <h3 className="font-serif text-xl text-slate-900 mb-4">Product Profile</h3>
                                        <div className="whitespace-pre-line text-slate-600">{product.fullDescription || product.description}</div>
                                    </div>

                                    {!isRx && (
                                        <div className="mt-4 p-4 bg-gray-50 rounded text-sm text-gray-500 italic border-l-4 border-gray-300">
                                            * Disclaimer: This product is a food supplement and is not intended to diagnose, treat, cure, or prevent any disease.
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {/* COMPLIANCE TAB */}
                            {activeTab === 'compliance' && (
                                <motion.div key="compliance" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-4">Regulatory & Supply Chain</h3>
                                            <InfoRow label="Distribution Model" value={product.distributionModel || 'Standard Distribution'} />
                                            <InfoRow label="Regulatory Status" value={product.edaLicense ? 'Registered Product' : 'Food Supplement'} />
                                            <InfoRow label="Manufacturing" value="EU GMP Compliant Facility" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-4">Partner Documentation</h3>
                                            <p className="text-sm text-slate-500 mb-4">Authorized partners can access the following documents via the Partner Portal (NDA required):</p>
                                            <div className="space-y-2">
                                                {(product.filesAvailable && product.filesAvailable.length > 0 ? product.filesAvailable : ['COA (Certificate of Analysis)', 'GMP Statement', 'Technical Datasheet']).map((file, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                                        <FileCheck className="w-4 h-4 text-slate-400" />
                                                        <span className="text-sm text-slate-700 font-medium">{file}</span>
                                                        <Badge variant="outline" className="ml-auto text-[10px]">Read Only</Badge>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* SAFETY TAB */}
                            {activeTab === 'safety' && (
                                <motion.div key="safety" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                    <div className="p-5 rounded-xl bg-orange-50 border border-orange-100 text-orange-900">
                                        <div className="flex gap-4">
                                            <AlertTriangle className="w-6 h-6 shrink-0" />
                                            <div>
                                                <h4 className="font-bold">Important Safety Information</h4>
                                                <p className="text-sm opacity-90 mt-1">
                                                    {isRx
                                                        ? 'This is a prescription-only medicine. Information reserved for healthcare professionals.'
                                                        : 'Food supplements should not substitute a varied diet. Consult a healthcare professional before use.'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {product.contraindications && (
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-3">Contraindications / Precautions</h4>
                                            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                                                {product.contraindications.map((c, i) => <li key={i}>{c}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {/* DETAILS TAB */}
                            {activeTab === 'details' && (
                                <motion.div key="details" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                                        <InfoRow label="Dosage Form" value={product.dosageForm} />
                                        <InfoRow label="Packing Style" value={product.packingStyle} />
                                        <InfoRow label="Storage Conditions" value={product.storageConditions || 'Store in cool, dry place'} />
                                        <InfoRow label="Shelf Life" value={product.shelfLife || '36 Months'} />
                                        <InfoRow label="Manufacturer" value={product.manufacturer} />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Trust Badges */}
                <TrustBadges className="mt-8 opacity-80" />
            </div>
        </div>
    )
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
            <span className="text-slate-500 text-sm">{label}</span>
            <span className="font-medium text-slate-900 text-sm text-right">{value}</span>
        </div>
    )
}
