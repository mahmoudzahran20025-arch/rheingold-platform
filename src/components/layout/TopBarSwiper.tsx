'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

const items = [
    { icon: Phone, text: '+49 (0) 6100 9999', href: 'tel:+4961009999' },
    { icon: Mail, text: 'info@rheingold-medica.com', href: 'mailto:info@rheingold-medica.com' },
    { icon: MapPin, text: 'Bad Homburg, Germany', href: '#' },
    { icon: CheckCircle, text: 'Verified B2B Partner', href: '#' }
]

export default function TopBarSwiper() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    const CurrentItem = items[index]

    return (
        <div className="h-6 flex items-center justify-center overflow-hidden relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 absolute"
                >
                    <CurrentItem.icon className="w-3 h-3 text-amber-400" />
                    <span className="font-medium">{CurrentItem.text}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
