import React from 'react';
import './collectionoverview.style.scss';
import Collectionpreview from '../collection preview/collectionpreview';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollection } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
            {
                collections.map(({ id, ...othercollectionitems }) => {
                    return (
                        <Collectionpreview key={id} {...othercollectionitems} />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
})

export default connect(mapStateToProps)(CollectionOverview);