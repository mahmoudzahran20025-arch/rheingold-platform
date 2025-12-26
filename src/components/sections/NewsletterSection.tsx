'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewsletterSection() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setLoading(false)
        setSuccess(true)
        setEmail('')
        setTimeout(() => setSuccess(false), 5000)
    }

    return (
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
            {/* Decorative Elements - Dots pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center">
                            <Mail className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Stay Updated on{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                                Nutraceuticals
                            </span>
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Get the latest product updates, industry insights, and exclusive offers for healthcare professionals.
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="relative"
                    >
                        {success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-emerald-500/20 border border-emerald-400/30"
                            >
                                <CheckCircle className="w-8 h-8 text-emerald-400" />
                                <div className="text-left">
                                    <p className="text-lg font-semibold text-white">Successfully Subscribed!</p>
                                    <p className="text-emerald-200">Thank you for joining our newsletter.</p>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="flex flex-col sm:flex-row gap-4 p-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-1 h-14 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500 text-lg"
                                />
                                <Button
                                    type="submit"
                                    size="xl"
                                    disabled={loading}
                                    className="h-14 px-8 bg-emerald-500 hover:bg-emerald-600"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Subscribing...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Subscribe
                                        </>
                                    )}
                                </Button>
                            </div>
                        )}
                    </motion.form>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-sm text-blue-200"
                    >
                        By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
