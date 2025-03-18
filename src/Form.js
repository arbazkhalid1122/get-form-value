import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ fields, onSubmit, buttonTitle, className, style, ...props }) => {
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
        <div className={`form-container ${className || ''}`} style={style} {...props}>
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
                        {errors[field.name] && <div className="error-text">{errors[field.name]}</div>}
                    </div>
                ))}
                <button type="submit" className="submit-button">
                    {buttonTitle}
                </button>
            </form>

            <style jsx>{`
                .form-container {
                    max-width: 400px;
                    margin: 20px auto;
                    padding: 20px;
                    background: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease-in-out;
                }

                .form-container:hover {
                    transform: translateY(-2px);
                }

                .styled-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                }

                label {
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 5px;
                    color: #333;
                }

                .form-control {
                    padding: 10px;
                    border-radius: 6px;
                    border: 1px solid #ccc;
                    font-size: 14px;
                    transition: border 0.3s ease-in-out;
                }

                .form-control:focus {
                    border-color: #007bff;
                    outline: none;
                    box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
                }

                .error {
                    border-color: #dc3545;
                }

                .error-text {
                    color: #dc3545;
                    font-size: 12px;
                    margin-top: 5px;
                }

                .submit-button {
                    background: #007bff;
                    color: white;
                    padding: 10px;
                    border: none;
                    border-radius: 6px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background 0.3s ease-in-out;
                }

                .submit-button:hover {
                    background: #0056b3;
                }
            `}</style>
        </div>
    );
};

Form.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string,
            placeholder: PropTypes.string,
        })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    className: PropTypes.string,  // Allow custom class names
    style: PropTypes.object,       // Allow custom styles
};

export default Form;
