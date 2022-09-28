import { useState } from 'react'
import { useNavigate } from "react-router-dom";


export default function NewPost() {
    const [post, setPost] = useState('')
    const navigate = useNavigate();

    const close = () => {
        navigate('/')
    }

    const change = (event) => {
        const { target } = event;
        setPost(target.value);

    }

    const submit = () => {
        if (post === '') {
            close()
            return
        }

        fetch(process.env.REACT_APP_POSTS_URL, {
            method: "POST",
            body: JSON.stringify({ content: post, id: 0 }),
        }).then(close());
    };




    return (
        <div className="app">
            <textarea
                className="input_text"
                value={post}
                onChange={change}
            />
            <button className="btn_post" onClick={submit}>Опубликовать</button>
            <button className="btn_close" onClick={close}>Закрыть</button>
        </div>
    );

}