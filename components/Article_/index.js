import Link  from 'next/link';
import './style.css';

export default function Article({title, content}) {
    return (
        <div className="container-article" >
            <Link className="article-title" href={`/article/${title}`}>
                {title}
            </Link>
            <p className="article-content">{content}</p>
        </div>
    );
}