import React from 'react';
import './directory.styles.scss';
import {connect} from "react-redux";
import MenuItem from "../menu-item/ menu-item.component";
import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directory/directory.selectors";
import {DirectoryMenuContainer} from "./directory.styles";

const Directory = ({directory}) => (
    <DirectoryMenuContainer>
        {directory.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps}/>))}
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
directory: selectDirectorySection
})

export default connect(mapStateToProps, null)(Directory);