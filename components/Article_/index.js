import Link from 'next/link';
import './style.css';

export default function Article({ title, content }) {
  const maxLength = 308;

  const truncateContent = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + '...';
  };

  return (
    <div className="container-article">
      <Link className="article-title" href={`/article/${title}`}>
        {title}
      </Link>
      <p className="article-content">{truncateContent(content, maxLength)}</p>
    </div>
  );
}
