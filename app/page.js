import Article from "./components/Article";

export default async function Page() {
  const response = await fetch('/api/articles', {
    cache: 'no-store'
  })
  const articles = await response.json()

  return (
    <div>
      {articles.map((article) => (
        <Article title={article.title} content={article.content} />
      ))}
    </div>
  )
}
