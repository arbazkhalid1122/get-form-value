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
        <div className={`main-div ${className || ''}`} style={style} {...props}>
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
