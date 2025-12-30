'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { generateWhatsAppLink } from '@/lib/utils'

interface WhatsAppButtonProps {
    phoneNumber?: string
    message?: string
    productName?: string
    className?: string
    size?: 'default' | 'sm' | 'lg' | 'xl'
    showText?: boolean
    label?: string
}

export default function WhatsAppButton({
    phoneNumber = '491633344008', // Updated to correct global number
    message,
    productName,
    className,
    size = 'default',
    showText = true,
    label
}: WhatsAppButtonProps) {
    const defaultMessage = productName
        ? `Hello Rheingold Royal Medica,\n\nI am interested in your product: ${productName}\n\nPlease provide me with more information about:\n- Pricing and availability\n- Minimum order quantity\n- Delivery options\n\nThank you.`
        : `Hello Rheingold Royal Medica,\n\nI am interested in your pharmaceutical B2B portfolio.\n\nPlease contact me regarding distribution opportunities.\n\nThank you.`

    const finalMessage = message || defaultMessage

    const handleClick = () => {
        const link = generateWhatsAppLink(phoneNumber, finalMessage)
        window.open(link, '_blank', 'noopener,noreferrer')
    }

    return (
        <Button
            variant="whatsapp"
            size={size}
            onClick={handleClick}
            className={className}
        >
            <MessageCircle className="w-5 h-5 mr-2" />
            {showText && <span>{label || 'Contact via WhatsApp'}</span>}
        </Button>
    )
}
