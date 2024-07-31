
# get-form-values
A reusable React form component for easy form creation.
# Installation
To install `get-form-values`, run the following command in your terminal:

# Usage 
Importing the Component

```js
import React from 'react';
import Form from 'get-form-values';
import 'my-react-component/dist/App.css'; // Import default styles if needed
```

### Defining Form Fields
Define your form fields as an array of objects:

```js
const fields = [
  { name: 'email', placeholder: 'Please Enter email', type: 'email', label: 'Email' },
  { name: 'password', label: 'Password', placeholder: 'Please Enter Password', type: 'password' },
  { name: 'confirmPassword', label: 'Confirm Password', placeholder: 'Confirm Password', type: 'password' },
];
```

### Handling Form Submission
Define a function to handle form submission:
```js
const handleFormSubmit = (values) => {
  console.log('Form submitted with values:', values);
};
```

## Rendering the Component
Render the Form component with the defined fields, submission handler, and optional button title and header:
```js
  <Form
    fields={fields}
    onSubmit={handleFormSubmit}
    ButtonTitle="Signup"
    header="Signup"
  />
  ```

  ## Props
* fields: An array of field objects (required)
* onSubmit: A function to handle form submission (required)
* ButtonTitle: The title of the submit button (optional)
* header: The header text of the form (optional)# get-form-value
