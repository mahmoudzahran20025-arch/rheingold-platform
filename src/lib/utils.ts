import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatPrice(price: number | string, currency: 'EUR' | 'USD' | 'EGP' = 'EUR') {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(numericPrice)
}

export function generateWhatsAppLink(phone: string, message: string = '') {
    // Remove non-numeric characters from phone number
    const cleanPhone = phone.replace(/\D/g, '')
    // Default to a common format if empty, but assuming input is valid
    const link = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
    return link
}
