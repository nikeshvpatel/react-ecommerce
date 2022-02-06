import React from "react";
import './collection.styles.scss';
import CollectionItem from "../../components/collection-item/collection-item.component";
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";
import {CollectionPageContainer, CollectionTitle, CollectionItemsContainer} from "./collection.styles";

const CollectionPage = ({collections})=> {
    const{title, items} = collections;
   return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps)=>({
    collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps, null)(CollectionPage);