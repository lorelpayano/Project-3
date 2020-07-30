import React, { Component } from "react";
import actions from "../services/index";
import Cloudinary from "./Cloudinary";

class CreateItems extends Component {
  state = {
    // status: 'Completed'
    supply: '',
    price: '',
    supplies: [],
    url: ''
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    // let board = await actions.createBoard(this.state);
    // console.log(board);
    // this.props.history.push(`/board/${board.data.board._id}`);
  };
  addSupplies = () => {
    const index = this.state.supply.indexOf(' ');
    // const quant = this.state.supply.slice(0, index);
    const item = this.state.supply;
    const price = parseFloat(this.state.price)
    const supplies = [...this.state.supplies, {item, price, url: this.state.url}]
    this.setState({supplies, supply: '', price: '', url: ''})
  }
  showSupplies = () => {
      return (
          <ul>
              {this.state.supplies.map(item => <li key={item.item}>
                {item.url && <img style= {{height: '50px'}}src = {item.url}/>}
                {`${item.item }, total price: ${ item.price }`}
              </li>)}
          </ul>
      )
  }
  setUrl = (url) => {
      this.setState({
          url
      })
  }
  render() {
    return (
      <div>
        <form class="create-new" onSubmit={this.handleSubmit}>
        <Cloudinary setUrl={this.setUrl}/>
        <br />
          <label>Supplies:</label>
          <br />
          <input type="text" placeholder='eg. 400 nails' name="supply" value={this.state.supply} onChange={this.changeHandler} /> 
          <br /> <label>Price:</label>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateItems;
