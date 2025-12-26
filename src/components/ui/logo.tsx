import { cn } from '@/lib/utils'

interface LogoProps {
    className?: string
    showText?: boolean
    variant?: 'light' | 'dark'
}

export default function Logo({ className, showText = true, variant = 'dark' }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            {/* Icon Mark */}
            <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg shadow-blue-500/20 transform rotate-3 transition-transform group-hover:rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform -rotate-3 transition-transform group-hover:rotate-0">
                    <span className="text-white font-bold text-xl">R</span>
                </div>
            </div>

            {/* Text Mark */}
            {showText && (
                <div className="flex flex-col">
                    <h1 className={cn("text-xl font-bold leading-none", variant === 'dark' ? "text-gray-900" : "text-white")}>
                        Rheingold
                    </h1>
                    <p className="text-[10px] font-semibold text-blue-500 tracking-wider uppercase mt-0.5">
                        Royal Medica
                    </p>
                </div>
            )}
        </div>
    )
}
