'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Grid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import ProductCard from '@/components/products/ProductCard'
// Keep productCategories local or pass as prop. It's static config, so importing is fine.
import { productCategories, ProductData } from '@/data/products'

interface ProductsClientProps {
    initialProducts: ProductData[]
}

export default function ProductsClient({ initialProducts }: ProductsClientProps) {
    const [activeCategory, setActiveCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    // Filter Logic
    const filteredProducts = initialProducts.filter((product) => {
        const matchesCategory = activeCategory === 'all' || product.categorySlug === activeCategory
        // Safe check for fields that might differ between backend and frontend types if strictness varies
        const matchesSearch = (product.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (product.activeIngredient || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (product.id || '').toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="page-content min-h-screen bg-gray-50">
            {/* Hero Banner: B2B Distribution Focus */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Distribution Portfolio</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Authorized supply of pharmaceuticals and nutraceuticals for healthcare partners.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-72">
                        <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-32">
                            <h3 className="font-bold text-gray-900 mb-4">Supply Categories</h3>
                            <div className="space-y-2">
                                {/* All Products Option */}
                                <button
                                    onClick={() => setActiveCategory('all')}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${activeCategory === 'all'
                                        ? 'bg-blue-50 text-blue-600 font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <span>All Products</span>
                                    <Badge variant="outline" className="text-xs">
                                        {initialProducts.length}
                                    </Badge>
                                </button>

                                {/* Dynamic Categories from Data Source */}
                                {productCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${activeCategory === category.id
                                            ? 'bg-blue-50 text-blue-600 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className="text-left text-sm">{category.name}</span>
                                        <Badge variant="outline" className="text-xs ml-2">
                                            {initialProducts.filter(p => p.categorySlug === category.id).length}
                                        </Badge>
                                    </button>
                                ))}
                            </div>

                            {/* Certifications Filter (Visual Only for now) */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4">Compliance</h3>
                                <div className="space-y-3">
                                    {['EDA Registered', 'GMP Sourced', 'ISO Certified'].map((cert) => (
                                        <label key={cert} className="flex items-center gap-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span className="text-gray-700 text-sm">{cert}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Search & View Controls */}
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    placeholder="Search by name, active ingredient..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12"
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-500">
                                    {filteredProducts.length} products
                                </span>
                                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                                            }`}
                                    >
                                        <Grid className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                                            }`}
                                    >
                                        <List className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'
                            }`}>
                            {filteredProducts.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} />
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-16">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Search className="w-10 h-10 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No matching products</h3>
                                <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
                                <Button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    )
}
