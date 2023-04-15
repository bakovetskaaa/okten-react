import React from 'react';


const Post = ({post, setPost}) => {

    const{id, title} = post;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <button onClick={() => setPost(post)}>delails</button>
        </div>
    );
};

export default Post;