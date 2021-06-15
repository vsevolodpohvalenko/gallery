import {instance} from "./api";

const accessKey = `pyAi5C-V0aJEVXL-B4qs06XTVaulEHP4oWaJoJTHohQ`
const query = 'New York'
const page= 53
const per_page= 18

export const getImages = async () => {
    return instance.get(`search/photos?query=${query}&page=${page}&per_page=${per_page}&client_id=${accessKey}`)
}