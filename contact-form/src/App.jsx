import { useState } from 'react';
import './styles/App.css'

export function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setErrors({});
    } catch (error) {
      if (error instanceof Error) {
        setErrors({ ...errors, [error.path[0]]: error.message });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Contact Form</h1>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Subject: </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>
        <div>
          <label>Message: </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

