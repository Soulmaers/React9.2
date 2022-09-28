import { useNavigate } from "react-router-dom";
import { moment } from 'moment'


export default function Post({ post }) {

    const navigate = useNavigate();

    const View = () => {
        navigate(`/posts/${post.id}`);

    }


    return (

        <div className="post_item" onClick={View}>
            <div className="item_header">
                <img className="header_img" src="http://via.placeholder.com/30x30" alt="" />
                <div className="header_info">
                    <p className="header_title">Name</p>
                    <div className="header_subtitle">
                        <p className="header_desc">Description</p>
                        &middot;
                        <p className="header_created">{moment(post.created).fromNow()}</p>
                    </div>
                </div>
            </div>
            <div className="item_text">{post.content}</div>
        </div>
    );
}