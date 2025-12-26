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
}

export default function WhatsAppButton({
    phoneNumber = '4961009999',
    message,
    productName,
    className,
    size = 'default',
    showText = true,
}: WhatsAppButtonProps) {
    const defaultMessage = productName
        ? `Hello Rheingold Royal Medica,\n\nI am interested in your product: ${productName}\n\nPlease provide me with more information about:\n- Pricing and availability\n- Minimum order quantity\n- Delivery options\n\nThank you.`
        : `Hello Rheingold Royal Medica,\n\nI am interested in your pharmaceutical products.\n\nPlease contact me at your earliest convenience.\n\nThank you.`

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
            <MessageCircle className="w-5 h-5" />
            {showText && <span>Contact via WhatsApp</span>}
        </Button>
    )
}
