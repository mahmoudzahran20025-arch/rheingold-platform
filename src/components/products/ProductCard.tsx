'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldCheck, Info, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

export interface Product {
    id: string
    slug: string
    name: string
    activeIngredient: string
    manufacturer: string
    origin: string
    edaLicense?: string
    category: string
    packingStyle: string
    dosageForm: string
    price: number
    currency?: string
    availability: 'in_stock' | 'out_of_stock' | 'pre_order'
    image: string
    certifications: string[]
}

interface ProductCardProps {
    product: Product
    index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const availabilityConfig = {
        in_stock: { label: 'In Stock', color: 'bg-emerald-500' },
        out_of_stock: { label: 'Out of Stock', color: 'bg-red-500' },
        pre_order: { label: 'Pre-Order', color: 'bg-amber-500' },
    }

    const status = availabilityConfig[product.availability]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
            {/* Certifications Badge */}
            {product.edaLicense && (
                <div className="absolute top-4 left-4 z-10">
                    <Badge variant="eda" className="shadow-lg">
                        <ShieldCheck className="w-3 h-3 mr-1" />
                        EDA Certified
                    </Badge>
                </div>
            )}

            {/* Availability Badge */}
            <div className="absolute top-4 right-4 z-10">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${status.color}`}>
                    {status.label}
                </div>
            </div>

            {/* Product Image */}
            <Link href={`/products/${product.slug}`} className="block relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            <span className="text-4xl font-bold text-blue-400">
                                {product.name.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>
            </Link>

            {/* Product Info */}
            <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                    <Badge variant="outline" className="text-xs">
                        {product.category}
                    </Badge>
                </div>

                {/* Name */}
                <Link href={`/products/${product.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {product.name}
                    </h3>
                </Link>

                {/* Active Ingredient */}
                <p className="text-sm text-blue-600 font-medium mb-3">
                    {product.activeIngredient}
                </p>

                {/* Details */}
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <p><span className="font-medium">Manufacturer:</span> {product.manufacturer}</p>
                    <p><span className="font-medium">Packing:</span> {product.packingStyle}</p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Price</p>
                        <p className="text-2xl font-bold text-gray-900">
                            {formatPrice(product.price, product.currency || 'EUR')}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        {product.certifications.slice(0, 2).map((cert) => (
                            <div
                                key={cert}
                                className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                                title={cert}
                            >
                                <span className="text-[10px] font-bold text-gray-600">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <Link href={`/products/${product.slug}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                            <Info className="w-4 h-4" />
                            Details
                        </Button>
                    </Link>
                    <WhatsAppButton
                        productName={product.name}
                        size="default"
                        showText={false}
                        className="flex-shrink-0"
                    />
                </div>
            </div>

            {/* License Footer */}
            {product.edaLicense && (
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                        <span className="font-medium">License:</span> {product.edaLicense}
                    </p>
                </div>
            )}
        </motion.div>
    )
}
