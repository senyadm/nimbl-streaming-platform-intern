import React, { ReactNode, useEffect } from 'react'
import Router from 'next/router'
import { UseShoppingCart } from '@/context/AuthContext'

const withAuthorization = (Component: React.ComponentType<{}>) => {
    const AuthHOC = (props: any): ReactNode => {
        const { isAuth } = UseShoppingCart()
        // useEffect(() => {
        //     if (!isAuth) {
        //         Router.push('/login')
        //     }
        // }, [props.isAuthenticated])

        return <Component {...props} />
    }

    AuthHOC.displayName = `withAuth(${Component.displayName || Component.name})`
    return AuthHOC
}

export default withAuthorization
