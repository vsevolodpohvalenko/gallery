import React, { Suspense} from 'react'
import {Preloader} from "../preloader/preloader";

export const WithSuspense = (Component:any) => {
    return (props:any) => {
        return <Suspense fallback={<Preloader/>}><Component {...props}/></Suspense>
    }
}
