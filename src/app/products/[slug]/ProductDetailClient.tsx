'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowLeft, ShieldCheck, Package, MapPin, Award,
    AlertTriangle, Pill, Thermometer, Clock, ChevronRight,
    Check, X, Info, FileText
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import TrustBadges from '@/components/shared/TrustBadges'
import { ProductData, getProductBySlug, getRelatedProducts } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { notFound } from 'next/navigation'

interface ProductDetailClientProps {
    product: ProductData
    relatedProducts: ProductData[]
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'safety'>('overview')
    const [activeImage, setActiveImage] = useState(0)

    const images = product.gallery?.length ? [product.image, ...product.gallery] : [product.image]

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Info },
        { id: 'details', label: 'Product Details', icon: FileText },
        { id: 'safety', label: 'Safety Info', icon: AlertTriangle },
    ]

    return (
        <div className="page-content min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <Link href="/products" className="text-gray-500 hover:text-blue-600">Products</Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900 font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Main Product Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        {/* Main Image */}
                        <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-lg mb-4">
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                                {product.image ? (
                                    <Image
                                        src={images[activeImage]}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-8"
                                    />
                                ) : (
                                    <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                        <span className="text-7xl font-bold text-blue-400">
                                            {product.name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                {product.edaLicense && (
                                    <Badge variant="eda" className="shadow-lg">
                                        <ShieldCheck className="w-3 h-3 mr-1" />
                                        EDA Certified
                                    </Badge>
                                )}
                                {product.gmpCertified && (
                                    <Badge variant="gmp" className="shadow-lg">
                                        <Award className="w-3 h-3 mr-1" />
                                        GMP
                                    </Badge>
                                )}
                            </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        {images.length > 1 && (
                            <div className="flex gap-3">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(idx)}
                                        className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-blue-600 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                                            <span className="text-xs text-gray-400">Image {idx + 1}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {/* Category & Name */}
                        <div>
                            <Badge variant="outline" className="mb-3">{product.category}</Badge>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            {product.nameAr && (
                                <p className="text-xl text-gray-500 font-arabic">{product.nameAr}</p>
                            )}
                        </div>

                        {/* Active Ingredient */}
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                            <Pill className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm text-blue-600 font-medium">Active Ingredient</p>
                                <p className="text-lg font-semibold text-gray-900">{product.activeIngredient}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

                        {/* Price & Availability */}
                        <div className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 border">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Price</p>
                                <p className="text-4xl font-bold text-gray-900">
                                    {formatPrice(product.price, product.currency)}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500 mb-1">Availability</p>
                                <Badge
                                    variant={product.availability === 'in_stock' ? 'success' : 'secondary'}
                                    className="text-sm"
                                >
                                    {product.availability === 'in_stock' ? 'In Stock' :
                                        product.availability === 'pre_order' ? 'Pre-Order' : 'Out of Stock'}
                                </Badge>
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border">
                                <Package className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">Packing</p>
                                    <p className="text-sm font-medium text-gray-900">{product.packingStyle}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border">
                                <MapPin className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">Origin</p>
                                    <p className="text-sm font-medium text-gray-900">{product.origin}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4">
                            <WhatsAppButton
                                productName={product.name}
                                size="xl"
                                className="flex-1"
                            />
                            <Button variant="outline" size="xl">
                                <FileText className="w-5 h-5" />
                                Request Datasheet
                            </Button>
                        </div>

                        {/* Certifications */}
                        <div className="pt-6 border-t">
                            <p className="text-sm text-gray-500 mb-3">Certifications</p>
                            <TrustBadges variant="compact" />
                        </div>
                    </motion.div>
                </div>

                {/* Tabs Section */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16">
                    {/* Tab Headers */}
                    <div className="flex border-b">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-colors ${activeTab === tab.id
                                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                <tab.icon className="w-5 h-5" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-8">
                        <AnimatePresence mode="wait">
                            {activeTab === 'overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="prose prose-lg max-w-none"
                                >
                                    <h3>Product Description</h3>
                                    <div className="whitespace-pre-line">{product.fullDescription || product.description}</div>

                                    {product.indications && (
                                        <>
                                            <h3>Indications</h3>
                                            <ul>
                                                {product.indications.map((indication, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                                        {indication}
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === 'details' && (
                                <motion.div
                                    key="details"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">Product Specifications</h3>
                                            <InfoRow label="Manufacturer" value={product.manufacturer} />
                                            <InfoRow label="Origin" value={product.origin} />
                                            <InfoRow label="Dosage Form" value={product.dosageForm} />
                                            <InfoRow label="Packing" value={product.packingStyle} />
                                            {product.strength && <InfoRow label="Strength" value={product.strength} />}
                                            {product.edaLicense && <InfoRow label="EDA License" value={product.edaLicense} />}
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">Storage & Handling</h3>
                                            {product.storageConditions && (
                                                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100">
                                                    <Thermometer className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-medium text-gray-900">Storage Conditions</p>
                                                        <p className="text-gray-600">{product.storageConditions}</p>
                                                    </div>
                                                </div>
                                            )}
                                            {product.shelfLife && (
                                                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border">
                                                    <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-medium text-gray-900">Shelf Life</p>
                                                        <p className="text-gray-600">{product.shelfLife}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'safety' && (
                                <motion.div
                                    key="safety"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-8"
                                >
                                    {/* Medical Disclaimer */}
                                    <div className="p-6 rounded-2xl bg-yellow-50 border border-yellow-200">
                                        <div className="flex items-start gap-4">
                                            <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                                            <div>
                                                <h4 className="text-lg font-bold text-yellow-900 mb-2">Medical Disclaimer</h4>
                                                <p className="text-yellow-800">
                                                    This information is for healthcare professionals only. This product should be
                                                    used under medical supervision. Always consult with a qualified healthcare
                                                    provider before prescribing or dispensing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {product.contraindications && (
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <X className="w-6 h-6 text-red-500" />
                                                Contraindications
                                            </h3>
                                            <ul className="space-y-2">
                                                {product.contraindications.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-red-50 text-red-800">
                                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {product.sideEffects && (
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">Possible Side Effects</h3>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {product.sideEffects.map((effect, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                                                        <Info className="w-5 h-5 text-gray-400" />
                                                        <span className="text-gray-700">{effect}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relProduct) => (
                                <Link key={relProduct.id} href={`/products/${relProduct.slug}`}>
                                    <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                                        <CardContent className="p-6">
                                            <div className="h-32 bg-gray-50 rounded-xl mb-4 flex items-center justify-center">
                                                <span className="text-4xl font-bold text-gray-300">
                                                    {relProduct.name.charAt(0)}
                                                </span>
                                            </div>
                                            <Badge variant="outline" className="mb-2 text-xs">{relProduct.category}</Badge>
                                            <h3 className="font-bold text-gray-900 mb-1">{relProduct.name}</h3>
                                            <p className="text-sm text-gray-500 mb-3">{relProduct.activeIngredient}</p>
                                            <p className="text-xl font-bold text-blue-600">
                                                {formatPrice(relProduct.price, relProduct.currency)}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium text-gray-900 text-right">{value}</span>
        </div>
    )
}
