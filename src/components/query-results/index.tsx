"use client"

import ImageCard from "./image-card"
import useSWR from "swr"
import style from "./index.module.css"
import spiner from "@/assets/spiner.svg"
import Image from "next/image"
import Pagination from "./pagination"
import { useEffect, useState } from "react"
import { flushSync } from 'react-dom';

interface IPropQueryResults {
    query: string
}

interface IPropResult {
    result: any,
    isLoading: boolean,
    isError: boolean
}

const fetcher = (...args: any) => fetch(args).then(res => res.json())

export default function QueryResults({ query }: IPropQueryResults) {
    const [page, setPage] = useState(1)
    const [data, setData] = useState<any[]>([])
    const { result, isLoading, isError } = useQuery(query === "" ? null : `https://api.unsplash.com/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs&page=${page}&lang=ru&per_page=24&query=${query}`)

    useEffect(() => {
        window.addEventListener("scroll", ()=>scrollHandler(page))
        return function () {
            window.removeEventListener("scroll", ()=>scrollHandler(page))
        }
    }, [])

    useEffect(() => {
        if (result) setData([...data, ...result?.results])
    }, [result, page])

    function useQuery(query: string | null): IPropResult {
        const { data, error, isLoading } = useSWR(query, fetcher)
        return {
            result: data,
            isLoading,
            isError: error
        }
    }

    const scrollHandler = (pageCurrent:number) => {
        let height = document.body.offsetHeight
        let screenHeight = window.innerHeight
        let scrolled = window.scrollY

        const position = scrolled + screenHeight

        const threshold = height - screenHeight / 4
        if (position >= threshold) {
            flushSync(()=>setPage((page)=>page+1))
        }
    }

    if (result) return (
        <span>
            <div
                className={style.queryResults}
                id="queryResults"
            // onScroll={(e) => {
            //     scrollHandler()
            // }}
            >
                {data.map((res: any) => {
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