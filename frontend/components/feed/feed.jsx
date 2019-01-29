import React from 'react';
import CommentContainer from '../comment/comment_container';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        // this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount(){
        this.props.fetchPosts();
        // this.props.fetchUsers();
    }
    render() {
        if (this.props.posts === undefined){
            return(
                <div></div>
            )
        }
        return (
            <div>
                <div className='feed-container'>
                <div className='feed-index'>
                {this.props.posts.reverse().map(post => {
                    // debugger
                    return (
                        <div key={post.id} className='feed-post' tabIndex="0">
                            <div className='post-bar'>
                                <div className='canvas'><Link to={`/users/${post.user_id}`}><img className='post-prof-pic' src={post.user_photo} /> </Link></div>
                                <div><h2 className='post-username'><Link to={`/users/${post.user_id}`}>{post.username}</Link></h2></div> 
                                
                            </div>
                            <img className='post-index-img' src={post.photo_url} />
                            <div className='comment-bar'>
                                

                                {post.comments.reverse().map(comment => {
                                    // debugger
                                    return (
                                        <div key={comment.id}>
                                            {comment.body}
                                        </div>
                                    )
                                })}

                            </div>
                            {/* // <div className='post-info'></div> */}
                        </div>
                    )
                })}
                </div>
                </div>
            </div>
        );
    }
}

export default Feed; 