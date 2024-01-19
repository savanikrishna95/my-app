import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    textInput: '',
    emailInput: '',
    passwordInput: '',
    checkboxInput: false,
    radioInput: '',
    fileInput: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Example validation rules, customize as needed
    if (formData.textInput.trim() === '') {
      newErrors.textInput = 'Text input is required';
      valid = false;
    }

    if (formData.emailInput.trim() === '') {
      newErrors.emailInput = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.emailInput)) {
      newErrors.emailInput = 'Invalid email format';
      valid = false;
    }

    if (formData.passwordInput.trim() === '') {
      newErrors.passwordInput = 'Password is required';
      valid = false;
    }

    if (!formData.checkboxInput) {
      newErrors.checkboxInput = 'Checkbox must be checked';
      valid = false;
    }

    if (formData.radioInput === '') {
      newErrors.radioInput = 'Please select a radio option';
      valid = false;
    }

    if (!formData.fileInput) {
      newErrors.fileInput = 'Image upload is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (event) => {
    const { name, type, value, checked, files } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form data submitted:', formData);
      // Optionally, you can reset the form state here
      setFormData({
        textInput: '',
        emailInput: '',
        passwordInput: '',
        checkboxInput: false,
        radioInput: '',
        fileInput: null,
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text Input:
        <input
          type="text"
          name="textInput"
          value={formData.textInput}
          onChange={handleChange}
        />
        {errors.textInput && <span style={{ color: 'red' }}>{errors.textInput}</span>}
      </label>

      <br />

      <label>
        Email Input:
        <input
          type="email"
          name="emailInput"
          value={formData.emailInput}
          onChange={handleChange}
        />
        {errors.emailInput && <span style={{ color: 'red' }}>{errors.emailInput}</span>}
      </label>

      <br />

      <label>
        Password Input:
        <input
          type="password"
          name="passwordInput"
          value={formData.passwordInput}
          onChange={handleChange}
        />
        {errors.passwordInput && <span style={{ color: 'red' }}>{errors.passwordInput}</span>}
      </label>

      <br />

      <label>
        Checkbox Input:
        <input
          type="checkbox"
          name="checkboxInput"
          checked={formData.checkboxInput}
          onChange={handleChange}
        />
        {errors.checkboxInput && <span style={{ color: 'red' }}>{errors.checkboxInput}</span>}
      </label>

      <br />

      <label>
        Radio Input 1:
        <input
          type="radio"
          name="radioInput"
          value="option1"
          checked={formData.radioInput === 'option1'}
          onChange={handleChange}
        />
        Radio Input 2:
        <input
          type="radio"
          name="radioInput"
          value="option2"
          checked={formData.radioInput === 'option2'}
          onChange={handleChange}
        />
        {errors.radioInput && <span style={{ color: 'red' }}>{errors.radioInput}</span>}
      </label>

      <br />

      <label>
        File Input (Image):
        <input
          type="file"
          name="fileInput"
          accept="image/*"
          onChange={handleChange}
        />
        {errors.fileInput && <span style={{ color: 'red' }}>{errors.fileInput}</span>}
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
