import React, { Component } from 'react';
import actions from '../services/index'

class DisplayProject extends Component {
    state = {
        project: {}
    }

    
    async componentDidMount() {
        let res = await actions.getProjects(this.props.match.params.id);
        console.log(res)
        this.setState({
            project: res.data.project
        })
    }

    render() {
        return (
            <div>
            testtest
                {this.state.project.images?.map(eachImage => <img src={eachImage}/>)}
                {this.state.project.supplies?.map(eachSupply => <div>{`${eachSupply.item} ${eachSupply.price}`}</div>)}
            </div>
        );
    }
}

export default DisplayProject;