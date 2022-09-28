import React from "react";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from 'react';
import { useNavigate } from 'react-router-dom';



export default function ViewPost() {
    const [post, setPost] = useState({});
    const [edit, setEdit] = useState({});
    const [modal, setModal] = useState("view");

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        get();
    }, [])



    const get = () => {

        fetch('http://localhost:7777/posts')
            .then((response) => response.json())
            .then((res) => {
                setPost(res.find((el) => el.id === Number(params.postId)));
            });

    }
    const close = () => navigate("/");


    const onChange = () => {
        setEdit(post);
        setModal("edit");
    };

    const remove = () => {
        fetch(`${'http://localhost:7777/posts'}/${params.postId}`, {
            method: "DELETE",
        }).then(close());
    };

    const change = (e) => {
        const { target } = e;
        setEdit((prev) => ({ ...prev, content: target.value }));
    };

    const submit = () => {
        if (edit === "") {
            return;
        }
        fetch('http://localhost:7777/posts', {
            method: "POST",
            body: JSON.stringify({ content: setEdit.content, id: setEdit.id }),
        })
            .then(setModal("view"))
            .then(get());
    };





    const onEdit = () => {
        setModal("view");

    }


    return (

        <div className="app">
            {modal === "view" ? (
                <div className="post_item">
                    <div className="item_header">
                        <img className="header_img" src="http://via.placeholder.com/30x30" alt="" />
                        <div className="header_info">
                            <label className="header_title">Name</label>
                            <div className="header_subtitle">
                                <label className="header_desc">Description</label>
                                &middot;
                                <label className="header_created"> {moment(post.created).fromNow()} </label>
                            </div>
                        </div>
                    </div>
                    <div className="item_text">{post.content}</div>
                    <button className="btn_edit" onClick={onChange}>Изменить</button>
                    <button className="btn_delete" onClick={remove}>Удалить</button>
                </div>
            ) : (
                <div className="post_edit">
                    <textarea
                        className="input_text"
                        value={edit.content}
                        onChange={change}

                    />
                    <button className="btn_edit" onClick={submit}>Сохранить</button>
                    <button className="btn_close" onClick={onEdit}>Закрыть</button>
                </div>
            )}
        </div>
    );
}


