import React from 'react';
import { connect } from 'react-redux';
import Color from './color';

class Context extends React.Component {
    render(){
        return (
            <h2>
                <div style={{color: this.props.color}}>this is context.</div>
                <Color />
            </h2>
        )
    }
}
function mapStateToProps(state){
    return {
        color: state.color.color,
    }
}
Context = connect(mapStateToProps)(Context);
export default Context;