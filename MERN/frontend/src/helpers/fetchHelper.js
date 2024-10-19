// fetchHelper.js

/**
 * A helper function to simplify fetch requests with credentials and headers included.
 * @param {string} url - The URL to which the request is sent.
 * @param {string} method - The HTTP method, e.g., 'GET', 'POST', 'PUT', 'DELETE'.
 * @param {Object} [body=null] - The body of the request for POST/PUT methods.
 * @param {Object} [headers={}] - Additional headers to send with the request.
 * @returns {Promise<Response>} - A promise that resolves with the response of the fetch request.
 */
const fetchWithCredentials = async (url, method, body = null, headers = {}) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        ...headers
    };

    const config = {
        method: method,
        headers: defaultHeaders,
        credentials: 'include' // Ensures cookies are sent with the request
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, config);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parses JSON response into native JavaScript objects
    } catch (error) {
        console.error(`Failed to fetch: ${error}`);
        throw error;
    }
}

export default fetchWithCredentials;
