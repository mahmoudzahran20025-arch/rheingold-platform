'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import TrustBadges from '@/components/shared/TrustBadges'

const contactInfo = [
    {
        icon: Phone,
        title: 'Phone',
        details: '+49 (0) 6100 9999',
        link: 'tel:+4961009999',
        color: 'from-blue-500 to-blue-600',
    },
    {
        icon: Mail,
        title: 'Email',
        details: 'info@rheingold-medica.com',
        link: 'mailto:info@rheingold-medica.com',
        color: 'from-purple-500 to-purple-600',
    },
    {
        icon: MapPin,
        title: 'Address',
        details: 'Höhe Str. 31-33, 61348 Bad Homburg, Germany',
        link: 'https://maps.google.com',
        color: 'from-emerald-500 to-emerald-600',
    },
    {
        icon: Clock,
        title: 'Business Hours',
        details: 'Mon - Fri: 9:00 AM - 6:00 PM CET',
        link: null,
        color: 'from-amber-500 to-amber-600',
    },
]

export default function ContactPage() {
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setLoading(false)
        setSubmitted(true)
    }

    return (
        <div className="page-content min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 relative overflow-hidden">
                {/* Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Get in touch with our team. We are here to answer your questions and discuss partnership opportunities.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Whether you are a pharmacy, distributor, or healthcare provider, we would love to hear from you.
                            </p>

                            {/* Contact Cards */}
                            <div className="space-y-4 mb-8">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                                            >
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                                                    <info.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                        {info.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm">{info.details}</p>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                                                    <info.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                                                    <p className="text-gray-600 text-sm">{info.details}</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* WhatsApp CTA */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <MessageCircle className="w-6 h-6 text-green-600" />
                                    <h3 className="font-bold text-gray-900">Quick Response via WhatsApp</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                    Get an instant response by messaging us on WhatsApp. We typically reply within minutes.
                                </p>
                                <WhatsAppButton size="lg" className="w-full" />
                            </div>

                            {/* Certifications */}
                            <div className="mt-8">
                                <TrustBadges variant="compact" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                                        <Send className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Thank you for contacting us. We will get back to you within 24 hours.
                                    </p>
                                    <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                                    <p className="text-gray-600 mb-8">
                                        Fill out the form below and our team will get back to you within 24 hours.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <Input
                                                    required
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <Input
                                                    type="email"
                                                    required
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <Input
                                                    type="tel"
                                                    placeholder="+49 123 456 7890"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Company Name
                                                </label>
                                                <Input
                                                    placeholder="Your Company"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <Input
                                                required
                                                placeholder="How can we help you?"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <Textarea
                                                required
                                                rows={6}
                                                placeholder="Tell us more about your inquiry..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full" disabled={loading}>
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>

                                        <p className="text-xs text-center text-gray-500">
                                            By submitting this form, you agree to our Privacy Policy and Terms of Service.
                                        </p>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
