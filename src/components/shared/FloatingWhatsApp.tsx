'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/utils'

const WHATSAPP_NUMBER = '49163344008'

export default function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false)
    const [showPulse, setShowPulse] = useState(true)

    // Hide pulse after first interaction
    useEffect(() => {
        const timer = setTimeout(() => setShowPulse(false), 10000)
        return () => clearTimeout(timer)
    }, [])

    const handleClick = () => {
        setShowPulse(false)
        setIsOpen(!isOpen)
    }

    const startChat = () => {
        const message = `Hello Rheingold Royal Medica,

I am interested in your pharmaceutical products and would like to know more about:

- Product availability
- Pricing information
- Partnership opportunities

Thank you.`

        const link = generateWhatsAppLink(WHATSAPP_NUMBER, message)
        window.open(link, '_blank', 'noopener,noreferrer')
        setIsOpen(false)
    }

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {/* Pulse Animation */}
                {showPulse && (
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                )}

                <motion.button
                    onClick={handleClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-2xl shadow-green-500/30 flex items-center justify-center"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                            >
                                <X className="w-7 h-7" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                            >
                                <MessageCircle className="w-7 h-7" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Chat Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 w-80"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Rheingold Royal Medica</h3>
                                        <p className="text-sm text-green-100">Typically replies within an hour</p>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-4 bg-gray-50">
                                <div className="bg-white rounded-xl p-4 shadow-sm">
                                    <p className="text-gray-700 text-sm">
                                        👋 Hello! How can we assist you today?
                                    </p>
                                    <p className="text-gray-500 text-xs mt-2">
                                        Click below to start a conversation on WhatsApp.
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="p-4 border-t">
                                <button
                                    onClick={startChat}
                                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all"
                                >
                                    <Send className="w-5 h-5" />
                                    Start Chat
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
