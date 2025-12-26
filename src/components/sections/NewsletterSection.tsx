'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Send } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewsletterSection() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')

        try {
            const res = await fetch('https://rheingold-medica-api.mahm-zahran22.workers.dev/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            if (res.ok) {
                setStatus('success')
                setEmail('')
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        } finally {
            if (status !== 'success') {
                setTimeout(() => setStatus('idle'), 3000)
            }
        }
    }

    return (
        <section className="py-24 bg-blue-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Stay Updated with Rheingold
                            </h2>
                            <p className="text-blue-200 mb-8 max-w-lg mx-auto lg:mx-0">
                                Subscribe to our newsletter to receive the latest updates on nutraceuticals, regulatory changes, and exclusive partner offers.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 h-12 bg-blue-800/50 border-blue-700 text-white placeholder:text-blue-300 focus:border-amber-500"
                                    required
                                />
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="h-12 px-8 bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-lg shadow-amber-500/25"
                                    disabled={status === 'loading' || status === 'success'}
                                >
                                    {status === 'loading' ? (
                                        'Sending...'
                                    ) : status === 'success' ? (
                                        'Subscribed!'
                                    ) : (
                                        <>
                                            Subscribe
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            </form>

                            {status === 'error' && (
                                <p className="text-sm text-red-300 mt-2 text-center lg:text-left">
                                    Subscription failed. Please try again.
                                </p>
                            )}

                            <p className="text-xs text-blue-300 mt-4 text-center lg:text-left">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>

                        {/* Illustration/Icon */}
                        <div className="hidden lg:block relative">
                            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-3 flex items-center justify-center shadow-2xl shadow-blue-500/20">
                                <Send className="w-20 h-20 text-white -rotate-3" />
                            </div>
                            <div className="absolute inset-0 border-2 border-white/20 rounded-2xl -rotate-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
