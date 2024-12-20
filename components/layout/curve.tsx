'use client';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {  usePathname } from 'next/navigation';
import { text, curve, translate } from './anim';

const routes: { [key: string]: string } = {
    "/": " Home",
    "/About-Us": " About",
    "/Contact": " Contact",
    "/Careers": " Careers",
    "/Portfolio": " Portfolio",
    "/Services": " Services",
    "/api/auth": " Login"
}

const anim = (variants: any) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    }
}

export default function Curve({ children }: Readonly<{ children: React.ReactNode }>) {
    const router = usePathname();
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize();
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <div className='page curve' >
            <div style={{ opacity: dimensions.width == 0 ? 1 : 0 }} className='background' />
            <motion.p className='routeLabel' {...anim(text)}>
                {routes[router] || ""}.
            </motion.p>
            {dimensions.width != 0 && <SVG {...dimensions} />}
            {
                children
            }
        </div>
    )
}

const SVG = ({ height, width }: Readonly<{ height: number, width: number }>) => {

    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg {...anim(translate)}>
            <motion.path {...anim(curve(initialPath, targetPath))} fill="#59554f" />
        </motion.svg>
    )
}