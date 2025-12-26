import { ShieldCheck, Award, BadgeCheck, FileCheck } from 'lucide-react'

const certifications = [
    {
        id: 'eda',
        name: 'EDA Certified',
        description: 'Egyptian Drug Authority',
        icon: ShieldCheck,
        color: 'from-emerald-500 to-emerald-600',
    },
    {
        id: 'gmp',
        name: 'GMP Compliant',
        description: 'Good Manufacturing Practice',
        icon: Award,
        color: 'from-blue-500 to-blue-600',
    },
    {
        id: 'iso',
        name: 'ISO 9001:2015',
        description: 'Quality Management',
        icon: BadgeCheck,
        color: 'from-purple-500 to-purple-600',
    },
    {
        id: 'ema',
        name: 'EMA Compliant',
        description: 'European Medicines Agency',
        icon: FileCheck,
        color: 'from-amber-500 to-amber-600',
    },
]

interface TrustBadgesProps {
    variant?: 'default' | 'compact' | 'large'
    showLabels?: boolean
    className?: string
}

export default function TrustBadges({
    variant = 'default',
    showLabels = true,
    className = '',
}: TrustBadgesProps) {
    if (variant === 'compact') {
        return (
            <div className={`flex items-center gap-3 ${className}`}>
                {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}
                        title={cert.name}
                    >
                        <cert.icon className="w-5 h-5 text-white" />
                    </div>
                ))}
            </div>
        )
    }

    if (variant === 'large') {
        return (
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
                {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        className="flex flex-col items-center p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg mb-4`}
                        >
                            <cert.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-center">{cert.name}</h3>
                        <p className="text-sm text-gray-500 text-center mt-1">{cert.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
            {certifications.map((cert) => (
                <div
                    key={cert.id}
                    className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-200"
                >
                    <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center`}
                    >
                        <cert.icon className="w-4 h-4 text-white" />
                    </div>
                    {showLabels && (
                        <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                    )}
                </div>
            ))}
        </div>
    )
}
