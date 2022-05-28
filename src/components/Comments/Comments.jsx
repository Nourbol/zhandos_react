
import CommentCreationForm from 'components/CommentCreationForm/CommentCreationForm';
import React, { Component } from 'react';
import { sendGetRequest } from "services/htttpRequestSendingService";
import { renderWithRequest } from "services/renderService";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: [],
            isLoaded: false,
            error: null
        } 
    }

    componentDidUpdate() {
        if (!this.state.isLoaded) {
            const url = 'http://web.test/api/posts/' + this.props.postId + '/comments';
            sendGetRequest(url,
                response => this.setState({
                    isLoaded: true,
                    comments: response.data.data
                }),
                error => this.setState({
                    isLoaded: true,
                    error: error
                })
            );
        }
    }

    makeUnloaded = () => this.setState({isLoaded: false})

    getComments() {
        return (
            <section className="mb-5">
                <div className="card bg-light">
                    <div className="card-body">
                        <CommentCreationForm postId={this.props.postId} unload={this.makeUnloaded} />
                        {this.state.comments.map(comment => (
                            <div className="d-flex" key={comment.id}>
                                <div className="flex-shrink-0">
                                    <img className="rounded-circle" style={{maxWidth: "50px"}} src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80" alt="avatar of commenter"/>
                                </div>
                                <div className="ms-3">
                                    <div className="fw-bold">{comment.author_name}</div>
                                    {comment.text}
                                </div>                     
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    render() { 
        const {isLoaded, error} = this.state
        return (
            renderWithRequest(error, isLoaded, this.getComments())
        );
    }
}
 
export default Comments;
