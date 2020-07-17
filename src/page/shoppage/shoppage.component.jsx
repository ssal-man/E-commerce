import React from 'react'
import './shoppage.style.scss'
import CollectionOverview from '../../components/collection-overview/collectionoverview.component'

const Shoppage = ({ collections }) => {
    console.log(collections)
        return(
            <div>
                  <CollectionOverview/>  
            </div>
        )
}


export default Shoppage;