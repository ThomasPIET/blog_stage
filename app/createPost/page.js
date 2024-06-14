import './style.css'
import { db } from '@/app/db'

export default function Page () {

  async function handleSubmit (formData) {
    'use server'

    const post = await db.article.create({
      data: {
        title: formData.get('title'), content: formData.get('content'),
      },
    })
  }

  return (

    <form action={handleSubmit} className="post_container">
      <div className="input-group">
        <label className="title">Title</label>
        <input name="title" autoFocus autoComplete="off"
               className="input-title"></input>
      </div>
      <div className="input-group">
        <label className="content">Content</label>
        <textarea name="content" autoComplete="off" className="input"></textarea>
      </div>
      <input id="image" name="image" type="file" accept="image/png, image/gif, image/jpeg"/>
      <button type="submit" className="button">Submit</button>

    </form>

  )
}
