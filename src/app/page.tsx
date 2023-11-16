'use client'

import { useState } from 'react'
import styles from './page.module.css'
import SearchBar from '@/components/search-bar'
import QueryResults from '@/components/query-results'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  
  return (
    <main className={styles.main}>
      <SearchBar searchHandler={setSearchQuery} />
      <QueryResults query={searchQuery}/>
    </main>
  )
}
