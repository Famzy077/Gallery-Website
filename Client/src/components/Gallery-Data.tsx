// import React from 'react'

import { useState } from "react"
import Axios from 'axios'

// interface InterfaceData{
//     id?: number,
//     pics?: string,
//     title?: string
// }

// eslint-disable-next-line react-refresh/only-export-components
const Data: {id?: number, pics?: string, title?: string}[] = [
    {
        id: 1,
        pics: 'https://',
        // title: 'Nice page picture'
    },
    {
        id: 2,
        pics: 'https://',
        title: 'Amazing page picture'
    },
    {
        id: 3,
        pics: 'https://',
        title: 'Awesome page picture'
    },
    {
        id: 4,
        pics: 'https://',
        title: 'Natural Green Life Picture'
    },
    {
        id: 5,
        pics: 'https://',
        title: 'Germs page picture'
    },
]
// console.log(Data)
const Gallery_Data = () => {

  const [files, setFiles] = useState()
  // const [errorMSG, SetErrorMSG] = useState('')
  const handleUpload = () => {

  }
  const handleFile = (e) => {
      setFiles(e.target.files[0])
  }
  return (
    <div>
        <main>
            <section className="bg-blue-gray-300  grid grid-cols-3 mx-20 p-2">
              {Data.flatMap((getData, dataKey) => 
                <div className="px-10 py-4 border-2 border-yellow-600 m-2 rounded-md" key={dataKey}>
                  <div>
                    <h1>{getData.id}</h1>
                  </div>
                  {/* <img src={getData.pics} alt="Images" /> */}
                  <div>
                    <p>{getData.title}</p>
                  </div>
                </div>
              )}
            </section>
            <div>
              <h2>Uploads amazing car image</h2>
                  <input name="file"  onChange={handleFile} type="file" />
                <button className="border-2 shadow-xl rounded-xl p-2 border-blue-900" onClick={handleUpload}>Upload Image</button>
                {/* <p className="text-red-700">{errorMSG}</p> */}
            </div>
        </main>
    </div>
  )
}


export default Gallery_Data
// const handleImage = (index: File) => {
//   setUpload()
// }
