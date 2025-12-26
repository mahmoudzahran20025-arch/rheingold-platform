'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FileText, Download, LogOut, Package, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Logo from '@/components/ui/logo'

export default function PartnerDashboardPage() {
    const [partner, setPartner] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        const token = sessionStorage.getItem('partner_token')
        const data = sessionStorage.getItem('partner_data')

        if (!token || !data) {
            router.push('/partners/login')
            return
        }

        setPartner(JSON.parse(data))
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem('partner_token')
        sessionStorage.removeItem('partner_data')
        router.push('/partners/login')
    }

    if (!partner) return null

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Logo className="scale-75 origin-left" showText={true} />
                        <div className="h-6 w-px bg-gray-200 mx-2 hidden md:block"></div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider hidden md:block">Partner Portal</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-medium text-gray-900">{partner.name}</p>
                            <p className="text-xs text-gray-500">{partner.company}</p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleLogout} className="text-red-600 hover:bg-red-50">
                            <LogOut className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome Back, {partner.name.split(' ')[0]}</h1>
                    <p className="text-gray-600">Here you can access wholesale price lists and partner resources.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Price Lists */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-600" />
                                Wholesale Price Lists
                            </CardTitle>
                            <CardDescription>Updated daily based on exchange rates</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-blue-50 transition-colors cursor-pointer">
                                <div>
                                    <p className="font-medium text-gray-900">Nutraceuticals (Q4 2024)</p>
                                    <p className="text-xs text-gray-500">PDF • 2.4 MB</p>
                                </div>
                                <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-blue-50 transition-colors cursor-pointer">
                                <div>
                                    <p className="font-medium text-gray-900">Pharmaceuticals (Dec 2024)</p>
                                    <p className="text-xs text-gray-500">PDF • 1.8 MB</p>
                                </div>
                                <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Orders */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Package className="w-5 h-5 text-purple-600" />
                                Active Orders
                            </CardTitle>
                            <CardDescription>Track your current shipments</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center py-6 text-gray-400 text-sm">
                                No active orders found.
                                <br />
                                Contact support to place a new order.
                            </div>
                            <Button className="w-full mt-4" variant="outline">Create New Order</Button>
                        </CardContent>
                    </Card>

                    {/* Account Support */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="w-5 h-5 text-emerald-600" />
                                Dedicated Support
                            </CardTitle>
                            <CardDescription>Your account manager</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                                    JS
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Julia Schneider</p>
                                    <p className="text-xs text-gray-500">Senior Account Manager</p>
                                </div>
                            </div>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Contact via WhatsApp</Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
