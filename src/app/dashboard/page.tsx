'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    LayoutDashboard, FileText, ShoppingBag, Settings, LogOut,
    Download, Search, Bell, ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: ShoppingBag, label: 'My Orders', active: false },
    { icon: FileText, label: 'Documents', active: false },
    { icon: Download, label: 'Downloads', active: false },
    { icon: Settings, label: 'Settings', active: false },
]

const recentOrders = [
    { id: 'ORD-2024-001', date: 'Dec 20, 2024', status: 'Processing', total: '€12,450.00' },
    { id: 'ORD-2024-002', date: 'Dec 15, 2024', status: 'Delivered', total: '€8,200.00' },
    { id: 'ORD-2024-003', date: 'Dec 10, 2024', status: 'Delivered', total: '€15,300.00' },
]

const availableDocs = [
    { name: 'GMP Certificate 2025.pdf', type: 'Certificate', size: '2.4 MB' },
    { name: 'Product Catalog Q1.pdf', type: 'Catalog', size: '15.1 MB' },
    { name: 'Price List - Distributors.xlsx', type: 'Pricing', size: '1.2 MB' },
]

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col fixed h-full">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                        Partner Portal
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">Authorized Access</p>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {sidebarItems.map((item) => (
                        <button
                            key={item.label}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${item.active
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                        <LogOut className="w-5 h-5 mr-3" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 p-8">
                {/* Header */}
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-500">Welcome back, Partner Pharmacy Cairo.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input placeholder="Search orders..." className="pl-9 w-64 bg-white" />
                        </div>
                        <Button variant="outline" size="icon" className="relative">
                            <Bell className="w-5 h-5 text-gray-600" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                        </Button>
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                            PP
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Active Orders</CardTitle>
                            <ShoppingBag className="w-4 h-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12</div>
                            <p className="text-xs text-gray-500 mt-1">+2 from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Total Spend (YTD)</CardTitle>
                            <FileText className="w-4 h-4 text-emerald-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">€45,231.00</div>
                            <p className="text-xs text-gray-500 mt-1">+15% vs last year</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Compliance Status</CardTitle>
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-emerald-600">Active</div>
                            <p className="text-xs text-gray-500 mt-1">License valid until Dec 2026</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Recent Orders */}
                    <Card className="col-span-1">
                        <CardHeader>
                            <CardTitle>Recent Orders</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentOrders.map((order) => (
                                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group hover:bg-white hover:shadow-md transition-all">
                                        <div>
                                            <p className="font-bold text-gray-900">{order.id}</p>
                                            <p className="text-sm text-gray-500">{order.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">{order.total}</p>
                                            <Badge variant={order.status === 'Processing' ? 'secondary' : 'default'} className="mt-1">
                                                {order.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="outline" className="w-full mt-4">View All Orders</Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Downloads */}
                    <Card className="col-span-1">
                        <CardHeader>
                            <CardTitle>Quick Downloads</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {availableDocs.map((doc) => (
                                    <div key={doc.name} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                                                <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon">
                                            <Download className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                                        </Button>
                                    </div>
                                ))}
                                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                                    <Download className="w-4 h-4 mr-2" />
                                    Access Document Center
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}

function ShieldCheck(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
