"use client";

import './style.css'
import { db } from '@/app/db'
import { UploadButton } from '@/utils/uploadthings';
import handleSubmit from '@/utils/saveArticle'


export default function Page () {


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
      <button type="submit" class="button">Submit</button>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />

    </form>

  )
}
