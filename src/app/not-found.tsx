import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="page-content min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* 404 Graphic */}
                    <div className="relative mb-8">
                        <div className="text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-300 leading-none select-none">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                                <Search className="w-14 h-14 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for.
                        It might have been moved or doesn&apos;t exist.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/">
                            <Button size="xl">
                                <Home className="w-5 h-5" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="/products">
                            <Button variant="outline" size="xl">
                                <Search className="w-5 h-5" />
                                Browse Products
                            </Button>
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-4">Quick links:</p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href="/about" className="text-blue-600 hover:underline">About Us</Link>
                            <span className="text-gray-300">•</span>
                            <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
                            <span className="text-gray-300">•</span>
                            <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
