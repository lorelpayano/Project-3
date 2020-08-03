import React, { Component } from "react";
import actions from "../services/index";


class Cloudinary extends Component {
    state = {
        imageObject: {}
    }

  uploadFile = async (event) => {
    let imageObject = new FormData();
    imageObject.append("upload", event.target.files[0]);
    this.setState({
        imageObject: imageObject
    })
  };

  handleSubmit = async e => {
    e.preventDefault();
    let res = await actions.toUpload(this.state.imageObject)
    console.log(res)
    this.props.setUrl(res.data.message);
    this.setState({imageObject: {}})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Upload Image</label>
          <input onChange={this.uploadFile} type="file" />

          <button>Upload</button>
        </form>
      </div>
    );
  }
}

export default Cloudinary;
