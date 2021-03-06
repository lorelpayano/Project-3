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
        <p style={{fontSize:'3vh'}}>${this.state.project.budget}</p><br />
        <div className='image-div'>{this.state.project.images?.map((eachImage) => (
          <img className="project-image" src={eachImage} alt="project-img" />
        ))}</div>
        {this.state.project.supplies?.map((eachSupply) => (
          <div className="project-details">{`${eachSupply.item}: $${eachSupply.price}`}</div>
        ))}
        {this.state.project.links?.map((eachLink) => (
          <div className="project-details"><a href={eachLink} style={{textTransform:'lowercase', color:'black', textDecoration:'underline'}}>{eachLink}</a></div>
        ))}
        <br />
        <p>{this.state.project.notes}</p>
        <p className='project-total'>Total Price: ${this.state.project.price}</p>
      </div>
    );
  }
}

export default DisplayProject;
