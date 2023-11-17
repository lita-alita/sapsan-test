"use client"

import ImageCard from "./image-card"
import useSWR from "swr"
import style from "./index.module.css"
import spiner from "@/assets/spiner.svg"
import Image from "next/image"
import Pagination from "./pagination"
import { useState } from "react"

interface IPropQueryResults {
    query: string
}

const fetcher = (...args: any) => fetch(args).then(res => res.json())

export default function QueryResults({ query }: IPropQueryResults) {
    const [page, setPage] = useState(1)
    const { result, isLoading, isError } = useQuery(query === "" ? null : query)

    function useQuery (query: string | null) {
        const { data, error, isLoading } = useSWR(query ? `https://api.unsplash.com/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs&page=${page}&lang=ru&per_page=24&query=${query}` : null, fetcher)

        return {
            result: data,
            isLoading,
            isError: error
        }
    }
    if (result) return (
        <span>
            <div className={style.queryResults} id="queryResults">
                {result.results.map((res: any) => {
                    return <ImageCard src={res.urls.full} alt={res.alt_description} miniSrc={res.urls.small} key={res.id} />
                })}
            </div>
            <Pagination onPageChange={setPage} currentPage={page} />
        </span>

    )

    if (isLoading) {
        return (
            <span>
                <Image className={style.spiner} src={spiner} alt="" width={32} height={32} />
            </span>

        )
    }

    if (isError) {
        return <p className={style.errorMessage}>К сожалению, поиск не дал результатов</p>
    }
    return <div></div>
}