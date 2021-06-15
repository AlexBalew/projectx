import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
                <div>
                    <button>
                        Insert text
                    </button>
                </div>
                <div>
                    <button>
                        Delete
                    </button>
                </div>
                <div>
                New post
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='hi, how are you?' likesCounter=" 15"/>
                <Post message='fine, thanks' likesCounter=" 25"/>
            </div>
        </div>
    )
};

export default MyPosts;