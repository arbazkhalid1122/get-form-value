import React, { useState } from 'react';
import './App.css';

const Form = ({fields, onSubmit, ButtonTitle }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const values = {};
    const form = e.currentTarget;

    fields.forEach((field) => {
      const input = form.elements.namedItem(field.name);
      values[field.name] = input.value;
      if (field.name === 'confirmPassword' && formData['confirmPassword'] !== formData['password']) {
        newErrors[field.name] = `Passwords do not match`;
      } else if (!values[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit(values);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!value && fields.find((field) => field.name === name)) {
      setErrors({ [name]: `${name} is required` });
    } else {
      setErrors((prevErrors) => {
        const { [name]: _, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  return (
    <div className="main-div">
      <div className="grid centered">
        <div className="column">
          <form className="styled-form" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div key={field.name} className="form-group">
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  name={field.name}
                  type={field.type || 'text'}
                  placeholder={field.placeholder}
                  className={`form-control ${errors[field.name] ? 'error' : ''}`}
                  onChange={handleChange}
                />
                {errors[field.name] && (
                  <div className="error-text">{errors[field.name]}</div>
                )}
              </div>
            ))}
            <button type="submit" className="ui fluid button">
              {ButtonTitle}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
