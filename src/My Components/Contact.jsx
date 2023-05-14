import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email} Password: ${password}`)
    setEmail('')
    setPassword('')
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" autocomplete="current-password"  value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
