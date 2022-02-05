import React from 'react';
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";

import {ReactComponent as Logo} from "../../assets/images/crown.svg";
import{HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from "./header.styles";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ? (<OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>) : (<OptionLink to='/signin'> SIGN IN</OptionLink>)
            }
            <CartIcon/>
            </OptionsContainer>
            {hidden ? null : <CartDropdown/>}
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header);
