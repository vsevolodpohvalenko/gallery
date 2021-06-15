import React, {useState, useEffect} from 'react'
import s from './gallery.module.css'
import {Modal} from "./model_img";
import {motion} from "framer-motion";
import {connect, useDispatch, useSelector} from "react-redux";
import {getImagesThunk} from "../../store/gallery_reducer";
import {AppStateType} from "../../store/store";


const PhotoCard = ({e, setModalImg, setShow}: any) => {
    return <motion.div whileHover={{opacity: 1}} onClick={() => {
        setModalImg(e.urls?.raw)
        setShow(true)
    }} className={s.img_wrap} key={e?.id}>
        <img className={s.image} alt={e.alt_description} src={e.urls?.small}/>
        <div className={s.content}>
            <p>{e.alt_description && e.alt_description[0].toUpperCase() + e.alt_description?.split(" ").slice(0, 3).join(" ").slice(1)}</p>
            <p>{e.user?.name}</p>
        </div>

    </motion.div>
}

export type ImagesType = Array<{ id: string, user: { name: string }, alt_description: string, urls: { raw: string, small: string } }>


const Gallery = () => {
    debugger
    const [show, setShow] = useState<boolean>(false)
    const [modalImg, setModalImg] = useState<string | undefined>(undefined)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getImagesThunk())
    }, [])

    const data = useSelector((state:AppStateType) => state.Gallery.images)

    return <div>
        <h2>Gallery</h2>
        <div className={s.img_grid}>{data?.map((e:{ id: string, user: { name: string }, alt_description: string, urls: { raw: string, small: string } }) =>
            <PhotoCard e={e} setModalImg={setModalImg} setShow={setShow}/>)}
        </div>
        {show && <Modal src={modalImg} setShow={setShow}/>}
    </div>
}
export default Gallery

