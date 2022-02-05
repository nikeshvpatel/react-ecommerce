import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";
import {CollectionPreviewContainer, PreviewContainer, TitleContainer} from "./collection-preview.styles";

const CollectionPreview = ({title, items}) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {
                    items.filter((_, index) => index < 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
};

export default CollectionPreview;
