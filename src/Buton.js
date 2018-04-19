import React, {Component} from 'react';
class Buton extends React.Component{
    render(){
        return  <button onClick={this.props.onClick}>{this.props.name}</button>
    }
}

export default Buton;