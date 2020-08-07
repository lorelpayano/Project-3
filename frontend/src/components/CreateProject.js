import React, { Component } from "react";
import actions from "../services/index";
import Cloudinary from "./Cloudinary";

class CreateProject extends Component {
  state = {
    status: 'Completed',
    supply: '',
    price: 0,
    sprice: '',
    supplies: [],
    images: [],
  };

  async componentDidMount() {
    let res = await actions.getProjects(this.props.match.params.id);
    console.log(res)
    this.setState({
        ...res.data.project
    })
}

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
    const sprice = parseInt(this.state.sprice);
    const supplies = [...this.state.supplies, {item, price: sprice}]
    this.setState({supplies, price: sprice + price, supply: '', sprice: ''})
  }

  showSupplies = () => {
      return (
          <ul className='create-options'>
              {this.state.supplies.map(item => <li key={item.item}>
                {`${item.item }: $${ item.price }`}
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
    this.props.history.push(`/projects/${project.data.project._id}`)
}

//ENDS HERE


  render() {
    return (
      <div>
        <h2 className='create-heading'>Create a new project!</h2>
          <div className='create-project'>
            <br />

            <div>
              <label className='create-labels'>Project Name:</label>
              <br />
              <input className='create-inputs' type='text' name='name' value={this.state.name} onChange={this.changeHandler}/>
              <br />
              <label className='create-labels'>Budget:</label>
              <br />
              <input className='create-inputs' type='text' name='budget' value={this.state.budget} onChange={this.changeHandler}/>
              <br />

              <label className='create-labels'>Supplies:</label>
              <br />
              <input className='create-inputs' type="text" placeholder='eg. 400 nails' name="supply" value={this.state.supply} onChange={this.changeHandler} /> 
              <br />
              <label className='create-labels'>Price:</label>
              <br />
              <input className='create-inputs' type="number" name="sprice" value={this.state.sprice} onChange={this.changeHandler} />
              <button onClick= {this.addSupplies}>Add</button>
              <br />
              {this.showSupplies()}
            </div>

            <div>
              <label className='create-labels'>Links:</label>
              <br />
              <input className='create-inputs' type="textfield" name="links" value={this.state.links} onChange={this.changeHandler} style={{ minHeight: "70px", width: "30vh" }}/>
              <br />
              <label className='create-labels'>Notes</label>
              <br />
              <input className='create-inputs' type="textfield" name="notes" value={this.state.notes} onChange={this.changeHandler} style={{ minHeight: "70px", width: "30vh" }}/>
              <br />

              <label className='create-labels'>Status:</label>
              <br />
              <select name='status' value={this.state.status} onChange={this.changeHandler}>
                  <option value='Completed' >Completed</option>
                  <option value='Ongoing' >Ongoing</option>
                  <option value='Not Started' >Not Started</option>
              </select>
              <br />
              <br />
              <Cloudinary setUrl={this.setUrl}/>
            </div>
        </div>
            <div>
              <form className="create-new" onSubmit={this.handleSubmit}>
              <button type="submit">Submit</button>
              </form> 
            </div>
            
      </div>
    );
  }
}

export default CreateProject;
