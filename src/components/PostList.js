import Post from './Post'


export default function PostList({ list }) {




    return (
        <div className="post_list">
            {list.map(el => (<Post post={el} key={el.id} />))}
        </div>

    )
}