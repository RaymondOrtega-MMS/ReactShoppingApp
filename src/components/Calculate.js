import React, { Component } from 'react';

class Calculate extends Component {
    render() {
        let calc = this.props.calc()
        return <h1 total={this.props.total}>Total: {calc}</h1> 
    }
}
export default Calculate