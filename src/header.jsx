import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render(){
        return (
            <h2 style={{color: this.props.color}}>this is header.</h2>
        )
    }
}

function mapStateToProps(state){
    return {
        color: state.color.color,
    }
}
Header = connect(mapStateToProps)(Header);

export default Header;