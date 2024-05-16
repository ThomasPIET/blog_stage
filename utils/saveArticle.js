"use server"

import { db } from '@/app/db'
export default async function handleSubmit (formData) {

  const post = await db.article.create({
    data: {
      title: formData.get('title'), content: formData.get('content'),
    },
  })
}