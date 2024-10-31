import React, { useRef, useEffect } from 'react'
import ModelViewer  from '@metamask/logo'
import { MetaMaskLogo } from '@metamask/logo';

const MetaLogo = ({ meshJson }: any) => {
    const metaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let widthFox = 300
        let heightFox = widthFox * 0.8
        let followMouse = true

        const viewer = ModelViewer({
            pxNotRatio: true,
            width: widthFox,
            height: heightFox,
            followMouse: followMouse,
            slowDrift: false,
            meshJson,
        })

        if (
            metaRef &&
            metaRef.current &&
            metaRef.current.children.length === 0
        ) {
            metaRef.current.appendChild(viewer.container)
            metaRef.current.style.fill = "red"
        }

        return () => {
            if (
                metaRef &&
                metaRef.current &&
                metaRef.current.children.length > 0
            )
                metaRef.current.removeChild(metaRef.current.children[0])
        }
    }, [])

    return (<>
        <div style={{ lineHeight: '0' }} className={"logo"} ref={metaRef} />
    </>)
}

export default MetaLogo
