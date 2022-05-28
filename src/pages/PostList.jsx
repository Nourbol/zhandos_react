import React, { Component } from 'react';
import { sendGetRequest } from 'services/htttpRequestSendingService';
import PostPreview from 'components/PostPreview/PostPreview';
import { renderWithRequest } from 'services/renderService';

class PostList extends Component {
    state = { 
        posts: [],
        isLoaded: false,
        error: null
    }
    
    componentDidMount() {
        const url = 'http://web.test/api/posts/withImages';
        sendGetRequest(url, 
            response => {this.setState({
                isLoaded: true,
                posts: [...response.data.data]
            })
            console.log(this.state.posts);},
            error => this.setState({
                isLoaded: true,
                error: error
            })
        );
    }

    getThumbnail(post) {
        if (post.images.length !== 0) {
            return post.images[0].image_url;
        }
    }

    getPostList() {
        const posts = this.state.posts;
        return (
            <section>
                {
                    posts.map(post => (
                        <div key={post.id}>
                            <PostPreview post={post} imageUrl={this.getThumbnail(post)}/>
                        </div>
                    )) 
                }
            </section>
        );
    }

    render() { 
        const { isLoaded, error } = this.state;
        return renderWithRequest(error, isLoaded, this.getPostList());
    }
}
 
export default PostList;