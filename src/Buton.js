import React, {Component} from 'react';
class Buton extends React.Component{
    constructor(props){
        super(props);
        this.state = {title:'TonTon'};
        this.alertST = this.alertST.bind(this);
    }

    alertST(){
        const newTitle = this.state.title == 'TonTon' ? 'TunTun' : 'TonTon';
        this.setState({title : newTitle});
    }

    render(){
        return  <button onClick={this.alertST}>{this.state.title}</button>
    }
}

export default Buton;