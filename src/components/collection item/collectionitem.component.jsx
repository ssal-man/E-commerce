import React from 'react';
import './collectionitem.style.scss';
import CustomButton from '../custombutton/custombutton.component';
import { addItem } from '../../redux/cart/cart.action';
import { connect } from  'react-redux';

const CollectionItem=({item, addItem})=>{
    const {name, price, imageUrl} = item
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
            <CustomButton inverted={true} onClick={()=>addItem(item)}>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem : item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);