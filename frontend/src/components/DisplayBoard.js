import React, { Component } from 'react';
import actions from '../services/index'

class DisplayBoard extends Component {
    async componentDidMount() {
        let res = await actions.getBoard(this.props.match.params.id);
        console.log(res)
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default DisplayBoard;