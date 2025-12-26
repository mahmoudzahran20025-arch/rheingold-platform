import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs)
}

export function formatPrice(price: number, currency: string = 'EUR'): string {
    const symbols: Record<string, string> = {
        EUR: '€',
        USD: '$',
        EGP: 'EGP ',
    }
    return `${symbols[currency] || ''}${price.toFixed(2)}`
}

export function generateWhatsAppLink(phoneNumber: string, message: string): string {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}
