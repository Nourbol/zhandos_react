import React from 'react';

function PostPreview(props) {
    const post = props.post;
    render( 
        <section className="pb-4">
            <div className="bg-white border rounded-5">
                <section className="p-4 d-flex justify-content-center w-100" style={{backgroundColor: "#fbfbfb", borderRadius: ".5rem .5rem 0 0"}}>
                    <div className="row gx-5">
                        <div className="col-md-6 mb-4">
                            <div className="bg-image hover-overlay ripple justify-content-center" data-mdb-ripple-color="light">
                                <div>
                                    <img src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp" style={{borderRadius: ".5rem"}} className="img-fluid" />
                                    <a href="#!">
                                        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                            
                        <div className="col-md-6 mb-4">
                            <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">{() => this.props.postType(post.status)}</span>
                            <h4><strong>{post.title}</strong></h4>
                            <p className="text-muted">{post.title}</p>
                            <input type="submit" className="btn btn-primary w-20 me-2" value="Read more"/>
                            {this.props.confirmationButtons}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default PostPreview;