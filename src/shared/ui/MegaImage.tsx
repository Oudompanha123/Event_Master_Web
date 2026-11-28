import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"

const getBlur = async (src) => {
    try {
        const res = await fetch(src)
        if (!res.ok) return null
        const buffer = Buffer.from(await res.arrayBuffer())
        const { base64 } = await getPlaiceholder(buffer)
        return base64
    } catch {
        return null
    }
}

export const MegaImage = async ({ src, className }) => {
    const base64 = await getBlur(src)

    return (
        <div>
            <Image
                src={src}
                alt="image-from-mega"
                fill
                {...(base64 ? { placeholder: "blur", blurDataURL: base64 } : {})}
                className={`${className} object-cover`}
            />
        </div>
    )
}
