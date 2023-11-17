"use client"

import Image from "next/image";
import ImageCardPopup from "./image-card--popup";
import { useEffect, useState } from "react";
import style from "./index.module.css";

interface IPropImageCard {
    src: string,
    alt: string,
    miniSrc: string
}

export default function ImageCard({ src, alt, miniSrc }: IPropImageCard) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.getElementById("queryResults")?.classList.add(style.unscrolled)
            console.log("unscrolled")
        } else {
            if (document.getElementById("queryResults")?.classList.contains(style.unscrolled)) {
                document.getElementById("queryResults")?.classList.remove(style.unscrolled)
            }
        }
    }, [isOpen])
    return (
        <>
            <Image
                src={miniSrc}
                width={204}
                height={204}
                alt={alt}
                onClick={() => setIsOpen(true)}
                className={style.imageCard}
            />
            <ImageCardPopup src={src} alt={alt} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>

    )
}