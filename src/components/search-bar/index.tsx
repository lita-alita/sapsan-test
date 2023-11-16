'use client'

import { useState } from "react"
interface PropSearchBar {
    searchHandler: Function
}

export default function SearchBar({ searchHandler }: PropSearchBar) {
    const [searchQuery, setSearchQuery] = useState("")
    return (
        <div>
            <input
                placeholder="Телефоны, яблоки, груши..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}>
            </input>
            <button onClick={() => searchHandler(searchQuery)}>Искать</button>
        </div>
    )
}