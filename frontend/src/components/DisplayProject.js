import React, { Component } from "react";
import actions from "../services/index";

class DisplayProject extends Component {
  state = {
    project: {},
  };

  async componentDidMount() {
    let res = await actions.getProjects(this.props.match.params.id);
    console.log(res);
    this.setState({
      project: res.data.project,
    });
  }

  render() {
    return (
      <div className="projects-page">
        <p className='project-name'>{this.state.project.name}</p><br />
        {this.state.project.images?.map((eachImage) => (
          <img className="project-image" src={eachImage} alt="project-img" />
        ))}
        {this.state.project.supplies?.map((eachSupply) => (
          <div className="project-details">{`${eachSupply.item}: $${eachSupply.price}`}</div>
        ))}
        {this.state.project.links?.map((eachLink) => (
          <div className="project-details"><a href={eachLink} style={{textTransform:'lowercase', color:'black', textDecoration:'underline'}}>{eachLink}</a></div>
        ))}
      </div>
    );
  }
}

export default DisplayProject;
