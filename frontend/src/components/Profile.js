import React, { Component } from "react";
import { Link } from "react-router-dom";
// import actions from "../services/index";

const Profile = (props) => {
  if (!props.user.email) {
    props.history.push("/log-in");
  }

  return (
    <div style={{height:'85vh'}}>
        <div className="welcome">
          <h3>Welcome {props.user.name}</h3>
        </div>

        <section className="section-profile">
            <div className="board-selector">
              <Link className="profile-links" to="/completed">
                Completed
              </Link>
            </div>
            <div className="board-selector">
              <Link className="profile-links" to="/ongoing">
                Ongoing
              </Link>
            </div>
            <div className="board-selector">
              <Link className="profile-links" to="/notstarted">
                Not Started
              </Link>
            </div>
        </section>

        <section className='section-create'>
          <div className="board-selector">
            <Link className="profile-links" to="/createproject">
              + Create New
            </Link>
          </div>
        </section>
    </div>
  );
};

export default Profile;
