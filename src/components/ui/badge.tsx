import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-blue-600 text-white shadow-sm",
                secondary:
                    "border-transparent bg-amber-500 text-white shadow-sm",
                success:
                    "border-transparent bg-emerald-500 text-white shadow-sm",
                destructive:
                    "border-transparent bg-red-500 text-white shadow-sm",
                outline:
                    "border border-gray-300 text-gray-700 bg-white",
                eda:
                    "border-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-sm",
                gmp:
                    "border-transparent bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm",
                iso:
                    "border-transparent bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm",
                premium:
                    "border-transparent bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
