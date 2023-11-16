import Image from "next/image";

interface IPropImageCard {
    src: string,
    alt: string,
    miniSrc: string
}

export default function ImageCard({ src, alt, miniSrc}: IPropImageCard) {
    return (
        <Image
            src={miniSrc}
            width={204}
            height={204}
            alt={alt}
        />
    )
}