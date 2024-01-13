import React from "react";
import Article from "./Article";


function ArticleList(props) {

    console.log(props.posts)

    const articleItem = props.posts.map( article => (
        <Article key={article.id} post={article} />
    ))
    
    return(
        <main>
            {articleItem}
        </main>
    )
}

export default ArticleList;