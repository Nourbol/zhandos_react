import PostImageCarousel from 'components/PostImageCarousel/PostImageCarousel';
import React, { Component } from 'react';
import { sendGetRequest } from 'services/htttpRequestSendingService';
import { renderWithRequest } from 'services/renderService';

class Post extends Component {
    state = { 
        isLoaded: false,
        error: null,
        post: {
            id: null,
            title: null, 
            text: null, 
            author_name: null,
            phone: null,
            created_at: null
        },
        slides: []
    }

    getPostIdFromPath() {
        const postId = window.location.pathname.split('/')[2];
        return postId;
    }
    
    componentDidMount() {
        const id = this.getPostIdFromPath();
        const url = 'http://web.test/api/posts/' + id;
        sendGetRequest(url, 
            response => this.setState({
                isLoaded: true,
                post: Object.assign({}, response.data.data)
            }),
            error => this.setState({
                isLoaded: true,
                error
            })
        )
    }

    render() { 
        const { error, isLoaded } = this.state;
        return renderWithRequest(error, isLoaded, this.getPost());
    }

    getPost() {
        const post = this.state.post;
        const id = this.getPostIdFromPath();
        return (
            <>
                <div className="container mt-5">
                    <section className="row">
                        <div className="mb-4">
                            <h1 className="fw-bolder mb-1 text-secondary">{post.title}</h1>
                            <div className="text-muted fst-italic mb-2">{post.created_at}</div>
                        </div>
                        <div className="container w-50">
                            <PostImageCarousel id={id} />
                        </div>
                        <section className="mb-5">
                            <article className='card mb-4'>
                                <div className="card-header">
                                    Contacts
                                </div>
                                <div className="card-body">
                                    Name: {post.author_name} <br />
                                    Phone number: {post.phone}
                                </div>
                            </article>
                            <p className="fs-5 mb-4">{post.text}</p>
                        </section>
                    </section>
                </div>
            </>
        );
    }
}
 
export default Post;