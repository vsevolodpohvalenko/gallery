import React from "react";
import axios, {AxiosPromise} from 'axios'


const url = `https://api.unsplash.com/`


export const config = {
    headers: {
        'Content-Type' : 'application/json'
    }
}

export const instance = axios.create({
    baseURL: url,
})