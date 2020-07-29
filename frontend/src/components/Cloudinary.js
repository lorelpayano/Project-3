import React, { Component } from "react";
import actions from "./services/index";


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

    // let res = await actions.toUpload(imageObject);
    // console.log(res);
  };

  render() {
    return (
      <div>
        <form encType="multipart/form-data">
          <label>Test</label>
          <input onChange={this.uploadFile} type="file" />

          <button>Upload</button>
        </form>
      </div>
    );
  }
}

export default Cloudinary;
