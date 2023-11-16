import {useSWR} from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useQuery (query) {
    const { data, error, isLoading } = useSWR(() => "https://api.unsplash.com/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs&page=1&query=" + query, fetcher)
   
    return {
      result: data,
      isLoading,
      isError: error
    }
  }