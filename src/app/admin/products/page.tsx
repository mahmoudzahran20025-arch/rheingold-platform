'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, RefreshCw, Edit, Trash2, Image as ImageIcon, ShieldCheck, MapPin, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import AdminHeader from '@/components/admin/AdminHeader'
import { useAdminAuth } from '@/hooks/useAdminAuth'
import { Badge } from '@/components/ui/badge'
import { Product, getProducts, createProduct, updateProduct, deleteProduct } from '@/lib/api'

// Initial Form State matching the Product interface but ensuring safe defaults
const INITIAL_FORM: Product = {
    id: '',
    slug: '',
    name: '',
    activeIngredient: '',
    manufacturer: '',
    origin: 'Germany',
    edaLicense: '',
    category: 'Nutraceuticals',
    categorySlug: 'nutraceuticals',
    packingStyle: '',
    dosageForm: '',
    price: 0,
    currency: 'EUR',
    availability: 'in_stock',
    image: '',
    certifications: [],
    description: '',
    active: true,
    productType: 'Supplement',
    distributionModel: 'Authorized Distribution',
    filesAvailable: [],
    updatedAt: new Date().toISOString()
}

const PRODUCT_TYPES = [
    { value: 'Rx', label: 'Prescription Pharmaceutical (Rx)' },
    { value: 'Supplement', label: 'Food Supplement' },
    { value: 'OTC', label: 'OTC / Wellness' },
    { value: 'MedicalDevice', label: 'Medical Device' }
]

const AVAILABLE_FILES = ['COA (Analysis)', 'GMP Certificate', 'Free Sale Certificate', 'Stability Data', 'Product Leaflet']

export default function AdminProductsPage() {
    const { isAuthenticated, logout } = useAdminAuth()
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)
    const [formData, setFormData] = useState<Product>(INITIAL_FORM)

    const ADMIN_SECRET = 'Rheingold2025' // In production this should come from env or auth context token

    useEffect(() => {
        if (isAuthenticated) {
            fetchProductsList()
        }
    }, [isAuthenticated])

    const fetchProductsList = async () => {
        setLoading(true)
        try {
            const data = await getProducts()
            setProducts(data)
        } catch (error) {
            console.error('Failed to fetch products', error)
        } finally {
            setLoading(false)
        }
    }

    const handleCreate = () => {
        setEditingProduct(null)
        setFormData({ ...INITIAL_FORM, id: crypto.randomUUID(), updatedAt: new Date().toISOString() })
        setIsDialogOpen(true)
    }

    const handleEdit = (product: Product) => {
        setEditingProduct(product)
        setFormData({
            ...INITIAL_FORM,
            ...product,
            certifications: product.certifications || [],
            filesAvailable: product.filesAvailable || []
        })
        setIsDialogOpen(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this product?')) return
        try {
            await deleteProduct(id, ADMIN_SECRET)
            fetchProductsList()
        } catch (error) {
            console.error('Failed to delete', error)
            alert('Failed to delete product')
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            if (editingProduct && editingProduct.id) {
                await updateProduct(editingProduct.id, formData, ADMIN_SECRET)
            } else {
                await createProduct(formData, ADMIN_SECRET)
            }
            setIsDialogOpen(false)
            fetchProductsList()
        } catch (error) {
            console.error('Error saving product', error)
            alert('Failed to save product')
        } finally {
            setIsSubmitting(false)
        }
    }

    const toggleArrayItem = (field: 'certifications' | 'filesAvailable', item: string) => {
        setFormData(prev => {
            const list = prev[field] || []
            const exists = list.includes(item)
            return {
                ...prev,
                [field]: exists ? list.filter(i => i !== item) : [...list, item]
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
                        <p className="text-slate-500">B2B Distribution Catalog & Regulatory Control</p>
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
                                placeholder="Search catalog..."
                                className="pl-9 bg-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" size="icon" onClick={fetchProductsList} disabled={loading}>
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 uppercase tracking-wider text-xs font-medium">
                                <tr>
                                    <th className="px-6 py-4">Product</th>
                                    <th className="px-6 py-4">Type & Origin</th>
                                    <th className="px-6 py-4">Status</th>
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
                                                <Badge variant="outline" className={`${product.productType === 'Rx' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-green-50 text-green-700 border-green-200'}`}>
                                                    {product.productType || 'Supplement'}
                                                </Badge>
                                                <div className="text-xs text-slate-500 flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" /> {product.origin}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {product.availability && (
                                                <Badge variant={
                                                    product.availability === 'in_stock' ? 'default' :
                                                        product.availability === 'out_of_stock' ? 'destructive' : 'secondary'
                                                } className="text-[10px] uppercase">
                                                    {product.availability.replace('_', ' ')}
                                                </Badge>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 bg-gray-50/50">
                                            {product.productType === 'Rx' ? (
                                                <span className="text-xs text-slate-400 italic">B2B Only</span>
                                            ) : (
                                                <div className="font-mono font-medium text-slate-700">
                                                    {product.currency} {product.price?.toFixed(2)}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600" onClick={() => handleEdit(product)}>
                                                    <Edit className="w-4 h-4" />
                                                </Button>
                                                {product.id && (
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600" onClick={() => handleDelete(product.id!)}>
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                )}
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
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
                        <DialogDescription>
                            {formData.productType === 'Rx' ? 'Strict regulatory compliance required for Pharmaceutical Products.' : 'Standard product information.'}
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        {/* Section 1: Classification */}
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-amber-600" /> Classification & Type
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Product Type</Label>
                                    <select
                                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        value={formData.productType}
                                        onChange={e => setFormData({ ...formData, productType: e.target.value as any })}
                                    >
                                        {PRODUCT_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Distribution Model</Label>
                                    <Input
                                        value={formData.distributionModel || ''}
                                        onChange={e => setFormData({ ...formData, distributionModel: e.target.value })}
                                        placeholder="e.g. Hospital & Pharmacy Distribution Only"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Basic Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Product Name</Label>
                                <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Slug (URL)</Label>
                                <Input required value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} />
                            </div>
                        </div>

                        {/* Section 3: Technical Specs */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Active Ingredient</Label>
                                <Input required value={formData.activeIngredient || ''} onChange={e => setFormData({ ...formData, activeIngredient: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Input required value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Dosage Form</Label>
                                <Input required value={formData.dosageForm || ''} onChange={e => setFormData({ ...formData, dosageForm: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Packing Style</Label>
                                <Input required value={formData.packingStyle || ''} onChange={e => setFormData({ ...formData, packingStyle: e.target.value })} />
                            </div>
                        </div>

                        {/* Section 4: Supply Chain */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label>Manufacturer</Label>
                                <Input required value={formData.manufacturer || ''} onChange={e => setFormData({ ...formData, manufacturer: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Country of Origin</Label>
                                <Input required value={formData.origin || ''} onChange={e => setFormData({ ...formData, origin: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>EDA License #</Label>
                                <Input value={formData.edaLicense || ''} onChange={e => setFormData({ ...formData, edaLicense: e.target.value })} placeholder="Optional" />
                            </div>
                        </div>

                        {/* Section 5: Commercial (Conditional) */}
                        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded border">
                            <div className="space-y-2">
                                <Label>Commercial Status</Label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
                                    value={formData.availability} onChange={e => setFormData({ ...formData, availability: e.target.value as any })}>
                                    <option value="in_stock">In Stock / Available</option>
                                    <option value="out_of_stock">Out of Stock</option>
                                    <option value="pre_order">Made to Order / Pre-order</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <Label>Reference / List Price ({formData.currency})</Label>
                                <Input
                                    type="number"
                                    step="0.01"
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                                    // Price is always editable but optional for B2B context
                                    placeholder="Optional (Internal Ref)"
                                />
                                <p className="text-[10px] text-gray-500">
                                    {formData.productType === 'Rx'
                                        ? 'For internal reference only. B2B prices are negotiated privately.'
                                        : 'Optional for B2B distribution models.'}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <Label>Currency</Label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
                                    value={formData.currency} onChange={e => setFormData({ ...formData, currency: e.target.value })}>
                                    <option value="EUR">EUR (€)</option>
                                    <option value="USD">USD ($)</option>
                                </select>
                            </div>
                        </div>

                        {/* Section 6: Documentation & Compliance */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-blue-600" /> Documents Available for Partners
                            </h3>
                            <div className="flex gap-3 flex-wrap">
                                {AVAILABLE_FILES.map(file => (
                                    <label key={file} className="flex items-center gap-2 cursor-pointer bg-blue-50/50 px-3 py-2 rounded-md border border-blue-100 hover:bg-blue-100 transition-colors">
                                        <input type="checkbox"
                                            checked={(formData.filesAvailable || []).includes(file)}
                                            onChange={() => toggleArrayItem('filesAvailable', file)}
                                            className="rounded border-blue-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-xs font-medium text-blue-800">{file}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Image & Description */}
                        <div className="space-y-2">
                            <Label>Image URL (Hosted)</Label>
                            <Input required value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} />
                            {formData.image && (
                                <div className="mt-2 text-xs text-gray-400 truncate max-w-sm">
                                    Preview: {formData.image}
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea className="h-24 font-mono text-sm" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
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
