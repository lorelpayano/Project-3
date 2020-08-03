import React, { Component } from 'react';
import actions from "../services/index";
import {Link} from 'react-router-dom'

class Ongoing extends Component {
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
    
      displayProjects(projects) {
        return (
          <ul>
            {projects.map((b) => (
              <li className='board-li'><Link className='board-link' to={`/projects/${b._id}`} key={b._id}>{`${b.name}: $${b.budget}`}</Link></li>
            ))}
          </ul>
        );
      }
    
      render() {
        return (
          <div>
            Completed Projects
            {this.displayProjects(
              this.state.projects.filter((b) => b.status === "Ongoing")
            )}
          </div>
        );
      }
    }

export default Ongoing;