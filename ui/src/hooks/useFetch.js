import useSWR from "swr";
import api from "../services/api";


const fetcher = url => api.get(url).then(res => res.data)


export const useFetch = (endpoint) => {
    const {data, error, isLoading} = useSWR(endpoint, fetcher)


    return {
        data,
        isLoading,
        error,
    }
}