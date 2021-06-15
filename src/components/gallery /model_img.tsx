import React from 'react'
import s from './gallery.module.css'
import {motion} from 'framer-motion'
export const Modal = ({src, setShow}: any) => {

    const handleClick = (e:any) => {
        e.target.classList.contains('marker') && setShow(undefined)
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} onClick={handleClick} className={[s.background, 'marker'].join(" ")}>
            <motion.img initial={{y: '-100vh'}} animate = {{y: 0}} src={src} alt={'closer look'}/>
        </motion.div>
    )
}
