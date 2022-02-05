import React from 'react';
import './collection-item.styles.scss';
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";
import {AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemContainer, NameContainer, PriceContainer} from "./collection-item.styles";

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}>Add to Cart</AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
