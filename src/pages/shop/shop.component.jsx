import React from 'react';
import {connect} from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selectors";

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        {collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />)}
    </div>
);


const mapStateToProps = createStructuredSelector({
collections: selectCollections
})

export default connect(mapStateToProps, null)(ShopPage);