import React from 'react'
import './shoppage.style.scss'
import SHOPDATA from './shopdata'
import Collectionpreview from '../../components/collection preview/collectionpreview'

class Shoppage extends React.Component{
    constructor(){
        super();
        this.state={
            collections:SHOPDATA
        }
    }

    render(){
        return(
        <div>
            {
                this.state.collections.map(({id, ...othercollectionitems})=>{
                    return(
                    <Collectionpreview key={id} {...othercollectionitems}/>
                )})
            }    
        </div>)
    }
}

export default Shoppage;