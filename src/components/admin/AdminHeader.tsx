'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut, LayoutDashboard, Package, Users, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'

interface AdminHeaderProps {
    onLogout: () => void
}

export default function AdminHeader({ onLogout }: AdminHeaderProps) {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const isActive = (path: string) => pathname === path

    return (
        <header className="bg-white border-b-4 border-amber-500 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo & Brand */}
                <div className="flex items-center gap-4">
                    <Logo className="scale-90 origin-left" showText={false} />
                    <div className="flex flex-col">
                        <span className="text-xl font-serif text-slate-800 tracking-wide font-bold">Rheingold</span>
                        <span className="text-[10px] text-amber-600 font-bold uppercase tracking-[0.3em]">Royal Administration</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2">
                    <Link href="/admin/dashboard">
                        <Button
                            variant="ghost"
                            className={`text-sm font-medium tracking-wide transition-all ${isActive('/admin/dashboard')
                                ? 'text-amber-600 bg-amber-50 font-bold'
                                : 'text-slate-500 hover:text-amber-600 hover:bg-slate-50'}`}
                        >
                            <LayoutDashboard className="w-4 h-4 mr-2" />
                            Dashboard
                        </Button>
                    </Link>
                    <Link href="/admin/products">
                        <Button
                            variant="ghost"
                            className={`text-sm font-medium tracking-wide transition-all ${isActive('/admin/products')
                                ? 'text-amber-600 bg-amber-50 font-bold'
                                : 'text-slate-500 hover:text-amber-600 hover:bg-slate-50'}`}
                        >
                            <Package className="w-4 h-4 mr-2" />
                            Products
                        </Button>
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        System Live
                    </div>
                    <Button variant="ghost" size="sm" onClick={onLogout} className="text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <Button variant="ghost" size="icon" className="md:hidden text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-50 border-t border-slate-200 p-4 absolute w-full shadow-xl">
                    <nav className="flex flex-col gap-2">
                        <Link href="/admin/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                            <div className={`p-3 rounded-lg flex items-center gap-3 ${isActive('/admin/dashboard') ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-white'}`}>
                                <LayoutDashboard className="w-5 h-5" />
                                <span className="font-medium">Dashboard</span>
                            </div>
                        </Link>
                        <Link href="/admin/products" onClick={() => setIsMobileMenuOpen(false)}>
                            <div className={`p-3 rounded-lg flex items-center gap-3 ${isActive('/admin/products') ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-white'}`}>
                                <Package className="w-5 h-5" />
                                <span className="font-medium">Products</span>
                            </div>
                        </Link>
                        <div className="h-px bg-slate-200 my-2"></div>
                        <button onClick={onLogout} className="p-3 rounded-lg flex items-center gap-3 text-red-600 hover:bg-red-50 w-full text-left">
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )
}
