'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, RefreshCw, Package, Edit, Trash2, Tag, DollarSign, Image as ImageIcon, ShieldCheck, MapPin, Factory } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import AdminHeader from '@/components/admin/AdminHeader'
import { useAdminAuth } from '@/hooks/useAdminAuth'
import { Badge } from '@/components/ui/badge'

interface Product {
    id?: string
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
    currency: string
    availability: 'in_stock' | 'out_of_stock' | 'pre_order'
    image: string
    certifications: string[]
    description: string
    active: boolean
    updatedAt?: string
}

const INITIAL_FORM: Product = {
    slug: '',
    name: '',
    activeIngredient: '',
    manufacturer: '',
    origin: 'Germany',
    edaLicense: '',
    category: 'Nutraceuticals',
    packingStyle: '',
    dosageForm: '',
    price: 0,
    currency: 'EUR',
    availability: 'in_stock',
    image: '',
    certifications: [],
    description: '',
    active: true
}

export default function AdminProductsPage() {
    const { isAuthenticated, logout } = useAdminAuth()
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)
    const [formData, setFormData] = useState<Product>(INITIAL_FORM)

    useEffect(() => {
        if (isAuthenticated) {
            fetchProducts()
        }
    }, [isAuthenticated])

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const res = await fetch('https://rheingold-medica-api.mahm-zahran22.workers.dev/products')
            if (res.ok) {
                const data = await res.json()
                setProducts(data.products || [])
            }
        } catch (error) {
            console.error('Failed to fetch products', error)
        } finally {
            setLoading(false)
        }
    }

    const handleCreate = () => {
        setEditingProduct(null)
        setFormData(INITIAL_FORM)
        setIsDialogOpen(true)
    }

    const handleEdit = (product: Product) => {
        setEditingProduct(product)
        setFormData({ ...product })
        setIsDialogOpen(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this product?')) return
        try {
            const res = await fetch(`https://rheingold-medica-api.mahm-zahran22.workers.dev/products/${id}`, {
                method: 'DELETE',
                headers: { 'X-Admin-Secret': 'Rheingold2025' }
            })
            if (res.ok) {
                fetchProducts()
            }
        } catch (error) {
            console.error('Failed to delete', error)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const url = editingProduct
                ? `https://rheingold-medica-api.mahm-zahran22.workers.dev/products/${editingProduct.id}`
                : 'https://rheingold-medica-api.mahm-zahran22.workers.dev/products'
            const method = editingProduct ? 'PUT' : 'POST'
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Admin-Secret': 'Rheingold2025'
                },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                setIsDialogOpen(false)
                fetchProducts()
            } else {
                alert('Failed to save product')
            }
        } catch (error) {
            console.error('Error saving product', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Toggle certification Helper
    const toggleCertification = (cert: string) => {
        setFormData(prev => {
            const exists = prev.certifications.includes(cert)
            return {
                ...prev,
                certifications: exists
                    ? prev.certifications.filter(c => c !== cert)
                    : [...prev.certifications, cert]
            }
        })
    }

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (!isAuthenticated) return null

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <AdminHeader onLogout={logout} />

            <main className="flex-1 container mx-auto px-6 py-10 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-2xl font-serif text-slate-900 mb-2">Product Management</h1>
                        <p className="text-slate-500">Manage your comprehensive pharmaceutical catalog.</p>
                    </div>
                    <Button onClick={handleCreate} className="bg-amber-600 hover:bg-amber-700 text-white gap-2 shadow-lg">
                        <Plus className="w-4 h-4" /> Add New Product
                    </Button>
                </div>

                <Card className="border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between gap-4">
                        <div className="relative max-w-md w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input
                                placeholder="Search products..."
                                className="pl-9 bg-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" size="icon" onClick={fetchProducts} disabled={loading}>
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 uppercase tracking-wider text-xs font-medium">
                                <tr>
                                    <th className="px-6 py-4">Product Info</th>
                                    <th className="px-6 py-4">Details</th>
                                    <th className="px-6 py-4">Availability</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {filteredProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                                                    {product.image ? (
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <ImageIcon className="w-6 h-6 text-slate-300" />
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-slate-900">{product.name}</div>
                                                    <div className="text-xs text-blue-600 font-medium">{product.activeIngredient}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="text-xs text-slate-500 flex items-center gap-1">
                                                    <Factory className="w-3 h-3" /> {product.manufacturer}
                                                </div>
                                                <div className="text-xs text-slate-500 flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" /> {product.origin}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant={
                                                product.availability === 'in_stock' ? 'default' :
                                                    product.availability === 'out_of_stock' ? 'destructive' : 'secondary'
                                            } className="text-[10px] uppercase">
                                                {product.availability.replace('_', ' ')}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 bg-gray-50/50">
                                            <div className="font-mono font-medium text-slate-700">
                                                {product.currency} {product.price.toFixed(2)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600" onClick={() => handleEdit(product)}>
                                                    <Edit className="w-4 h-4" />
                                                </Button>
                                                <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600" onClick={() => handleDelete(product.id!)}>
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </main>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
                        <DialogDescription>Full pharmaceutical product details required.</DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-6 mt-2">
                        {/* Basic Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Product Name</Label>
                                <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Rheingold Vitamin C" />
                            </div>
                            <div className="space-y-2">
                                <Label>Slug (URL Friendly)</Label>
                                <Input required value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} placeholder="vitamin-c-1000" />
                            </div>
                        </div>

                        {/* Pharma Details */}
                        <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="space-y-2">
                                <Label>Active Ingredient</Label>
                                <Input required value={formData.activeIngredient} onChange={e => setFormData({ ...formData, activeIngredient: e.target.value })} placeholder="e.g. Ascorbic Acid 1000mg" />
                            </div>
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Input required value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Dosage Form</Label>
                                <Input required value={formData.dosageForm} onChange={e => setFormData({ ...formData, dosageForm: e.target.value })} placeholder="e.g. Tablets" />
                            </div>
                            <div className="space-y-2">
                                <Label>Packing Style</Label>
                                <Input required value={formData.packingStyle} onChange={e => setFormData({ ...formData, packingStyle: e.target.value })} placeholder="e.g. Box of 30 Strips" />
                            </div>
                        </div>

                        {/* Origin & Manufacturer */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label>Manufacturer</Label>
                                <Input required value={formData.manufacturer} onChange={e => setFormData({ ...formData, manufacturer: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Country of Origin</Label>
                                <Input required value={formData.origin} onChange={e => setFormData({ ...formData, origin: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>EDA License #</Label>
                                <Input value={formData.edaLicense} onChange={e => setFormData({ ...formData, edaLicense: e.target.value })} placeholder="Optional" />
                            </div>
                        </div>

                        {/* Pricing & Availability */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label>Price</Label>
                                <Input type="number" step="0.01" required value={formData.price} onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Currency</Label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                                    value={formData.currency} onChange={e => setFormData({ ...formData, currency: e.target.value })}>
                                    <option value="EUR">EUR (€)</option>
                                    <option value="USD">USD ($)</option>
                                    <option value="EGP">EGP (£)</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <Label>Availability</Label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                                    value={formData.availability} onChange={e => setFormData({ ...formData, availability: e.target.value as any })}>
                                    <option value="in_stock">In Stock</option>
                                    <option value="out_of_stock">Out of Stock</option>
                                    <option value="pre_order">Pre-Order</option>
                                </select>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="space-y-2">
                            <Label>Certifications</Label>
                            <div className="flex gap-4 flex-wrap">
                                {['GMP', 'ISO', 'FDA', 'HALAL'].map(cert => (
                                    <label key={cert} className="flex items-center gap-2 cursor-pointer bg-slate-50 px-3 py-1 rounded border hover:bg-slate-100">
                                        <input type="checkbox"
                                            checked={formData.certifications.includes(cert)}
                                            onChange={() => toggleCertification(cert)}
                                        />
                                        <span className="text-sm font-medium">{cert}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Image & Description */}
                        <div className="space-y-2">
                            <Label>Image URL</Label>
                            <Input required value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} placeholder="https://..." />
                        </div>

                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea className="h-24" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                        </div>

                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                            <Button type="submit" disabled={isSubmitting} className="bg-amber-600 hover:bg-amber-700 text-white">
                                {isSubmitting ? 'Saving...' : 'Save Product'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
