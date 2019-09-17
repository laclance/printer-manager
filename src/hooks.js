import {useState} from 'react';

export const useFormInputs = (initialInputs, callback) => {
    const [inputs, setInputs] = useState(initialInputs);

    const handleSubmit = (event) => {
        event && event.preventDefault();

        callback(inputs);
    };

    const handleChange = (event) => {
        event && event.persist();

        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    };

    return {
        handleSubmit,
        handleChange,
        inputs
    };
};