'use client'

import { useState } from 'react'
import styles from './page.module.css'
import SearchBar from '@/components/search-bar'
import QueryResults from '@/components/query-results'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  // const search = async (query: string) => {
  //   "use server"
  //   const request = new Request(
  //     "https://api.unsplash.com/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs&page=1&query=" + query,
  //     {
  //       method: "GET"
  //     }
  //   )

  //   fetch(request)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       } else {
  //         console.log(response);
  //         throw new Error("Something went wrong on API server!");
  //       }
  //     })
  //     .then((response) => {
  //       console.debug(response);
  //       // …
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //   return {}
  // }
  
  return (
    <main className={styles.main}>
      <SearchBar searchHandler={setSearchQuery} />
      <QueryResults query={searchQuery}/>
    </main>
  )
}
