import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostList from './PostList'


export default function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_POSTS_URL)
            .then((response) => response.json())
            .then((res) => setPosts(res))


    })


    return (
        <div className='app'>
            <Link to="/posts/new">
                <button className='btn_create'>Создать пост</button>
            </Link>
            {posts ? <PostList list={posts} /> : null}


        </div>

    )
}