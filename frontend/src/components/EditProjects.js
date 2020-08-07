import React, { Component } from 'react';
import actions from "../services/index";
import Cloudinary from "./Cloudinary";


class EditProjects extends Component {
    state = {
        status: 'Completed',
        supply: '',
        price: '',
        supplies: [],
        images: []
      };

      async componentDidMount() {
        let res = await actions.getProjects(this.props.match.params.id);
        console.log(res.data.project);
        this.setState({
          ...res.data.project,
        });
      }


      changeHandler = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
    
      addSupplies = () => {
        const item = this.state.supply;
        const price = parseFloat(this.state.price)
        const supplies = [...this.state.supplies, {item, price}]
        this.setState({supplies, price: +this.state.price + price, supply: '', price: ''})
      }
      
      deleteSupply = i => {
        this.setState({
          supplies: this.state.supplies.filter((_,ind) => i !== ind)
        })
      }

      deleteImg = i => {
        this.setState({
          images: this.state.images.filter((_,ind) => i !== ind)
        })
      }

      showSupplies = () => {
          return (
              <ul style={{listStyleType: 'none', paddingTop:'25px'}}>
                  {this.state.supplies.map((item,i) => <li key={item.item}>
                    {<>{`${item.item }, total price: ${ item.price }`}
                    <button style={{width:'25px', height:'25px'}} onClick={() => this.deleteSupply(i)}>x</button>
                    </>}
                  </li>)}
                  {this.state.images.map((img,i) => (
                    <li key={img}>
                      {<>
                        <img style= {{height: '50px'}}src = {img}/>
                      <button style={{width:'25px', height:'25px'}} onClick={() => this.deleteImg(i)}>x</button> </>
                      }
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
        
    handleSubmit = async e => {
        e.preventDefault();
        let response = await actions.editProject(this.state);
        console.log(response)
        this.props.history.push(`/projects/${response.data?.project?._id}`)
    }
    
    
    render() {
        return (
          <div>
              <h2 className='create-heading'>Edit Project</h2>
              <div className='create-project'>
                <br />

                <div>
                  <label className='create-labels'> Project Name:</label>
                  <br />
                  <input className='create-inputs' type='text' name='name' value={this.state.name} onChange={this.changeHandler}/>
                  <br />
                  <label className='create-labels'>Budget</label>
                  <br />
                  <input className='create-inputs' type='text' name='budget' value={this.state.budget} onChange={this.changeHandler}/>
                  <br />

                  <label className='create-labels'>Supplies:</label>
                  <br />
                  <input className='create-inputs' type="text" placeholder='eg. countertops' name="supply" value={this.state.supply} onChange={this.changeHandler} /> 
                  <br />
                  <label className='create-labels'>Price:</label>
                  <br />
                  <input className='create-inputs' type="number" name="price" value={this.state.price}onChange={this.changeHandler} />
                  <button onClick= {this.addSupplies}>Add</button>
                  <br />
                  {this.showSupplies()}
                </div>

                <div>
                  <label className='create-labels'>Links:</label>
                  <br />
                  <input className='create-inputs' type="textfield" name="links" onChange={this.changeHandler} style={{ height: "100px", width: "500px" }}/>
                  <br />
                  <label className='create-labels'>Notes</label>
                  <br />
                  <input className='create-inputs' type="textfield" name="notes" onChange={this.changeHandler} style={{ height: "100px", width: "500px" }}/>
                  <br />
                  <label className='create-labels'>Status:</label>
                  <br />
                  <select name='status'onChange={this.changeHandler}>
                      <option value='Completed' >Completed</option>
                      <option value='Ongoing' >Ongoing</option>
                      <option value='Not Started' >Not Started</option>
                  </select>
                  <br />
                  <br />
                  <Cloudinary setUrl={this.setUrl}/>
                </div>
              </div>
          
              <form class="create-new" onSubmit={this.handleSubmit}>
              <button type="submit">Submit</button>
              </form> 
      </div>
        );
    }
}

export default EditProjects;