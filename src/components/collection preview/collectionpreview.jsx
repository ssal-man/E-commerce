import React from 'react'
import './collectionpreview.scss'
import CollectionItem from '../collection item/collectionitem.component'

const collectionpreview = ({ title, items})=>{
    return(
        <div className='collection-preview'>
            <h1 className='title'><u>{title.toUpperCase()}{}</u></h1>
            <div className='preview'>
                {items.map((item)=>(
                    <CollectionItem key={item.id} item={item}/>
                    ))}
            </div>
        </div>
    )
}
export default collectionpreview