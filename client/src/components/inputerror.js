import React from 'react';
import {connect} from 'react-redux'; 


export class InputError extends React.Component{
    render() {
        let divStyle = {
            display: this.props.visible ? 'inline-block': 'none'
        }
        return (
            <div style={divStyle}>{this.props.errorMessage}</div>
        )
    }
}
export const mapStateToProps = state => {
    return{
       
    }
}
export default connect(mapStateToProps)(InputError)