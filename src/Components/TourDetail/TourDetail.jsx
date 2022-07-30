import { ImageList, ImageListItem, Rating } from '@mui/material'
import React from 'react'
import Img1 from './Assets/Img/Img1.jpeg'
import Img2 from './Assets/Img/Img2.jpeg'
import Img3 from './Assets/Img/Img3.jpeg'
import Img4 from './Assets/Img/Img4.jpeg'

// const imgs = [
//   {img: Img1}, {img: Img2}, {img: Img3}, {img: Img4},
// ]

// const indexImg = [
//   {row: 2 }
// ]

const TourDetail = () => {
  return (
    <div>
      <h1>Title</h1>
      <div>
        <Rating name="size-large" value={3} size="large" />
        <p>12 Opiniones</p>
        <p>Proveedor de la Actividad: <span>Nombre Proveedor</span></p>
      </div>
      {/* <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
    </div>
  )
}

export default TourDetail