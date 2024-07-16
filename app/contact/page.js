import './style.css'
import sendEmail from '@/app/mailer'


export default function Page() {

    async function handleContact(formData) {
      'use server'

      const name = formData.get('name-input')
      const email = formData.get('your-email-input')
      const message = formData.get('input-message')

      sendEmail(name, email, message)




      //@todo : clear les champs après envoi
      //@todo : animation pour dire que le mail est bien envoyé
    }

  return (
    <main>
      <form className="contact_container" action={handleContact}>

        <div className="input-group">
          <label className="name-label">Name</label>
          <input name="name-input" autoFocus autoComplete="off"
                 className="name-input"></input>
        </div>

        <div className="input-group">
          <label className="your-email-label">Your mail</label>
          <input name="your-email-input" autoComplete="off"
                    className="your-email-input"></input>
        </div>

        <div className="input-group">
          <label className="message-label">content</label>
          <input name="input-message" autoComplete="off"
                    className="input-message"></input>
        </div>

        <button type="submit" className="button">Send this shit bitch </button>

      </form>




    </main>
  );
}
