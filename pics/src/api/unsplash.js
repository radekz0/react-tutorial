import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID sJGNl8ZHOgSV3Vm--FjR0fZySiDdDlDfcDZBv6rI-PU'
    }
});