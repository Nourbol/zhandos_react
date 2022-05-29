import React, { Component } from 'react';
import { sendGetRequest } from 'services/htttpRequestSendingService';
import PostPreview from 'components/PostPreview/PostPreview';
import { renderWithRequest } from 'services/renderService';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: [],
            isLoaded: false,
            error: null
        }
    }
    
    componentDidMount() {
        let url = 'http://web.test/api/posts/withThumbnails';
        switch(this.props.postType) {
            case 0: {
                url = 'http://web.test/api/posts/lost';
                break;
            };
            case 1: {
                url = 'http://web.test/api/posts/found';
                break;
            };
        }
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

    getPostList() {
        const posts = this.state.posts;
        return (
            <section>
                {
                    posts.map(post => (
                        <div key={post.id}>
                            <PostPreview post={post}/>
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