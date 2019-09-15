export const API_URL = 'http://localhost:3000';

export const apiRequest = (endpoint, method, data = {}) => {
    const options = method ? {
        method: method,
        body: JSON.stringify(data),
        headers: new Headers({ 'Content-Type': 'application/json'})
    } : {};

    return fetch(`${API_URL}/${endpoint}`, options)
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(res.json());
        })
        .catch(err => {
            return Promise.reject(err.message || 'Unknown error')
        });
};