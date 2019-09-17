import {useState} from 'react';

export const useFormInputs = (initialInputs, callback) => {
    const [inputs, setInputs] = useState(initialInputs);
    const [showMessage, setShowMessage] = useState(true);

    const handleSubmit = (event) => {
        event && event.preventDefault();

        callback(inputs);
        setShowMessage(true);
    };

    const handleChange = (event) => {
        event && event.persist();

        setShowMessage(false);
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    };

    return {
        handleSubmit,
        handleChange,
        inputs,
        showMessage
    };
};