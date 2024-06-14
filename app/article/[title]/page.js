// app/article/[title]/page.js
import { db } from '@/app/db'

export default async function ArticlePage ({ params }) {
  const { title } = params
  console.log('Encoded title = ', title)

  const decodedTitle = decodeURIComponent(title).trim()
  console.log('Decoded title = ', decodedTitle)

// ****       DEBUG       ****//
  const allArticles = await db.article.findMany()
  let foundArticle = null

  allArticles.forEach(article => {
    const dbTitleTrimmed = article.title.trim()
    console.log('Database title: ', dbTitleTrimmed)

    if (dbTitleTrimmed === decodedTitle) {
      console.log('Match found with title:', dbTitleTrimmed)
      foundArticle = article
    } else {
      console.log('No match. Difference at position:',
        findFirstDifference(dbTitleTrimmed, decodedTitle))
    }
  })

  //  function to find the first difference between two strings
  function findFirstDifference (a, b) {
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (a[i] !== b[i]) {
        console.log(
          `Difference at position ${i}: dbTitle "${a[i]}" (char code ${a.charCodeAt(
            i)}), decodedTitle "${b[i]}" (char code ${b.charCodeAt(i)})`)
        return i
      }
    }
    return -1
  }
// ****       DEBUG       ****//

  if (foundArticle) {
    console.log('Found article:', foundArticle.title)
    return (<div>
      <h1>{foundArticle.title}</h1>
      <p>{foundArticle.content}</p>
    </div>)
  }

  // Query the database with the trimmed decoded title
  const article = await db.article.findFirst({
    where: {
      title: decodedTitle,
    },
  })

  if (!article) {
    console.log('Article not found for title:', decodedTitle)
    return <div>Article not found</div>
  }
}
