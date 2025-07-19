import Image from 'next/image';
import React from 'react'

interface Props {
    coverImage?: string;
}

const Demo = ({ coverImage = "https://placehold.co/400x600.png" }: Props) => {
  return (
    <div>
        <Image
        src={coverImage}
        alt="Default" 
        fill
        className='rounder-sm object-fill'
        />
    </div>
  )
}

export default Demo