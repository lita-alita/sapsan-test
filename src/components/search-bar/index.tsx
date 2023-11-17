'use client'

import { useState } from "react"
import style from "./index.module.css"
import Image from "next/image"
import searchIco from "./search-ico.png"
interface IPropSearchBar {
    searchHandler: Function
}

export default function SearchBar({ searchHandler }: IPropSearchBar) {
    const [searchQuery, setSearchQuery] = useState("")
    return (
        <div className={style.searchBar} >
            <span className={style.searchBar_inputBlock}>
                <Image src={searchIco} width={24} height={24} alt="" />
                <input
                    className={style.searchBar_inputBlock__input}
                    placeholder="Телефоны, яблоки, груши..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}>
                </input>
            </span>

            <button
                className={style.searchBar_inputBlock__button}
                onClick={(e) => {
                    e.currentTarget.parentElement?.style.setProperty("height", "auto") 
                    e.currentTarget.parentElement?.style.setProperty("align-self", "flex-start") 
                    e.currentTarget.parentElement?.style.setProperty("padding-left", "0") 
                    e.currentTarget.parentElement?.style.setProperty("justify-content", "stretch") 
                    searchHandler(searchQuery)
                }}>Искать</button>
        </div>
    )
}