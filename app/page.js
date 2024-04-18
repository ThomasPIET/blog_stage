import Article from "@/components/Article";
import {db} from "@/app/db";

export default async function Page() {
  const articles = await db.article.findMany();

  return (
    <ul>
      {articles.map((article) => (
        <Article key={article.id} title={article.title} content={article.content} />
      ))}
    </ul>
  )
}
