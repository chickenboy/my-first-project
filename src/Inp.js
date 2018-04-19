import React, { Component } from 'react';
class Inp extends React.Component{
    render(){
        return(
            <input type='text'value = {this.props.name}/>
        );
    }
}
export default Inp;