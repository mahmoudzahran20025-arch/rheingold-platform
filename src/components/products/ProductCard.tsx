'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldCheck, Info, ArrowRight, Lock, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'

export interface Product {
    id: string
    slug: string
    name: string
    activeIngredient: string
    manufacturer: string
    category: string
    packingStyle: string
    price?: number
    currency?: string
    availability: 'in_stock' | 'out_of_stock' | 'pre_order'
    image: string
    certifications: string[]
    productType?: 'Rx' | 'Supplement' | 'OTC' | 'MedicalDevice'
}

interface ProductCardProps {
    product: Product
    index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const isRx = product.productType === 'Rx'

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {isRx ? (
                    <Badge className="bg-slate-900 text-white border-none shadow-sm">
                        <Lock className="w-3 h-3 mr-1" /> Professional Only
                    </Badge>
                ) : (
                    <Badge className="bg-emerald-600/90 text-white border-none shadow-sm">
                        Available
                    </Badge>
                )}
            </div>

            {/* Product Image Link */}
            <Link href={`/products/${product.slug}`} className="block relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-8 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                        />
                    ) : (
                        <div className="w-32 h-32 rounded-2xl bg-slate-200 flex items-center justify-center">
                            <span className="text-4xl font-bold text-slate-400">
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
                    <Badge variant="outline" className="text-[10px] text-slate-500">
                        {product.category}
                    </Badge>
                </div>

                {/* Name */}
                <Link href={`/products/${product.slug}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {product.name}
                    </h3>
                </Link>

                {/* Active Ingredient */}
                <p className="text-sm text-blue-600 font-medium mb-4 line-clamp-1">
                    {product.activeIngredient}
                </p>

                {/* Specs */}
                <div className="space-y-1 text-xs text-gray-500 mb-6 font-mono">
                    <p><span className="text-gray-400">Origin:</span> {product.manufacturer?.split(' ')[0]}</p>
                    <p><span className="text-gray-400">Pack:</span> {product.packingStyle}</p>
                </div>

                {/* Actions - NO BUY BUTTONS */}
                <Link href={`/products/${product.slug}`}>
                    <Button variant="outline" className="w-full border-slate-200 hover:bg-slate-50 hover:text-amber-600 group-hover:border-amber-200">
                        <Eye className="w-4 h-4 mr-2" />
                        View Datasheet
                    </Button>
                </Link>
            </div>
        </motion.div>
    )
}
