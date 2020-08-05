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
        {this.state.project.name}
        {this.state.project.images?.map((eachImage) => (
          <img className="project-image" src={eachImage} alt="project-img" />
        ))}
        {this.state.project.supplies?.map((eachSupply) => (
          <div className="project-details">{`${eachSupply.item} ${eachSupply.price}`}</div>
        ))}
        {this.state.project.links?.map((eachLink) => (
          <div className="project-details">{eachLink}</div>
        ))}
      </div>
    );
  }
}

export default DisplayProject;
