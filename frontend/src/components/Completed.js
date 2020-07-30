import React, { Component } from "react";
import actions from "../services/index";

class Completed extends Component {
  state = {
    boards: [],
  };

  async componentDidMount() {
    const res = await actions.getBoards();
    console.log(res);
    this.setState({
      boards: res.data.board,
    });
  }

  displayBoards(boards) {
    return (
      <ul>
        {boards.map((b) => (
          <li key={b._id}>{`${b.boardName} :${b.budget}`}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        Completed Projects
        {this.displayBoards(
          this.state.boards.filter((b) => b.status === "Completed")
        )}
      </div>
    );
  }
}

export default Completed;
