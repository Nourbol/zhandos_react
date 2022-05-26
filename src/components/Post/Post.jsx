import axios from 'axios';
import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';

class Post extends Component {
    state = { 
        isLoaded: false,
        error: null,
        post: {title: null, 
            text: null, 
            created_at: null}
    }

    getPostIdFromPath() {
        const postId = window.location.pathname.split('/')[2];
        return postId;
    }
    
    componentDidMount() {
        const postId = this.getPostIdFromPath();
        axios({
            method: 'get',
            url: 'http://web.test/api/posts/' + postId
        })
        .then(response => {
            this.setState({
                isLoaded: true,
                post: Object.assign({}, response.data.data)
            })
        })
        .catch(error => {
            this.setState({
                isLoaded: true,
                error
            })
        });
    }

    render() { 
        const { error, isLoaded } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <Spinner/>;
        } else {
          return this.getPost();
        }
    }

    getPost() {
        const post = this.state.post;
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <article>
                            <header className="mb-4">
                                <h1 className="fw-bolder mb-1 text-center">{post.title}</h1>
                                <div className="text-muted fst-italic mb-2">{() => this.props.formatDate(post.created_at)}</div>
                            </header>
                            <figure className="mb-4 text-center float-start">
                                <img className="img-fluid rounded m-1" src={'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} alt="..."/>
                                <img className="img-fluid rounded m-1" src={'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870'} alt="..."/>
                            </figure>
                            <section className="mb-5">
                                    <p className="fs-5 mb-4">{post.text}</p>
                            </section>
                        </article>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Post;