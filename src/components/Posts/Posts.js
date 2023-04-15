import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);


    useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.data)
        .then(value => setPosts(value))
    }, [])

    return (
        <div>
            {post&&
            <div>
                <div>Id: {post.id}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
                <div>UserId: {post.userId}</div>
            </div>
            }
            {posts.map(post =><Post  key={post.id} post={post} setPost={setPost}/>)}
        </div>
    );
};

export default Posts;