import axios from 'axios';
import { GIPHY_API_KEY } from './credentials';

// const GIPHY_API_KEY = 'YOU_KEY'

export const getTrending = (maxResults, offset = 0, callback = null) => {
    const request = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=${maxResults}&offset=${offset}&rating=R`;

    axios
        .get(request)
        .then((data) => {
            if (callback) {
                callback(data.data);
            }
        })
        .catch((data) => {
            throw new Error(data);
        });
};

export const search = (query, maxResults, offset = 0, callback = null) => {
    const request = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&limit=${maxResults}&offset=${offset}&rating=R&lang=en&q=${query}`;

    console.log('search', request);

    axios
        .get(request)
        .then((data) => {
            if (callback) {
                callback(data.data);
            }
        })
        .catch((data) => {
            throw new Error(data);
        });
};
