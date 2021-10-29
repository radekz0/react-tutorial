import axios from 'axios';

const KEY = 'AIzaSyAYjMI62n5V6MNot2ifWD-ehiHkaFcWjg0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});