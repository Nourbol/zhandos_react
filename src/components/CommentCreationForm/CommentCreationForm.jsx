import axios from 'axios';
import React, { Component } from 'react';

class CommentCreationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            phone: '',
            author_name: '',
            error: null
        } 
    }
    

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value});
        console.log(this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios({
            'method': 'post',
            'url' : 'http://web.test/api/comments',
            'data': {
                text: this.state.text,
                phone: this.state.phone,
                author_name: this.state.author_name,
                post_id: this.props.postId
            },
        })
        .catch((error) => {
            this.setState({error});
        })
        this.props.unload();
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }

    render() { 
        return (
            <form className="mb-4" onSubmit={this.handleSubmit}>
                <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="text">Comment:</label>
                    <textarea className="form-control" name="text" value={this.state.text} rows="3" placeholder="Leave a comment!" onChange={this.handleChange}></textarea>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="phone">Phone number:</label>
                            <input type="text" name="phone" value={this.state.phone} className="form-control" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="author_name">Your name:</label>
                            <input type="text" name="author_name" value={this.state.author_name} className="form-control" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary btn-block mb-4"/>
            </form>
        );
    }
}
 
export default CommentCreationForm;