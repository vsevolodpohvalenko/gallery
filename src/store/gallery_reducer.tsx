import React from 'react'
import {Dispatch} from "redux";
import {getImages} from "../api/unsplash_api";
import {ImagesType} from "../components/gallery /gallery";

const initialState = {
    images: []
}

const GET_IMAGES = 'GET_IMAGES'

export const GalleryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_IMAGES:
            return {...state, images: action.payload}
        default:
            return {...state}
    }
}


const actions: { [key: string]: (...args: any) => any } = {
    gotImages: (payload: ImagesType) => ({type: GET_IMAGES, payload})
}

export const getImagesThunk = () => async (dispatch: Dispatch) => {
    try {
        let response = await getImages()
        dispatch(actions.gotImages(response.data.results))
    } catch (error) {
        console.log(error)
    }


}


