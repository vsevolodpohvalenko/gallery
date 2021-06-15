import React from 'react'
import s from "./preloader.module.css"
import preloader from './preloader.gif'
export const Preloader = () => {

    return <img alt="Altight" className={s.preloader} src={preloader}/>
}