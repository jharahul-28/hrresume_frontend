"use client";

import { useState } from 'react';
import styles from "./page.module.css";
import Navbar from '@/component/app/Navbar';

const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    resume: null,
    years_of_experience: '',
    job_role: '',
    preferred_location: ''
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'resume') {
      setFormData({
        ...formData,
        resume: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.resume || 
        !formData.years_of_experience || !formData.job_role || !formData.preferred_location) {
      setErrorMessage("All fields are necessary.");
      return;
    }

    const formPayload = new FormData();
    formPayload.append('username', formData.username);
    formPayload.append('email', formData.email);
    formPayload.append('password', formData.password);
    formPayload.append('resume', formData.resume);
    formPayload.append('years_of_experience', formData.years_of_experience);
    formPayload.append('job_role', formData.job_role);
    formPayload.append('preferred_location', formData.preferred_location);

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        body: formPayload,
      });

      if (response.ok) {
        alert('Signup successful!');
        setFormData({
          username: '',
          email: '',
          password: '',
          resume: null,
          years_of_experience: '',
          job_role: '',
          preferred_location: ''
        });
        setErrorMessage(null);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.signUpDiv}>
        <p>Sign Up</p>
        <form onSubmit={handleSubmit} className={styles.signUpForm}>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />

          <label>Years of Experience</label>
          <input type="number" name="years_of_experience" value={formData.years_of_experience} onChange={handleChange} />

          <label>Job Role</label>
          <input type="text" name="job_role" value={formData.job_role} onChange={handleChange} />

          <label>Preferred Location</label>
          <input type="text" name="preferred_location" value={formData.preferred_location} onChange={handleChange} />

          <label>Submit Resume</label>
          <input type="file" name="resume" accept="application/pdf" onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  );
}

export default Page;
