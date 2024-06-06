import axios from "axios"

export const post = (url, data) => {
    return axios.post(url, data)
}

export const get = (url, params) => {
    console.log(params,url, "dski")
    return axios.get(url, params);
}

export const put = (url, data) => {
    return axios.put(url, data)
}

export const delet = (url) => {
    return axios.delete(url)
}