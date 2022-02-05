import React from "react";
import {connect} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";
import {CollectionsOverviewContainer} from "./collections-overview.styles";

const CollectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer>
        {collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />)}
    </CollectionsOverviewContainer>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps, null)(CollectionsOverview);