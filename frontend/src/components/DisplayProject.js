import React, { Component } from 'react';
import actions from '../services/index'

class DisplayProject extends Component {
    async componentDidMount() {
        let res = await actions.getProjects(this.props.match.params.id);
        console.log(res)
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default DisplayProject;