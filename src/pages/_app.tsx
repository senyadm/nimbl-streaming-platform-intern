import Layout from '@/components/Layout'
import store, { RootState } from '@/store/store'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { AuthProvider } from '@/context/AuthContext'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import LoginPage from '@/pages/login'

export default function App({ Component, pageProps }: AppProps) {

    return (
        <AuthProvider>


            <Provider store={store}>
                {/* <Layout> */}
                    <Component {...pageProps} />
                {/* </Layout> */}
            </Provider>
        </AuthProvider>
    )
}
