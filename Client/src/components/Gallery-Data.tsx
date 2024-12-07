import React from 'react'

interface InterfaceData{
    id: number,
    pics: string,
    title?: string
}

const Data: InterfaceData = [
    {
        id: 1,
        pics: 'https://',
        title: 'Nice page picture'
    }
]
console.log(Data)
console.log(typeof(Data))
const Gallery_Data = () => {
  return (
    <div>

    </div>
  )
}

export default Gallery_Data
