import React, { Component } from "react";
import actions from "../services/index";
import Cloudinary from "./Cloudinary";

class CreateProject extends Component {
  state = {
    status: 'Completed',
    supply: '',
    price: '',
    supplies: [],
    images: []
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let project = await actions.createProject(this.state)
    console.log(project)
    // this.props.history.push(`/board/${this.props.match.params.id}`)
  };

  addSupplies = () => {
    const item = this.state.supply;
    const price = parseFloat(this.state.price)
    const supplies = [...this.state.supplies, {item, price}]
    this.setState({supplies, price: +this.state.price + price, supply: '', price: ''})
  }

  showSupplies = () => {
      return (
          <ul>
              {this.state.supplies.map(item => <li key={item.item}>
                {`${item.item }, total price: ${ item.price }`}
              </li>)}
              {this.state.images.map(img => (
                <li key={img}>
                  {<img style= {{height: '50px'}}src = {img}/>}
                </li>
              ))}
          </ul>
      )
  }
  setUrl = (url) => {
      this.setState({
          images: [...this.state.images, url]
      })
  }


//FROM THE CREATENEW COMPONENT:

handleSubmit = async e => {
    e.preventDefault();
    let project = await actions.createProject(this.state);
    console.log(project)
    this.props.history.push(`/project/${project.data.project._id}`)
}

//ENDS HERE


  render() {
    return (
      <div>
        <Cloudinary setUrl={this.setUrl}/>
        <br />
        <label>Name:</label>
        <br />
        <input type='text' name='name' onChange={this.changeHandler}/>
        <br />
        <label>Budget</label>
        <br />
        $ <input type='text' name='budget' onChange={this.changeHandler}/>
        <br />

        <label>Supplies:</label>
        <br />
        <input type="text" placeholder='eg. 400 nails' name="supply" value={this.state.supply} onChange={this.changeHandler} /> 
        <br />
        <label>Price:</label>
        <br />
        <input type="number" name="price" value={this.state.price}onChange={this.changeHandler} />
        <button onClick= {this.addSupplies}>Add</button>
        <br />
        {this.showSupplies()}

        <label>Links:</label>
        <br />
        <input type="textfield" name="links" onChange={this.changeHandler} style={{ height: "100px", width: "500px" }}/>
        <br />
        <label>Notes</label>
        <br />
        <input type="textfield" name="notes" onChange={this.changeHandler} style={{ height: "100px", width: "500px" }}/>
        <br />
        <label>Status:</label>
        <br />
        <select name='status'onChange={this.changeHandler}>
            <option value='Completed' >Completed</option>
            <option value='Ongoing' >Ongoing</option>
            <option value='Not Started' >Not Started</option>
        </select>
        <br />
        <form class="create-new" onSubmit={this.handleSubmit}>
        <button type="submit">Submit</button>
        </form>

        {/* <form class='create-new' onSubmit={this.handleSubmit}>
                    <label>Board Name:</label>
                    <br />
                    <input type='text' name='boardName' onChange={this.selectHandler}/>
                    <br />
                    <label>Budget</label>
                    <br />
                    $ <input type='text' name='budget' onChange={this.selectHandler}/>
                    <br />
                    <label>Status:</label>
                    <br />
                    <select name='status'onChange={this.selectHandler}>
                        <option value='Completed' >Completed</option>
                        <option value='Ongoing' >Ongoing</option>
                        <option value='Not Started' >Not Started</option>
                    </select>
                    <br />
                    <button type='submit'>Submit</button>
                </form> */}
                
      </div>
    );
  }
}

export default CreateProject;
