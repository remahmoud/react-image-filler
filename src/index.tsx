import React from 'react'

interface PlaceholderProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
    width?: number
    height?: number
}

export default function Placeholder({ width = 100, height = 100, ...props }: PlaceholderProps) {
    const [src, setSrc] = React.useState('')

    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('width and height must be a number')
    }

    if (width <= 0 || height <= 0) {
        throw new Error('width and height must be greater than 0')
    }
    React.useEffect(() => {
        // create a canvas element
        const image = document.createElement('canvas')

        // set canvas size
        image.width = Number(width)
        image.height = Number(height)

        // create a 2d context
        const ctx = image.getContext('2d')

        // draw placeholder
        if (ctx) {
            ctx.fillStyle = '#ddd'
            ctx.fillRect(0, 0, width, height)

            ctx.font = `${width / 10}px Arial`
            ctx.fillStyle = '#6a6a6a'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText('Placeholder', width / 2, height / 2)
        }

        // set canvas as image src
        setSrc(image.toDataURL())

        return () => {
            image.remove()
        }
    }, [width, height])

    return <img src={src} width={width} height={height} {...props} />
}
