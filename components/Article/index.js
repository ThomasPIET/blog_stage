import './style.css'

export default function Article({title, content}) {
    return (
        <div className="container-article" >
            <h2  className="article-title">{title}</h2>
            <p className="article-content">{content}</p>
        </div>
    );
}

