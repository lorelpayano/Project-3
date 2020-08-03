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
            </li>
          ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.displayProjects()}
      </div>
    );
  }
}

export default Boards;
