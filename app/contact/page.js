'use client'

import { useState } from 'react'
import './style.css'

export default function Page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)

  async function handleContact(event) {
    event.preventDefault();

    // Vérification que tous les champs sont remplis
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    const formData = {
      name,
      email,
      message,
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
        setMessage('');
        setIsSubmitted(true);
        setError(null); // Réinitialiser les erreurs précédentes
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
      <form className="contact_container" onSubmit={handleContact}>
        <div className="input-group">
          <label className="name-label">Name</label>
          <input
            name="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            autoComplete="off"
            className="name-input"
            required
          />
        </div>

        <div className="input-group">
          <label className="your-email-label">Your mail</label>
          <input
            name="your-email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            className="your-email-input"
            type="email"
            required
          />
        </div>

        <div className="input-group">
          <label className="message-label">Content</label>
          <textarea
            name="input-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
            className="input-message"
            required
          />
        </div>

        <button type="submit" className="button">Send</button>
      </form>

      {isSubmitted && (
        <div className="success-message">Email sent successfully!</div>
      )}

      {error && (
        <div className="error-message">{error}</div>
      )}
    </main>
  );
}