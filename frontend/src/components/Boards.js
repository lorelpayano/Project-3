import React, { Component } from "react";
import actions from "../services/index";
import { Link } from "react-router-dom";

class Boards extends Component {
  state = {
    projects: [],
  };

  async componentDidMount() {
    const res = await actions.getProject();
    console.log(res);
    this.setState({
      projects: res.data.project,
    });
  }

  displayProjects() {
    const boards = {
      notstarted: "Not Started",
      completed: "Completed",
      ongoing: "Ongoing",
    };
    const board = boards[this.props.location.pathname.slice(1)];

    return (
      <ul>
        {this.state.projects.filter((b) => b.status === board).map((b) => (
            <li className="board-li">
                <Link className="board-link" to={`/projects/${b._id}`} key={b._id}>{`${b.name}: $${b.budget}`}</Link>

                <button>Edit</button>
                <button onClick = {() => this.deleteBoard(b._id)}>Delete</button>
            </li>
          ))}
      </ul>
    );
  }

  deleteBoard = async id => {
      let del = await actions.deleteProject(id);
      console.log(del)
      this.setState({
        projects: this.state.projects.filter(p => p._id !== id)
      })
  }

//   handleSubmit = async e => {
//     e.preventDefault();
//     let project = await actions.createProject(this.state);
//     console.log(project)
//     this.props.history.push(`/projects/${project.data.project._id}`)
// }



  render() {
    return (
      <div>
        {this.displayProjects()}
      </div>
    );
  }
}

export default Boards;
