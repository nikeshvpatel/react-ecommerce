import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from "react-router-dom";
import {BackgroundImageContainer, ContentContainer, ContentSubtitle, ContentTitle, MenuItemContainer} from "./menu-item.styles";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    return (
        <MenuItemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer  style={{backgroundImage: `url(${imageUrl})`}}/>
            <ContentContainer>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    );
};

export default withRouter(MenuItem);