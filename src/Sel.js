import React from 'react';
export default class Sel extends React.Component{
    constructor(props){
        super(props);
        this.handelChange = this.handelChange.bind(this);
    }

    handelChange(e){
        const nm = e.target.value;
        this.props.onChange(nm);
    }

    render(){
        return(
            <select id="great-names" onChange = {this.handelChange}>
                <option value="Frarthur">
                    Frarthur
                </option>
                <option value="Gromulus">
                    Gromulus
                </option>
                <option value="Thinkpiece">
                    Thinkpiece
                </option>
            </select>
        );
    }
}