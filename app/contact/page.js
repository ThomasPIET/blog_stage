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
      setError('Please complete all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
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
      <p className="contact-title">Feel free to leave me your contact</p>

      <svg className="contact-svg" width="90" height="90" viewBox="0 0 342 306" fill="none"
           xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="342" height="306" fill="url(#pattern0_7738_3)"/>
        <defs>
          <pattern id="pattern0_7738_3" patternContentUnits="objectBoundingBox"
                   width="1" height="1">
            <use xlinkHref="#image0_7738_3"
                 transform="matrix(0.00195312 0 0 0.0021829 0 -0.0588235)"/>
          </pattern>
          <image id="image0_7738_3" width="512" height="512"
                 xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4Ae3dDbBkaVkf8N4PdnVBUkB0ljt3b7/P2w0bLx8xjmXEImYgKPmQsIRYFhUjlCJKqECi+SCrRKsiAoWyQQSCFcEixkKTUBhNQrGGyiaIhasohsRYCkIKkTIKyep+sLvsZHudC8PsnZnuc55++5zu31Ztzcy95zz3Ob/n7X7/3ffe7snEfwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMDYBSLiKyPixoh4a0S8NyJujoifLaW8ppTyzIODg0eM/Rr1T4AAAQIECEwmk9OnT19ZSnlJRPxWRJy5xP93RMSPlFIKPAIECBAgQGCkAtPp9EmllA9eYtM/LhTcXUp5xd7e3jUjvXRtEyBAgACB3RQopdwQEYtH9Mdt8Et9rNb6sVrrs3dT0FUTIECAAIGRCZRSvjEiPtNn8z/33FLKv5vP5/sjY9AuAQIECBDYHYFa62Mi4rZzN/Ckv99Wa/37k8nkit3RdKUECBAgQGAcApdFxPuSNvwLfZvgl2az2ePHwaFLAgQIECCwAwK11r+25s3/KBTcXWt95eHh4VU7wOoSCRAgQIDAsAUi4pZG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L2gRACLitQntKkGAAAECBAhkCBweHl7VKAC8LqNfNQgQIECAAIEEgdOnT1/ZKAC8PqFdJQgQIECAAIEkgctbBIBa6xuT+lWGAAECBAgQyBBoEQAi4k0ZvapBgAABAgQIJAkIAEmQyhAgQIAAgTEJCABjmpZeCRAgQIBAkoAAkASpDAECBAgQGJOAADCmaemVAAECBAgkCQgASZDKECBAgACBMQkIAGOall4JECBAgECSgACQBKkMAQIECBAYk4AAMKZp6ZUAAQIECCQJCABJkMoQIECAAIExCQgAY5qWXgkQIECAQJKAAJAEqQwBAgQIEBiTgAAwpmnplQABAgQIJAkIAEmQyhAgQIAAgTEJCABjmpZeCRAgQIBAkoAAkASpDAECBAgQGJOAADCmaemVAAECBAgkCQgASZDKECBAgACBMQkIAGOall4JECBAgECSgACQBKkMAQIECBAYk4AAMKZp6ZUAAQIECCQJCABJkMoQIECAAIExCQgAY5qWXgkQIECAQJKAAJAEqQwBAgQIEBiTgAAwpmnplQABAgQIJAkIAEmQyhAgQIAAgTEJCABjmpZeCRAgQIBAkoAAkASpDAECBAgQGJOAADCmaemVAAECBAgkCQgASZDKECBAgACBMQkIAGOall4JECBAgECSgACQBKkMAQIECBAYk4AAMKZp6ZUAAQIECCQJCABJkMoQIECAAIExCQgAY5qWXgkQIECAQJKAAJAEqQwBAgQIEBiTgAAwpmnplQABAgQIJAkIAEmQyhAgQIAAgTEJCABjmpZeCRAgQIBAkoAAkASpDAECBAgQGJOAADCmaemVAAECBAgkCQgASZDKECBAgACBMQkIAGOall4JECBAgECSgACQBKkMAQIECBAYk4AAMKZp6ZUAAQIECCQJCABJkMoQIECAAIExCQgAY5qWXgkQIECAQJKAAJAEqQwBAgQIEBiTgAAwpmnplQABAgQIJAkIAEmQyhAgQIAAgTEJCABjmpZeCRAgQIBAkoAAkASpDAECBAgQGJOAADCmaemVAAECBAgkCQgASZDKECBAgACBMQkIAGOall4JECBAgECSgACQBKkMAQIECBAYk4AAMKZp6ZUAAQIECCQJCABJkMoQIECAAIExCQgAY5qWXgkQIECAQJKAAJAEqQwBAgQIEBiTgAAwpmnplQABAgQIJAkIAEmQyhAg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"/>
        </defs>
      </svg>
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