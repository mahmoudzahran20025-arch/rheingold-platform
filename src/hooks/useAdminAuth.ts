'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function useAdminAuth() {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const token = sessionStorage.getItem('admin_token')
        if (!token) {
            router.push('/admin')
        } else {
            setIsAuthenticated(true)
        }
        setIsLoading(false)
    }, [router])

    const logout = () => {
        sessionStorage.removeItem('admin_token')
        router.push('/admin')
    }

    return { isAuthenticated, isLoading, logout }
}
