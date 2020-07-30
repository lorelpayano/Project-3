import React, { Component } from "react";
import { Link } from "react-router-dom";
import actions from "../services/index";

const Profile = (props) => {
  if (!props.user.email) {
    props.history.push("/log-in");
  }

  return (
    <div>
      <div className="welcome">
        <h2>Welcome {props.user.name}!</h2>
      </div>
      <section class="section-profile">
        <div class="board-selector">
          <Link class="nav-links" to="/completed">
            Completed
          </Link>
        </div>
        <div class="board-selector">
          <Link class="nav-links" to="/ongoing">
            Ongoing
          </Link>
        </div>
        <div class="board-selector">
          <Link class="nav-links" to="/notstarted">
            Not Started
          </Link>
        </div>
        <div class="board-selector">
          <Link class="nav-links" to="/createnew">
            Create New
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Profile;
