'use client'

import { useState, useEffect } from 'react'
import {
    MessageSquare, Users, Search, RefreshCw, Mail, ArrowRight, Package
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import AdminHeader from '@/components/admin/AdminHeader'
import { useAdminAuth } from '@/hooks/useAdminAuth'

interface Message {
    id: string
    name: string
    email: string
    phone: string
    company: string
    subject: string
    message: string
    timestamp: string
    status: string
}

export default function AdminDashboardPage() {
    const { isAuthenticated, isLoading: authLoading, logout } = useAdminAuth()
    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

    useEffect(() => {
        if (isAuthenticated) {
            fetchMessages()
        }
    }, [isAuthenticated])

    const fetchMessages = async () => {
        setLoading(true)
        try {
            const res = await fetch('https://rheingold-medica-api.mahm-zahran22.workers.dev/admin/messages')
            if (res.ok) {
                const data = await res.json()
                setMessages(data.messages || [])
            }
        } catch (error) {
            console.error('Failed to fetch messages', error)
        } finally {
            setLoading(false)
        }
    }

    if (authLoading) return null

    const filteredMessages = messages.filter(msg =>
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <AdminHeader onLogout={logout} />

            <main className="flex-1 container mx-auto px-6 py-10 max-w-7xl">
                {/* Stats Cards - Enhanced */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden relative group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400"></div>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Inquiries</CardTitle>
                            <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                <MessageSquare className="h-5 w-5 text-blue-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-800">{messages.length}</div>
                            <p className="text-xs text-slate-400 font-medium mt-1">Lifetime messages received</p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden relative group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-amber-300"></div>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500 uppercase tracking-wider">Product Catalog</CardTitle>
                            <div className="p-2 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
                                <Package className="h-5 w-5 text-amber-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-800">4</div>
                            <p className="text-xs text-slate-400 font-medium mt-1">Active products listed</p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300 uppercase tracking-wider">System Status</CardTitle>
                            <RefreshCw className={`h-5 w-5 text-green-400 ${loading ? 'animate-spin' : ''}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-400">Operational</div>
                            <p className="text-xs text-slate-400 font-medium mt-1">API v3.1 Active</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="mb-10">
                    <h2 className="text-xl font-serif text-slate-900 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/admin/products" className="group">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-amber-500 hover:shadow-md transition-all cursor-pointer flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                        <Package className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Manage Products</div>
                                        <div className="text-xs text-slate-500">Edit, add, or remove items</div>
                                    </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                            </div>
                        </Link>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md transition-all cursor-pointer flex items-center justify-between opacity-70">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Review Partners</div>
                                    <div className="text-xs text-slate-500">Coming soon</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Messages Table Section - Enhanced */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
                        <div>
                            <h2 className="text-xl font-serif text-slate-900">Incoming Communications</h2>
                            <p className="text-sm text-slate-500">Manage and review contact inquiries</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input
                                    placeholder="Search by name, email..."
                                    className="pl-9 w-64 bg-white border-slate-200 focus:border-amber-500 focus:ring-amber-500/20"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Button variant="outline" size="icon" onClick={fetchMessages} disabled={loading} className="hover:bg-white hover:text-blue-600 hover:border-blue-200">
                                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                            </Button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 font-medium uppercase tracking-wider text-xs">
                                <tr>
                                    <th className="px-6 py-4">Sender Details</th>
                                    <th className="px-6 py-4">Subject & Preview</th>
                                    <th className="px-6 py-4">Timestamp</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {filteredMessages.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-16 text-center">
                                            <div className="flex flex-col items-center justify-center text-slate-400">
                                                <Mail className="w-12 h-12 mb-4 opacity-20" />
                                                <p className="text-lg font-medium text-slate-500">{loading ? 'Syncing data...' : 'No messages found'}</p>
                                                <p className="text-sm">New inquiries will appear here automatically.</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredMessages.map((msg) => (
                                        <tr key={msg.id} className="hover:bg-slate-50 transition-colors group cursor-pointer" onClick={() => setSelectedMessage(msg)}>
                                            <td className="px-6 py-5 align-top">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-600 font-bold text-lg shrink-0 border border-slate-200">
                                                        {msg.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-slate-900 text-base">{msg.name}</div>
                                                        <div className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                                                            <Mail className="w-3 h-3" /> {msg.email}
                                                        </div>
                                                        {msg.company && (
                                                            <div className="text-xs text-amber-600 font-medium mt-1 bg-amber-50 inline-block px-2 py-0.5 rounded border border-amber-100">
                                                                {msg.company}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 align-top max-w-sm">
                                                <div className="font-medium text-slate-900 mb-1">{msg.subject}</div>
                                                <div className="text-slate-500 line-clamp-2 text-sm leading-relaxed">{msg.message}</div>
                                            </td>
                                            <td className="px-6 py-5 align-top whitespace-nowrap">
                                                <div className="text-slate-600 font-medium">{new Date(msg.timestamp).toLocaleDateString()}</div>
                                                <div className="text-xs text-slate-400 mt-1">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                            </td>
                                            <td className="px-6 py-5 align-top text-right">
                                                <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedMessage(msg);
                                                }}>
                                                    View Details
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Message Detail Modal (Dialog) */}
            <Dialog open={!!selectedMessage} onOpenChange={(open) => !open && setSelectedMessage(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <div className="flex items-center justify-between">
                            <DialogTitle className="text-xl font-serif text-slate-900 border-b border-amber-100 pb-2 w-full">Message Details</DialogTitle>
                        </div>
                        <DialogDescription className="hidden">Details of the selected message</DialogDescription>
                    </DialogHeader>

                    {selectedMessage && (
                        <div className="space-y-6 mt-4">
                            {/* Header Info */}
                            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">From</label>
                                    <div className="font-medium text-slate-900 text-lg">{selectedMessage.name}</div>
                                    <div className="text-sm text-blue-600 hover:underline cursor-pointer flex items-center gap-1 mt-1">
                                        <Mail className="w-3 h-3" />
                                        <a href={`mailto:${selectedMessage.email}`}>{selectedMessage.email}</a>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Date Received</label>
                                    <div className="font-medium text-slate-700">{new Date(selectedMessage.timestamp).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                    <div className="text-sm text-slate-500 mt-1">{new Date(selectedMessage.timestamp).toLocaleTimeString()}</div>
                                </div>
                                {(selectedMessage.phone || selectedMessage.company) && (
                                    <div className="col-span-2 pt-2 border-t border-slate-200 mt-2 flex gap-6">
                                        {selectedMessage.phone && (
                                            <div>
                                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</label>
                                                <div className="text-slate-700">{selectedMessage.phone}</div>
                                            </div>
                                        )}
                                        {selectedMessage.company && (
                                            <div>
                                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Organization</label>
                                                <div className="text-slate-700">{selectedMessage.company}</div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Message Content */}
                            <div>
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Subject</label>
                                <div className="text-lg font-medium text-slate-900 mb-4">{selectedMessage.subject}</div>

                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Message Body</label>
                                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-slate-700 leading-relaxed whitespace-pre-wrap min-h-[150px]">
                                    {selectedMessage.message}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                                <Button variant="outline" onClick={() => setSelectedMessage(null)}>Close</Button>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2" asChild>
                                    <a href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}>
                                        <Mail className="w-4 h-4" />
                                        Reply via Email
                                    </a>
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
