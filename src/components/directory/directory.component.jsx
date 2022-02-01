import React from 'react';
import './directory.styles.scss';
import {connect} from "react-redux";
import MenuItem from "../menu-item/ menu-item.component";
import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directory/directory.selectors";

const Directory = ({directory}) => (
    <div className='directory-menu'>
        {directory.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps}/>))}
    </div>
);

const mapStateToProps = createStructuredSelector({
directory: selectDirectorySection
})

export default connect(mapStateToProps, null)(Directory);