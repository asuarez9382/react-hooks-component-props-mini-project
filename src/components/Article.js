import React from "react";

function Article(props) {

    return (
        <>
            <h3>{props.post.title}</h3>
            { props.post.date ? <small>{props.post.date}</small> : <small>"January 1, 1970"</small> }
            <p>{props.post.preview}</p>
        </>
    )
}

export default Article;