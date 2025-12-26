import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
    title: 'Blog - Industry Insights & News',
    description: 'Stay updated with the latest news on pharmaceutical imports, GMP compliance, EDA regulations, and nutraceutical industry insights from Rheingold Royal Medica.',
}

const featuredPost = {
    title: 'The Importance of GMP in Pharmaceutical Distribution',
    slug: 'gmp-compliance-egypt',
    excerpt: 'Rheingold Royal Medica GmbH is fully committed to European GMP standards recognized by Egypt\'s EDA. Learn about key benefits including 100% product quality assurance and regulatory risk reduction.',
    date: 'December 26, 2025',
    readTime: '5 min read',
    category: 'Compliance',
    author: 'Rheingold Team',
}

const posts = [
    {
        title: 'German Pharmaceuticals in Egypt: A Comprehensive Guide',
        slug: 'german-pharmaceuticals-egypt-guide',
        excerpt: 'Everything you need to know about importing German pharmaceutical products to Egypt, including EDA requirements and documentation.',
        date: 'December 20, 2025',
        readTime: '8 min read',
        category: 'Import Guide',
    },
    {
        title: 'Safe Purchasing Guide for Pharmacies',
        slug: 'safe-purchasing-guide-pharmacies',
        excerpt: 'Best practices for pharmacies when purchasing nutraceuticals and pharmaceuticals from international suppliers.',
        date: 'December 15, 2025',
        readTime: '6 min read',
        category: 'Best Practices',
    },
    {
        title: 'EDA Updates 2025: What Importers Need to Know',
        slug: 'eda-updates-2025',
        excerpt: 'Latest regulatory updates from the Egyptian Drug Authority and how they affect pharmaceutical imports.',
        date: 'December 10, 2025',
        readTime: '4 min read',
        category: 'Regulations',
    },
    {
        title: 'Nutraceuticals Market Growth in MENA Region',
        slug: 'nutraceuticals-mena-market-growth',
        excerpt: 'Analysis of the growing demand for premium nutraceuticals in Egypt and the wider MENA region.',
        date: 'December 5, 2025',
        readTime: '7 min read',
        category: 'Market Insights',
    },
    {
        title: 'Quality Assurance in Pharmaceutical Supply Chain',
        slug: 'quality-assurance-supply-chain',
        excerpt: 'How Rheingold Royal Medica ensures product quality from European manufacturers to Egyptian pharmacies.',
        date: 'November 28, 2025',
        readTime: '5 min read',
        category: 'Quality',
    },
]

const categories = [
    { name: 'All Posts', count: 6 },
    { name: 'Compliance', count: 2 },
    { name: 'Market Insights', count: 1 },
    { name: 'Import Guide', count: 1 },
    { name: 'Regulations', count: 1 },
    { name: 'Best Practices', count: 1 },
]

export default function BlogPage() {
    return (
        <div className="page-content min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6">
                            Industry Insights
                        </span>
                        <h1 className="text-5xl font-bold mb-6">Blog & Resources</h1>
                        <p className="text-xl text-blue-100">
                            Expert insights on pharmaceutical imports, GMP compliance, EDA regulations, and nutraceutical industry trends.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Featured Post */}
                        <Link href={`/blog/${featuredPost.slug}`}>
                            <Card className="mb-12 overflow-hidden group hover:shadow-xl transition-shadow">
                                <div className="grid md:grid-cols-2">
                                    <div className="h-64 md:h-auto bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                                        <span className="text-6xl font-bold text-white/20">GMP</span>
                                    </div>
                                    <CardContent className="p-8 flex flex-col justify-center">
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4 w-fit">
                                            {featuredPost.category}
                                        </span>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {featuredPost.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readTime}
                                            </span>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </Link>

                        {/* Posts Grid */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`}>
                                    <Card className="h-full group hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6">
                                            <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold mb-4">
                                                {post.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8">
                            <ul className="space-y-2">
                                {categories.map((cat) => (
                                    <li key={cat.name}>
                                        <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-blue-600 transition-colors">
                                            <span>{cat.name}</span>
                                            <span className="text-xs text-gray-400">{cat.count}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                            <h3 className="font-bold mb-2">Become a Partner</h3>
                            <p className="text-sm text-blue-100 mb-4">
                                Access wholesale prices and exclusive products.
                            </p>
                            <Link href="/partners">
                                <Button size="sm" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* Verify */}
                        <div className="mt-8 p-4 bg-gray-100 rounded-xl">
                            <p className="text-xs text-gray-500 mb-2">Verify our company:</p>
                            <div className="flex flex-wrap gap-2">
                                <a href="https://www.northdata.com/Rheingold+Royal+Medica+GmbH" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">NorthData</a>
                                <span className="text-gray-300">•</span>
                                <a href="https://www.dnb.com/business-directory/company-profiles.rheingold_royal_medica_gmbh" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">D&B</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
