import React, { useState, useEffect } from 'react'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { UseShoppingCart } from '../context/AuthContext'
import styles from '../styles/Login.module.scss'
import Script from 'next/script'
import MetaLogo from '@/components/AnimatedLogo'
import Router from 'next/router'
import purple from '@/components/AnimatedLogo/beta-fox.json'
import { SubmitHandler, useForm } from 'react-hook-form'
declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider
    }
}

type Inputs = {
    login: string,
    password: string,
};

const LoginPage = () => {
    const [account, setAccount] = useState<string | null>(null)
    const [login, setLogin] = useState<Inputs | null>(null)
    const { Auth, isAuth } = UseShoppingCart()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit } = useForm<Inputs>();


    useEffect(() => {
        if (account) {
            Auth(account)
            //this routing incorrect, because routing should happen when they passed the Authorization
            Router.push('/')
        }
        else if(isAuth){
            Router.push('/')
        }
    }, [account, login])

    const handleLogin = async () => {
        setIsLoading(true)
        try {
            if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.enable()
                setAccount(accounts[0])
            }
            if (document.fullscreenEnabled) {
                document.documentElement.requestFullscreen()
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    const handleLogout = async () => {
        return await setAccount(null)
    }

    const onSubmit: SubmitHandler<Inputs> = data => {
        if(data?.login && data?.password){
            Auth(account, data)
            setLogin({login:data?.login, password:data?.password})
        }
    };

    return (
        <>
            <Script src="../components/AnimatedLogo/index.js" />
            <div className={`${styles.loginContainer} login_wrapper`}>
                <div className={styles.metaLogo}>
                    <MetaLogo meshJson={purple} />
                </div>
                <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input_wrapper">
                        <label>Login</label>
                        <input type="text" placeholder="Login" {...register("login")}/>
                    </div>
                    <div className="input_wrapper">
                        <label>Password</label>
                        <input type="password" placeholder="Password" {...register("password")}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                {account === null ? (
                    <button
                        onClick={handleLogin}
                        disabled={isLoading}
                        className="btn_meta"
                    >
                        {isLoading ? 'Loading...' : 'Log in with MetaMask'}
                    </button>
                ) : (
                    <button onClick={handleLogout} disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Log out'}
                    </button>
                )}
                {account !== null && <p>Your Ethereum address: {account}</p>}
            </div>
        </>
    )
}

export default LoginPage
