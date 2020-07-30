import React, { Component } from 'react';
import actions from '../services/index'
import Cloudinary from './Cloudinary';

class CreateNew extends Component {
    state = {
        status: 'Completed'
    }

    selectHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = async e => {
        e.preventDefault();
        let board = await actions.createBoard(this.state);
        console.log(board)
        this.props.history.push(`/board/${board.data.board._id}/add`)
    }
    render() {
        return (
            <div>
                <form class='create-new' onSubmit={this.handleSubmit}>
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
                </form>

            </div>
        );
    }
}

export default CreateNew;