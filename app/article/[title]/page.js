// app/article/[title]/page.js
import { db } from '@/app/db'
import React from 'react'
import "./style.css"


export default async function ArticlePage ({ params }) {
  const { title } = params
  const decodedTitle = decodeURIComponent(title).trim()


// ****       DEBUG       ****//
  const allArticles = await db.article.findMany()
  let foundArticle = null

  allArticles.forEach(article => {
    const dbTitleTrimmed = article.title.trim()

    if (dbTitleTrimmed === decodedTitle) {
      foundArticle = article
    }
  })
// ****       DEBUG       ****//

  if (foundArticle) {
    return (<div className="container">
      <h1 className="title">{foundArticle.title}</h1>
      <div className="content" dangerouslySetInnerHTML={{ __html: foundArticle.content }} />
    </div>)
  }

  // Query the database with the trimmed decoded title
  const article = await db.article.findFirst({
    where: {
      title: decodedTitle,
    },
  })

  if (!article) {
    return <div>Article not found</div>
  }
}
