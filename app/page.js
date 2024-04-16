import Article from "@/components/Article";
import {db} from "@/app/db";

export default async function Page() {
  const articles = await db.article.findMany();

  return (
    <div>
      {articles.map((article) => (
        <Article title={article.title} content={article.content} />
      ))}
    </div>
  )
}
