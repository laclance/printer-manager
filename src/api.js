export const API_URL = 'http://localhost:3000';

export const apiRequest = (endpoint, method, data = {}) => {
    const options = method ? {
        method: method,
        body: JSON.stringify(data),
        headers: new Headers({ 'Content-Type': 'application/json' })
    } : {};

    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/${endpoint}`, options)
            .then(res => {
                res.ok ? resolve(res.json()) : res.text().then((text) => reject(text));
            })
            .catch(err => {
                reject (err.message || 'Unknown Error');
            });
    });
};