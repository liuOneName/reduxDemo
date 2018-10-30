import React from 'react';
import { connect } from 'react-redux';

class Color extends React.Component {
    render(){
        return (
            <div>
                <button onClick={this.props.clickBlue} style={{color: this.props.color}}>bule</button>
                <button onClick={this.props.clickRed} style={{color: this.props.color}}>red</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        color: state.color.color,
        string: state.color.string,
    }
}
function mapDispatchToProps(dispatch){
    return {
        clickBlue: () => dispatch({type: 'CHANGE_COLOR', color: 'blue'}),
        clickRed: () => dispatch({type: 'CHANGE_COLOR', color: 'red'})
    }
}
Color = connect(mapStateToProps, mapDispatchToProps)(Color);

export default Color;