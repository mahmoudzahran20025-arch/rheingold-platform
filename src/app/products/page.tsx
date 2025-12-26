'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import ProductCard, { Product } from '@/components/products/ProductCard'

const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'neurology', name: 'Neurology', count: 8 },
    { id: 'cardiology', name: 'Cardiology', count: 6 },
    { id: 'general-health', name: 'General Health', count: 5 },
    { id: 'vitamins', name: 'Vitamins & Supplements', count: 5 },
]

const products: Product[] = [
    {
        id: '1',
        slug: 'king-lovee-vital',
        name: 'King Lovee Vital',
        activeIngredient: 'Tadalafil 5mg + Multivitamins',
        manufacturer: 'Adwia Pharmaceuticals',
        origin: 'Egypt (EU GMP Certified)',
        edaLicense: 'EDA-2024-12345',
        category: 'Neurology & Energy',
        packingStyle: 'Blister Pack - 30 Tablets',
        dosageForm: 'Film-Coated Tablets',
        price: 24.99,
        currency: 'EUR',
        availability: 'in_stock',
        image: '',
        certifications: ['EDA', 'GMP', 'ISO'],
    },
    {
        id: '2',
        slug: 'cardio-plus-forte',
        name: 'Cardio Plus Forte',
        activeIngredient: 'Aspirin 100mg + Omega-3',
        manufacturer: 'Pharco Pharmaceuticals',
        origin: 'Egypt (EU GMP Certified)',
        edaLicense: 'EDA-2024-23456',
        category: 'Cardiology',
        packingStyle: 'Blister Pack - 28 Capsules',
        dosageForm: 'Soft Gel Capsules',
        price: 18.50,
        currency: 'EUR',
        availability: 'in_stock',
        image: '',
        certifications: ['EDA', 'GMP'],
    },
    {
        id: '3',
        slug: 'neuro-balance-pro',
        name: 'Neuro Balance Pro',
        activeIngredient: 'Vitamin B Complex + Magnesium',
        manufacturer: 'EIPICO',
        origin: 'Egypt (EU GMP Certified)',
        edaLicense: 'EDA-2024-34567',
        category: 'Neurology',
        packingStyle: 'Bottle - 60 Tablets',
        dosageForm: 'Coated Tablets',
        price: 32.00,
        currency: 'EUR',
        availability: 'in_stock',
        image: '',
        certifications: ['EDA', 'GMP', 'ISO'],
    },
    {
        id: '4',
        slug: 'immuno-shield-plus',
        name: 'Immuno Shield Plus',
        activeIngredient: 'Vitamin C + Zinc + Elderberry',
        manufacturer: 'Amoun Pharmaceutical',
        origin: 'Egypt (EU GMP Certified)',
        edaLicense: 'EDA-2024-45678',
        category: 'General Health',
        packingStyle: 'Bottle - 90 Capsules',
        dosageForm: 'Vegetarian Capsules',
        price: 28.75,
        currency: 'EUR',
        availability: 'pre_order',
        image: '',
        certifications: ['EDA', 'GMP'],
    },
    {
        id: '5',
        slug: 'omega-3-premium',
        name: 'Omega-3 Premium',
        activeIngredient: 'Fish Oil 1000mg (EPA/DHA)',
        manufacturer: 'Sedico Pharma',
        origin: 'Egypt (EU GMP Certified)',
        edaLicense: 'EDA-2024-56789',
        category: 'Cardiology',
        packingStyle: 'Bottle - 120 Softgels',
        dosageForm: 'Soft Gel Capsules',
        price: 22.00,
        currency: 'EUR',
        availability: 'in_stock',
        image: '',
        certifications: ['EDA', 'GMP'],
    },
    {
        id: '6',
        slug: 'vitamin-d3-forte',
        name: 'Vitamin D3 Forte',
        activeIngredient: 'Cholecalciferol 5000 IU',
        manufacturer: 'Memphis Pharma',
        origin: 'Egypt (EU GMP Certified)',
        edaLicense: 'EDA-2024-67890',
        category: 'Vitamins & Supplements',
        packingStyle: 'Bottle - 90 Tablets',
        dosageForm: 'Chewable Tablets',
        price: 15.50,
        currency: 'EUR',
        availability: 'in_stock',
        image: '',
        certifications: ['EDA', 'GMP', 'ISO'],
    },
]

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    const filteredProducts = products.filter((product) => {
        const matchesCategory = activeCategory === 'all' || product.category.toLowerCase().includes(activeCategory)
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.activeIngredient.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="page-content min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Explore our range of EDA & GMP certified pharmaceutical products
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-72">
                        <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-32">
                            <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${activeCategory === category.id
                                                ? 'bg-blue-50 text-blue-600 font-semibold'
                                                : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span>{category.name}</span>
                                        <Badge variant="outline" className="text-xs">
                                            {category.count}
                                        </Badge>
                                    </button>
                                ))}
                            </div>

                            {/* Certifications Filter */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4">Certifications</h3>
                                <div className="space-y-3">
                                    {['EDA Certified', 'GMP Compliant', 'ISO 9001'].map((cert) => (
                                        <label key={cert} className="flex items-center gap-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span className="text-gray-700">{cert}</span>
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
                                    placeholder="Search products..."
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
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
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
