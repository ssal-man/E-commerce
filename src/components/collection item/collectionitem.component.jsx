import React from 'react'
import './collectionitem.style.scss'

const CollectionItem=({name, id, imageUrl, price})=>{
    return(
        <div className='collection-item'>
            <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem