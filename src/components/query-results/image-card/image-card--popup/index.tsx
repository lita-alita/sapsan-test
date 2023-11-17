import Image from "next/image";
import closeIcon from "@/assets/Close.svg"
import { Dispatch, SetStateAction, useEffect } from "react";
import style from "./index.module.css"
interface IPropImageCardPopup {
    src: string,
    alt: string,
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function ImageCardPopup({ src, alt, isOpen, setIsOpen }: IPropImageCardPopup) {
    return (
        <div className={style.imageCardPopup + (isOpen ? " " + style.active : "")}>
            <Image width={767} height={760} alt={alt} src={src} className={style.imageCardPopup__image}/>
            <div
                className={style.closeButton}
                onClick={() => setIsOpen(false)}>
                <Image width={24} height={24} alt="" src={closeIcon} />
            </div>
        </div>
    )
}