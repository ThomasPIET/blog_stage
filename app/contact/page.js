'use client'

import { useState } from 'react'
import './style.css'

export default function Page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)

  async function handleContact(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    const formData = {
      name,
      email,
    };

    try {
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setIsSubmitted(true);
        setError(null)
        setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      setError('Erreur lors de l\'envoi de l\'email');
    }
  }

  return (
    <main>
      <h2 className="contact-title">Feel free to leave me your contact</h2>
      <div className="container">
        <form className="contact-container" onSubmit={handleContact}>
          <div className="group">
            <input name="name-input"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   autoFocus
                   autoComplete="off"
                   className="name-input"
                   type="text"
                   required/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name</label>
          </div>


          <div className="group">
            <input name="your-email-input"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   autoComplete="off"
                   className="your-email-input"
                   type="text"
                   required/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>
          {isSubmitted && (
            <div className="success-message">Email sent successfully!</div>
          )}
          {error && (
            <div className="error-message">{error}</div>
          )}

          <button type="submit" className="button">Contact me !</button>
        </form>



      </div>
    </main>
  );
}