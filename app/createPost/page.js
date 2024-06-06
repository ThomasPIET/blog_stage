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

    <form action={handleSubmit} class="post_container">
      <div class="input-group">
        <label class="title">Title</label>
        <input name="title" autoFocus autoComplete="off"
               class="input-title"></input>
      </div>
      <div class="input-group">
        <label class="content">Content</label>
        <textarea name="content" autoComplete="off" class="input"></textarea>
      </div>
      <input id="image" name="image" type="file" accept="image/png, image/gif, image/jpeg"/>
      <button type="submit" class="button">Submit</button>

    </form>

  )
}
